import { useEffect, useState } from "react";
import { useScrollAnimationChildrenCatalago } from "../../hooks/useScrollAnimation";

type Texture = {
  name: string;
  imageURL: string;
};

export const Catalago = () => {
  const [textures, setTextures] = useState<Texture[]>([]);
  const galleryRef = useScrollAnimationChildrenCatalago(textures);

  useEffect(() => {
    fetch("/data/textures.json")
      .then((res) => res.json())
      .then((data) => setTextures(data.textures));
  }, []);

  return (
    <section className="min-h-screen bg-[#f9f7f4]">

      {/* ── Dark banner header ── */}
      <div className="relative bg-[#0b1a0d] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1a0d]" />
        <div className="relative flex flex-col items-center justify-center pt-28 pb-12 px-6 text-center">
          <span className="badge-green mb-4">Materiais</span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Catálogo de Acabamentos
          </h1>
          <p className="text-gray-400 text-sm mt-3 max-w-md">
            Diversas cores e texturas de MDF para combinar perfeitamente com seu
            ambiente.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div
          ref={galleryRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          {textures.map((texture) => (
            <div
              key={texture.name}
              className="scroll-item group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Image with zoom on hover */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={texture.imageURL}
                  alt={texture.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Name overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
                <p className="text-white text-xs font-semibold leading-tight">
                  {texture.name}
                </p>
              </div>

              {/* Static name label */}
              <div className="px-3 py-2.5 bg-white border-t border-gray-100">
                <p className="text-gray-700 text-xs font-medium text-center truncate">
                  {texture.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {textures.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div className="w-10 h-10 border-3 border-green-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-400 text-sm">Carregando catálogo...</p>
          </div>
        )}
      </div>
    </section>
  );
};
