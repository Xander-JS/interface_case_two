/**
 * Dakingo Design System Tokens
 * Fuente única de verdad para tokens de diseño visuales compartidos.
 */

export const DESIGN_TOKENS = {
  colors: {
    brand: {
      primary: "#a82a32",
      primaryHover: "#94242b",
      dark: "#8f1f27",
      accent: "#a83a42",
      canvas: "#f8e9cf",
      card: "#fbe9e7",
      subnav: "#fdeeed",
      subnavBorder: "#f3d3d1",
      menu: "#fdf1ef",
      promise: "#fce4e1",
      badge: "#f9dcd9",
      text: "#a82a32",
      textMuted: "#5a2a2a",
      gold: "#e3a72a",
      ticket: "#e6b84a",
      white: "#ffffff",
    },
    heroGradient: "linear-gradient(100deg, #e9838c 0%, #c4464f 45%, #a82a33 100%)",
  },
  typography: {
    fontFamilies: {
      heading: "var(--font-baloo-2), cursive, sans-serif",
      body: "var(--font-nunito), sans-serif",
    },
    weights: {
      regular: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  radii: {
    sm: "6px",
    md: "12px",
    lg: "14px",
    xl: "18px",
    xxl: "30px",
    full: "9999px",
  },
  shadows: {
    cardSoft: "0 2px 8px rgba(168, 42, 50, 0.1)",
    cake: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  breakpoints: {
    mobile: "375px",
    mobileLarge: "430px",
    tablet: "768px",
    desktopSmall: "1024px",
    desktopLarge: "1440px",
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
