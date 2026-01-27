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
    <div className="bg-[rgba(97,156,91,0.47)] rounded-4xl shadow-lg p-6 w-80  hover:scale-105 transition-transform duration-300 backdrop-blur-lg ">
      {/* Foto do cliente */}
      <img
        src={image}
        alt={name || "Cliente"}
        className="w-10 h-10 rounded-full object-cover mx-auto mb-4 border-2 border-green-500"
      />

      {/* Nome do cliente (opcional) */}
      {name && (
        <p className="text-center font-semibold text-white"> {name}</p>
      )}

      {/* Estrelas */}
      <div className="flex justify-center mb-4">{renderStars(stars)}</div>

      {/* Texto da avaliação */}
      <p className="text-white drop-shadow-md text-center mb-4 italic">"{text}"</p>

      
    </div>
  );
};
