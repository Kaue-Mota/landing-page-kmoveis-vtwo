import { useScrollAnimationChildren } from "../../hooks/useScrollAnimation";

const STATS = [
  { value: "20+", label: "Anos de Experiência" },
  { value: "500+", label: "Projetos Entregues" },
  { value: "100%", label: "Satisfação Garantida" },
  { value: "DF", label: "Brasília e Região" },
];

const PARAGRAPHS = [
  <>
    Há mais de{" "}
    <strong className="text-green-700 font-semibold">20 anos no mercado</strong>,
    a <strong className="text-green-700 font-semibold">K Móveis Planejados</strong>{" "}
    transforma ambientes em espaços funcionais, elegantes e feitos sob medida
    para cada cliente. Nossa trajetória é construída com dedicação, qualidade e
    compromisso em entregar móveis que unem beleza, durabilidade e praticidade
    no dia a dia.
  </>,
  <>
    Atuamos com forte presença em{" "}
    <strong className="text-green-700 font-semibold">Brasília – DF</strong> e
    região, levando soluções inteligentes em marcenaria para residências e
    espaços comerciais. Cada projeto é pensado de forma personalizada,
    respeitando o estilo, a necessidade e o sonho de quem confia no nosso
    trabalho.
  </>,
  <>
    Localizados em{" "}
    <strong className="text-green-700 font-semibold">Sobradinho 2</strong>,
    contamos com experiência, técnica e atenção aos detalhes que só uma empresa
    consolidada no mercado pode oferecer. Trabalhamos com materiais de
    qualidade, acabamentos refinados e um processo cuidadoso que vai do
    planejamento à instalação final.
  </>,
  <>
    Nossa missão é criar ambientes que tragam conforto, organização e
    identidade, sempre com um atendimento próximo e transparente. Mais do que
    móveis, entregamos{" "}
    <strong className="text-green-700 font-semibold">soluções sob medida</strong>{" "}
    que valorizam seu espaço e seu investimento.
  </>,
];

export const About = () => {
  const statsRef = useScrollAnimationChildren();
  const textRef = useScrollAnimationChildren();

  return (
    <section className="min-h-screen bg-[#f9f7f4]">

      {/* ── Dark banner header ── */}
      <div className="relative bg-[#0b1a0d] overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "url('/images/hero-section-bg.webp') center/cover no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1a0d]" />
        <div className="relative flex flex-col items-center justify-center pt-28 pb-12 px-6 text-center">
          <span className="badge-green mb-4">Quem somos</span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Sobre a K Móveis
          </h1>
        </div>
      </div>

      {/* ── Stats grid ── */}
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="scroll-item bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-center border border-gray-100"
            >
              <p className="stat-number">{value}</p>
              <p className="text-gray-500 text-[11px] mt-2 uppercase tracking-wide font-semibold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body text ── */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div ref={textRef} className="space-y-7 text-lg leading-relaxed text-gray-700">
          {PARAGRAPHS.map((para, i) => (
            <p key={i} className="scroll-item">
              {para}
            </p>
          ))}
        </div>

        {/* ── Dark CTA block ── */}
        <div className="scroll-item mt-16 bg-[#0b1a0d] rounded-3xl p-10 text-center relative overflow-hidden">
          {/* Glow decoration */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-2xl font-bold text-white mb-2 relative z-10">
            Seu ambiente merece um projeto exclusivo.
          </p>
          <p className="text-gray-400 mb-8 text-sm relative z-10">
            Entre em contato e solicite seu orçamento sem compromisso.
          </p>
          <a
            href="https://wa.link/75dyp7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base"
          >
            <img
              src="/images/icon/whatsappicon.png"
              className="w-5 h-5"
              alt=""
            />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};
