"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { FooterColumn } from "../molecules/FooterColumn";
import { NewsletterForm } from "../molecules/NewsletterForm";
import { useI18n } from "@/src/i18n";

export interface FooterProps {
  onNeedHelpClick?: () => void;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ onNeedHelpClick, className = "" }) => {
  const { t } = useI18n();

  const brandCompanyLinks = [
    { label: t("footer.companyLinks.ourStory"), href: "#our-story" },
    { label: t("footer.companyLinks.contactUs"), href: "#contact" },
    { label: t("footer.companyLinks.locations"), href: "#locations" },
    { label: t("footer.companyLinks.media"), href: "#media" },
    { label: t("footer.companyLinks.careers"), href: "#careers" },
  ];

  const columnKnowUs = [
    { label: t("footer.columnKnowUsLinks.contact"), href: "#contact" },
    { label: t("footer.columnKnowUsLinks.blog"), href: "#blog" },
  ];

  const columnNeedHelp = [
    { label: t("footer.columnNeedHelpLinks.cancellationRefund"), href: "#refunds" },
    { label: t("footer.columnNeedHelpLinks.privacyPolicy"), href: "#privacy" },
  ];

  const columnMoreInfo1 = [
    { label: t("footer.columnMoreInfoLinks1.termsConditions"), href: "#terms" },
    { label: t("footer.columnMoreInfoLinks1.customOrders"), href: "#custom-orders" },
  ];

  const columnMoreInfo2 = [
    { label: t("footer.columnMoreInfoLinks2.couponsOffers"), href: "#offers" },
    { label: t("footer.columnMoreInfoLinks2.downloadApp"), href: "#app" },
  ];

  return (
    <footer
      aria-labelledby="footer-heading"
      className={`relative w-full px-4 sm:px-6 md:px-8 pt-5 pb-6 bg-brand-card/60 border-t border-brand-primary/10 select-none ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Fila principal superior del Footer */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Bloque de marca y enlaces corporativos */}
          <div className="flex flex-col items-start min-w-[140px]">
            <Logo size="md" />
            <ul className="flex flex-col gap-1 list-none p-0 mt-2">
              {brandCompanyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="font-body font-semibold text-[8px] sm:text-[8.5px] leading-[13px] text-brand-text-muted hover:text-brand-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 Columnas de navegación del Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-1 max-w-2xl">
            <FooterColumn
              title={t("footer.columnKnowUsTitle")}
              links={columnKnowUs}
            />
            <FooterColumn
              title={t("footer.columnNeedHelpTitle")}
              links={columnNeedHelp}
            />
            <FooterColumn
              title={t("footer.columnMoreInfoTitle1")}
              links={columnMoreInfo1}
            />
            <FooterColumn
              title={t("footer.columnMoreInfoTitle2")}
              links={columnMoreInfo2}
            />
          </div>
        </div>

        {/* Fila inferior: Suscripción a Newsletter y Widget flotante de ayuda */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-brand-primary/10">
          {/* Formulario de newsletter */}
          <div className="flex flex-col items-start w-full sm:w-auto">
            <NewsletterForm />
          </div>

          {/* Widget de Asistencia "Hey, need any help?" */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              type="button"
              onClick={onNeedHelpClick}
              aria-label={t("common.needHelp")}
              className="flex items-center gap-1.5 group cursor-pointer"
            >
              <div className="w-[20px] h-[20px] rounded-full border-2 border-brand-primary flex items-center justify-center text-brand-primary text-xs transition-transform group-hover:scale-110">
                ↓
              </div>
              <span className="font-body font-bold text-[8.5px] sm:text-[9px] text-brand-primary group-hover:underline">
                {t("common.needHelp")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
