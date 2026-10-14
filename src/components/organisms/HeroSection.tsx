"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/src/i18n";
import { ASSETS } from "@/src/constants/assets";

export interface HeroSectionProps {
  onClaimOffer?: () => void;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onClaimOffer,
  className = "",
}) => {
  const { t } = useI18n();

  return (
    <section
      aria-label="Promoción principal"
      className={`relative w-full overflow-hidden select-none py-6 sm:py-8 px-4 sm:px-6 md:px-8 ${className}`}
      style={{
        background:
          "linear-gradient(100deg, #e9838c 0%, #c4464f 45%, #a82a33 100%)",
      }}
    >
      {/* Destello sutil de luz en el fondo superior */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[180px] h-[120px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 70% 0%, rgba(255,255,255,0.6), transparent 70%)",
        }}
      />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-6xl mx-auto">
        {/* Columna Izquierda: Pastel principal en marco circular blanco */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-[180px] h-[180px] sm:w-[202px] sm:h-[202px] rounded-full border-[6px] sm:border-[7px] border-white shadow-cake overflow-hidden flex items-center justify-center">
            {/* Si existe imagen de assets la cargamos, sino gradiente con toppings */}
            <div
              className="w-full h-full relative flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, #7a3a22, #2e150d 70%)",
              }}
            >
              <Image
                src={ASSETS.hero.mainCake}
                alt={t("hero.heroCakeAlt")}
                fill
                priority
                className="object-cover transition-transform hover:scale-105 duration-300"
                onError={(e) => {
                  // Fallback visual si el asset físico aún no se copia
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-4xl filter drop-shadow">🎂</span>
            </div>
          </div>
        </div>

        {/* Columna Central: Copys y Oferta */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start z-10 px-2">
          {/* Título de 3 líneas con 'Baloo 2' */}
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[31px] sm:leading-[36px] text-white tracking-[1px] uppercase drop-shadow-xs">
            <span>{t("hero.titleLine1")}</span>
            <br />
            <span>{t("hero.titleLine2")}</span>
            <br />
            <span className="relative inline-block">
              {t("hero.titleLine3")}
              {/* Garabato caligráfico decorativo */}
              <svg
                aria-hidden="true"
                viewBox="0 0 100 20"
                className="absolute -bottom-2 -right-16 w-16 h-5 text-white/80 hidden sm:inline-block"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M 5,10 Q 30,2 60,12 T 95,10" />
              </svg>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-2 font-body font-semibold text-base sm:text-lg md:text-[19px] text-[#fde9e7] tracking-tight">
            {t("hero.subtitle")}
          </p>

          {/* Badge / Botón de oferta especial */}
          <div
            onClick={onClaimOffer}
            role="button"
            tabIndex={0}
            className="mt-3.5 inline-flex flex-col items-center justify-center px-4 py-1.5 bg-brand-dark hover:bg-[#7b1a20] rounded-2xl cursor-pointer shadow-md transition-all active:scale-95 text-white"
          >
            <span className="font-body font-semibold text-[9px] text-white/90 leading-tight">
              {t("hero.specialOffer")}
            </span>
            <span className="font-heading font-extrabold text-base md:text-[18px] leading-tight text-white tracking-wide">
              {t("hero.discount")}
            </span>
          </div>
        </div>

        {/* Columna Derecha: 2 Miniaturas circulares con marco blanco */}
        <div className="flex md:flex-col items-center justify-center gap-3 sm:gap-4 flex-shrink-0">
          {/* Miniatura 1: Volcán de chocolate */}
          <div className="relative w-[75px] h-[75px] sm:w-[91px] sm:h-[91px] rounded-full border-[4px] sm:border-[5px] border-white shadow-cake overflow-hidden flex items-center justify-center">
            <div
              className="w-full h-full relative flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, #7a3a22, #2e150d 70%)",
              }}
            >
              <Image
                src={ASSETS.hero.miniCakeTop}
                alt={t("hero.miniCake1Alt")}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xl">🧁</span>
            </div>
          </div>

          {/* Miniatura 2: Porción de pastel/brownie */}
          <div className="relative w-[75px] h-[75px] sm:w-[91px] sm:h-[91px] rounded-full border-[4px] sm:border-[5px] border-white shadow-cake overflow-hidden flex items-center justify-center">
            <div
              className="w-full h-full relative flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, #7a3a22, #2e150d 70%)",
              }}
            >
              <Image
                src={ASSETS.hero.miniCakeBottom}
                alt={t("hero.miniCake2Alt")}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xl">🍰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
