"use client";

import React, { useState } from "react";
import { CategoryCard } from "../molecules/CategoryCard";
import { useI18n } from "@/src/i18n";

export interface MenuSectionProps {
  onSelectCategory?: (categoryId: string) => void;
  className?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectCategory,
  className = "",
}) => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>("classic");

  const categories = [
    {
      id: "classic",
      name: t("menu.categories.classic"),
      icon: (
        <span aria-hidden="true" className="text-xl">
          🎂
        </span>
      ),
    },
    {
      id: "gourmet",
      name: t("menu.categories.gourmet"),
      icon: (
        <span aria-hidden="true" className="text-xl">
          👨‍🍳
        </span>
      ),
    },
    {
      id: "desserts",
      name: t("menu.categories.desserts"),
      icon: (
        <span aria-hidden="true" className="text-xl">
          🍰
        </span>
      ),
    },
    {
      id: "cookies",
      name: t("menu.categories.cookies"),
      icon: (
        <span aria-hidden="true" className="text-xl">
          🍪
        </span>
      ),
    },
  ];

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    onSelectCategory?.(id);
  };

  return (
    <section
      aria-labelledby="menu-heading"
      className={`relative w-full py-5 px-4 sm:px-6 md:px-8 select-none ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-6xl mx-auto">
        {/* Cabecera del menú: Título, subtítulo e indicadores circulares */}
        <div className="flex flex-col items-start">
          <h2
            id="menu-heading"
            className="font-heading font-extrabold text-2xl sm:text-[25px] leading-tight text-brand-primary"
          >
            {t("menu.title")}
          </h2>
          <p className="font-body font-bold text-xs sm:text-[12px] text-brand-primary mt-0.5">
            {t("menu.subtitle")}
          </p>

          {/* 3 Insignias circulares decorativas */}
          <div className="flex items-center gap-2 mt-2">
            <div className="w-[28px] h-[28px] rounded-full bg-brand-badge flex items-center justify-center text-brand-primary text-xs shadow-xs">
              🧁
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-brand-badge flex items-center justify-center text-brand-primary text-xs shadow-xs">
              ❤️
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-brand-badge flex items-center justify-center text-brand-primary text-xs shadow-xs">
              🎁
            </div>
          </div>
        </div>

        {/* 4 Tarjetas de categoría */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 self-center md:self-auto">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              icon={cat.icon}
              isActive={activeCategory === cat.id}
              onClick={() => handleCategoryClick(cat.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
