import { ReviewCard } from "../ReviewCard";
import {
  useScrollAnimation,
  useScrollAnimationChildren,
} from "../../hooks/useScrollAnimation";

export const Main = () => {
  const heroRef = useScrollAnimation();
  const galleryRef = useScrollAnimationChildren();
  const reviewsRef = useScrollAnimation();
  return (
    <main className="px-5 lg:px-50 lg:py-5 py-5">
      <section
        ref={heroRef}
        className="scroll-section px-2  bg-[linear-gradient(-90deg,transparent_0%,rgba(34,197,94,.3)_100%),url('/images/hero-section-bg.webp')] bg-cover bg-bottom bg-100% w-full h-150 lg:h-200 pt-20 flex md:justify-start items-center justify-center rounded-4xl"
      >
        <div className=" flex flex-col  items-center text-white md:items-start md:ml-30">
          <h1 className=" mb-2 text-3xl md:text-5xl text-center md:text-left">
            Móveis planejados <br /> sob medida para <br />o seu estilo.
          </h1>

          <p className="mb-2 text-center md:inline-block md:text-left hidden">
            Transformamos ambientes em espaços únicos, <br /> funcionais e
            elegantes, feitos do jeito que você sonhou.
          </p>

          <a
            href="https://wa.link/75dyp7"
            target="_blank"
            className=" flex justify-center items-center bg-[#2e9e53] md:w-70 md:h-20 max-w-70 text-2xl md:text-2xl p-5 mt-7 rounded-3xl backdrop-blur-md  text-center font-bold text-white hover:scale-105 hover:cursor-pointer hover:bg-[#37b661]"
          >
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </section>

      {/* GALERIA ===========================*/}

      <section ref={galleryRef} className="mt-20 ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-auto">
          {/* Item grande - 2 linhas no md+ */}
          <div className="scroll-item md:col-span-1 md:row-span-1 col-span-2 rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src="/images/galeri-grid/bg2.jpg"
                alt="Produto destaque"
                className="w-full h-full object-left object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <div className="absolute inset-0 bg-[linear-gradient(-20deg,transparent_0%,rgba(34,197,94,.3)_100%)] bg-opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Grid de itens pequenos */}
          <div className="md:col-span-2 grid grid-cols-2 col-span-2 gap-4">
            <div className="scroll-item rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/galeri-grid/produto-37.jpg"
                alt="Produto 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="scroll-item rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/galeri-grid/produto-41.jpg"
                alt="Produto 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="scroll-item rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/galeri-grid/produto-15.jpg"
                alt="Produto 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="scroll-item rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/galeri-grid/produto-33.jpg"
                alt="Produto 4"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>

            <div className="scroll-item rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/galeri-grid/produto-100.jpeg"
                alt="Produto 5"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>

            <div className="scroll-item rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/galeri-grid/hero-section-bg.webp"
                alt="Produto 6"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES ============================= */}

      <h1
        ref={reviewsRef}
        className="scroll-section font-extrabold text-3xl text-center mb-5 mt-20 text-neutral-600  border-b-neutral-600 pt-5 "
      >
        AVALIAÇÕES
      </h1>

      <section className=" py-16 px-10 rounded-4xl bg-cover bg-no-repeat ">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          <ReviewCard
            text="Recomendo. Excelente preço, material utilizado, acabamento, detalhes, projeto, qualidade dos serviços e entrega bem antes do prazo                     !                                                                                   "
            stars={5}
            name="Valmir"
            avatar="https://lh3.googleusercontent.com/a-/ALV-UjUeL2RSDGuRXHqD0ZF1DdKi5m_Yc91_azQvf4Hk0V0h7LnNe8bY=w36-h36-p-rp-mo-br100"
          />
          <ReviewCard
            text="Nada a reclamar! Desde o orçamento com o projeto 3D já deu pra ver o profissionalismo. Móveis com ótimo acabamento, qualidade excelente e ainda deixaram tudo limpo após a instalação, algo raro hoje em dia."
            stars={5}
            name="Laura"
            avatar="https://lh3.googleusercontent.com/a-/ALV-UjXHzd1MvzCxnLSCoSs_GU7hAK6UCcNLiTVJkb4pauK0c9ZVcBYWIQ=w36-h36-p-rp-mo-ba2-br100"
          />
          <ReviewCard
            text="Excelente profissional, material de boa qualidade, entrega super rapida, preço muito bom,tudo de primeira linha, super recomendo!"
            stars={5}
            name="Emídio"
            avatar="https://lh3.googleusercontent.com/a-/ALV-UjUiVwlg5AxS0ROWRWQQqg2opc2y2ZbYK6QwxfIM_C8eRih9QEC3yg=w36-h36-p-rp-mo-br100"
          />

          <ReviewCard
            text="Quer fazer seus móveis planejado com alguém talentoso, honesto e pontual? Então faça com ele! Serviço impecável, preço justo e qualidade excelente. Pode fazer com ele sem medo. Profissional de verdade."
            stars={5}
            name="Leonardo"
            avatar="https://lh3.googleusercontent.com/a-/ALV-UjVjNy5e0pRU7nYbQEUX3YNQOHU8WK_WVjV8bdt4tyegpbbQGq0F=w36-h36-p-rp-mo-br100"
          />
        </div>
      </section>
    </main>
  );
};
