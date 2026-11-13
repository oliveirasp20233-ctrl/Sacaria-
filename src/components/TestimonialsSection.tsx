import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const REAL_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Fernanda',
    role: 'Revendedora',
    quote:
      'Comecei com um pedido pequeno só pra testar. Em menos de uma semana vendi tudo e já fiz o segundo pedido. A margem é boa e o produto sai fácil!',
  },
  {
    name: 'Ana Paula',
    role: 'Revendedora',
    quote:
      'Achei que ia ser complicado, mas foi simples. Fechei pelo WhatsApp, o frete chegou rápido e minha clientela adorou. Vale muito a pena revender.',
  },
  {
    name: 'Juliana',
    role: 'Revendedora',
    quote:
      'No começo fiquei com receio de investir, mas resolvi testar. As peças têm ótima qualidade, minhas clientes gostaram bastante e consegui vender tudo muito rápido. Já estou preparando um novo pedido!',
  },
  {
    name: 'Carla',
    role: 'Cliente de varejo',
    quote:
      'Recebi meu pedido hoje e fiquei apaixonada! Veio tudo muito bem embalado, exatamente como nas fotos e a qualidade superou minhas expectativas. Com certeza comprarei novamente.',
  },
  {
    name: 'Patrícia',
    role: 'Revendedora',
    quote:
      'O atendimento foi excelente desde o primeiro contato. Fiz meu primeiro pedido para conhecer os produtos e a aceitação foi ótima. Já estou indicando para outras pessoas e vou continuar comprando.',
  },
  {
    name: 'Bruna',
    role: 'Cliente de varejo',
    quote:
      'Chegaram ontem. Muito obrigada, veio tudo certinho. Com certeza vou pedir de novo, obrigada!',
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-14 sm:py-20 bg-white border-t border-[#EAE3D5]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6514]">
              Avaliações Verificadas
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1815] mt-1 text-balance">
              Quem compra e revende recomenda
            </h2>
          </div>
          <p className="text-sm text-[#5C564D] max-w-md">
            Relatos reais de revendedoras, lojistas e clientes que recebem nossos pedidos em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REAL_TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="bg-[#FAF8F3] border border-[#EAE3D5] rounded-xl p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-[#B08424]" strokeWidth={1.6} aria-hidden="true" />
                <p className="text-[15px] text-[#1A1815] leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3D5] flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#1A1815]">{item.name}</p>
                  <p className="text-xs text-[#6B645A]">{item.role}</p>
                </div>
                <span className="text-xs font-medium text-[#8C6514]">
                  Compra confirmada
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
