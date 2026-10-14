"use client";

import React from "react";
import { Button } from "../atoms/Button";
import { useI18n } from "@/src/i18n";

export interface MagicTicketCardProps {
  onUnlock?: () => void;
  className?: string;
}

export const MagicTicketCard: React.FC<MagicTicketCardProps> = ({
  onUnlock,
  className = "",
}) => {
  const { t } = useI18n();

  return (
    <div
      className={`relative flex items-center justify-between p-3.5 bg-brand-promise rounded-lg overflow-hidden select-none border border-brand-primary/10 shadow-xs ${className}`}
    >
      {/* Ilustración de boleto dorado inclinado */}
      <div className="relative flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center">
        {/* Partículas decorativas */}
        <span aria-hidden="true" className="absolute -top-1 -left-1 text-xs animate-bounce">
          ✨
        </span>
        <span aria-hidden="true" className="absolute -bottom-1 right-0 text-[10px]">
          🎊
        </span>
        {/* Ticket dorado */}
        <div className="w-[48px] h-[32px] bg-brand-ticket text-brand-dark rounded-sm -rotate-[35deg] shadow-sm flex flex-col items-center justify-center border border-dashed border-amber-800/40 p-0.5">
          <span className="text-[7px] font-extrabold uppercase tracking-tighter">
            DAKINGO
          </span>
          <span className="text-[6px] font-bold">★ TICKET ★</span>
        </div>
      </div>

      {/* Contenido textual */}
      <div className="flex-1 ml-3 flex flex-col items-start justify-center">
        <h4 className="font-heading font-extrabold text-[15px] leading-tight text-brand-primary uppercase tracking-tight">
          {t("promise.ticket.title")}
        </h4>
        <p className="mt-0.5 font-body font-bold text-[10px] sm:text-[10.5px] leading-[13px] text-brand-primary">
          {t("promise.ticket.description")}
        </p>

        {/* Botón de desbloqueo */}
        <div className="mt-2 self-end">
          <Button
            size="xs"
            variant="primary"
            onClick={onUnlock}
            className="text-[10px] h-[23px] px-3 font-extrabold"
          >
            {t("common.unlockNow")}
          </Button>
        </div>
      </div>
    </div>
  );
};
