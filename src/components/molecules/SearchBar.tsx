"use client";

import React, { useState } from "react";
import { Input } from "../atoms/Input";
import { useI18n } from "@/src/i18n";

export interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = "" }) => {
  const { t } = useI18n();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`relative flex items-center ${className}`}
    >
      <div className="relative flex items-center w-full max-w-[155px] sm:max-w-[180px] md:max-w-[210px]">
        {/* Lupa decorativa izquierda */}
        <span
          aria-hidden="true"
          className="absolute left-2.5 text-[#999] pointer-events-none text-[11px]"
        >
          🔍
        </span>
        <Input
          type="search"
          variant="header"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("common.searchPlaceholder")}
          aria-label={t("common.searchButtonAria")}
          className="pl-7 pr-2 w-full text-[10px]"
        />
      </div>
      {/* Botón de búsqueda rojo característico */}
      <button
        type="submit"
        aria-label={t("common.searchButtonAria")}
        className="ml-1 w-[23px] h-[24px] bg-brand-primary text-white rounded-xl flex items-center justify-center text-[10px] hover:bg-brand-primary-hover active:scale-95 transition-all cursor-pointer"
      >
        <span>🔍</span>
      </button>
    </form>
  );
};
