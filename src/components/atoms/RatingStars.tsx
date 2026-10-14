import React from "react";

export interface RatingStarsProps {
  /**
   * Total de estrellas activas (por defecto 5)
   */
  stars?: number;
  /**
   * Conteo o texto de reseñas acompañante (opcional)
   */
  reviewsCount?: string | number;
  /**
   * Tamaño visual
   */
  size?: "xs" | "sm";
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  stars = 5,
  reviewsCount,
  size = "xs",
  className = "",
}) => {
  const starString = "★".repeat(Math.max(1, Math.min(5, stars)));
  const textSize = size === "xs" ? "text-[8px]" : "text-[10px]";

  return (
    <div className={`inline-flex items-center gap-1 select-none ${className}`}>
      <span className={`text-brand-gold tracking-widest ${textSize}`}>{starString}</span>
      {reviewsCount !== undefined && (
        <span className="text-[7px] font-semibold text-[#888]">
          {reviewsCount}
        </span>
      )}
    </div>
  );
};
