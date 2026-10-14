"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RatingStars } from "../atoms/RatingStars";

export interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  badge?: string;
  reviewsCount?: string | number;
  imageSrc?: string;
  imageAlt?: string;
  isFavorite?: boolean;
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  badge = "Stevlnotel",
  reviewsCount = "300",
  imageSrc,
  imageAlt,
  isFavorite: initialFavorite = false,
  onAddToCart,
  onToggleFavorite,
  className = "",
}) => {
  const [favorite, setFavorite] = useState(initialFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite((prev) => !prev);
    onToggleFavorite?.();
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.();
  };

  return (
    <article
      className={`group relative flex flex-col justify-between w-[140px] sm:w-[145px] md:w-[155px] h-[142px] sm:h-[140px] p-2 bg-white rounded-lg shadow-card-soft hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 select-none ${className}`}
    >
      {/* Botón de favorito superior izquierdo */}
      <button
        type="button"
        onClick={handleFavoriteClick}
        aria-label="Agregar a favoritos"
        className="absolute top-2 left-2 z-10 w-[12px] h-[12px] flex items-center justify-center text-brand-primary hover:scale-125 transition-transform cursor-pointer"
      >
        <span className="text-[10px] leading-none">
          {favorite ? "❤️" : "🤍"}
        </span>
      </button>

      {/* Imagen / Miniatura del pastel */}
      <div className="relative w-full h-[54px] flex items-center justify-center my-0.5">
        {imageSrc ? (
          <div className="relative w-[58px] h-[52px] rounded-t-full rounded-b-2xl overflow-hidden drop-shadow-sm">
            <Image
              src={imageSrc}
              alt={imageAlt || name}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        ) : (
          <div
            className="w-[58px] h-[52px] rounded-t-full rounded-b-2xl shadow-inner flex items-center justify-center text-xs"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, #8a4a2a, #3a1a10)",
            }}
          >
            <span className="text-sm drop-shadow">🧁</span>
          </div>
        )}
      </div>

      {/* Nombre del pastel */}
      <h3 className="font-body font-extrabold text-[10.5px] leading-[12px] text-brand-primary line-clamp-2 min-h-[24px]">
        {name}
      </h3>

      {/* Precios, valoración y botón de agregar */}
      <div className="relative pt-0.5 flex flex-col gap-0.5">
        <div className="flex items-center gap-1">
          <span className="font-body font-extrabold text-[10px] text-brand-primary">
            {price}
          </span>
          <span className="text-brand-gold text-[7px] tracking-tight">★★</span>
          {badge && (
            <span className="text-[7px] text-[#888] font-normal truncate max-w-[45px]">
              {badge}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <RatingStars stars={5} reviewsCount={reviewsCount} size="xs" />

          {/* Botón de adición circular rojo */}
          <button
            type="button"
            onClick={handleAddClick}
            aria-label={`Comprar ${name}`}
            className="w-[13px] h-[13px] rounded-full bg-brand-primary text-white flex items-center justify-center text-[8px] hover:bg-brand-primary-hover active:scale-90 transition-all cursor-pointer shadow-xs"
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </article>
  );
};
