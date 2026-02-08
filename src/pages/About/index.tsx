import { useScrollAnimationChildren } from "../../hooks/useScrollAnimation";

export const About = () => {
  const galleryRef = useScrollAnimationChildren();
  return (
    <section ref={galleryRef}  id="sobre" className="py-60 md:px-50 px-5 bg-white text-gray-800">
      <div className="  max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Sobre a K Móveis Planejados
        </h2>

        <div className=" space-y-6 text-lg leading-relaxed">
          <p  className="scroll-item" >
            Há mais de <strong>20 anos no mercado</strong>, a{" "}
            <strong>K Móveis Planejados</strong> transforma ambientes em espaços
            funcionais, elegantes e feitos sob medida para cada cliente. Nossa
            trajetória é construída com dedicação, qualidade e compromisso em
            entregar móveis que unem beleza, durabilidade e praticidade no dia a
            dia.
          </p>

          <p className="scroll-item">
            Atuamos com forte presença em <strong>Brasília – DF</strong> e
            região, levando soluções inteligentes em marcenaria para residências
            e espaços comerciais. Cada projeto é pensado de forma personalizada,
            respeitando o estilo, a necessidade e o sonho de quem confia no
            nosso trabalho.
          </p>

          <p className="scroll-item">
            Localizados em <strong>Sobradinho 2</strong>, contamos com
            experiência, técnica e atenção aos detalhes que só uma empresa
            consolidada no mercado pode oferecer. Trabalhamos com materiais de
            qualidade, acabamentos refinados e um processo cuidadoso que vai do
            planejamento à instalação final.
          </p>

          <p className="scroll-item">
            Nossa missão é criar ambientes que tragam conforto, organização e
            identidade, sempre com um atendimento próximo e transparente. Mais
            do que móveis, entregamos <strong>soluções sob medida</strong> que
            valorizam seu espaço e seu investimento.
          </p>
        </div>

        <div className="scroll-item mt-12 text-center">
          <p className="text-xl font-semibold mb-4">
            Seu ambiente merece um projeto exclusivo.
          </p>
          <a
            href="https://wa.link/75dyp7"
            target="_blank"
            className="scroll-item inline-block px-8 py-4 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};
