"use client";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Project } from '@/data/types';
import { PROJECTS_DATA, PROJECT_FILTER_OPTIONS } from '@/data/constants';
import { linkify } from '@/utils/linkify';
import ImageCarousel from './ImageCarousel';
import ThemeToggle from './ThemeToggle';
import { useLocalizedValue } from '@/utils/localization';

interface ProjectPageProps {
  project: Project;
}

const formatProjectDisplayYear = (date: string): string => {
  const yearMatches = date.match(/\d{4}/g);
  if (!yearMatches || yearMatches.length === 0) return date;
  return yearMatches[0];
};

const formatPosition = (value: number) => String(value).padStart(2, '0');

const MONTH_INDEX: Record<string, number> = {
  january: 1, jan: 1, february: 2, feb: 2, march: 3, mar: 3,
  april: 4, apr: 4, may: 5, june: 6, jun: 6, july: 7, jul: 7,
  august: 8, aug: 8, september: 9, sept: 9, sep: 9,
  october: 10, oct: 10, november: 11, nov: 11, december: 12, dec: 12,
};

const extractDateValue = (date: string): number => {
  const yearMatches = date.match(/\d{4}/g);
  if (!yearMatches) return 0;
  const year = parseInt(yearMatches[0], 10);
  const normalized = date.toLowerCase().replace(/\./g, ' ').replace(/-/g, ' ');
  const month = normalized.split(/\s+/).map(t => MONTH_INDEX[t]).find(Boolean) ?? 0;
  return year * 100 + month;
};

