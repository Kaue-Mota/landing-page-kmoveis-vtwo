import { Link } from "react-router-dom";
import "../../styles/global.css";

export const Header = () => {
  return (
    <header className="shadow-md flex z-100 justify-between flex-row fixed lg:bg-[rgba(255,255,255,01)]  bg-[#ffffff] px-5 py-1 top-20 lg:top-20 left-[50%] translate-[-50%] w-[70%] md:w-[70%] lg:w-[60%] xl:w-[75%] max-w-8xl rounded-3xl backdrop-blur-lg  items-center lg:text-1xl">
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
      <label htmlFor="menu-toggle" className="lg:hidden">
        <img
          className="w-7 brightness-100 drop-shadow-md invert cursor-pointer"
          src="/images/icon/hamb.svg"
          alt="menu mobile"
        />
      </label>

      {/*NAV MOBILE*/}
      <nav className="lg:hidden bg-[rgba(255,255,255,1)] text-black rounded-2xl z-101 fixed top-22 right-[-130%] transition-right duration-300 items-start p-5 nav-slide backdrop-blur-lg  ">
        <ul className="flex flex-col justify-between gap-1 drop-shadow-md">
          <li className="p-2 mt-5 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <Link className="underline-expand" to="/about">
              Sobre
            </Link>
          </li>
          <li className="p-2 mt-5 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <Link className="underline-expand" to="/projetos">
              Projetos
            </Link>
          </li>
          <li className="p-2 mt-5 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <Link className="underline-expand" to="/catalago">
              Catálago
            </Link>
          </li>
          <li className="flex mr-5 mt-5 bg-[#2E7D32] p-2 rounded-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200 justify-center">
            <a href="https://wa.link/75dyp7"
            target="_blank" className="text-white">
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
              Catálago
            </Link>
          </li>
          <li className="mr-5  bg-[#2E7D32] p-2 rounded-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200">
            <a href="https://wa.link/75dyp7"
            target="_blank" className="text-white">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
