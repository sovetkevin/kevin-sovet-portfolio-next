"use client";
import React, { useMemo, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import CtaButton from './ui/CtaButton';
import { TIMELINE_DOT_CLASSNAME, TIMELINE_DOT_FILLED_CLASSNAME } from './ui/timelineDot';
import { EXPERIENCE_DATA, groupExperiences } from '@/data/constants';
import type { ExperienceItem } from '@/data/types';
import { linkify } from '@/utils/linkify';
import { useLocalizedValue } from '@/utils/localization';

const INITIAL_VISIBLE_GROUPS = 4;

function getWebsiteUrls(item: ExperienceItem): string[] {
  if (!item.website) return [];
  return Array.isArray(item.website) ? item.website : [item.website];
}

function ExperienceLogos({
  item,
  compact = false,
}: {
  item: ExperienceItem;
  compact?: boolean;
}) {
  if (!item.logo?.length) return null;

  const urls = getWebsiteUrls(item);

  return (
    <div className={`flex flex-col items-end gap-3 ${compact ? 'mt-1' : 'mt-2'}`}>
      {item.logo.map((logoUrl, logoIndex) => {
        const href = urls[logoIndex] ?? urls[0];
        const image = (
          <div className={`relative w-[180px] ${compact ? 'h-10' : 'h-[3.75rem]'}`}>
            <Image
              src={logoUrl}
              alt={`${item.company} company logo`}
              fill
              sizes="180px"
              className="object-contain object-right grayscale transition-all duration-300 group-hover/logo:grayscale-0 dark:invert dark:group-hover/logo:invert-0"
            />
          </div>
        );

        if (!href) {
          return (
            <div key={logoUrl} className="rounded-xl">
              {image}
            </div>
          );
        }

        return (
          <a
            key={logoUrl}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group/logo rounded-xl transition-opacity hover:opacity-90"
            aria-label={`${item.company} — ${href.replace(/^https?:\/\//, '').replace(/\/$/, '')}`}
          >
            {image}
          </a>
        );
      })}
    </div>
  );
}

function ExperienceWebsites({ item }: { item: ExperienceItem }) {
  const t = useTranslations('experience');
  const urls = getWebsiteUrls(item);
  if (!urls.length) return null;

  return (
    <div className="lg:hidden text-gray-900 dark:text-gray-200 text-sm leading-relaxed">
      <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 dark:text-gray-500 block mb-2">
        {urls.length > 1 ? t('websites') : t('website')}
      </span>
      <div className="flex flex-wrap gap-3 items-center">
        {urls.map((url) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-700 dark:text-cyan-600 hover:text-cyan-900 dark:hover:text-cyan-500 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
          >
            {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </a>
        ))}
      </div>
    </div>
  );
}

function EmploymentEntry({ item }: { item: ExperienceItem }) {
  const t = useTranslations('experience');
  const localize = useLocalizedValue();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-16 items-start">
      <div className="hidden lg:flex flex-col items-end justify-start gap-2 pr-4 pt-2.5">
        <span className="text-gray-500 font-mono text-sm">{localize(item.year)}</span>
        <ExperienceLogos item={item} />
      </div>
      <div className="relative pl-16 lg:pl-0">
        <div className="relative mb-4 lg:hidden">
          <div
            className="pointer-events-none absolute -left-[38px] top-1/2 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center"
            aria-hidden="true"
          >
            <span className={`block h-4 w-4 shrink-0 ${TIMELINE_DOT_CLASSNAME}`} />
          </div>
          <span className="text-gray-500 font-mono text-sm">{localize(item.year)}</span>
        </div>

        <div
          className={`hidden lg:block absolute -left-[44px] top-3 h-4 w-4 z-10 ${TIMELINE_DOT_CLASSNAME}`}
          aria-hidden="true"
        />

        <div className="space-y-6 group">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-200 tracking-tight">
            {item.role}{' '}
            <span className="font-light text-gray-500 dark:text-gray-500 tracking-normal">{t('at')}</span>{' '}
            {item.company}
          </h3>

          <div className="space-y-4">
            {item.bottomLine && (
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {linkify(localize(item.bottomLine))}
              </p>
            )}
            <ExperienceWebsites item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Nested client mission — card treatment so it reads as nested under employment. */
function MissionEntry({ item }: { item: ExperienceItem }) {
  const t = useTranslations('experience');
  const localize = useLocalizedValue();

  const missionBadge = (
    <span className="inline-flex shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 align-middle">
      {t('mission')}
    </span>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-16 items-start">
      <div className="hidden lg:flex flex-col items-end justify-start gap-2 pr-4">
        <span className="flex h-5 items-center text-gray-400 dark:text-gray-500 font-mono text-xs">
          {localize(item.year)}
        </span>
        <ExperienceLogos item={item} compact />
      </div>
      <div className="relative pl-16 lg:pl-6">
        {/* Mobile: date + badge aligned with timeline dot (same pattern as employment) */}
        <div className="relative mb-3 lg:hidden">
          <div
            className="pointer-events-none absolute -left-[38px] top-1/2 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center"
            aria-hidden="true"
          >
            <span className={`block h-2.5 w-2.5 shrink-0 ${TIMELINE_DOT_FILLED_CLASSNAME}`} />
          </div>
          <div className="flex flex-nowrap items-center gap-2">
            <span className="text-gray-400 dark:text-gray-500 font-mono text-xs">
              {localize(item.year)}
            </span>
            {missionBadge}
          </div>
        </div>

        {/* Desktop: same row height as the date (h-5) so the filled dot lines up */}
        <div
          className="pointer-events-none absolute -left-[44px] top-0 z-10 hidden h-5 w-4 items-center justify-center lg:flex"
          aria-hidden="true"
        >
          <span className={`block h-2.5 w-2.5 shrink-0 ${TIMELINE_DOT_FILLED_CLASSNAME}`} />
        </div>

        <div className="rounded-2xl border border-gray-200/50 bg-white dark:border-gray-700/50 dark:bg-[#1a1d27] p-5 md:p-6 space-y-4 group">
          <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">
            {item.role}{' '}
            <span className="font-light text-gray-500 dark:text-gray-500 tracking-normal">{t('at')}</span>{' '}
            {item.company}
            <span className="hidden lg:inline-flex ml-2 align-middle">{missionBadge}</span>
          </h4>

          <div className="space-y-3">
            {item.bottomLine && (
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {linkify(localize(item.bottomLine))}
              </p>
            )}
            <ExperienceWebsites item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Experience: React.FC = () => {
  const t = useTranslations('experience');
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const groups = useMemo(() => groupExperiences(EXPERIENCE_DATA), []);
  const visibleGroups = isExpanded ? groups : groups.slice(0, INITIAL_VISIBLE_GROUPS);

  const handleToggleExpand = () => {
    const wasExpanded = isExpanded;
    setIsExpanded(!isExpanded);

    if (wasExpanded && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="px-6 md:px-24 md:py-24 md:pt-10 py-16 md:space-y-16 space-y-12">
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-200 leading-[1.1] tracking-tighter md:col-span-2">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
          {t('description')}
        </p>
      </AnimatedSection>

      <div className="relative md:pt-12 pt-4">
        <div className="absolute left-[34px] lg:left-[427px] top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-700" />
        <div className="md:space-y-16 space-y-10">
          {visibleGroups.map(({ employment, missions }) => (
            <AnimatedSection key={employment.id} className="space-y-8 lg:space-y-4">
              <EmploymentEntry item={employment} />

              {missions.length > 0 && (
                <div className="space-y-10">
                  {missions.map((mission) => (
                    <MissionEntry key={mission.id} item={mission} />
                  ))}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

        {groups.length > INITIAL_VISIBLE_GROUPS && (
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-16 mt-24">
            <div className="hidden lg:block" />
            <div className="pl-12 lg:pl-0">
              <CtaButton
                onClick={handleToggleExpand}
                size="lg"
                iconPosition="start"
                icon={
                  <span
                    className={`transition-transform duration-500 ${
                      isExpanded ? 'rotate-180 group-hover/btn:-translate-y-1' : 'group-hover/btn:translate-y-1'
                    }`}
                  >
                    ↓
                  </span>
                }
              >
                {isExpanded ? t('archiveEarlierYears') : t('revealEarlyCareer')}
              </CtaButton>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Experience;
