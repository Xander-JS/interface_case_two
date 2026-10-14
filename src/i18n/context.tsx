"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from "react";
import type { Locale } from "./config";
import { DEFAULT_LOCALE } from "./config";
import type { Dictionary } from "./types";
import esDictionary from "../../messages/es.json";
import enDictionary from "../../messages/en.json";

const dictionaries: Record<Locale, Dictionary> = {
  es: esDictionary as unknown as Dictionary,
  en: enDictionary as unknown as Dictionary,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  dictionary: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const parts = path.split(".");
  let current: unknown = obj;

  for (const part of parts) {
    if (current && typeof current === "object" && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return path;
    }
  }

  return typeof current === "string" ? current : path;
}

export function I18nProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const dictionary = useMemo(() => dictionaries[locale] || dictionaries[DEFAULT_LOCALE], [locale]);

  const t = useCallback(
    (path: string): string => {
      return getNestedValue(dictionary as unknown as Record<string, unknown>, path);
    },
    [dictionary]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      dictionary,
    }),
    [locale, setLocale, t, dictionary]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
