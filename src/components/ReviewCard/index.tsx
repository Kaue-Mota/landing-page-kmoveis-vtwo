import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface ReviewCardProps {
  text: string;
  stars: number;
  name?: string;
  avatar?: string;
}

export const ReviewCard = ({ text, stars, name, avatar }: ReviewCardProps) => {
  const cardRef = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className="
        scroll-item card-lift
        bg-white rounded-3xl p-6
        shadow-[0_4px_28px_rgba(0,0,0,0.07)]
        border border-gray-100
        flex flex-col gap-4
        relative overflow-hidden
      "
    >
      {/* Decorative large quote mark */}
      <div
        className="absolute -top-2 right-4 text-8xl text-green-100 font-black leading-none select-none pointer-events-none"
        aria-hidden
      >
        "
      </div>

      {/* Star rating */}
      <div className="flex gap-0.5 z-10">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < stars ? "text-yellow-400" : "text-gray-200"}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 z-10">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100 z-10">
        {avatar && (
          <img
            src={avatar}
            alt={name || "Cliente"}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-green-100 flex-shrink-0"
          />
        )}
        {name && (
          <div>
            <p className="font-semibold text-gray-800 text-sm leading-tight">
              {name}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">Cliente verificado ✓</p>
          </div>
        )}
      </div>
    </div>
  );
};
