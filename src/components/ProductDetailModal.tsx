import { useEffect, useState } from 'react';
import { X, Minus, Plus, ShoppingBag, MessageCircle } from 'lucide-react';
import { Product, WHATSAPP_NUMBER } from '../data/catalog';
import {
  formatBRL,
  getBaseUnitPrice,
  getUnitPriceForQty,
} from '../utils/pricing';
import { ProductImage } from './ProductImage';

interface ProductDetailModalProps {
  product: Product | null;
  categoryName: string;
  onClose: () => void;
  onAddToCart: (product: Product, qty: number) => void;
}

export function ProductDetailModal({
  product,
  categoryName,
  onClose,
  onAddToCart,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setQuantity(product.minimumQuantity || 1);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const activeUnitPrice = getUnitPriceForQty(product, quantity);
  const baseUnitPrice = getBaseUnitPrice(product);
  const lineTotal = activeUnitPrice * quantity;
  const savings = Math.max(0, (baseUnitPrice - activeUnitPrice) * quantity);

  const directWhatsAppMessage = encodeURIComponent(
    `Olá Conecta Sacaria! Tenho interesse no produto:\n• *${product.name}* (${product.code})\n• Quantidade: ${quantity}x (${formatBRL(activeUnitPrice)}/un)\n• Total estimado: ${formatBRL(lineTotal)}\nPoderia confirmar disponibilidade?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1815]/55 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl border border-[#E8DFCE] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#E8DFCE] flex items-center justify-center text-[#1A1815] hover:bg-[#FAF8F3] cursor-pointer"
          aria-label="Fechar detalhes do produto"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Image */}
        <div className="md:w-[46%] bg-[#FAF8F3] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#EAE3D5]">
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-white border border-[#EAE3D5]">
            <ProductImage
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Contiguous Purchase Module */}
        <div className="md:w-[54%] p-6 overflow-y-auto flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#6B645A]">
              <span>{categoryName}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{product.code}</span>
              <span aria-hidden="true">·</span>
              <span>Pronta-entrega</span>
            </div>

            <h2
              id="modal-product-title"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#1A1815] leading-tight pr-8"
            >
              {product.name}
            </h2>

            {product.specifications.length > 0 && (
              <div className="text-sm text-[#5C564D] border-y border-[#F2ECE0] py-2.5">
                <span className="font-medium text-[#1A1815]">Especificações: </span>
                {product.specifications.join(' · ')}
              </div>
            )}

            {/* Price Summary */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#6B645A] block mb-0.5">
                  Valor unitário na quantidade selecionada
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#1A1815] tabular-nums">
                    {formatBRL(activeUnitPrice)}
                  </span>
                  <span className="text-sm text-[#6B645A]">/ {product.unit}</span>
                </div>
              </div>
              {savings > 0 && (
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#8C6514] tabular-nums block">
                    Economia de {formatBRL(savings)}
                  </span>
                  <span className="text-xs text-[#6B645A]">no atacado</span>
                </div>
              )}
            </div>

            {/* Progressive Wholesale Price Tiers */}
            {product.priceTiers.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#1A1815]">
                  Tabela progressiva (clique para selecionar a quantidade)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {product.priceTiers.map((tier, idx) => {
                    const nextTier = product.priceTiers[idx + 1];
                    const isActive =
                      quantity >= tier.minQuantity &&
                      (!nextTier || quantity < nextTier.minQuantity);

                    return (
                      <button
                        key={tier.minQuantity}
                        type="button"
                        onClick={() => setQuantity(tier.minQuantity)}
                        className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#FAF5E8] border-[#D4AF37] text-[#1A1815]'
                            : 'bg-white border-[#EAE3D5] text-[#5C564D] hover:border-[#D4AF37]/60'
                        }`}
                      >
                        <div className="text-xs font-medium">
                          {nextTier
                            ? `${tier.minQuantity} a ${nextTier.minQuantity - 1} un`
                            : `${tier.minQuantity}+ un`}
                        </div>
                        <div className="text-sm font-bold text-[#1A1815] tabular-nums mt-0.5">
                          {formatBRL(tier.unitPrice)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Quantity & Actions */}
          <div className="space-y-3 pt-4 border-t border-[#EAE3D5]">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex items-center border border-[#E2D9C8] rounded-lg bg-[#FAF8F3] h-11">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(product.minimumQuantity || 1, q - 1))}
                  className="w-10 h-full flex items-center justify-center text-[#5C564D] hover:text-[#1A1815] cursor-pointer"
                  aria-label="Diminuir quantidade"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min={product.minimumQuantity || 1}
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (!isNaN(val) && val >= (product.minimumQuantity || 1)) {
                      setQuantity(val);
                    }
                  }}
                  aria-label="Quantidade do item"
                  className="w-14 text-center text-sm font-semibold text-[#1A1815] bg-transparent tabular-nums focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-full flex items-center justify-center text-[#5C564D] hover:text-[#1A1815] cursor-pointer"
                  aria-label="Aumentar quantidade"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-right">
                <span className="text-xs text-[#6B645A] block">Subtotal do item</span>
                <span className="text-lg font-bold text-[#1A1815] tabular-nums">
                  {formatBRL(lineTotal)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
                className="h-11 px-4 rounded-lg bg-[#1A1815] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#2C2822] border border-[#D4AF37]/50 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                Adicionar à Sacola
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${directWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-lg bg-[#FAF5E8] text-[#8C6514] border border-[#D4AF37] text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#F3EBD6] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Pedir no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
