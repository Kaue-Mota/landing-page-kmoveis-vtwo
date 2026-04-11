import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReviewCard } from "../ReviewCard";
import {
  useScrollAnimation,
  useScrollAnimationChildren,
} from "../../hooks/useScrollAnimation";

const HERO_LINES = [
  "Móveis planejados",
  "sob medida",
  "para o seu estilo.",
];

const GALLERY_ITEMS = [
  { src: "/images/galeri-grid/produto-37.jpg",        alt: "Quarto planejado" },
  { src: "/images/galeri-grid/produto-41.jpg",        alt: "Cozinha planejada" },
  { src: "/images/galeri-grid/produto-15.jpg",        alt: "Sala planejada" },
  { src: "/images/galeri-grid/produto-33.jpg",        alt: "Banheiro planejado" },
  { src: "/images/galeri-grid/produto-100.jpeg",      alt: "Closet planejado" },
  { src: "/images/galeri-grid/hero-section-bg.webp",  alt: "Ambiente planejado" },
];

const REVIEWS = [
  {
    text: "Recomendo. Excelente preço, material utilizado, acabamento, detalhes, projeto e qualidade dos serviços. Entrega bem antes do prazo!",
    stars: 5,
    name: "Valmir",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUeL2RSDGuRXHqD0ZF1DdKi5m_Yc91_azQvf4Hk0V0h7LnNe8bY=w36-h36-p-rp-mo-br100",
  },
  {
    text: "Nada a reclamar! Desde o orçamento com o projeto 3D já deu pra ver o profissionalismo. Móveis com ótimo acabamento.",
    stars: 5,
    name: "Laura",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXHzd1MvzCxnLSCoSs_GU7hAK6UCcNLiTVJkb4pauK0c9ZVcBYWIQ=w36-h36-p-rp-mo-ba2-br100",
  },
  {
    text: "Excelente profissional, material de boa qualidade, entrega super rápida, preço muito bom. Tudo de primeira linha, super recomendo!",
    stars: 5,
    name: "Emídio",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUiVwlg5AxS0ROWRWQQqg2opc2y2ZbYK6QwxfIM_C8eRih9QEC3yg=w36-h36-p-rp-mo-br100",
  },
  {
    text: "Quer móveis planejados com alguém talentoso, honesto e pontual? Então faça com ele! Serviço impecável, preço justo e qualidade excelente.",
    stars: 5,
    name: "Leonardo",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVjNy5e0pRU7nYbQEUX3YNQOHU8WK_WVjV8bdt4tyegpbbQGq0F=w36-h36-p-rp-mo-br100",
  },
];

export const Main = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const galleryRef = useScrollAnimationChildren();
  const statsRef = useScrollAnimationChildren();
  const reviewsTitleRef = useScrollAnimation();
  const reviewsRef = useScrollAnimationChildren();

  // Trigger hero animations shortly after mount
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="px-4 sm:px-8 lg:px-16 xl:px-32 pt-5 pb-5">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden w-full min-h-[88vh] rounded-3xl"
        style={{
          background:
            "url('/images/hero-section-bg.webp') center/cover no-repeat",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 rounded-3xl" />

        {/* Subtle green tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-transparent rounded-3xl" />

        {/* Floating badge — 20+ anos */}
        <div
          className={`
            absolute bottom-8 right-8 float-anim
            transition-all duration-700 delay-700
            ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <div className="glass-dark rounded-2xl px-5 py-4 text-center min-w-[72px]">
            <p className="text-3xl font-black text-white leading-none">20+</p>
            <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">
              Anos
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="relative h-full flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-32 max-w-3xl">

          {/* Badge label */}
          <div
            className={`
              mb-7 transition-all duration-700
              ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="badge-green">✦ Móveis Planejados em Brasília</span>
          </div>

          {/* Title — word-by-word reveal */}
          <h1 className={`mb-8 ${heroVisible ? "hero-words-visible" : ""}`}>
            {HERO_LINES.map((line, i) => (
              <span
                key={i}
                className="hero-word text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight"
                style={{ transitionDelay: `${0.25 + i * 0.14}s` }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className={`
              text-white/72 text-base sm:text-lg mb-10 max-w-md leading-relaxed
              transition-all duration-700
              ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
            style={{ transitionDelay: "0.72s" }}
          >
            Transformamos ambientes em espaços únicos, funcionais e elegantes,
            feitos do jeito que você sonhou.
          </p>

          {/* CTA button */}
          <div
            className={`transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "0.88s" }}
          >
            <a
              href="https://wa.link/75dyp7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer pulse-glow inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg"
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

        {/* Scroll indicator */}
        <div
          className={`
            absolute bottom-8 left-1/2 -translate-x-1/2
            flex flex-col items-center gap-2
            transition-all duration-700
            ${heroVisible ? "opacity-60" : "opacity-0"}
          `}
          style={{ transitionDelay: "1.1s" }}
        >
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════ */}
      <section ref={statsRef} className="mt-12 mb-16">
        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] px-8 py-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {[
            { value: "30+", label: "Anos no Mercado" },
            { value: "500+", label: "Projetos Entregues" },
            { value: "100%", label: "Satisfação Garantida" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="scroll-item flex flex-col items-center text-center px-6 py-4 sm:py-0"
            >
              <span className="stat-number">{value}</span>
              <span className="text-gray-500 text-xs font-semibold mt-2 uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════ */}
      <section ref={galleryRef} className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <span className="badge-green mb-3">Portfólio</span>
          <h2 className="scroll-item text-4xl sm:text-5xl font-black text-center text-gray-900 leading-tight">
            Nossos Projetos
          </h2>
          <p className="scroll-item text-gray-500 mt-3 text-center max-w-sm text-base">
            Cada ambiente transformado em um espaço único e funcional
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large featured image */}
          <div
            className="scroll-item img-zoom col-span-2 md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
            style={{ minHeight: "300px" }}
          >
            <img
              src="/images/galeri-grid/bg2.jpg"
              alt="Projeto destaque"
              className="w-full h-72 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-white font-semibold text-base">
                Destaque
              </span>
            </div>
          </div>

          {/* Small grid items */}
          {GALLERY_ITEMS.map(({ src, alt }, i) => (
            <div
              key={i}
              className="scroll-item img-zoom rounded-2xl overflow-hidden h-48 cursor-pointer group relative"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/28 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-3xl font-thin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ⊕
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/projetos" className="btn-outline-green">
            Ver todos os projetos →
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
      ═══════════════════════════════════════ */}
      <section className="mb-24">
        <div
          ref={reviewsTitleRef as React.RefObject<HTMLDivElement>}
          className="scroll-section flex flex-col items-center mb-12"
        >
          <span className="badge-green mb-3">Depoimentos</span>
          <h2 className="text-4xl sm:text-5xl font-black text-center text-gray-900">
            O que nossos clientes dizem
          </h2>
        </div>

        <div ref={reviewsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>

    </main>
  );
};
