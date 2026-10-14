"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { SearchBar } from "../molecules/SearchBar";
import { NavLinks } from "../molecules/NavLinks";
import { LanguageSelector } from "../molecules/LanguageSelector";
import { useI18n } from "@/src/i18n";

export interface HeaderProps {
  onOrderNow?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOrderNow, className = "" }) => {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`relative w-full bg-brand-subnav border-b border-brand-subnav-border rounded-t-xl sm:rounded-t-2xl z-20 ${className}`}
    >
      {/* Barra superior: Logo, Buscador, Carrito/Grid, Login/Signup, Idioma */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 pt-3 pb-2 gap-2 sm:gap-4">
        {/* Logotipo */}
        <div className="flex items-center gap-3">
          <Logo size="md" />
        </div>

        {/* Zona derecha superior */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Barra de búsqueda */}
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          {/* Selector de idioma */}
          <LanguageSelector />

          {/* Icono de cuadrícula / carrito */}
          <button
            type="button"
            aria-label={t("common.cartButtonAria")}
            className="w-[24px] h-[24px] flex items-center justify-center text-brand-primary text-sm hover:opacity-80 transition-opacity cursor-pointer"
          >
            ▦
          </button>

          {/* Enlace Login / Signup */}
          <Link
            href="#login"
            className="hidden sm:inline-block font-body font-semibold text-[10px] md:text-[11px] text-brand-primary hover:underline whitespace-nowrap"
          >
            {t("common.loginSignup")}
          </Link>

          {/* Botón hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Menú móvil"
            className="sm:hidden p-1 text-brand-primary text-base"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Buscador visible en móvil cuando esté colapsado */}
      <div className="sm:hidden px-4 pb-2">
        <SearchBar />
      </div>

      {/* Barra de navegación secundaria (Categorías y ORDER NOW) */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-1.5 border-t border-brand-subnav-border/50 gap-2">
        {/* Enlaces de categorías */}
        <div className="flex-1 overflow-hidden">
          <NavLinks />
        </div>

        {/* Botón ORDER NOW */}
        <div className="flex-shrink-0 ml-2">
          <Button
            size="sm"
            variant="primary"
            onClick={onOrderNow}
            className="h-[24px] px-3.5 text-[11px] font-extrabold shadow-sm"
          >
            {t("common.orderNow")}
          </Button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 py-3 bg-brand-subnav border-t border-brand-subnav-border flex flex-col gap-2">
          <Link
            href="#login"
            onClick={() => setMobileMenuOpen(false)}
            className="font-body font-bold text-xs text-brand-primary py-1"
          >
            {t("common.loginSignup")}
          </Link>
        </div>
      )}
    </header>
  );
};
