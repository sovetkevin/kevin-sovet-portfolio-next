"use client";
import React, { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Works', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isBubbleMode, setIsBubbleMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [mobileMenuState, setMobileMenuState] = useState<'normal' | 'bubble' | 'hidden'>('normal');
  const lastScrollYRef = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const scrollingUp = y < lastScrollYRef.current;

      setIsBubbleMode(y > 200);

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        if (y <= 200) {
          setMobileMenuState('normal');
        } else {
          const isMobileHeaderVisible = scrollingUp || y <= 220;
          setMobileMenuState(isMobileHeaderVisible ? 'bubble' : 'hidden');
        }
      }

      lastScrollYRef.current = y;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuState === 'hidden') setIsPanelOpen(false);
  }, [mobileMenuState]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPanelOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!isPanelOpen) return;
      const target = e.target as Node | null;
      if (!target) return;
      if (mobileMenuRef.current && mobileMenuRef.current.contains(target)) return;
      setIsPanelOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isPanelOpen]);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsPanelOpen(false);
    void event;
  };

  const BurgerButton = ({
    variant,
    isOpen,
    onClick,
  }: {
    variant: 'normal' | 'bubble';
    isOpen: boolean;
    onClick: () => void;
  }) => {
    const baseButtonClass =
      'inline-flex items-center justify-center rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/40';

    const sizeClass = 'h-13 w-13';
    const variantClass =
      variant === 'bubble'
        ? 'bg-white/70 dark:bg-gray-800/70 custom-blur border border-white/40 dark:border-gray-700/40 text-gray-800 dark:text-gray-100 shadow-lg'
        : 'bg-transparent text-gray-700 dark:text-gray-300';

    return (
      <button
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={onClick}
        className={`${baseButtonClass} ${sizeClass} ${variantClass}`}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {isOpen ? (
            <>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>
    );
  };

  return (
    <>
      {!isBubbleMode && (
        <header className="fixed top-0 left-0 right-0 z-[11900]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-24 pt-5 flex items-center justify-between">
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-cyan-600 no-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
          </div>
        </header>
      )}

      <div
        className={`fixed top-6 left-0 right-0 z-[11950] pointer-events-none transition-all duration-500 ease-in-out ${
          isBubbleMode ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
        aria-hidden={!isBubbleMode}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-24 flex items-start justify-between">
          <div className="hidden lg:block pointer-events-auto bg-white/70 dark:bg-gray-800/70 custom-blur px-3 py-2 rounded-xl shadow-lg border border-white/40 dark:border-gray-700/40 text-sm font-semibold text-gray-800 dark:text-gray-100 tracking-tight w-fit">
            <nav className="flex items-center gap-6">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-cyan-600 no-underline">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden lg:block pointer-events-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 right-0 z-[12000] pointer-events-auto lg:pointer-events-none transition-all duration-500 ease-in-out ${
          mobileMenuState === 'hidden'
            ? 'opacity-0 -translate-y-10 pointer-events-none'
            : 'opacity-100 translate-y-0'
        } ${mobileMenuState === 'bubble' ? 'top-6' : 'top-0'}`}
      >
        <div
          className={`max-w-[1600px] mx-auto px-6 md:px-24 flex items-center justify-between ${
            mobileMenuState === 'bubble' ? '' : 'pt-5'
          }`}
        >
          <div className="lg:hidden relative" ref={mobileMenuRef}>
            <BurgerButton
              variant={mobileMenuState === 'bubble' ? 'bubble' : 'normal'}
              isOpen={isPanelOpen}
              onClick={() => setIsPanelOpen((v) => !v)}
            />

            <div
              className={`absolute top-full left-0 mt-2 w-52 rounded-2xl border border-white/40 dark:border-gray-700/40 bg-white/70 dark:bg-gray-800/70 custom-blur shadow-lg overflow-hidden transition-all duration-300 ${
                isPanelOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <nav className="flex flex-col p-2 gap-2">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-3 py-2 rounded-xl text-md font-medium text-gray-800 dark:text-gray-100 hover:bg-cyan-50/80 dark:hover:bg-cyan-900/30 hover:text-gray-900 dark:hover:text-gray-50 no-underline transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
