interface ReviewCardProps {
  image: string;
  text: string;
  stars: number;
  name?: string;
}

export const ReviewCard = ({ image, text, stars, name }: ReviewCardProps) => {
  const renderStars = (count: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={
              i < count ? "text-yellow-400 text-lg" : "text-gray-300 text-lg"
            }
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[rgba(80,80,80,0)] rounded-4xl shadow-lg p-6 w-80  hover:scale-105 transition-transform duration-300 backdrop-blur-lg ">
      {/* Foto do cliente */}
      
      <img
        src={image}
        alt={name || "Cliente"}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-white"
      />

      {/* Nome do cliente (opcional) */}
      {name && (
        <p className="text-center font-semibold text-neutral-600 "> {name}</p>
      )}

      
    

      {/* Texto da avaliação */}
      <p className="text-neutral-600 drop-shadow-md text-center mb-4 italic pb-5 border-b">"{text}"</p>

      {/* Estrelas */}
      <div className="flex justify-center mb-4">{renderStars(stars)}</div>

      
    </div>
  );
};
