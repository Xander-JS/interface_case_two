export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "Español",
  en: "English",
};
