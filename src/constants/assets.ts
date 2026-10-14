/**
 * Centralized Asset Paths for Dakingo Landing Page
 * Permite cambiar los recursos gráficos provisionales por imágenes definitivas
 * sin modificar los componentes de presentación.
 */

export const ASSETS = {
  hero: {
    mainCake: "/images/cakes/hero-chocolate-cake.png",
    miniCakeTop: "/images/cakes/mini-cake-molten.png",
    miniCakeBottom: "/images/cakes/mini-brownie.png",
  },
  products: {
    product1: "/images/cakes/rich-chocolate-truffle.png",
    product2: "/images/cakes/choco-chip-truffle.png",
    product3: "/images/cakes/tropical-fruit-almond.png",
    product4: "/images/cakes/butterscotch-crunch.png",
  },
  categories: {
    classic: "/icons/categories/classic.svg",
    gourmet: "/icons/categories/gourmet.svg",
    desserts: "/icons/categories/desserts.svg",
    cookies: "/icons/categories/cookies.svg",
  },
  moments: [
    "/images/moments/celebration-1.png",
    "/images/moments/celebration-2.png",
    "/images/moments/celebration-3.png",
    "/images/moments/celebration-4.png",
    "/images/moments/celebration-5.png",
    "/images/moments/celebration-6.png",
  ],
  avatars: [
    "/images/avatars/user-1.png",
    "/images/avatars/user-2.png",
    "/images/avatars/user-3.png",
    "/images/avatars/user-4.png",
    "/images/avatars/user-5.png",
  ],
} as const;
