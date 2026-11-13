import { useEffect, useMemo, useState } from 'react';
import {
  X,
  Minus,
  Plus,
  Trash2,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  ShoppingBag,
} from 'lucide-react';
import {
  BESTSELLER_IDS,
  PRODUCTS,
  Product,
  WHATSAPP_DISPLAY,
} from '../data/catalog';
import {
  CartItem,
  CustomerCheckoutInfo,
  buildWhatsAppOrderMessage,
  calculateCartTotals,
  formatBRL,
  getNextTier,
  getUnitPriceForQty,
  getWhatsAppUrl,
} from '../utils/pricing';
import { ProductImage } from './ProductImage';

interface CartCheckoutDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  customer: CustomerCheckoutInfo;
  onClose: () => void;
  onUpdateQty: (productId: number, qty: number) => void;
  onRemoveItem: (productId: number) => void;
  onAddProduct: (product: Product, qty: number) => void;
  onClearCart: () => void;
  onUpdateCustomer: (info: CustomerCheckoutInfo) => void;
}

const WHOLESALE_REFERENCE = 500;

export function CartCheckoutDrawer({
  isOpen,
  items,
  customer,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onAddProduct,
  onClearCart,
  onUpdateCustomer,
}: CartCheckoutDrawerProps) {
  const [step, setStep] = useState<'cart' | 'checkout' | 'sent'>('cart');
  const [copied, setCopied] = useState(false);
  const [orderCode, setOrderCode] = useState('CS-1042');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && items.length === 0 && step === 'checkout') {
      setStep('cart');
    }
  }, [isOpen, items.length, step]);

  const totals = useMemo(() => calculateCartTotals(items), [items]);
  const suggestions = useMemo(() => {
    const inCart = new Set(items.map((i) => i.product.id));
    return BESTSELLER_IDS.map((id) => PRODUCTS.find((p) => p.id === id))
      .filter((p): p is Product => p !== undefined && !inCart.has(p.id))
      .slice(0, 3);
  }, [items]);

  const orderMessage = useMemo(
    () => buildWhatsAppOrderMessage(items, customer, orderCode),
    [items, customer, orderCode]
  );

  const waUrl = useMemo(() => getWhatsAppUrl(orderMessage), [orderMessage]);

  const progressPct = Math.min(100, Math.round((totals.subtotal / WHOLESALE_REFERENCE) * 100));

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(orderMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleProceedToCheckout = () => {
    const randomNum = Math.floor(1000 + Math.random() * 8999);
    setOrderCode(`CS-${randomNum}`);
    setFormError('');
    setStep('checkout');
  };

  const handleConfirmSend = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!customer.name.trim() || !customer.phone.trim()) {
      e.preventDefault();
      setFormError('Informe seu nome e telefone/WhatsApp para agilizar o atendimento.');
      return;
    }
    setFormError('');
    setStep('sent');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#1A1815]/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Sacola e Checkout Rápido WhatsApp"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white h-full flex flex-col shadow-2xl border-l border-[#E8DFCE]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-[#EAE3D5] flex items-center justify-between gap-4 bg-[#FAF8F3]">
          <div className="flex items-center gap-2.5">
            {step === 'checkout' && (
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="p-1.5 rounded-lg text-[#5C564D] hover:text-[#1A1815] hover:bg-white cursor-pointer"
                aria-label="Voltar para itens da sacola"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <h2 className="font-display text-2xl font-semibold text-[#1A1815] leading-none">
                {step === 'cart' && 'Sua Sacola'}
                {step === 'checkout' && 'Checkout Rápido'}
                {step === 'sent' && `Pedido #${orderCode}`}
              </h2>
              <p className="text-xs text-[#6B645A] mt-1 tabular-nums">
                {step === 'sent'
                  ? `Direcionado para WhatsApp ${WHATSAPP_DISPLAY}`
                  : `${totals.totalUnits} ${totals.totalUnits === 1 ? 'item' : 'itens'} · Atendimento ${WHATSAPP_DISPLAY}`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg border border-[#E2D9C8] bg-white flex items-center justify-center text-[#1A1815] hover:bg-[#FAF8F3] cursor-pointer"
            aria-label="Fechar sacola"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {items.length === 0 ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF8F3] border border-[#E8DFCE] flex items-center justify-center text-[#8C6514]">
                <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-[#1A1815]">
                  Sua sacola está vazia
                </h3>
                <p className="text-sm text-[#6B645A] max-w-xs mx-auto">
                  Adicione panos de prato, jogos de cama, toalhas ou tapetes para montar seu pedido direto no WhatsApp.
                </p>
              </div>

              {suggestions.length > 0 && (
                <div className="pt-6 text-left space-y-3 border-t border-[#F2ECE0]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6514]">
                    Sugestões de giro rápido
                  </p>
                  <div className="space-y-2.5">
                    {suggestions.map((prod) => (
                      <div
                        key={prod.id}
                        className="flex items-center gap-3 p-2.5 rounded-xl border border-[#EAE3D5] bg-[#FAF8F3]/60"
                      >
                        <ProductImage
                          src={prod.image}
                          alt={prod.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0 bg-white"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-[#1A1815] truncate">
                            {prod.name}
                          </p>
                          <p className="text-xs text-[#8C6514] font-medium tabular-nums">
                            {formatBRL(getUnitPriceForQty(prod, 1))} / {prod.unit}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onAddProduct(prod, 1)}
                          className="px-3 py-1.5 rounded-lg bg-[#1A1815] text-white text-xs font-medium hover:bg-[#2E2923] whitespace-nowrap cursor-pointer"
                        >
                          Adicionar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : step === 'cart' ? (
            <>
              {/* Wholesale Reference Progress */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E8DFCE] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#1A1815]">
                    {totals.subtotal >= WHOLESALE_REFERENCE
                      ? 'Pedido atacado completo — condições de fábrica liberadas'
                      : `Faltam ${formatBRL(WHOLESALE_REFERENCE - totals.subtotal)} para meta atacado (R$ 500)`}
                  </span>
                  <span className="tabular-nums font-semibold text-[#8C6514]">
                    {progressPct}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[#E8DFCE] overflow-hidden">
                  <div
                    className="h-full bg-[#B08424] transition-all duration-300"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-[#F2ECE0]">
                {items.map(({ product, quantity }) => {
                  const unitPrice = getUnitPriceForQty(product, quantity);
                  const nextTier = getNextTier(product, quantity);
                  const lineTotal = unitPrice * quantity;

                  return (
                    <div key={product.id} className="py-4 first:pt-0 flex gap-3.5">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 rounded-xl object-cover shrink-0 bg-[#FAF8F3] border border-[#EAE3D5]"
                      />
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-[#1A1815] leading-snug line-clamp-2">
                              {product.name}
                            </p>
                            <p className="text-xs text-[#6B645A] tabular-nums mt-0.5">
                              {product.code} · {formatBRL(unitPrice)} / {product.unit}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(product.id)}
                            className="p-1 text-[#7A7367] hover:text-red-700 cursor-pointer shrink-0"
                            aria-label={`Remover ${product.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {nextTier && (
                          <button
                            type="button"
                            onClick={() => onUpdateQty(product.id, nextTier.minQuantity)}
                            className="text-xs font-medium text-[#8C6514] hover:underline text-left cursor-pointer tabular-nums"
                          >
                            Leve {nextTier.minQuantity}+ un e pague {formatBRL(nextTier.unitPrice)}/un
                          </button>
                        )}

                        <div className="flex items-center justify-between pt-1">
                          <div className="inline-flex items-center border border-[#E2D9C8] rounded-lg bg-[#FAF8F3] h-8">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQty(
                                  product.id,
                                  Math.max(product.minimumQuantity || 1, quantity - 1)
                                )
                              }
                              className="w-7 h-full flex items-center justify-center text-[#5C564D] hover:text-[#1A1815] cursor-pointer"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <input
                              type="number"
                              min={product.minimumQuantity || 1}
                              value={quantity}
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!isNaN(val) && val >= (product.minimumQuantity || 1)) {
                                  onUpdateQty(product.id, val);
                                }
                              }}
                              aria-label={`Quantidade de ${product.name}`}
                              className="w-10 text-center text-xs font-semibold text-[#1A1815] bg-transparent tabular-nums focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <button
                              type="button"
                              onClick={() => onUpdateQty(product.id, quantity + 1)}
                              className="w-7 h-full flex items-center justify-center text-[#5C564D] hover:text-[#1A1815] cursor-pointer"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-sm font-bold text-[#1A1815] tabular-nums">
                            {formatBRL(lineTotal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Suggestions */}
              {suggestions.length > 0 && (
                <div className="pt-4 border-t border-[#EAE3D5] space-y-2.5">
                  <p className="text-xs font-semibold text-[#5C564D]">
                    Complete seu pedido com mais saída
                  </p>
                  <div className="space-y-2">
                    {suggestions.slice(0, 2).map((prod) => (
                      <div
                        key={prod.id}
                        className="flex items-center gap-3 p-2 rounded-lg border border-[#EAE3D5] bg-white"
                      >
                        <ProductImage
                          src={prod.image}
                          alt={prod.name}
                          className="w-10 h-10 rounded object-cover shrink-0 bg-[#FAF8F3]"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-[#1A1815] truncate">
                            {prod.name}
                          </p>
                          <p className="text-xs text-[#8C6514] tabular-nums">
                            {formatBRL(getUnitPriceForQty(prod, 1))}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onAddProduct(prod, 1)}
                          className="px-2.5 py-1 rounded bg-[#FAF8F3] border border-[#E2D9C8] text-xs font-semibold text-[#1A1815] hover:border-[#D4AF37] cursor-pointer"
                        >
                          + Incluir
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : step === 'checkout' ? (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#FAF5E8] border border-[#D4AF37]/40 text-xs text-[#5C564D] leading-relaxed">
                Preencha os dados essenciais abaixo. Ao clicar em enviar, seu pedido formatado abre diretamente no nosso WhatsApp{' '}
                <strong className="text-[#1A1815]">{WHATSAPP_DISPLAY}</strong>.
              </div>

              {formError && (
                <div
                  role="alert"
                  className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 font-medium"
                >
                  {formError}
                </div>
              )}

              <div className="space-y-3.5">
                <div>
                  <label htmlFor="checkout-name" className="block text-xs font-semibold text-[#1A1815] mb-1">
                    Seu Nome *
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    required
                    value={customer.name}
                    onChange={(e) => onUpdateCustomer({ ...customer, name: e.target.value })}
                    placeholder="Ex: Maria Oliveira"
                    className="w-full h-10 px-3 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] focus:outline-none focus:border-[#8C6514]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="checkout-phone" className="block text-xs font-semibold text-[#1A1815] mb-1">
                      WhatsApp para retorno *
                    </label>
                    <input
                      id="checkout-phone"
                      type="tel"
                      required
                      value={customer.phone}
                      onChange={(e) => onUpdateCustomer({ ...customer, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full h-10 px-3 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] tabular-nums focus:outline-none focus:border-[#8C6514]"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout-city" className="block text-xs font-semibold text-[#1A1815] mb-1">
                      Cidade / UF
                    </label>
                    <input
                      id="checkout-city"
                      type="text"
                      value={customer.cityState}
                      onChange={(e) => onUpdateCustomer({ ...customer, cityState: e.target.value })}
                      placeholder="Ex: São Paulo - SP"
                      className="w-full h-10 px-3 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] focus:outline-none focus:border-[#8C6514]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout-company" className="block text-xs font-semibold text-[#1A1815] mb-1">
                    Loja / Empresa (opcional)
                  </label>
                  <input
                    id="checkout-company"
                    type="text"
                    value={customer.company}
                    onChange={(e) => onUpdateCustomer({ ...customer, company: e.target.value })}
                    placeholder="Nome da sua loja ou comércio"
                    className="w-full h-10 px-3 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] focus:outline-none focus:border-[#8C6514]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="checkout-payment" className="block text-xs font-semibold text-[#1A1815] mb-1">
                      Pagamento preferido
                    </label>
                    <select
                      id="checkout-payment"
                      value={customer.paymentMethod}
                      onChange={(e) =>
                        onUpdateCustomer({
                          ...customer,
                          paymentMethod: e.target.value as CustomerCheckoutInfo['paymentMethod'],
                        })
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] focus:outline-none focus:border-[#8C6514]"
                    >
                      <option value="Pix">Pix</option>
                      <option value="Cartão de Crédito">Cartão de Crédito</option>
                      <option value="Transferência / Boleto">Transferência / Boleto</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="checkout-shipping" className="block text-xs font-semibold text-[#1A1815] mb-1">
                      Modalidade de envio
                    </label>
                    <select
                      id="checkout-shipping"
                      value={customer.shippingMethod}
                      onChange={(e) =>
                        onUpdateCustomer({
                          ...customer,
                          shippingMethod: e.target.value as CustomerCheckoutInfo['shippingMethod'],
                        })
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] focus:outline-none focus:border-[#8C6514]"
                    >
                      <option value="Transportadora">Transportadora</option>
                      <option value="Correios / Jadlog">Correios / Jadlog</option>
                      <option value="Excursão / Ônibus">Excursão / Ônibus</option>
                      <option value="Retirada">Retirada</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="checkout-notes" className="block text-xs font-semibold text-[#1A1815] mb-1">
                    Observações (cores, estampas ou prazo)
                  </label>
                  <textarea
                    id="checkout-notes"
                    rows={2}
                    value={customer.notes}
                    onChange={(e) => onUpdateCustomer({ ...customer, notes: e.target.value })}
                    placeholder="Ex: Preferência por estampas neutras e envio imediato"
                    className="w-full p-3 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] focus:outline-none focus:border-[#8C6514] resize-none"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-2">
              <div className="p-4 rounded-xl bg-[#FAF5E8] border border-[#D4AF37] space-y-1.5">
                <p className="text-sm font-semibold text-[#1A1815]">
                  Pedido #{orderCode} gerado para envio
                </p>
                <p className="text-xs text-[#5C564D] leading-relaxed">
                  Caso a janela do WhatsApp não tenha aberto automaticamente, utilize os botões abaixo para enviar ou copiar a lista completa do seu pedido.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F3] border border-[#EAE3D5] max-h-64 overflow-y-auto">
                <pre className="text-xs text-[#1A1815] whitespace-pre-wrap font-sans leading-relaxed">
                  {orderMessage}
                </pre>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-4 rounded-lg bg-[#1A1815] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#2C2822] border border-[#D4AF37]/60"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  Abrir no WhatsApp {WHATSAPP_DISPLAY}
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="h-10 px-4 rounded-lg bg-white border border-[#DCD2BF] text-sm font-medium text-[#1A1815] inline-flex items-center justify-center gap-2 hover:bg-[#FAF8F3] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#8C6514]" />
                      Resumo copiado com sucesso
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#5C564D]" />
                      Copiar resumo do pedido
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClearCart();
                    setStep('cart');
                    onClose();
                  }}
                  className="h-9 text-xs font-medium text-[#6B645A] hover:text-[#1A1815] cursor-pointer"
                >
                  Limpar sacola e iniciar novo pedido
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        {items.length > 0 && step !== 'sent' && (
          <div className="p-5 border-t border-[#EAE3D5] bg-[#FAF8F3] space-y-3">
            <div className="space-y-1">
              {totals.savings > 0.01 && (
                <div className="flex items-center justify-between text-xs text-[#8C6514] font-medium">
                  <span>Economia nas faixas de atacado</span>
                  <span className="tabular-nums">-{formatBRL(totals.savings)}</span>
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-[#5C564D]">
                  Total estimado ({totals.totalUnits} un)
                </span>
                <span className="text-2xl font-bold text-[#1A1815] tabular-nums">
                  {formatBRL(totals.subtotal)}
                </span>
              </div>
            </div>

            {step === 'cart' ? (
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleProceedToCheckout}
                  className="w-full h-11 px-4 rounded-lg bg-[#1A1815] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#2C2822] border border-[#D4AF37]/50 transition-colors cursor-pointer"
                >
                  <span>Finalizar Pedido Rápido</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-xs text-[#6B645A] hover:text-[#1A1815] py-1 cursor-pointer"
                >
                  Esvaziar sacola
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConfirmSend}
                  className="w-full h-11 px-4 rounded-lg bg-[#1A1815] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#2C2822] border border-[#D4AF37]/60 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enviar Pedido no WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full h-9 px-3 rounded-lg bg-white border border-[#DCD2BF] text-xs font-medium text-[#1A1815] inline-flex items-center justify-center gap-1.5 hover:bg-[#FAF8F3] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#8C6514]" />
                      Texto copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#5C564D]" />
                      Copiar resumo sem abrir WhatsApp
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
