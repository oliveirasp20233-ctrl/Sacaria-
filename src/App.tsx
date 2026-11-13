import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Search,
  X,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';
import {
  BESTSELLER_IDS,
  BRAND_NAME,
  CATEGORIES,
  PRODUCTS,
  Product,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from './data/catalog';
import {
  CartItem,
  CustomerCheckoutInfo,
  calculateCartTotals,
  formatBRL,
  getUnitPriceForQty,
} from './utils/pricing';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartCheckoutDrawer } from './components/CartCheckoutDrawer';
import { LinksHubSection } from './components/LinksHubSection';
import { TestimonialsSection } from './components/TestimonialsSection';

import heroBannerImg from './assets/images/hero_conecta_sacaria_1794602448391.jpg';
import colCozinhaImg from './assets/images/collection_cozinha_sacaria_1794602448344.jpg';
import colCamaBanhoImg from './assets/images/collection_cama_banho_1794602449288.jpg';
import colTapetesLimpezaImg from './assets/images/collection_tapetes_limpeza_1794602450588.jpg';

const STORAGE_CART_KEY = 'conecta_sacaria_cart_v1';
const STORAGE_CUSTOMER_KEY = 'conecta_sacaria_customer_v1';
const PAGE_SIZE = 24;

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

const DEFAULT_CUSTOMER: CustomerCheckoutInfo = {
  name: '',
  company: '',
  phone: '',
  cityState: '',
  paymentMethod: 'Pix',
  shippingMethod: 'Transportadora',
  notes: '',
};

