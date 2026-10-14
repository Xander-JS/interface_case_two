"use client";

import React from "react";
import { useI18n } from "@/src/i18n";

export interface TrustBannerProps {
  className?: string;
}

export const TrustBanner: React.FC<TrustBannerProps> = ({ className = "" }) => {
  const { t } = useI18n();

  return (
    <section
      aria-label="Certificación oficial y confianza"
      className={`relative w-full px-4 sm:px-6 md:px-8 py-3 select-none ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="w-full min-h-[50px] sm:min-h-[54px] px-4 py-3 bg-brand-primary rounded-lg flex items-center justify-center text-center shadow-md border border-brand-primary-hover">
          <p className="font-heading font-extrabold text-sm sm:text-base md:text-[17px] text-white tracking-wide leading-tight">
            {t("trustBanner.text")}
          </p>
        </div>
      </div>
    </section>
  );
};
