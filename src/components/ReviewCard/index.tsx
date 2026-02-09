import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface ReviewCardProps {
  text: string;
  stars: number;
  name?: string;
  avatar?: string;
}

export const ReviewCard = ({ text, stars, name, avatar }: ReviewCardProps) => {
  const cardRef = useScrollAnimation();

  const renderStars = (count: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < count ? "text-bl text-lg" : "text-gray-300 text-lg"}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={cardRef}
      className="scroll-item w-150 min-h-100 max-h-70 bg-[rgba(80,80,80,0)] border-b  p-6 w- hover:scale-105 transition-transform duration-300 backdrop-blur-lg  flex flex-col items-start"
    >
      <div className="flex justify-center items-center gap-5">
      {/* Avatar */}
      {avatar && (
        <img
          src={avatar}
          alt={name || "Cliente"}
          className="w-14 h-14 rounded-full object-cover mb-3 border-2 border-white shadow-md"
        />
      )}

      {/* Nome do cliente (opcional) */}
      {name && (
        <p className="text-center font-semibold text-neutral-600 "> {name}</p>
      )}
      </div>

      {/* Estrelas */}
      <div className="flex justify-center mb-4">{renderStars(stars)}</div>

      {/* Texto da avaliação */}
      <p className="text-neutral-600 drop-shadow-md  pb-5 text-start ">
        "{text}"
      </p>
    </div>
  );
};
