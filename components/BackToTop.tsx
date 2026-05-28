"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const BackToTop: React.FC = () => {
  const t = useTranslations('backToTop');
  const [isVisible, setIsVisible] = useState(false);
  const [bottomPosition, setBottomPosition] = useState<number>(32);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the footer element
    footerRef.current = document.querySelector('footer');

    const toggleVisibility = () => {
      // Find the Experience section
      const sections = document.querySelectorAll('main > div > section');
      let experienceSection: Element | null = null;
      
      // Experience is the first section inside the main content div (after Hero)
      if (sections.length > 0) {
        experienceSection = sections[0];
      }

      let showThreshold = 0;
      
      // Calculate threshold: show when we've scrolled into the Experience section
      if (experienceSection) {
        const experienceRect = experienceSection.getBoundingClientRect();
        // Show button when Experience section top is visible in viewport
        showThreshold = experienceRect.top + window.scrollY - window.innerHeight;
      } else {
        // Fallback: show after scrolling 60% of viewport height
        showThreshold = window.innerHeight * 0.6;
      }

      if (window.pageYOffset > showThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Adjust position when footer is visible to avoid overlapping
      if (footerRef.current) {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        const scrollBottom = scrollTop + viewportHeight;
        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight
        );
        
        // Strict "real bottom" detection (small tolerance for viewport rounding).
        const isAtBottom = scrollBottom >= documentHeight - 2;
        
        // Spacing similar to footer internal padding (48px)
        const spacing = 48;
        
        // Reposition only when truly at the bottom of the page.
        if (isAtBottom) {
          // At bottom of page: lift button more on mobile (+100px)
          const isMobile = window.innerWidth < 768;
          setBottomPosition(isMobile ? 272 : 172);
        } else {
          // Default position when not at bottom
          setBottomPosition(spacing);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);
    
    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed left-6 md:left-24 z-40 px-4 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-white/95 dark:hover:bg-gray-800/95 border border-gray-100/50 dark:border-gray-700/50 hover:border-gray-100 dark:hover:border-gray-700 transition-transform transition-opacity duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] active:scale-95 flex items-center gap-2 group/btn cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ bottom: `${bottomPosition}px` }}
      aria-label={t('label')}
    >
      <span className="text-xs font-medium">{t('label')}</span>
      <span className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 text-sm">↑</span>
    </button>
  );
};

export default BackToTop;