export default function ProjectPage({
  project,
}: ProjectPageProps) {
  const t = useTranslations();
  const localize = useLocalizedValue();
  const router = useRouter();
  const searchParams = useSearchParams();
  const localeRaw = useLocale();
  const locale = (localeRaw === 'fr' ? 'fr' : 'en') as 'en' | 'fr';
  const activeFilter = searchParams.get('from') ?? 'all';
  const activeSort = searchParams.get('sort') ?? 'latest';
  const isDevelopmentProject = project.category.includes('Development');
  const localePrefix = locale === 'fr' ? '/fr' : '';

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const params = new URLSearchParams({
      ...(activeFilter !== 'all' && { from: activeFilter }),
      ...(activeSort !== 'latest' && { sort: activeSort }),
    }).toString();
    const newPrefix = newLocale === 'fr' ? '/fr' : '/en';
    router.push(`${newPrefix}/projects/${project.id}${params ? `?${params}` : ''}`, { scroll: false });
  };

  const filteredAndSortedProjects = useMemo(() => {
    const filterOption = PROJECT_FILTER_OPTIONS.find((o) => o.id === activeFilter);
    const filtered = filterOption?.categories?.length
      ? PROJECTS_DATA.filter((p) =>
          filterOption.categories!.some((cat) => p.category.includes(cat))
        )
      : PROJECTS_DATA;

    return [...filtered].sort((a, b) => {
      if (activeSort === 'oldest') return extractDateValue(a.date) - extractDateValue(b.date);
      if (activeSort === 'title-asc') return a.title.localeCompare(b.title);
      if (activeSort === 'title-desc') return b.title.localeCompare(a.title);
      return extractDateValue(b.date) - extractDateValue(a.date);
    });
  }, [activeFilter, activeSort]);

  const projectIndex = filteredAndSortedProjects.findIndex((p) => p.id === project.id);
  const totalProjects = filteredAndSortedProjects.length;
  const prevId = filteredAndSortedProjects[(projectIndex - 1 + totalProjects) % totalProjects]?.id ?? project.id;
  const nextId = filteredAndSortedProjects[(projectIndex + 1) % totalProjects]?.id ?? project.id;

  const buildUrl = (id: string) => {
    const params = new URLSearchParams({
      ...(activeFilter !== 'all' && { from: activeFilter }),
      ...(activeSort !== 'latest' && { sort: activeSort }),
    });
    const query = params.toString();
    return `${localePrefix}/projects/${id}${query ? `?${query}` : ''}`;
  };

  const backUrl = () => {
    const params = new URLSearchParams({
      ...(activeFilter !== 'all' && { category: activeFilter }),
      ...(activeSort !== 'latest' && { sort: activeSort }),
    });
    const query = params.toString();
    return `${localePrefix || '/'}${query ? `?${query}` : ''}#portfolio`;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        router.push(buildUrl(nextId));
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        router.push(buildUrl(prevId));
      }
      if (e.key === 'Escape') {
        router.push(backUrl());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextId, prevId, router, activeFilter, activeSort]);

  return (
    <main className="min-h-screen bg-[#fcfdfd] dark:bg-[#0f1117]">
      <div className="fixed top-0 left-0 right-0 z-50 px-8 md:px-24 py-6 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => router.push(backUrl())}
          className="pointer-events-auto px-4 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-white/95 dark:hover:bg-gray-800/95 border border-gray-100/50 dark:border-gray-700/50 hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] active:scale-95 flex items-center gap-2 group/btn cursor-pointer"
          aria-label={t('projectPage.backToGallery')}
          title={`${t('projectPage.backToGallery')} (Esc)`}
        >
          <span className="transition-transform duration-300 group-hover/btn:-translate-x-0.5 text-sm">←</span>
          <span className="text-xs font-medium">
            <span className="sm:hidden">{t('projectPage.back')}</span>
            <span className="hidden sm:inline">{t('projectPage.backToGallery')}</span>
          </span>
        </button>

        <div className="pointer-events-auto flex items-center gap-2">
          
           <a href={buildUrl(prevId)}
            className="md:w-9 md:h-9 h-11 w-11 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-gray-50 transition-all shadow-xl backdrop-blur-md active:scale-90 border border-black/5 dark:border-gray-700/50"
            aria-label={t('projectPage.previousProject')}
            title={`${t('projectPage.previousProject')} (←)`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </a>
          <span className="inline-flex items-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-black/5 dark:border-gray-700/50 px-3 py-2 text-xs font-mono tracking-[0.2em] text-gray-900 dark:text-gray-50">
            {formatPosition(projectIndex + 1)}/{formatPosition(totalProjects)}
          </span>
          
           <a href={buildUrl(nextId)}
            className="md:w-9 md:h-9 h-11 w-11 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-gray-50 transition-all shadow-xl backdrop-blur-md active:scale-90 border border-black/5 dark:border-gray-700/50"
            aria-label={t('projectPage.nextProject')}
            title={`${t('projectPage.nextProject')} (→)`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center justify-center rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer px-3 py-2 uppercase bg-white/70 dark:bg-gray-800/70 custom-blur border border-white/40 dark:border-gray-700/40 text-gray-800 dark:text-gray-100 shadow-lg"
            aria-label={t('common.toggleLanguage')}
          >
            {locale.toUpperCase()}
          </button>
          <ThemeToggle />
        </div>
      </div>

      <div>
        <div className="w-full md:h-[40vh] h-[25vh] relative">
          <Image
            src={project.thumbnail}
            alt={`${project.title} - ${localize(project.type)}`}
            fill
            priority
                        loading="eager"
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfdfd] from-40% dark:from-[#0f1117] to-transparent" />
          <div className="absolute md:bottom-12 bottom-6 left-8 md:left-24">
            <span className="text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-2 block text-cyan-500">
              {localize(project.type)}
            </span>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="px-8 md:px-24 py-8 pb-24 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="lg:flex-1 space-y-16 lg:min-w-0">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                {t('projectPage.mainGoal')}
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-50 leading-[1.1] tracking-tighter">
                {linkify(localize(project.description))}
              </h2>
            </div>

            {project.content && (
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                  {t('projectPage.methods')}
                </p>
                <h3 className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {linkify(localize(project.content))}
                </h3>
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-1 gap-16">
                {project.images.map((img, i) => (
                  <figure key={i}>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100/50 dark:border-gray-700/30">
                      <Image
                        src={img.url}
                        alt={img.caption ? localize(img.caption) : `${project.title} project detail`}
                        width={1600}
                        height={900}
                        priority={i === 0}
                        className="w-full h-auto hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-4 px-1 text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed text-center">
                        {localize(img.caption)}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}

            {project.contentBlocks?.map((block, blockIndex) => {
              if (block.type === 'carousel') {
                return (
                  <div key={blockIndex} className="space-y-8">
                    <ImageCarousel
                      images={block.images}
                      priority={blockIndex === 0 && (!project.images || project.images.length === 0)}
                    />
                  </div>
                );
              }
              if (block.type === 'text') {
                return (
                  <div key={blockIndex} className="rounded-[2rem] border border-gray-200/50 dark:border-gray-700/40 bg-white/100 dark:bg-[#1a1d27]/70 p-6 md:p-8">
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {linkify(localize(block.content))}
                    </p>
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={blockIndex}>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100/50 dark:border-gray-700/30">
                      <Image
                        src={block.image.url}
                        alt={block.image.caption ? localize(block.image.caption) : `${project.title} project detail`}
                        width={1600}
                        height={900}
                        priority={blockIndex === 0 && (!project.images || project.images.length === 0)}
                        className="w-full h-auto hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                    {block.image.caption && (
                      <figcaption className="mt-4 px-1 text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed text-center">
                        {localize(block.image.caption)}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              return null;
            })}
          </div>

          <div className="lg:w-[380px] lg:shrink-0">
            <div className="lg:sticky lg:top-24 space-y-8 bg-white dark:bg-[#1a1d27] p-10 rounded-[2.5rem] border border-gray-200/50 dark:border-gray-700/50">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                  {t('projectPage.year')}
                </p>
                <p className="text-2xl font-mono text-gray-900 dark:text-gray-50">
                  {formatProjectDisplayYear(project.date)}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                  {t('projectPage.scope')}
                </p>
                <ul className="space-y-1">
                  {project.scope.map((item, i) => (
                    <li key={i} className="text-xl text-gray-900 dark:text-gray-50 font-bold">{item}</li>
                  ))}
                </ul>
              </div>

              {isDevelopmentProject && project.stack && project.stack.length > 0 && (
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                    {t('projectPage.stack')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag, i) => (
                      <span key={i} className="px-5 py-2 rounded-full bg-cyan-50/80 dark:bg-cyan-900/30 text-[10px] font-bold text-cyan-700 dark:text-cyan-400 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                  {t('projectPage.focus')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.focus.map((tag, i) => (
                    <span key={i} className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-[10px] font-bold text-gray-700 dark:text-gray-300 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.website && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                    {t('projectPage.website')}
                  </h4>
                  <a
                    href={project.website.startsWith('http') ? project.website : `https://${project.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-200 block break-all"
                  >
                    {project.website.startsWith('https://')
                      ? project.website.slice(8)
                      : project.website.startsWith('http://')
                        ? project.website.slice(7)
                        : project.website}
                  </a>
                </div>
              )}

              <button
                onClick={() => router.push(backUrl())}
                className="w-full py-5 rounded-2xl bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 font-bold hover:bg-black dark:hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 group/btn cursor-pointer"
              >
                <span className="transition-transform group-hover/btn:-translate-x-1">←</span>
                {t('projectPage.backToGallery')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}