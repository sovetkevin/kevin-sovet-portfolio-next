"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';
import {
  AVAILABILITY_STATUS,
  isEmbeddedConsultingAvailable,
  isProjectBasedAvailable,
} from '@/data/constants';

const STACK_ITEMS = [
  { name: 'Figma', logo: '/images/tech/figma.svg' },
  { name: 'Photoshop', logo: '/images/tech/photoshop.svg' },
  { name: 'Illustrator', logo: '/images/tech/illustrator.svg' },
  { name: 'InDesign', logo: '/images/tech/indesign.svg' },
  { name: 'Adobe XD', logo: '/images/tech/adobe-xd.svg' },
  { name: 'Affinity', logo: '/images/tech/affinity.svg' },
  { name: 'HTML5', logo: '/images/tech/html5.svg' },
  { name: 'CSS3', logo: '/images/tech/css3.svg' },
  { name: 'JavaScript', logo: '/images/tech/javascript.svg' },
  { name: 'TypeScript', logo: '/images/tech/typescript.svg' },
  { name: 'React', logo: '/images/tech/react.svg' },
  { name: 'Next.js', logo: '/images/tech/nextjs.svg' },
  { name: 'Svelte', logo: '/images/tech/svelte.svg' },
  { name: 'Tailwind CSS', logo: '/images/tech/tailwindcss.svg' },
  { name: 'WordPress', logo: '/images/tech/wordpress.svg' },
  { name: 'Elementor', logo: '/images/tech/elementor.svg' },
  { name: 'Drupal', logo: '/images/tech/drupal.svg' },
  { name: 'Django', logo: '/images/tech/django.svg' },
  { name: 'Git', logo: '/images/tech/git.svg' },
  { name: 'GitHub', logo: '/images/tech/github.svg' },
  { name: 'Vite', logo: '/images/tech/vite.svg' },
  { name: 'Storybook', logo: '/images/tech/storybook.svg' },
  { name: 'Vercel', logo: '/images/tech/vercel.svg' },
  { name: 'OVH', logo: '/images/tech/ovh.svg' },
  { name: 'Microsoft Clarity', logo: '/images/tech/microsoft-clarity.jpg' },
  { name: 'ChatGPT', logo: '/images/tech/openai.svg' },
  { name: 'Gemini', logo: '/images/tech/gemini.svg' },
  { name: 'Claude', logo: '/images/tech/claude.svg' },
  { name: 'VS Code', logo: '/images/tech/vscode.svg' },
  { name: 'PhpStorm', logo: '/images/tech/phpstorm.svg' },
  { name: 'Cursor', logo: '/images/tech/cursor.svg' },
];

const DARK_INVERT_LOGOS = new Set(['ChatGPT', 'GitHub', 'Vercel', 'Next.js']);

const unavailableBadgeClassName =
  'absolute top-0 right-10 z-10 inline-flex items-center px-4 py-2 rounded-2xl border border-gray-200/80 bg-gray-200/75 text-gray-600 text-[10px] font-bold uppercase tracking-[0.08em] shadow-lg shadow-gray-900/5 dark:border-gray-700/80 dark:bg-gray-800 dark:text-gray-400';

const serviceCardBaseClassName =
  'relative flex h-full flex-1 flex-col gap-6 overflow-hidden rounded-[2.5rem] p-8 transition-all duration-300 md:p-10';

const serviceCardAvailableClassName =
  'border border-gray-200/50 bg-white dark:border-gray-700/50 dark:bg-[#1a1d27]';

const serviceCardUnavailableClassName =
  'border-1 border-dashed border-spacing-3 border-gray-300 bg-white dark:border-gray-500/65 dark:bg-[#1a1d27]';

const unavailableContentClassName = 'opacity-50';

const unavailableNoticeClassName =
  'border-t border-gray-200 dark:border-gray-600/60 pt-4 text-xs font-semibold leading-relaxed text-gray-500 dark:text-gray-400';

