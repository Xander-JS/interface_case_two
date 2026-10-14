"use client";

import React from "react";
import { useI18n } from "@/src/i18n";

export interface SocialProofBarProps {
  className?: string;
  onClick?: () => void;
}

const AVATAR_COLORS = ["#c9a58f", "#5a3a2e", "#d1a98a", "#3d2a24", "#7a5a4a"];

export const SocialProofBar: React.FC<SocialProofBarProps> = ({
  className = "",
  onClick,
}) => {
  const { t } = useI18n();

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`flex items-center justify-between px-3 py-2.5 bg-brand-promise rounded-lg cursor-pointer transition-transform hover:scale-[1.01] select-none border border-brand-primary/10 shadow-xs ${className}`}
    >
      {/* Grupo de avatares solapados */}
      <div className="flex items-center -space-x-1.5">
        {AVATAR_COLORS.map((bg, idx) => (
          <div
            key={idx}
            className="w-[22px] h-[22px] rounded-full border-[1.5px] border-white shadow-xs flex items-center justify-center text-[10px]"
            style={{ backgroundColor: bg }}
          >
            <span className="text-[9px] select-none">👤</span>
          </div>
        ))}
      </div>

      {/* Texto de llamado social */}
      <span className="font-body font-extrabold text-[11px] text-brand-primary tracking-tight ml-2">
        {t("promise.social.followUs")}
      </span>
    </div>
  );
};
