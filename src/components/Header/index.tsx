import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/global.css";

const NAV_LINKS = [
  { to: "/about",    label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/catalago", label: "Catálogo" },
];

/* ── Inline SVG icons ─────────────────────── */
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect y="4"  width="22" height="2" rx="1" fill="currentColor" />
    <rect y="10" width="22" height="2" rx="1" fill="currentColor" />
    <rect y="16" width="22" height="2" rx="1" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.392A9.961 9.961 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

export const Header = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const { pathname }              = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header
        style={{ left: "50%", transform: "translateX(-50%)" }}
        className={`
          fixed top-10 z-50
          w-[80%] md:w-[86%] lg:w-[74%] xl:w-[65%] max-w-5xl
          flex items-center justify-between
          px-4 py-2.5
          rounded-2xl
          transition-all duration-500
          ${scrolled
            ? "bg-white/97 shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
            : "bg-white/85 shadow-[0_2px_16px_rgba(0,0,0,0.08)]"}
          backdrop-blur-xl
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img
            className="h-9 md:h-11 w-auto object-contain"
            src="/images/logo/logo-transp.png"
            alt="K Móveis"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`
                underline-expand px-4 py-2 rounded-xl text-sm font-medium
                transition-colors duration-200
                ${pathname === to
                  ? "text-green-700 font-semibold"
                  : "text-gray-600 hover:text-green-600"}
              `}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://wa.link/75dyp7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              ml-2 px-5 py-2.5 rounded-xl
              bg-gradient-to-r from-green-800 to-green-500
              text-white text-sm font-semibold
              flex items-center gap-2
              shadow-[0_4px_14px_rgba(34,197,94,0.3)]
              hover:shadow-[0_6px_22px_rgba(34,197,94,0.5)]
              hover:scale-105 transition-all duration-300
            "
          >
            <WhatsAppIcon />
            Contato
          </a>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* ── Mobile dropdown (outside header to avoid clip) ── */}
      <div
        className={`
          fixed z-50 lg:hidden
          top-[72px] right-[4%]
          w-64 md:w-72
          rounded-2xl overflow-hidden
          bg-white/97 backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          border border-gray-100
          transition-all duration-300
          ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="p-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${pathname === to
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-green-600"}
                `}
              >
                {label}
              </Link>
            </li>
          ))}

          <li className="mt-1">
            <a
              href="https://wa.link/75dyp7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2.5 px-4 py-3 rounded-xl
                bg-gradient-to-r from-green-800 to-green-500
                text-white text-sm font-semibold
                hover:opacity-90 transition-opacity duration-200
              "
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
