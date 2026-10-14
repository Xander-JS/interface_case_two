"use client";

import React from "react";
import { Header } from "../organisms/Header";
import { HeroSection } from "../organisms/HeroSection";
import { MenuSection } from "../organisms/MenuSection";
import { BestsellersSection } from "../organisms/BestsellersSection";
import { OurPromiseSection } from "../organisms/OurPromiseSection";
import { TrustBanner } from "../organisms/TrustBanner";
import { Footer } from "../organisms/Footer";

export interface LandingTemplateProps {
  onOrderNow?: () => void;
  onClaimOffer?: () => void;
  onSelectCategory?: (categoryId: string) => void;
  onViewAll?: () => void;
  onAddToCart?: (productId: string) => void;
  onUnlockTicket?: () => void;
  onNeedHelpClick?: () => void;
  className?: string;
}

export const LandingTemplate: React.FC<LandingTemplateProps> = ({
  onOrderNow,
  onClaimOffer,
  onSelectCategory,
  onViewAll,
  onAddToCart,
  onUnlockTicket,
  onNeedHelpClick,
  className = "",
}) => {
  return (
    <div
      className={`min-h-screen w-full bg-brand-canvas py-0 sm:py-4 md:py-6 flex flex-col items-center justify-center ${className}`}
    >
      {/* Contenedor principal central que reproduce el marco de tarjeta de Caso2.jpg */}
      <div className="w-full max-w-[768px] lg:max-w-[840px] xl:max-w-[920px] bg-brand-card sm:rounded-2xl shadow-xl sm:border border-brand-primary/10 overflow-hidden flex flex-col transition-all">
        {/* 1. Header & Navegación */}
        <Header onOrderNow={onOrderNow} />

        {/* 2. Sección Principal Hero */}
        <HeroSection onClaimOffer={onClaimOffer} />

        {/* 3. Sección de Menú y Categorías */}
        <div className="bg-brand-menu">
          <MenuSection onSelectCategory={onSelectCategory} />

          {/* 4. Sección de Los Más Vendidos (Bestsellers) */}
          <BestsellersSection
            onViewAll={onViewAll}
            onAddToCart={onAddToCart}
          />

          {/* 5. Sección de Nuestra Promesa y Prueba Social */}
          <OurPromiseSection onUnlockTicket={onUnlockTicket} />

          {/* 6. Banner Institucional de Confianza FSSAI */}
          <TrustBanner />
        </div>

        {/* 7. Pie de Página */}
        <Footer onNeedHelpClick={onNeedHelpClick} />
      </div>
    </div>
  );
};
