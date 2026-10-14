"use client";

import React from "react";
import { ProductCard } from "../molecules/ProductCard";
import { Button } from "../atoms/Button";
import { useI18n } from "@/src/i18n";
import { ASSETS } from "@/src/constants/assets";

export interface BestsellersSectionProps {
  onViewAll?: () => void;
  onAddToCart?: (productId: string) => void;
  className?: string;
}

export const BestsellersSection: React.FC<BestsellersSectionProps> = ({
  onViewAll,
  onAddToCart,
  className = "",
}) => {
  const { t } = useI18n();

  const products = [
    {
      id: "product-1",
      name: t("bestsellers.items.item1.name"),
      price: t("bestsellers.items.item1.price"),
      badge: t("bestsellers.items.item1.badge"),
      reviewsCount: t("bestsellers.items.item1.reviewsCount"),
      imageSrc: ASSETS.products.product1,
    },
    {
      id: "product-2",
      name: t("bestsellers.items.item2.name"),
      price: t("bestsellers.items.item2.price"),
      badge: t("bestsellers.items.item2.badge"),
      reviewsCount: t("bestsellers.items.item2.reviewsCount"),
      imageSrc: ASSETS.products.product2,
    },
    {
      id: "product-3",
      name: t("bestsellers.items.item3.name"),
      price: t("bestsellers.items.item3.price"),
      badge: t("bestsellers.items.item3.badge"),
      reviewsCount: t("bestsellers.items.item3.reviewsCount"),
      imageSrc: ASSETS.products.product3,
    },
    {
      id: "product-4",
      name: t("bestsellers.items.item4.name"),
      price: t("bestsellers.items.item4.price"),
      badge: t("bestsellers.items.item4.badge"),
      reviewsCount: t("bestsellers.items.item4.reviewsCount"),
      imageSrc: ASSETS.products.product4,
    },
  ];

  return (
    <section
      aria-labelledby="bestsellers-heading"
      className={`relative w-full py-4 px-4 sm:px-6 md:px-8 select-none ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Título de la sección */}
        <h2
          id="bestsellers-heading"
          className="font-heading font-extrabold text-base sm:text-lg md:text-[16px] text-brand-primary mb-3"
        >
          {t("bestsellers.title")}
        </h2>

        {/* Grilla responsiva de 4 tarjetas de producto */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              badge={product.badge}
              reviewsCount={product.reviewsCount}
              imageSrc={product.imageSrc}
              onAddToCart={() => onAddToCart?.(product.id)}
            />
          ))}
        </div>

        {/* Botón VIEW ALL al pie a la derecha */}
        <div className="mt-3.5 self-end">
          <Button
            size="xs"
            variant="primary"
            onClick={onViewAll}
            className="w-[75px] h-[23px] text-[11px] font-extrabold rounded-xl shadow-xs"
          >
            {t("common.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
};
