"use client";

import React, { useState } from "react";
import { I18nProvider } from "@/src/i18n";
import { LandingTemplate } from "@/src/components/templates/LandingTemplate";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <I18nProvider initialLocale="es">
      <main className="w-full min-h-screen flex flex-col items-center">
        <LandingTemplate
          onOrderNow={() => showToast("¡Orden iniciada! Redirigiendo al catálogo...")}
          onClaimOffer={() => showToast("¡Cupón SAVE 20% aplicado con éxito!")}
          onAddToCart={() => showToast("Pastel agregado al carrito de compras")}
          onUnlockTicket={() => showToast("¡Boleto Mágico desbloqueado! Tienes Rs. 750 de saldo")}
          onNeedHelpClick={() => showToast("Conectando con un asesor pastelero...")}
        />

        {/* Notificación Toast accesible */}
        {toastMessage && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-4 right-4 z-50 bg-brand-primary text-white font-body font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg border border-white/20 animate-fade-in"
          >
            {toastMessage}
          </div>
        )}
      </main>
    </I18nProvider>
  );
}