export default function Services() {
  const t = useTranslations('services');
  const [scrollPaused, setScrollPaused] = useState(false);
  const [activeStackKey, setActiveStackKey] = useState<string | null>(null);

  return (
    <section id="services" className="px-6 md:px-24 py-16 md:py-24">
      <AnimatedSection className="max-w-4xl mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-200 mb-6 tracking-tighter">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
          {t('subtitle')}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">

          {/* Embedded Consulting */}
          <div className="relative flex h-full flex-col pt-2">
            {isEmbeddedConsultingAvailable ? (
              <span className="absolute top-0 right-10 z-10 inline-flex items-center px-4 py-2 rounded-2xl bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-[0.12em] shadow-lg shadow-cyan-500/25 dark:bg-cyan-700">
                {t('embedded.mostPopular')}
              </span>
            ) : (
              <span className={unavailableBadgeClassName}>{t('notAvailable')}</span>
            )}
            <div
              className={`${serviceCardBaseClassName} ${
                isEmbeddedConsultingAvailable ? serviceCardAvailableClassName : serviceCardUnavailableClassName
              }`}
            >
              <div className={`space-y-3 ${!isEmbeddedConsultingAvailable ? unavailableContentClassName : ''}`}>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 block">
                  {t('embedded.label')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-gray-900 dark:text-gray-200">
                  {t('embedded.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {t('embedded.description')}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <div className={`flex-1 space-y-2 ${!isEmbeddedConsultingAvailable ? unavailableContentClassName : ''}`}>
                  {['embedded.item1', 'embedded.item2', 'embedded.item3', 'embedded.item4', 'embedded.item5'].map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <span className="text-cyan-600 text-xs mt-0.5 shrink-0">→</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{t(key)}</span>
                    </div>
                  ))}
                </div>

                {!isEmbeddedConsultingAvailable && (
                  <p className={unavailableNoticeClassName}>
                    {AVAILABILITY_STATUS === 'busy' ? t('bothUnavailable') : t('embeddedUnavailable')}
                  </p>
                )}
              </div>

              <div className={`flex flex-wrap gap-2 pt-2 ${!isEmbeddedConsultingAvailable ? unavailableContentClassName : ''}`}>
                {['embedded.tag1', 'embedded.tag2', 'embedded.tag3', 'embedded.tag4'].map((key) => (
                  <span
                    key={key}
                    className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project-Based */}
          <div className="relative flex h-full flex-col pt-2">
            {!isProjectBasedAvailable && (
              <span className={unavailableBadgeClassName}>{t('notAvailable')}</span>
            )}
            <div
              className={`${serviceCardBaseClassName} ${
                isProjectBasedAvailable ? serviceCardAvailableClassName : serviceCardUnavailableClassName
              }`}
            >
              <div className={`space-y-3 ${!isProjectBasedAvailable ? unavailableContentClassName : ''}`}>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 block">
                  {t('project.label')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-gray-900 dark:text-gray-200">
                  {t('project.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {t('project.description')}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <div className={`flex-1 space-y-2 ${!isProjectBasedAvailable ? unavailableContentClassName : ''}`}>
                  {['project.item1', 'project.item2', 'project.item3', 'project.item4', 'project.item5'].map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <span className="text-cyan-600 text-xs mt-0.5 shrink-0">→</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{t(key)}</span>
                    </div>
                  ))}
                </div>

                {!isProjectBasedAvailable && (
                  <p className={unavailableNoticeClassName}>{t('bothUnavailable')}</p>
                )}
              </div>

              <div className={`flex flex-wrap gap-2 pt-2 ${!isProjectBasedAvailable ? unavailableContentClassName : ''}`}>
                {['project.tag1', 'project.tag2', 'project.tag3', 'project.tag4'].map((key) => (
                  <span
                    key={key}
                    className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </AnimatedSection>

      <AnimatedSection delay={125} className="mb-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
          {t('stackLabel')}
        </p>

        <div
          className="relative overflow-x-hidden pt-8"
          onMouseEnter={() => setScrollPaused(true)}
          onMouseLeave={() => {
            setScrollPaused(false);
            setActiveStackKey(null);
          }}
        >
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#eef7f7] to-transparent dark:from-[#0f1117]" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#eef7f7] to-transparent dark:from-[#0f1117]" />

          <div
            className="flex w-max items-start gap-3"
            style={{
              animation: 'marquee 40s linear infinite',
              animationPlayState: scrollPaused ? 'paused' : 'running',
            }}
          >
            {[...STACK_ITEMS, ...STACK_ITEMS].map((item, index) => {
              const stackKey = `${item.name}-${index}`;
              const isActive = activeStackKey === stackKey;

              return (
                <button
                  key={stackKey}
                  type="button"
                  aria-label={item.name}
                  aria-pressed={isActive}
                  onClick={() => setActiveStackKey((current) => (current === stackKey ? null : stackKey))}
                  className="group relative shrink-0 cursor-pointer border-none bg-transparent p-0"
                >
                  <span
                    className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-0.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1.5 text-[10px] font-bold text-white shadow-lg transition-all duration-200 dark:bg-gray-50 dark:text-gray-900 ${
                      isActive
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                    }`}
                  >
                    {item.name}
                    <span
                      className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-50"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={28}
                      height={28}
                      className={`h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? 'scale-110' : ''
                      } ${DARK_INVERT_LOGOS.has(item.name) ? 'dark:invert' : ''}`}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={150}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-200 tracking-tight">
              {t('cta.title')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('cta.subtitle')}</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black dark:bg-gray-50/90 dark:text-gray-900 dark:hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 group/cta"
          >
            <span>{t('cta.button')}</span>
            <span className="transition-transform group-hover/cta:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>
      </AnimatedSection>

    </section>
  );
}