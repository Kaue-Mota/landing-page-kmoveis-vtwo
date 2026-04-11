import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.link/75dyp7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 overflow-hidden
                   bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full shadow-[0_8px_28px_rgba(22,163,74,0.45)]
                   transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                   hover:shadow-[0_12px_36px_rgba(22,163,74,0.6)] hover:scale-105
                   px-4 py-3"
      >
        <img
          src="/images/icon/whatsappicon.png"
          alt=""
          className="w-6 h-6 shrink-0"
        />
        <span
          className="text-sm font-semibold whitespace-nowrap max-w-0 group-hover:max-w-30
                     overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        >
          Orçamento grátis
        </span>
      </a>
    </>
  );
};
