export const Footer = () => {
  return (
    <footer className="flex flex-col  items-center justify-center text-center text-white bg-[rgba(0,0,0,0.8)] h-60 px-10 mt-50">
      <img className="w-50 " src="/images/logo/logo-transp.png" alt="" />
      <h1>A mais de 30 anos no mercado</h1>

      <h2>
        K Móveis Planejados – Qualidade, design e funcionalidade para o seu
        ambiente.
      </h2>

      <a
        href="https://wa.link/75dyp7"
        target="_blank"
        rel="noopener noreferrer"
        className="
    mt-3
    flex items-center justify-center gap-3
    bg-green-500 hover:bg-amber-700
    text-white font-medium
      rounded-lg
    transition duration-300
    w-fit
  "
      >
        <img
          src="/images/icon/whatsappicon.png"
          alt="WhatsApp"
          className="w-5 h-5"
        />
        CONTATO
      </a>
    </footer>
  );
};
