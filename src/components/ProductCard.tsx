import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import { Product } from '../data/catalog';
import { formatBRL, getBaseUnitPrice, getUnitPriceForQty } from '../utils/pricing';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
  categoryName: string;
  cartQuantity: number;
  onAddToCart: (product: Product, qty: number) => void;
  onSelectProduct: (product: Product) => void;
}

export function ProductCard({
  product,
  categoryName,
  cartQuantity,
  onAddToCart,
  onSelectProduct,
}: ProductCardProps) {
  const [quickQty, setQuickQty] = useState<number>(product.minimumQuantity || 1);
  const [justAdded, setJustAdded] = useState(false);

  const basePrice = getBaseUnitPrice(product);
  const activeTierPrice = getUnitPriceForQty(product, quickQty);
  const hasWholesaleDiscount = product.priceTiers.length > 1 && product.lowestTierPrice < basePrice;

  const handleAdd = () => {
    onAddToCart(product, quickQty);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1100);
  };

  return (
    <article className="group bg-white border border-[#EAE3D5] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(140,101,20,0.18)] hover:border-[#D4AF37]/70">
      {/* Product Image */}
      <button
        type="button"
        onClick={() => onSelectProduct(product)}
        className="relative aspect-square w-full bg-[#FAF8F3] overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#8C6514]"
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {cartQuantity > 0 && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#1A1815]/90 text-[#F4E3B2] text-[11px] font-semibold tabular-nums backdrop-blur-sm border border-[#D4AF37]/40">
            {cartQuantity} na sacola
          </span>
        )}
      </button>

      {/* Card Body */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2.5 sm:gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#6B645A] mb-1 truncate">
            <span className="truncate">{categoryName}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums shrink-0">{product.code}</span>
          </div>

          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="text-left w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-[#8C6514] rounded"
          >
            <h3 className="text-sm sm:text-[15px] font-semibold text-[#1A1815] leading-snug line-clamp-2 min-h-[2.375rem] sm:min-h-[2.625rem] group-hover:text-[#8C6514] transition-colors">
              {product.name}
            </h3>
          </button>

          {product.specifications.length > 0 && (
            <p className="mt-1 text-[11px] sm:text-xs text-[#7A7367] truncate">
              {product.specifications.slice(0, 2).join(' · ')}
            </p>
          )}
        </div>

        {/* Pricing + Quick Add */}
        <div className="pt-2.5 sm:pt-3 border-t border-[#F2ECE0] space-y-2.5">
          <div className="flex items-baseline justify-between gap-1.5">
            <div className="min-w-0">
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-[#1A1815] tabular-nums">
                  {formatBRL(activeTierPrice)}
                </span>
                <span className="text-[11px] text-[#6B645A]">/ {product.unit}</span>
              </div>
              {hasWholesaleDiscount && (
                <p className="text-[11px] text-[#8C6514] font-medium tabular-nums truncate">
                  Atacado até {formatBRL(product.lowestTierPrice)}
                </p>
              )}
            </div>

            {product.priceTiers.length > 1 && (
              <button
                type="button"
                onClick={() => onSelectProduct(product)}
                className="hidden sm:inline text-xs font-medium text-[#8C6514] hover:text-[#6B4B0A] underline underline-offset-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Tabela
              </button>
            )}
          </div>

          {/* Stepper + Add */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2">
            <div className="inline-flex items-center justify-between border border-[#E2D9C8] rounded-lg bg-[#FAF8F3] h-8 sm:h-9 shrink-0">
              <button
                type="button"
                onClick={() => setQuickQty((q) => Math.max(product.minimumQuantity || 1, q - 1))}
                className="w-7 sm:w-8 h-full flex items-center justify-center text-[#5C564D] hover:text-[#1A1815] cursor-pointer"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
              <input
                type="number"
                min={product.minimumQuantity || 1}
                value={quickQty}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val) && val >= (product.minimumQuantity || 1)) {
                    setQuickQty(val);
                  }
                }}
                aria-label="Quantidade"
                className="w-8 sm:w-9 text-center text-xs font-semibold text-[#1A1815] bg-transparent tabular-nums focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={() => setQuickQty((q) => q + 1)}
                className="w-7 sm:w-8 h-full flex items-center justify-center text-[#5C564D] hover:text-[#1A1815] cursor-pointer"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 h-8 sm:h-9 px-2.5 sm:px-3 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                justAdded
                  ? 'bg-[#8C6514] text-white'
                  : 'bg-[#1A1815] text-white hover:bg-[#2E2923] border border-[#D4AF37]/40'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Adicionado
                </>
              ) : (
                <span>Adicionar</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
