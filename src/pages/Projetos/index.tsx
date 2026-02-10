import { useEffect, useState } from "react";
import { useScrollAnimationChildrenCatalago } from "../../hooks/useScrollAnimation";

type Project = {
  imageUrl: string;
  id: number;
  category: string;
};

export const Projetos = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryRef = useScrollAnimationChildrenCatalago(projects);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={galleryRef} className="min-h-screen pb-20 my-40">
      {/* BOTÕES DE CATEGORIA */}
      <h1 className="text-center font-extrabold text-5xl">FILTRAR</h1>

      <div className="flex  gap-3 lg:gap-5 flex-wrap justify-center items-center  px-1  w-full h-100">
        <button
          onClick={() => setActiveCategory("Todos")}
          className="hidden xl:flex hover:scale-101 underline-expand transition-transform duration-300 cursor-pointer backdrop-blur-sm p-5  justify-center items-center  
        w-(--card-project-width) h-(--card-project-height)
        sm:w-(--sm-card-project-width) sm:h-(--sm-card-project-height)
        md:w-(--md-card-project-width) md:h-(--md-card-project-height)
        lg:w-(--lg-card-project-width) lg:h-(--lg-card-project-height)
        xl:w-(--xl-card-project-width) xl:h-(--xl-card-project-height)  rounded-[20px] bg-[linear-gradient(-90deg,transparent_0%,rgba(75,185,247,.3)_100%),url('/images/buttons-bg/quarto.png')] bg-cover bg-right bg-100% "
        >
          <span className="bg-[rgba(255,255,255,0.02)] overflow-hidden  w-full h-full absolute  backdrop-blur-[2px] hover:backdrop-blur-[0px]  transition-[backdrop-filter] duration-200 ease-in-out rounded-[20px]"></span>
          <span className="text-white h-10 flex items-center justify-center w-20 lg:w-40 lg:h-20 lg:text-2xl bg-[rgba(200,200,200,.1)] backdrop-blur-sm border-2 p-1 rounded-[20px]">
            Todos
          </span>
        </button>

        <button
          onClick={() => setActiveCategory("Quarto")}
          className="hover:scale-101 underline-expand transition-transform duration-300 cursor-pointer backdrop-blur-sm p-5 flex justify-center items-center  
        w-(--card-project-width) h-(--card-project-height)
        sm:w-(--sm-card-project-width) sm:h-(--sm-card-project-height)
        md:w-(--md-card-project-width) md:h-(--md-card-project-height)
        lg:w-(--lg-card-project-width) lg:h-(--lg-card-project-height)
        xl:w-(--xl-card-project-width) xl:h-(--xl-card-project-height)  rounded-[20px] bg-[linear-gradient(-90deg,transparent_0%,rgba(75,185,247,.3)_100%),url('/images/buttons-bg/quarto.png')] bg-cover bg-right bg-100% "
        >
          <span className="bg-[rgba(255,255,255,0.02)] overflow-hidden  w-full h-full absolute  backdrop-blur-[2px] hover:backdrop-blur-[0px]  transition-[backdrop-filter] duration-200 ease-in-out rounded-[20px]"></span>
          <span className="text-white h-10 flex items-center justify-center w-20 lg:w-40 lg:h-20 lg:text-2xl bg-[rgba(200,200,200,.1)] backdrop-blur-sm border-2 p-1 rounded-[20px]">
            Quarto
          </span>
        </button>

        <button
          onClick={() => setActiveCategory("Cozinha")}
          className="hover:scale-101 underline-expand transition-transform duration-300 cursor-pointer backdrop-blur-sm p-5 flex justify-center items-center  
        w-(--card-project-width) h-(--card-project-height)
        sm:w-(--sm-card-project-width) sm:h-(--sm-card-project-height)
        md:w-(--md-card-project-width) md:h-(--md-card-project-height)
        lg:w-(--lg-card-project-width) lg:h-(--lg-card-project-height)
        xl:w-(--xl-card-project-width) xl:h-(--xl-card-project-height)  rounded-[20px] bg-[linear-gradient(-90deg,transparent_0%,rgba(34,197,94,.3)_100%),url('/images/buttons-bg/cozinha.png')] bg-cover bg-center bg-100% "
        >
          <span className="bg-[rgba(255,255,255,0.02)] overflow-hidden  w-full h-full absolute  backdrop-blur-[2px] hover:backdrop-blur-[0px]  transition-[backdrop-filter] duration-200 ease-in-out rounded-[20px]"></span>
          <span className="text-white h-10 flex items-center justify-center w-20 lg:w-40 lg:h-20 lg:text-2xl bg-[rgba(200,200,200,.1)] backdrop-blur-sm border-2 p-1 rounded-[20px]">
            Cozinha
          </span>
        </button>

        <button
          onClick={() => setActiveCategory("Banheiro")}
          className="hover:scale-101 underline-expand transition-transform duration-300 cursor-pointer backdrop-blur-sm p-5 flex justify-center items-center  
        w-(--card-project-width) h-(--card-project-height)
        sm:w-(--sm-card-project-width) sm:h-(--sm-card-project-height)
        md:w-(--md-card-project-width) md:h-(--md-card-project-height)
        lg:w-(--lg-card-project-width) lg:h-(--lg-card-project-height)
        xl:w-(--xl-card-project-width) xl:h-(--xl-card-project-height)  rounded-[20px] bg-[linear-gradient(-90deg,transparent_0%,rgba(30,69,247,0.3)_100%),url('/images/buttons-bg/banheiro.png')] bg-cover bg-right bg-100% "
        >
          <span className="bg-[rgba(255,255,255,0.02)] overflow-hidden  w-full h-full absolute  backdrop-blur-[2px] hover:backdrop-blur-[0px]  transition-[backdrop-filter] duration-200 ease-in-out rounded-[20px]"></span>
          <span className="text-white h-10 flex items-center justify-center w-20 lg:w-40 lg:h-20 lg:text-2xl bg-[rgba(200,200,200,.1)] backdrop-blur-sm border-2 p-1 rounded-[20px]">
            Banheiro
          </span>
        </button>

        <button
          onClick={() => setActiveCategory("Sala")}
          className="hover:scale-101 underline-expand transition-transform duration-300 cursor-pointer backdrop-blur-sm p-5 flex justify-center items-center  
        w-(--card-project-width) h-(--card-project-height)
        sm:w-(--sm-card-project-width) sm:h-(--sm-card-project-height)
        md:w-(--md-card-project-width) md:h-(--md-card-project-height)
        lg:w-(--lg-card-project-width) lg:h-(--lg-card-project-height)
        xl:w-(--xl-card-project-width) xl:h-(--xl-card-project-height)  rounded-[20px] bg-[linear-gradient(-90deg,transparent_0%,rgba(253,122,0,0.3)_100%),url('/images/buttons-bg/sala.png')] bg-cover bg-left bg-100% "
        >
          <span className="bg-[rgba(255,255,255,0.02)] overflow-hidden  w-full h-full absolute  backdrop-blur-[2px] hover:backdrop-blur-[0px]  transition-[backdrop-filter] duration-200 ease-in-out rounded-[20px]"></span>
          <span className="text-white h-10 flex items-center justify-center w-20 lg:w-40 lg:h-20 lg:text-2xl bg-[rgba(200,200,200,.1)] backdrop-blur-sm border-2 p-1 rounded-[20px]">
            Sala
          </span>
        </button>
      </div>

      {/* GRID ESTILO GOOGLE IMAGENS */}
      <h1 className="text-center font-extrabold text-5xl">GALERIA</h1>

      <div className="columns-2 md:px-20 px-5 py-10 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="break-inside-avoid overflow-hidden rounded-xl shadow-md active:max-w-100 hover:shadow-xl transition"
          >
            <img
              src={project.imageUrl}
              alt={project.category}
              className="w-full h-auto object-cover"
              loading="lazy"
              onClick={() => setSelectedImage(project.imageUrl)}
            />
          </div>
        ))}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-105"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl
                 transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
