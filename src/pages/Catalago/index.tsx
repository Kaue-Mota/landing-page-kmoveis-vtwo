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
    <section className="pt-60 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Escolha o acabamento ideal
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trabalhamos com diversas cores e texturas de MDF para combinar
          perfeitamente com seu ambiente.
        </p>

        <div
          ref={galleryRef}
          className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {textures.map((texture) => (
            <div
              key={texture.name}
              className="scroll-item bg-white  rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group cursor-pointer"
            >
              <div className=" aspect-square overflow-hidden">
                <img
                  src={texture.imageURL}
                  alt={texture.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-4 text-center">
                <p className="font-medium text-gray-800 text-sm md:text-base">
                  {texture.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