export function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as Array<{ productId: number; quantity: number }>;
      return parsed
        .map((entry) => {
          const product = PRODUCTS.find((p) => p.id === entry.productId);
          return product ? { product, quantity: Math.max(1, entry.quantity) } : null;
        })
        .filter((x): x is CartItem => x !== null);
    } catch {
      return [];
    }
  });

  const [customer, setCustomer] = useState<CustomerCheckoutInfo>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CUSTOMER_KEY);
      return raw ? { ...DEFAULT_CUSTOMER, ...JSON.parse(raw) } : DEFAULT_CUSTOMER;
    } catch {
      return DEFAULT_CUSTOMER;
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedParentId, setSelectedParentId] = useState<number | null>(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const catalogSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_CART_KEY,
        JSON.stringify(cart.map((c) => ({ productId: c.product.id, quantity: c.quantity })))
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_CUSTOMER_KEY, JSON.stringify(customer));
    } catch {
      // Ignore storage quota errors
    }
  }, [customer]);

  const categoryMap = useMemo(() => {
    const map = new Map<number, (typeof CATEGORIES)[number]>();
    for (const cat of CATEGORIES) map.set(cat.id, cat);
    return map;
  }, []);

  const parentCategories = useMemo(
    () => CATEGORIES.filter((c) => c.parentId === null).sort((a, b) => b.productCount - a.productCount),
    []
  );

  const subcategoriesForParent = useMemo(() => {
    if (selectedParentId === null) return [];
    return CATEGORIES.filter((c) => c.parentId === selectedParentId).sort(
      (a, b) => b.productCount - a.productCount
    );
  }, [selectedParentId]);

  const bestsellers = useMemo(
    () =>
      BESTSELLER_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
        (p): p is Product => Boolean(p)
      ),
    []
  );

  const cartTotals = useMemo(() => calculateCartTotals(cart), [cart]);

  const cartQtyByProductId = useMemo(() => {
    const map = new Map<number, number>();
    for (const item of cart) map.set(item.product.id, item.quantity);
    return map;
  }, [cart]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const bestsellerRank = new Map<number, number>();
    BESTSELLER_IDS.forEach((id, idx) => bestsellerRank.set(id, idx));

    const allowedCatIds = new Set<number>();
    if (selectedSubcategoryId !== null) {
      allowedCatIds.add(selectedSubcategoryId);
    } else if (selectedParentId !== null) {
      allowedCatIds.add(selectedParentId);
      CATEGORIES.filter((c) => c.parentId === selectedParentId).forEach((c) =>
        allowedCatIds.add(c.id)
      );
    }

    const list = PRODUCTS.filter((product) => {
      if (allowedCatIds.size > 0 && !allowedCatIds.has(product.categoryId)) {
        return false;
      }
      if (!query) return true;
      const catName = categoryMap.get(product.categoryId)?.name.toLowerCase() ?? '';
      return (
        product.name.toLowerCase().includes(query) ||
        product.code.toLowerCase().includes(query) ||
        catName.includes(query) ||
        product.specifications.some((s) => s.toLowerCase().includes(query))
      );
    });

    const sorted = [...list];
    sorted.sort((a, b) => {
      if (sortBy === 'price-asc') {
        return getUnitPriceForQty(a, 1) - getUnitPriceForQty(b, 1);
      }
      if (sortBy === 'price-desc') {
        return getUnitPriceForQty(b, 1) - getUnitPriceForQty(a, 1);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name, 'pt-BR');
      }
      const rankA = bestsellerRank.get(a.id) ?? 999;
      const rankB = bestsellerRank.get(b.id) ?? 999;
      if (rankA !== rankB) return rankA - rankB;
      return a.id - b.id;
    });

    return sorted;
  }, [searchQuery, selectedParentId, selectedSubcategoryId, sortBy, categoryMap]);

  const visibleProducts = useMemo(
    () => filteredProducts.slice(0, visibleCount),
    [filteredProducts, visibleCount]
  );

  const handleSelectParent = (parentId: number | null) => {
    setSelectedParentId(parentId);
    setSelectedSubcategoryId(null);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSelectSubcategory = (subId: number | null) => {
    setSelectedSubcategoryId(subId);
    setVisibleCount(PAGE_SIZE);
  };

  const jumpToCategory = (parentId: number | null) => {
    handleSelectParent(parentId);
    catalogSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAddToCart = (product: Product, qty: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  };

  const handleUpdateQty = (productId: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá ${BRAND_NAME}! Gostaria de fazer um pedido pelo catálogo.`
  )}`;

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1A1815]">
      <Header
        totalUnits={cartTotals.totalUnits}
        subtotal={cartTotals.subtotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Storefront Split Hero */}
        <section className="border-b border-[#EAE3D5] bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Copy */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6514]">
                    Atacado & Vendas Diretas · WhatsApp {WHATSAPP_DISPLAY}
                  </p>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#1A1815] leading-[1.08] tracking-tight text-balance">
                    Sacaria e enxoval para o lar com preço direto de fábrica
                  </h1>
                  <p className="text-base text-[#5C564D] leading-relaxed max-w-xl">
                    Catálogo completo com 202 produtos entre panos de prato, limpeza, cama, mesa, banho e tapetes. Monte sua sacola com desconto progressivo e finalize em segundos pelo WhatsApp.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <a
                    href="#catalogo"
                    className="h-12 px-6 rounded-lg bg-[#1A1815] text-white text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#2C2822] border border-[#D4AF37]/60 transition-colors whitespace-nowrap"
                  >
                    <span>Explorar Catálogo</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </a>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 px-5 rounded-lg bg-[#FAF5E8] text-[#8C6514] border border-[#D4AF37] text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#F3EBD6] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir no {WHATSAPP_DISPLAY}</span>
                  </a>
                </div>
              </div>

              {/* Right Hero Media */}
              <div className="lg:col-span-6">
                <div className="relative h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-[#E8DFCE] bg-[#FAF8F3]">
                  <img
                    src={heroBannerImg}
                    alt="Panos de prato de sacaria 100% algodão e toalhas brancas em superfície de mármore com detalhes dourados"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/55 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#F4E3B2] font-medium">
                        Pronta-entrega nacional
                      </p>
                      <p className="font-display text-2xl font-semibold">
                        Linha Branco & Dourado Conecta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-column Wholesale Strip below Hero */}
            <div className="mt-10 pt-8 border-t border-[#EAE3D5] grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-semibold text-[#1A1815]">Tabela Progressiva</p>
                <p className="text-xs text-[#6B645A] mt-0.5">
                  Quanto maior a quantidade, menor o valor unitário automático
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1815]">202 Produtos Ativos</p>
                <p className="text-xs text-[#6B645A] mt-0.5">
                  Cozinha, cama, banho, tapetes, limpeza, redes e kits
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1815]">Checkout no WhatsApp</p>
                <p className="text-xs text-[#6B645A] mt-0.5">
                  Resumo completo enviado direto para {WHATSAPP_DISPLAY}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1815]">Envio para Todo Brasil</p>
                <p className="text-xs text-[#6B645A] mt-0.5">
                  Transportadoras, Correios, Jadlog e excursões
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Collections (3-column editorial spotlight) */}
        <section id="colecoes" className="py-12 sm:py-16 bg-[#FAF8F3] border-b border-[#EAE3D5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6514]">
                  Departamentos Principais
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1815] mt-1">
                  Explore por linha têxtil
                </h2>
              </div>
              <button
                type="button"
                onClick={() => jumpToCategory(null)}
                className="text-sm font-medium text-[#8C6514] hover:text-[#6B4B0A] inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                Ver todos os 202 produtos
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                type="button"
                onClick={() => jumpToCategory(118)}
                className="group text-left bg-white rounded-xl overflow-hidden border border-[#E8DFCE] hover:border-[#D4AF37] transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#FAF8F3]">
                  <img
                    src={colCozinhaImg}
                    alt="Coleção Cozinha e Sacaria"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#6B645A]">22 produtos · Panos de Prato e Copa</p>
                    <h3 className="text-base font-semibold text-[#1A1815] mt-0.5 group-hover:text-[#8C6514] transition-colors">
                      Cozinha & Sacaria
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8C6514] shrink-0" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => jumpToCategory(119)}
                className="group text-left bg-white rounded-xl overflow-hidden border border-[#E8DFCE] hover:border-[#D4AF37] transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#FAF8F3]">
                  <img
                    src={colCamaBanhoImg}
                    alt="Coleção Cama, Mesa e Banho"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#6B645A]">104 produtos · Lençóis, Mantas e Toalhas</p>
                    <h3 className="text-base font-semibold text-[#1A1815] mt-0.5 group-hover:text-[#8C6514] transition-colors">
                      Cama & Banho
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8C6514] shrink-0" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => jumpToCategory(117)}
                className="group text-left bg-white rounded-xl overflow-hidden border border-[#E8DFCE] hover:border-[#D4AF37] transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#FAF8F3]">
                  <img
                    src={colTapetesLimpezaImg}
                    alt="Coleção Tapetes, Passadeiras e Limpeza"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#6B645A]">52 produtos · Tapetes, Passadeiras e Chão</p>
                    <h3 className="text-base font-semibold text-[#1A1815] mt-0.5 group-hover:text-[#8C6514] transition-colors">
                      Tapetes & Limpeza
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8C6514] shrink-0" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Bestsellers Strip ("Mais Pedidos") */}
        <section id="mais-pedidos" className="py-12 sm:py-16 bg-white border-b border-[#EAE3D5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6514]">
                  Campeões de Giro
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1815] mt-1">
                  Mais pedidos da semana
                </h2>
              </div>
              <p className="text-sm text-[#6B645A]">
                Itens campeões de recompra para pronta-entrega
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
              {bestsellers.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  categoryName={categoryMap.get(product.categoryId)?.name ?? 'Catálogo'}
                  cartQuantity={cartQtyByProductId.get(product.id) ?? 0}
                  onAddToCart={handleAddToCart}
                  onSelectProduct={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Full Catalog Section (All 202 products + Search + Hierarchy Filters) */}
        <section id="catalogo" ref={catalogSectionRef} className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6514]">
                  Catálogo Completo Conecta Sacaria
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1815] mt-1">
                  Todos os produtos ({filteredProducts.length})
                </h2>
              </div>

              {/* Search & Sort Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 sm:w-72">
                  <Search className="w-4 h-4 text-[#7A7367] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    placeholder="Buscar pano de prato, código, algodão..."
                    aria-label="Buscar produtos no catálogo"
                    className="w-full h-10 pl-10 pr-9 rounded-lg border border-[#DCD2BF] bg-[#FAF8F3] text-sm text-[#1A1815] placeholder:text-[#7A7367] focus:outline-none focus:bg-white focus:border-[#8C6514]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Limpar busca"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7A7367] hover:text-[#1A1815] cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="relative inline-flex items-center">
                  <SlidersHorizontal className="w-4 h-4 text-[#7A7367] absolute left-3 pointer-events-none" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    aria-label="Ordenar produtos"
                    className="h-10 pl-9 pr-4 rounded-lg border border-[#DCD2BF] bg-white text-sm text-[#1A1815] focus:outline-none focus:border-[#8C6514] cursor-pointer"
                  >
                    <option value="featured">Mais relevantes</option>
                    <option value="price-asc">Menor preço</option>
                    <option value="price-desc">Maior preço</option>
                    <option value="name-asc">Ordem alfabética (A–Z)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="space-y-3 pb-4 border-b border-[#EAE3D5]">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  type="button"
                  onClick={() => handleSelectParent(null)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedParentId === null
                      ? 'bg-[#1A1815] text-white border border-[#D4AF37]/50'
                      : 'bg-[#FAF8F3] text-[#5C564D] border border-[#EAE3D5] hover:text-[#1A1815] hover:border-[#D4AF37]/50'
                  }`}
                >
                  Todos ({PRODUCTS.length})
                </button>
                {parentCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectParent(cat.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedParentId === cat.id
                        ? 'bg-[#1A1815] text-white border border-[#D4AF37]/50'
                        : 'bg-[#FAF8F3] text-[#5C564D] border border-[#EAE3D5] hover:text-[#1A1815] hover:border-[#D4AF37]/50'
                    }`}
                  >
                    {cat.name} ({cat.productCount})
                  </button>
                ))}
              </div>

              {/* Contextual Subcategories */}
              {subcategoriesForParent.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto pt-1">
                  <span className="text-xs text-[#6B645A] whitespace-nowrap shrink-0 pr-1">
                    Subcategorias:
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSelectSubcategory(null)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedSubcategoryId === null
                        ? 'bg-[#FAF5E8] text-[#8C6514] border border-[#D4AF37]'
                        : 'bg-white text-[#5C564D] border border-[#EAE3D5] hover:text-[#1A1815]'
                    }`}
                  >
                    Todas da linha
                  </button>
                  {subcategoriesForParent.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => handleSelectSubcategory(sub.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        selectedSubcategoryId === sub.id
                          ? 'bg-[#FAF5E8] text-[#8C6514] border border-[#D4AF37]'
                          : 'bg-white text-[#5C564D] border border-[#EAE3D5] hover:text-[#1A1815]'
                      }`}
                    >
                      {sub.name} ({sub.productCount})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Grid or Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center rounded-2xl border border-[#EAE3D5] bg-[#FAF8F3] space-y-3 px-4">
                <p className="font-display text-2xl font-semibold text-[#1A1815]">
                  Nenhum produto encontrado para essa busca
                </p>
                <p className="text-sm text-[#6B645A] max-w-md mx-auto">
                  Tente limpar os filtros ou buscar por termos como "pano de prato", "lençol", "toalha" ou "tapete".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    handleSelectParent(null);
                  }}
                  className="mt-2 px-4 py-2 rounded-lg bg-[#1A1815] text-white text-xs font-semibold hover:bg-[#2C2822] cursor-pointer"
                >
                  Mostrar todos os produtos
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
                  {visibleProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      categoryName={categoryMap.get(product.categoryId)?.name ?? 'Catálogo'}
                      cartQuantity={cartQtyByProductId.get(product.id) ?? 0}
                      onAddToCart={handleAddToCart}
                      onSelectProduct={setSelectedProduct}
                    />
                  ))}
                </div>

                {visibleCount < filteredProducts.length && (
                  <div className="pt-6 text-center space-y-2">
                    <p className="text-xs text-[#6B645A] tabular-nums">
                      Exibindo {visibleProducts.length} de {filteredProducts.length} produtos
                    </p>
                    <button
                      type="button"
                      onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                      className="h-11 px-6 rounded-lg bg-[#FAF8F3] border border-[#D4AF37] text-sm font-semibold text-[#8C6514] hover:bg-[#FAF5E8] transition-colors cursor-pointer"
                    >
                      Carregar mais produtos
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Verified Customer & Reseller Testimonials */}
        <TestimonialsSection />

        {/* Integrated Links Hub Section */}
        <LinksHubSection onJumpToCatalog={() => jumpToCategory(null)} />
      </main>

      {/* Clean Footer */}
      <footer className="bg-white border-t border-[#E8DFCE] py-10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-semibold text-[#1A1815]">
              {BRAND_NAME}
            </p>
            <p className="text-xs text-[#6B645A] mt-1">
              Catálogo Digital de Sacaria, Cama, Mesa, Banho e Utilidades · Atendimento WhatsApp {WHATSAPP_DISPLAY}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#5C564D]">
            <a href="#catalogo" className="hover:text-[#1A1815]">
              Catálogo Completo
            </a>
            <a href="#mais-pedidos" className="hover:text-[#1A1815]">
              Mais Pedidos
            </a>
            <a href="#depoimentos" className="hover:text-[#1A1815]">
              Depoimentos
            </a>
            <a href="#central-links" className="hover:text-[#1A1815]">
              Central de Links
            </a>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6514] font-semibold hover:underline"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

      {/* Compact Sticky Mobile Checkout Bar (shown only when cart has items, <= 60px height) */}
      {cartTotals.totalUnits > 0 && !isCartOpen && (
        <div className="md:hidden fixed bottom-3 left-3 right-3 z-30">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="w-full h-12 px-4 rounded-xl bg-[#1A1815] text-white shadow-xl border border-[#D4AF37]/60 flex items-center justify-between gap-3 cursor-pointer"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold">
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>Ver Sacola ({cartTotals.totalUnits})</span>
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#F4E3B2] tabular-nums">
              <span>{formatBRL(cartTotals.subtotal)}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        categoryName={
          selectedProduct ? categoryMap.get(selectedProduct.categoryId)?.name ?? 'Catálogo' : ''
        }
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Fast WhatsApp Cart & Checkout Drawer */}
      <CartCheckoutDrawer
        isOpen={isCartOpen}
        items={cart}
        customer={customer}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onAddProduct={handleAddToCart}
        onClearCart={() => setCart([])}
        onUpdateCustomer={setCustomer}
      />
    </div>
  );
}

export default App;
