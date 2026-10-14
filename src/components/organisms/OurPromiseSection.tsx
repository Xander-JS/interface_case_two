"use client";

import React from "react";
import Image from "next/image";
import { StatBadge } from "../molecules/StatBadge";
import { MagicTicketCard } from "../molecules/MagicTicketCard";
import { SocialProofBar } from "../molecules/SocialProofBar";
import { useI18n } from "@/src/i18n";
import { ASSETS } from "@/src/constants/assets";

export interface OurPromiseSectionProps {
  onUnlockTicket?: () => void;
  className?: string;
}

export const OurPromiseSection: React.FC<OurPromiseSectionProps> = ({
  onUnlockTicket,
  className = "",
}) => {
  const { t } = useI18n();

  const stats = [
    {
      id: "stat-delivery",
      label: t("promise.stats.onTimeDelivery").replace(" ", "\n"),
      icon: "🚚",
    },
    {
      id: "stat-designs",
      label: t("promise.stats.designs").replace(" ", "\n"),
      icon: "🎂",
    },
    {
      id: "stat-orders",
      label: t("promise.stats.orders").replace(" ", "\n"),
      icon: "📦",
    },
    {
      id: "stat-fresh",
      label: t("promise.stats.bakedFresh").replace(" ", "\n"),
      icon: "🥐",
    },
  ];

  // 6 Momentos fotográficos de la cuadrícula derecha
  const moments = [
    {
      id: 1,
      src: ASSETS.moments[0],
      fallbackBg: "radial-gradient(circle at 50% 60%, #f1e2d0 0, #f1e2d0 22%, #9a3a52 55%, #2a1a1a 140%)",
      emoji: "🎂",
    },
    {
      id: 2,
      src: ASSETS.moments[1],
      fallbackBg: "radial-gradient(circle at 50% 60%, #f1e2d0 0, #f1e2d0 22%, #d9c8b8 55%, #2a1a1a 140%)",
      emoji: "👩‍🍳",
    },
    {
      id: 3,
      src: ASSETS.moments[2],
      fallbackBg: "radial-gradient(circle at 50% 60%, #f1e2d0 0, #f1e2d0 22%, #5a4a42 55%, #2a1a1a 140%)",
      emoji: "🎉",
    },
    {
      id: 4,
      src: ASSETS.moments[3],
      fallbackBg: "radial-gradient(circle at 50% 60%, #f1e2d0 0, #f1e2d0 22%, #7a8aa0 55%, #2a1a1a 140%)",
      emoji: "👨‍🍳",
    },
    {
      id: 5,
      src: ASSETS.moments[4],
      fallbackBg: "radial-gradient(circle at 50% 60%, #f1e2d0 0, #f1e2d0 22%, #8a7a6a 55%, #2a1a1a 140%)",
      emoji: "🍰",
    },
    {
      id: 6,
      src: ASSETS.moments[5],
      fallbackBg: "radial-gradient(circle at 50% 60%, #f1e2d0 0, #f1e2d0 22%, #a05a50 55%, #2a1a1a 140%)",
      emoji: "🧁",
    },
  ];

  return (
    <section
      aria-labelledby="promise-heading"
      className={`relative w-full py-5 px-4 sm:px-6 md:px-8 select-none ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Encabezado y lema de la promesa */}
        <div className="flex flex-col items-start mb-4">
          <h2
            id="promise-heading"
            className="font-heading font-extrabold text-2xl sm:text-[25px] leading-tight text-brand-primary"
          >
            {t("promise.title")}
          </h2>
          <p className="font-body font-bold text-xs sm:text-[12px] text-brand-primary mt-0.5">
            {t("promise.subtitle")}
          </p>
        </div>

        {/* Contenido en dos columnas: Métricas/Tarjetas (Izquierda) y Galería de momentos (Derecha) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* Columna Izquierda: 3 Bloques apilados */}
          <div className="flex flex-col gap-3">
            {/* Bloque 1: Métricas de entrega y calidad */}
            <div className="p-3.5 bg-brand-promise rounded-lg border border-brand-primary/10 shadow-xs">
              <h3 className="font-body font-extrabold text-xs sm:text-[11.5px] text-brand-primary mb-3">
                {t("promise.statsHeading")}
              </h3>
              <div className="grid grid-cols-4 gap-2 justify-items-center">
                {stats.map((st) => (
                  <StatBadge key={st.id} icon={st.icon} label={st.label} />
                ))}
              </div>
            </div>

            {/* Bloque 2: Boleto Mágico */}
            <MagicTicketCard onUnlock={onUnlockTicket} />

            {/* Bloque 3: Barra Social */}
            <SocialProofBar />
          </div>

          {/* Columna Derecha: Grilla 2x3 de momentos de celebración */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {moments.map((m) => (
              <div
                key={m.id}
                className="relative w-full h-[105px] sm:h-[112px] rounded-lg overflow-hidden shadow-xs border border-white/60 transition-transform hover:scale-[1.02] flex items-center justify-center"
                style={{ background: m.fallbackBg }}
              >
                <Image
                  src={m.src}
                  alt={t("promise.social.socialPhotoAlt")}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="text-2xl drop-shadow select-none">{m.emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
