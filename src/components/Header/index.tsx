import { Link } from "react-router-dom";
import "../../styles/global.css";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed lg:hidden inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <header className="shadow-md flex z-100 justify-between flex-row fixed lg:bg-[rgba(255,255,255,01)]  bg-[#ffffff] px-5 py-1 top-20 lg:top-20 left-[50%] translate-[-50%] w-[80%] md:w-[80%] lg:w-[60%] xl:w-[75%] max-w-8xl rounded-2xl backdrop-blur-lg  items-center lg:text-1xl">
        <Link to="/">
          <img
            className="w-full h-10 md:h-20 object-cover drop-shadow-md scale-110"
            src="/images/logo/logo-transp.png"
            alt=""
          />
        </Link>

        <input
          type="checkbox"
          className="menu-toggle w-10 hidden"
          id="menu-toggle"
        />
        <label
          onClick={() => setMenuOpen(!menuOpen)}
          htmlFor="menu-toggle"
          className="lg:hidden"
        >
          <img
            className="w-7 brightness-100 drop-shadow-md invert cursor-pointer"
            src="/images/icon/hamb.svg"
            alt="menu mobile"
          />
        </label>

        {/*NAV MOBILE*/}
        <nav
          className={`lg:hidden w-60 md:w-130 bg-white text-black rounded-2xl 
  fixed top-9 md:top-19 right-1 z-50
  transition-transform duration-300
  ${menuOpen ? "translate-x-0" : "translate-x-[150%]"}
  p-5 backdrop-blur-lg`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col justify-between items-center gap-1 drop-shadow-md">
            <li className="p-2 mt-5 border-b w-full text-center hover:text-green-400 transition-colors duration-200 ">
              <Link onClick={() => setMenuOpen(false)} className="underline-expand" to="/about">
                Sobre
              </Link>
            </li>
            <li className="p-2 mt-5 border-b w-full text-center hover:text-green-400 transition-colors duration-200 ">
              <Link onClick={() => setMenuOpen(false)} className="underline-expand" to="/projetos">
                Projetos
              </Link>
            </li>
            <li className="p-2 mt-5 border-b w-full text-center hover:text-green-400 transition-colors duration-200 ">
              <Link onClick={() => setMenuOpen(false)} className="underline-expand" to="/catalago">
                Catálogo
              </Link>
            </li>
            <li className="flex   mt-5 w-full bg-[#2E7D32] p-2 rounded-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200 justify-center">
              <a
                href="https://wa.link/75dyp7"
                target="_blank"
                className="text-white"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        {/*NAV DESKTOP*/}
        <nav className=" text-black hidden lg:inline-block">
          <ul className="flex text-center justify-between gap-5 drop-shadow-md ">
            <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
              <Link className="underline-expand" to="/about">
                Sobre
              </Link>
            </li>
            <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
              <Link className="underline-expand" to="/projetos">
                Projetos
              </Link>
            </li>
            <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
              <Link className="underline-expand" to="/catalago">
                Catálogo
              </Link>
            </li>
            <li className="mr-5  bg-[#2E7D32] p-2 rounded-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200">
              <a
                href="https://wa.link/75dyp7"
                target="_blank"
                className="text-white"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
