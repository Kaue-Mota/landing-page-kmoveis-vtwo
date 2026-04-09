import { useEffect, useState } from "react";
import { useScrollAnimationChildrenCatalago } from "../../hooks/useScrollAnimation";

type Project = {
  imageUrl: string;
  id: number;
  category: string;
};

const CATEGORIES = ["Todos", "Quarto", "Cozinha", "Banheiro", "Sala"];

export const Projetos = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxClosing, setLightboxClosing] = useState(false);

  const galleryRef = useScrollAnimationChildrenCatalago(
    projects.filter((p) =>
      activeCategory === "Todos" ? true : p.category === activeCategory,
    ),
  );

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (url: string) => {
    setSelectedImage(url);
    setLightboxClosing(false);
  };

  const closeLightbox = () => {
    setLightboxClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setLightboxClosing(false);
    }, 250);
  };

  return (
    <section className="min-h-screen bg-[#f9f7f4]">

      {/* ── Dark banner header ── */}
      <div className="relative bg-[#0b1a0d] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1a0d]" />
        <div className="relative flex flex-col items-center justify-center pt-28 pb-12 px-6 text-center">
          <span className="badge-green mb-4">Portfólio</span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Nossos Projetos
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12">

        {/* ── Category filter pills ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cat-pill ${
                activeCategory === cat ? "cat-pill-active" : "cat-pill-inactive"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count indicator */}
        <p className="text-center text-gray-400 text-sm mb-10 font-medium">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "projeto encontrado" : "projetos encontrados"}
        </p>

        {/* ── Masonry grid ── */}
        <div
          ref={galleryRef}
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="scroll-item break-inside-avoid overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer group relative"
              style={{ "--delay": `${(i % 8) * 0.04}s` } as React.CSSProperties}
              onClick={() => openLightbox(project.imageUrl)}
            >
              <img
                src={project.imageUrl}
                alt={project.category}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-4xl font-thin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ⊕
                </span>
              </div>
              {/* Category badge on hover */}
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="badge-green text-[10px]">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {selectedImage && (
        <div
          className={`
            fixed inset-0 z-50 flex items-center justify-center
            transition-all duration-300
            ${lightboxClosing
              ? "bg-black/0 backdrop-blur-none"
              : "bg-black/88 backdrop-blur-md"
            }
          `}
          onClick={closeLightbox}
        >
          <img
            src={selectedImage}
            className={`
              max-h-[88vh] max-w-[88vw] rounded-2xl shadow-2xl object-contain
              transition-all duration-300
              ${lightboxClosing
                ? "scale-90 opacity-0"
                : "scale-100 opacity-100 lightbox-img-enter"
              }
            `}
            onClick={(e) => e.stopPropagation()}
            alt="Projeto ampliado"
          />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="
              absolute top-5 right-5
              w-10 h-10 rounded-full
              bg-white/15 hover:bg-white/30 backdrop-blur-sm
              text-white flex items-center justify-center
              text-lg transition-all duration-200 hover:scale-110
            "
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};
