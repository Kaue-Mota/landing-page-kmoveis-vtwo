import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/about", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/catalago", label: "Catálogo" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0b1a0d] text-white mt-20 relative overflow-hidden">
      {/* Gradient top line */}
      <div className="gradient-line" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-green-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-green-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div>
            <img
              src="/images/logo/logo-transp.png"
              alt="K Móveis"
              className="h-14 mb-5 brightness-200"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Qualidade, design e funcionalidade para transformar seu ambiente.
              Mais de 30 anos de experiência em Brasília – DF.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Contato
            </h4>
            <p className="text-gray-400 text-sm mb-1">Sobradinho 2, Brasília – DF</p>
            <p className="text-gray-400 text-sm mb-7">+30 anos no mercado</p>

            <a
              href="https://wa.link/75dyp7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-3 rounded-xl
                bg-gradient-to-r from-green-800 to-green-500
                text-white text-sm font-semibold
                shadow-[0_4px_18px_rgba(34,197,94,0.3)]
                hover:shadow-[0_6px_28px_rgba(34,197,94,0.5)]
                hover:scale-105 transition-all duration-300
              "
            >
              <img
                src="/images/icon/whatsappicon.png"
                className="w-4 h-4"
                alt=""
              />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} K Móveis Planejados. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Sobradinho 2, Brasília – DF
          </p>
        </div>
      </div>
    </footer>
  );
};
