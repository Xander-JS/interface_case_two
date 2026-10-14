"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/src/i18n";

export interface NavItem {
  id: string;
  labelKey: string;
  href: string;
}

export interface NavLinksProps {
  className?: string;
  activeId?: string;
  onSelect?: (id: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: "cakes", labelKey: "navigation.cakes", href: "#cakes" },
  { id: "theme-cakes", labelKey: "navigation.themeCakes", href: "#theme-cakes" },
  { id: "desserts", labelKey: "navigation.desserts", href: "#desserts" },
  { id: "birthday", labelKey: "navigation.birthday", href: "#birthday" },
  { id: "hampers", labelKey: "navigation.hampers", href: "#hampers" },
  { id: "anniversary", labelKey: "navigation.anniversary", href: "#anniversary" },
  { id: "occasions", labelKey: "navigation.occasions", href: "#occasions" },
  { id: "occasions-special", labelKey: "navigation.corporateOccasions", href: "#occasions-special" },
];

export const NavLinks: React.FC<NavLinksProps> = ({
  className = "",
  activeId = "cakes",
  onSelect,
}) => {
  const { t } = useI18n();

  return (
    <nav
      aria-label="Categorías principales"
      className={`flex items-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-1 ${className}`}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => onSelect?.(item.id)}
            className={`whitespace-nowrap font-body font-bold text-[11px] transition-colors py-0.5 border-b-2 ${
              isActive
                ? "text-brand-primary border-brand-primary"
                : "text-brand-primary/80 border-transparent hover:text-brand-primary hover:border-brand-primary/40"
            }`}
          >
            {t(item.labelKey)}
          </Link>
        );
      })}
    </nav>
  );
};
