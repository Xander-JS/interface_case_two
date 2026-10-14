"use client";

import React from "react";
import { useI18n, LOCALES, LOCALE_LABELS, Locale } from "@/src/i18n";

export interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = "" }) => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className={`inline-flex items-center gap-1 select-none ${className}`}>
      <span aria-hidden="true" className="text-[10px] opacity-75">
        🌐
      </span>
      <div className="flex items-center border border-brand-primary/30 rounded-full p-0.5 bg-white/60">
        {LOCALES.map((loc) => {
          const isSelected = locale === loc;
          return (
            <button
              key={loc}
              type="button"
              onClick={() => setLocale(loc as Locale)}
              aria-label={`${t("common.switchLanguage")}: ${LOCALE_LABELS[loc as Locale]}`}
              className={`px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase transition-all cursor-pointer ${
                isSelected
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-brand-primary hover:text-brand-dark"
              }`}
            >
              {loc}
            </button>
          );
        })}
      </div>
    </div>
  );
};
