import { ShoppingBag } from 'lucide-react';
import { BRAND_NAME } from '../data/catalog';
import { formatBRL } from '../utils/pricing';

interface HeaderProps {
  totalUnits: number;
  subtotal: number;
  onOpenCart: () => void;
}

export function Header({ totalUnits, subtotal, onOpenCart }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8DFCE]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-2xl sm:text-[26px] font-semibold tracking-tight text-[#1A1815] whitespace-nowrap shrink-0 flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6514]"
        >
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37] border border-[#8C6514]/40 inline-block shrink-0"
          />
          {BRAND_NAME}
        </a>

        {/* Zone 2: Navigation Links (4 concise single-line links) */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C564D]"
        >
          <a
            href="#catalogo"
            className="hover:text-[#1A1815] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
          >
            Catálogo
          </a>
          <a
            href="#mais-pedidos"
            className="hover:text-[#1A1815] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
          >
            Mais Pedidos
          </a>
          <a
            href="#depoimentos"
            className="hover:text-[#1A1815] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
          >
            Depoimentos
          </a>
          <a
            href="#central-links"
            className="hover:text-[#1A1815] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
          >
            Links Rápidos
          </a>
        </nav>

        {/* Zone 3: Primary Action (Bag / Fast Order) */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#1A1815] text-white text-sm font-medium hover:bg-[#2C2822] transition-colors border border-[#D4AF37]/50 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6514]"
            aria-label={`Abrir sacola de pedido com ${totalUnits} itens`}
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.8} />
            <span>Sacola</span>
            <span className="tabular-nums text-xs px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#F4E3B2] font-semibold">
              {totalUnits}
            </span>
            {subtotal > 0 && (
              <span className="hidden sm:inline tabular-nums text-xs text-[#E8DFCE] border-l border-white/15 pl-2">
                {formatBRL(subtotal)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
