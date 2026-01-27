import "../../styles/global.css";

export const Header = () => {
  return (
    <header className="shadow-md flex z-100 text-white justify-between flex-row fixed bg-[rgba(71,133,31,0.1)] px-5 py-1 top-30 left-[50%] translate-[-50%] w-[70%] md:w-[60%] lg:w-[85%] max-w-8xl rounded-3xl backdrop-blur-md text-2xl items-center">
      <a href="#">
        <img
          className="w-full h-10 md:h-20 object-cover drop-shadow-md scale-110"
          src="/images/logo/logo-transp.png"
          alt=""
        />
      </a>

      <input
        type="checkbox"
        className="menu-toggle w-10 hidden"
        id="menu-toggle"
      />
      <label htmlFor="menu-toggle" className="lg:hidden">
        <img className="w-7 brightness-0 drop-shadow-md invert cursor-pointer" src="/images/icon/hamb.svg" alt="menu mobile" />
      </label>

      <nav className="lg:hidden bg-[rgba(255,255,255,1)] text-black rounded-2xl z-101 fixed top-22 right-[-130%] transition-right duration-300 items-start p-5 nav-slide backdrop-blur-lg  ">
        <ul className="flex flex-col justify-between gap-1 drop-shadow-md">
          <li className="p-2 mt-5 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <a href="" className="underline-expand">
              Sobre
            </a>
          </li>
          <li className="p-2 mt-5 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <a href="" className="underline-expand">
              Mostruário
            </a>
          </li>
          <li className="p-2 mt-5 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <a href="" className="underline-expand">
              Projetos
            </a>
          </li>
          <li className="mr-5 mt-5 bg-[#2E7D32] p-2 rounded-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200">
            <a href="" className="text-white">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <nav className=" text-white hidden lg:inline-block">
        <ul className="flex text-center justify-between gap-1 drop-shadow-md">
          <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <a href="" className="underline-expand">
              Sobre
            </a>
          </li>
          <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <a href="" className="underline-expand">
              Mostruário
            </a>
          </li>
          <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
            <a href="" className="underline-expand">
              Projetos
            </a>
          </li>
          <li className="mr-5  bg-[#2E7D32] p-2 rounded-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200">
            <a href="" className="text-white">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
