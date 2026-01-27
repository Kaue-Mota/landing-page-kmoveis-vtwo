
export const Header= () =>{


    return(
        <header className="shadow-md flex z-100 text-white justify-between flex-row fixed bg-[rgba(71,133,31,0.1)] px-5 py-1 top-30 left-[50%] translate-[-50%] w-[70%] md:w-[60%] lg:w-[85%] max-w-8xl rounded-3xl backdrop-blur-md text-2xl items-center">
        <a href="#">
          <img className="w-full h-20 object-cover drop-shadow-md scale-110" src="/images/logo/logo-transp.png" alt="" />
        
        </a>

         <img className="w-10 lg:hidden inline-block" src="/images/icon/hamburguericon.png" alt="" />

        <nav className="hidden lg:inline-block">
           
          <ul className="flex justify-between gap-10 drop-shadow-md">
            <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
              <a href="" className="underline-expand">Sobre</a>
            </li >
            <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
              <a href="" className="underline-expand">Mostruário</a>
            </li>
            <li className="p-2 hover:text-green-400 transition-colors duration-200 cursor-pointer">
              <a href="" className="underline-expand">Projetos</a>
            </li>
            <li className="mr-5 bg-[#2E7D32] p-2 rounded-2xl cursor-pointer hover:bg-green-700 transition-colors duration-200">
              <a href="" className="text-white">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

    )
}