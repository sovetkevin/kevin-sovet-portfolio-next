"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Affiche immédiatement sans attendre l'intersection (ex. images LCP) */
  immediate?: boolean;
}

const AnimatedSection: React.FC<Props> = ({ children, className = '', delay = 0, immediate = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (immediate || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, prefersReducedMotion, immediate]);

  const animationClasses = prefersReducedMotion
    ? 'opacity-100 translate-y-0 scale-100'
    : isVisible
      ? 'opacity-100 translate-y-0 scale-100'
      : 'opacity-0 translate-y-8 scale-[0.98]';

  return (
    <div
      ref={ref}
      className={`${prefersReducedMotion ? '' : 'transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1)'} transform ${animationClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
