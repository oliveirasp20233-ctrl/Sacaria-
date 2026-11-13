import { Product, PriceTier, WHATSAPP_NUMBER, BRAND_NAME } from '../data/catalog';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerCheckoutInfo {
  name: string;
  company: string;
  phone: string;
  cityState: string;
  paymentMethod: 'Pix' | 'Cartão de Crédito' | 'Transferência / Boleto';
  shippingMethod: 'Transportadora' | 'Correios / Jadlog' | 'Excursão / Ônibus' | 'Retirada';
  notes: string;
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Returns the active unit price for a given product and quantity
 * based on progressive wholesale price tiers.
 */
export function getUnitPriceForQty(product: Product, quantity: number): number {
  if (!product.priceTiers || product.priceTiers.length === 0) {
    return product.promoPrice ?? product.salePrice;
  }
  let activePrice = product.priceTiers[0].unitPrice;
  for (const tier of product.priceTiers) {
    if (quantity >= tier.minQuantity) {
      activePrice = tier.unitPrice;
    }
  }
  return activePrice;
}

/**
 * Returns the base (qty 1) price so we can calculate exact wholesale tier savings.
 */
export function getBaseUnitPrice(product: Product): number {
  if (!product.priceTiers || product.priceTiers.length === 0) {
    return product.salePrice;
  }
  return product.priceTiers[0].unitPrice;
}

/**
 * Returns the next better tier if one exists for the current quantity.
 */
export function getNextTier(product: Product, quantity: number): PriceTier | null {
  if (!product.priceTiers || product.priceTiers.length === 0) return null;
  for (const tier of product.priceTiers) {
    if (tier.minQuantity > quantity) {
      return tier;
    }
  }
  return null;
}

export function calculateCartTotals(items: CartItem[]) {
  let subtotal = 0;
  let baseTotal = 0;
  let totalUnits = 0;

  for (const item of items) {
    const unitPrice = getUnitPriceForQty(item.product, item.quantity);
    const basePrice = getBaseUnitPrice(item.product);
    subtotal += unitPrice * item.quantity;
    baseTotal += basePrice * item.quantity;
    totalUnits += item.quantity;
  }

  return {
    subtotal,
    baseTotal,
    savings: Math.max(0, baseTotal - subtotal),
    totalUnits,
  };
}

export function buildWhatsAppOrderMessage(
  items: CartItem[],
  customer: CustomerCheckoutInfo,
  orderCode: string
): string {
  const { subtotal, savings, totalUnits } = calculateCartTotals(items);

  const lines: string[] = [
    `*NOVO PEDIDO — ${BRAND_NAME.toUpperCase()}*`,
    `Referência: *#${orderCode}*`,
    ``,
    `*DADOS DO CLIENTE*`,
    `• Nome: ${customer.name.trim() || 'Não informado'}`,
  ];

  if (customer.company.trim()) {
    lines.push(`• Loja / Empresa: ${customer.company.trim()}`);
  }
  if (customer.phone.trim()) {
    lines.push(`• Telefone/WhatsApp: ${customer.phone.trim()}`);
  }
  if (customer.cityState.trim()) {
    lines.push(`• Cidade/UF: ${customer.cityState.trim()}`);
  }

  lines.push(`• Pagamento: ${customer.paymentMethod}`);
  lines.push(`• Envio: ${customer.shippingMethod}`);
  lines.push(``);
  lines.push(`*ITENS DO PEDIDO (${totalUnits} un)*`);

  items.forEach((item, idx) => {
    const unitPrice = getUnitPriceForQty(item.product, item.quantity);
    const lineTotal = unitPrice * item.quantity;
    lines.push(
      `${idx + 1}. *${item.product.name}* (${item.product.code})`,
      `   Qtd: ${item.quantity}x × ${formatBRL(unitPrice)} = *${formatBRL(lineTotal)}*`
    );
  });

  lines.push(``);
  if (savings > 0.01) {
    lines.push(`Economia Atacado: -${formatBRL(savings)}`);
  }
  lines.push(`*TOTAL ESTIMADO: ${formatBRL(subtotal)}*`);

  if (customer.notes.trim()) {
    lines.push(``);
    lines.push(`Observações: ${customer.notes.trim()}`);
  }

  lines.push(``);
  lines.push(`Enviado pelo Catálogo Digital Conecta Sacaria.`);

  return lines.join('\n');
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${BRAND_NAME}`,
    `ORG:${BRAND_NAME} — Atacado Têxtil & Sacaria`,
    `TEL;TYPE=CELL,VOICE:+5511999893780`,
    `NOTE:Catálogo de sacaria, cama, mesa, banho e limpeza. Pedidos diretos pelo WhatsApp.`,
    'END:VCARD',
  ].join('\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Conecta-Sacaria-Contato.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
