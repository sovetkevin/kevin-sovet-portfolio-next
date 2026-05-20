"use client";
import { useEffect, useRef, useState } from 'react';

/**
 * Partage la logique de visibilité du badge "Hello, I'm Kevin Sovet".
 * Objectif: garder le menu (Header) et le badge parfaitement synchronisés.
 */
export function useStickyHelloVisibility(): boolean {
  const [shouldRenderHeader, setShouldRenderHeader] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Affiche au-delà d'environ 200px.
      const shouldShowHeader = currentScrollY > 200;

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // En mobile: on masque si l'utilisateur scroll vers le bas.
        const isScrollingUp = currentScrollY < lastScrollYRef.current;
        const isMobileHeaderVisible = isScrollingUp || currentScrollY <= 220;
        setShouldRenderHeader(shouldShowHeader && isMobileHeaderVisible);
      } else {
        // En desktop: visible dès que shouldShowHeader est vrai.
        setShouldRenderHeader(shouldShowHeader);
      }

      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return shouldRenderHeader;
}
