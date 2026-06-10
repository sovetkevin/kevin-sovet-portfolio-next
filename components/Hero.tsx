"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { AVAILABILITY_STATUS, type AvailabilityStatus } from '@/data/constants';

const HERO_IMAGE = '/images/hero_picture.avif';
const HERO_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200';

const AVAILABILITY_BADGE: Record<
  AvailabilityStatus,
  { labelKey: 'statusBusy' | 'statusOpen' | 'statusPartial'; badge: string; dot: string }
> = {
  busy: {
    labelKey: 'statusBusy',
    badge:
      'bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 border-orange-200/80 dark:border-orange-800/80',
    dot: 'bg-orange-500',
  },
  open: {
    labelKey: 'statusOpen',
    badge:
      'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/80',
    dot: 'bg-emerald-500',
  },
  partial: {
    labelKey: 'statusPartial',
    badge:
      'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-800 dark:text-cyan-300 border-cyan-200/80 dark:border-cyan-800/80',
    dot: 'bg-cyan-500',
  },
};

const Hero: React.FC = () => {
  const t = useTranslations('hero');
  const [heroImageSrc, setHeroImageSrc] = useState(HERO_IMAGE);
  const availability = AVAILABILITY_BADGE[AVAILABILITY_STATUS];

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
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-right lg:hidden transition-[filter] duration-500 dark:grayscale"
      />
      <Image
        src={heroImageSrc}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="(min-width: 1024px) 45vw"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-contain object-right lg:block transition-[filter] duration-500 dark:grayscale"
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

          <div className="mb-10 flex flex-col-reverse items-start gap-6 md:flex-row md:items-center md:gap-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-600 dark:text-gray-400">
              {t('hello')}
            </span>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] ${availability.badge}`}
            >
              <span className={`h-1.5 w-1.5 shrink-0 animate-pulse rounded-full ${availability.dot}`} aria-hidden="true" />
              {t(availability.labelKey)}
            </span>
          </div>
          <div className="space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 dark:text-gray-200 max-w-2xl tracking-tight">
              {t('title')}{' '}
              <span className="hidden md:inline lg:text-5xl font-mono text-gray-500 dark:text-gray-500 font-medium italic">
                {t('hashtag')}
              </span>
            </h1>
            <div className="space-y-8">
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl font-light">
                {t('description')}
              </p>

              <div className="flex flex-wrap gap-4">

                <a href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black dark:bg-gray-50/90 dark:text-gray-900 dark:hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 group/cta"
                >
                  <span>{t('ctaPrimary')}</span>
                  <span className="transition-transform group-hover/cta:translate-x-1" aria-hidden="true">→</span>
                </a>

                <a href="#portfolio"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 hover:bg-white/95 dark:hover:bg-gray-800/95 text-gray-900 dark:text-gray-200 font-bold border border-gray-100/50 dark:border-gray-700/50 hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 active:scale-95"
                >
                  <span>{t('ctaSecondary')}</span>
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
