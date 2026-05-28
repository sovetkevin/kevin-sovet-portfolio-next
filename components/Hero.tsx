"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const HERO_IMAGE = '/images/hero_picture.avif';
const HERO_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200';

const Hero: React.FC = () => {
  const t = useTranslations('hero');
  const [heroImageSrc, setHeroImageSrc] = useState(HERO_IMAGE);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#eef7f7] dark:bg-[#0f1117] pl-6 md:pl-24 pr-6 pt-0">
      {/* Images réelles (au lieu de background-image) pour un meilleur LCP */}
      <Image
        src={heroImageSrc}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="(max-width: 767px) calc(100vw - 3rem), calc(100vw - 7.5rem)"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-right lg:hidden"
      />
      <Image
        src={heroImageSrc}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="(min-width: 1024px) 45vw"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-contain object-right lg:block"
      />

      {/* Lisibilité du texte sur la gauche */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#eef7f7] via-[#eef7f7]/92 to-[#eef7f7]/32 md:from-[#eef7f7]/95 md:via-[#eef7f7]/72 md:to-[#eef7f7]/22 lg:from-[#eef7f7]/65 lg:via-[#eef7f7]/12 lg:to-transparent dark:from-[#0f1117] dark:via-[#0f1117]/95 dark:to-[#0f1117]/15 dark:md:via-[#0f1117]/88 dark:md:to-[#0f1117]/10 dark:lg:from-[#0f1117]/90 dark:lg:via-[#0f1117]/35 dark:lg:to-transparent"
        aria-hidden="true"
      />
      {/* Dark : assombrit les bords clairs de la photo sans masquer le visage */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden dark:block bg-[radial-gradient(ellipse_75%_90%_at_50%_10%,rgba(15,17,23,0.35)_32%,rgba(15,17,23,0.25)_58%,rgba(15,17,23,0.85)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl py-12 md:py-24">
        <AnimatedSection>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-600 dark:text-gray-400">
              {t('hello')}
            </span>
          </div>
          <div className="space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 dark:text-gray-50 max-w-2xl tracking-tight">
            {t('title')}{' '}
              <span className="hidden md:inline lg:text-5xl font-mono text-gray-500 dark:text-gray-500 font-medium italic">
                {t('hashtag')}
              </span>
            </h1>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl leading-tight font-medium tracking-tight">
                {t('description')}
              </p>
              <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 font-medium">
                <a href="mailto:kevin.sovet@gmail.com" className="premium-link">
                  {t('email')}
                </a>
                <span className="opacity-50">/</span>
                <a
                  href="https://www.linkedin.com/in/kevinsovet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-link"
                >
                  {t('linkedin')}
                </a>
                <span className="opacity-50">/</span>
                <a href="/files/resume_sovetkevin.pdf" target="_blank" className="premium-link">
                  {t('resume')}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
