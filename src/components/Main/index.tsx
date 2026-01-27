import { ReviewCard } from "../ReviewCard";

export const Main = () => {
  return (
    <main className="px-10 py-10">
      <section className="  bg-[linear-gradient(-90deg,transparent_0%,rgba(34,197,94,.3)_100%),url('/public/images/hero-section-bg.png')] bg-cover bg-center bg-100% w-full h-200 pt-20 px-10 flex items-center rounded-4xl">
        <div className=" p-10 rounded-3xl text-white ml-30">
          <h1 className=" mb-2 text-6xl">
            Móveis planejados <br /> sob medida para <br />o seu estilo.
          </h1>

          <p className="mb-2">
            Transformamos ambientes em espaços únicos, <br /> funcionais e
            elegantes, feitos do jeito que você sonhou.
          </p>

          <button className=" bg-[#2e9e53] w-70 h-20 text-2xl p-5 mt-7 rounded-3xl backdrop-blur-md  text-white ">
            Solicitar Orçamento
          </button>
        </div>
      </section>

      {/* GALERIA ===========================*/}

      <section className=" py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-auto">
          {/* Item grande - 2 linhas no md+ */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src="/images/produto-11.jpg"
                alt="Produto destaque"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <div className="absolute inset-0 bg-[linear-gradient(-20deg,transparent_0%,rgba(34,197,94,.3)_100%)] bg-opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Grid de itens pequenos */}
          <div className="md:col-span-2 grid grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/produto-37.jpg"
                alt="Produto 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/produto-41.jpg"
                alt="Produto 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/produto-15.jpg"
                alt="Produto 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/produto-33.jpg"
                alt="Produto 4"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>

            <div className="rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/produto-100.jpeg"
                alt="Produto 4"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>

            <div className="rounded-2xl overflow-hidden h-48 md:h-auto">
              <img
                src="/images/hero-section-bg.png"
                alt="Produto 4"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES ============================= */}

      <section className="bg-[url(/images/bg2.png)] py-16 px-10 rounded-4xl bg-cover bg-no-repeat ">

      
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Clientes Satisfeitos
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <ReviewCard
            image="https://lh3.googleusercontent.com/a-/ALV-UjUeL2RSDGuRXHqD0ZF1DdKi5m_Yc91_azQvf4Hk0V0h7LnNe8bY=s36-c-rp-mo-br100"
            text="Recomendo. Excelente preço, material utilizado, acabamento, detalhes, projeto, qualidade dos serviços e entrega bem antes do prazo!"
            stars={5}
            name="
Valmir Floriano Vieira de Andrade"
          />
          <ReviewCard
            image="https://lh3.googleusercontent.com/a-/ALV-UjXHzd1MvzCxnLSCoSs_GU7hAK6UCcNLiTVJkb4pauK0c9ZVcBYWIQ=s36-c-rp-mo-ba2-br100"
            text="Nada a reclamar! Trabalho excelente!!! Desde o orçamento, quando o Edivaldo realizou um 3d de todos os móveis sabíamos que era um profissional diferenciado, tudo realizado com muito profissionalismo, qualidade e ótimo acabamento. Deixou o ambiente super limpo após a instalação, isso é algo que vemos raramente nas empresas hoje em dia."
            stars={5}
            name="Laura Esther"
          />
          <ReviewCard
            image="https://lh3.googleusercontent.com/a-/ALV-UjUiVwlg5AxS0ROWRWQQqg2opc2y2ZbYK6QwxfIM_C8eRih9QEC3yg=s36-c-rp-mo-br100"
            text="Excelente profissional, material de boa qualidade, entrega super rapida, preço muito bom,tudo de primeira linha, super recomendo!"
            stars={5}
            name="Emídio Ribeiro"
          />

          <ReviewCard
            image="https://lh3.googleusercontent.com/a-/ALV-UjVjNy5e0pRU7nYbQEUX3YNQOHU8WK_WVjV8bdt4tyegpbbQGq0F=s36-c-rp-mo-br100"
            text="Quer fazer seus móveis planejado com alguém talentoso, honesto e pontual? Então faça com ele! Serviço impecável, preço justo e qualidade excelente. Pode fazer com ele sem medo. Profissional de verdade."
            stars={5}
            name="
Leonardo Azevedo"
          />

        </div>
      </section>
    </main>
  );
};
