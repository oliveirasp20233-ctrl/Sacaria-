import { useState } from 'react';
import {
  MessageCircle,
  Users,
  BookOpen,
  UserPlus,
  Copy,
  Check,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { BRAND_NAME, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/catalog';
import { downloadVCard } from '../utils/pricing';

interface LinksHubSectionProps {
  onJumpToCatalog: () => void;
}

export function LinksHubSection({ onJumpToCatalog }: LinksHubSectionProps) {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyCatalogUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá ${BRAND_NAME}! Vim pelo catálogo digital e gostaria de falar com um consultor de vendas.`
  )}`;

  const whatsappVipUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá ${BRAND_NAME}! Quero receber o link do Grupo VIP de Ofertas Atacado.`
  )}`;

  return (
    <section
      id="central-links"
      className="py-16 sm:py-20 bg-[#FAF8F3] border-t border-[#EAE3D5]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Editorial Column */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6514]">
              Central de Links e Atendimento
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1815] leading-tight text-balance">
              Conexão direta com nossa equipe comercial
            </h2>
            <p className="text-[15px] text-[#5C564D] leading-relaxed">
              Todos os canais oficiais da {BRAND_NAME} reunidos em um único lugar para agilizar cotações de atacado, reposição de estoque e salvamento rápido do nosso contato.
            </p>

            <div className="pt-4 border-t border-[#E5DEC9] space-y-3 text-sm text-[#5C564D]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8C6514] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1815]">Horário de Atendimento</p>
                  <p className="text-xs text-[#6B645A] mt-0.5 tabular-nums">
                    Segunda a Sexta: 08:00 às 18:00 · Sábado: 08:00 às 12:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#8C6514] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1815]">WhatsApp Vendas Diretas</p>
                  <p className="text-xs text-[#6B645A] mt-0.5 tabular-nums">
                    {WHATSAPP_DISPLAY} · Atendimento para lojistas, sacoleiras e varejo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Quick Links Stack (recreating catalogandoo/links convenience in White & Gold) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 group flex items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-[#1A1815] text-white border border-[#D4AF37]/60 hover:bg-[#2B2721] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm font-semibold">WhatsApp Comercial Direto</p>
                  <p className="text-xs text-[#E8DFCE] tabular-nums mt-0.5">
                    {WHATSAPP_DISPLAY} — Fale agora com nossa equipe
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            <a
              href={whatsappVipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-[#E5DEC9] hover:border-[#D4AF37] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF5E8] border border-[#E8DFCE] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#8C6514]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1815]">Grupo VIP Ofertas Atacado</p>
                  <p className="text-xs text-[#6B645A]">Lotes e reposições semanais</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8C6514] shrink-0" />
            </a>

            <button
              type="button"
              onClick={onJumpToCatalog}
              className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-[#E5DEC9] hover:border-[#D4AF37] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF5E8] border border-[#E8DFCE] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-[#8C6514]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1815]">Ver Catálogo Completo</p>
                  <p className="text-xs text-[#6B645A]">202 itens com tabela progressiva</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8C6514] shrink-0" />
            </button>

            <button
              type="button"
              onClick={downloadVCard}
              className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-[#E5DEC9] hover:border-[#D4AF37] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF5E8] border border-[#E8DFCE] flex items-center justify-center shrink-0">
                  <UserPlus className="w-4 h-4 text-[#8C6514]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1815]">Salvar Contato (.vcf)</p>
                  <p className="text-xs text-[#6B645A]">Adicionar {WHATSAPP_DISPLAY} à agenda</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8C6514] shrink-0" />
            </button>

            <button
              type="button"
              onClick={handleCopyCatalogUrl}
              className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-[#E5DEC9] hover:border-[#D4AF37] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF5E8] border border-[#E8DFCE] flex items-center justify-center shrink-0">
                  {linkCopied ? (
                    <Check className="w-4 h-4 text-[#8C6514]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#8C6514]" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1815]">
                    {linkCopied ? 'Link copiado!' : 'Compartilhar Catálogo'}
                  </p>
                  <p className="text-xs text-[#6B645A]">Copiar endereço para enviar</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8C6514] shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
