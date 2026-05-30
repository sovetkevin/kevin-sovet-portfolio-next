"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { PROJECTS_DATA, PROJECT_FILTER_OPTIONS, type ProjectFilterOption } from '@/data/constants';
import { useLocalizedValue } from '@/utils/localization';


type SortOption = {
  id: 'latest' | 'oldest' | 'title-asc' | 'title-desc';
  label: string;
};

const SORT_OPTIONS: SortOption[] = [
  { id: 'latest', label: 'Latest first' },
  { id: 'oldest', label: 'Oldest first' },
  { id: 'title-asc', label: 'Title A-Z' },
  { id: 'title-desc', label: 'Title Z-A' },
];

const MONTH_INDEX: Record<string, number> = {
  january: 1, jan: 1,
  february: 2, feb: 2,
  march: 3, mar: 3,
  april: 4, apr: 4,
  may: 5,
  june: 6, jun: 6,
  july: 7, jul: 7,
  august: 8, aug: 8,
  september: 9, sept: 9, sep: 9,
  october: 10, oct: 10,
  november: 11, nov: 11,
  december: 12, dec: 12,
};

const extractProjectDateValue = (date: string): number => {
  const yearMatches = date.match(/\d{4}/g);
  if (!yearMatches || yearMatches.length === 0) return 0;
  const year = Number.parseInt(yearMatches[0], 10) || 0;
  const normalizedDate = date.toLowerCase().replace(/\./g, ' ').replace(/-/g, ' ');
  const month = normalizedDate
    .split(/\s+/)
    .map((token) => token.trim())
    .map((token) => MONTH_INDEX[token])
    .find((value) => Boolean(value)) ?? 0;
  return year * 100 + month;
};

const formatProjectDisplayYear = (date: string): string => {
  const yearMatches = date.match(/\d{4}/g);
  if (!yearMatches || yearMatches.length === 0) return date;
  return yearMatches[0];
};

const CATEGORY_TO_FILTER_ID: Record<string, string> = {
  'UX/UI Design': 'ux-ui-design',
  Development: 'development',
  Branding: 'branding',
  'Visual Communication': 'visual-communication',
};

type ViewMode = 'grid' | 'list';

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="1.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="1.5" y="9" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="9" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.5" y="2.5" width="3.5" height="3.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 4.25H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="1.5" y="10" width="3.5" height="3.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 11.75H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ViewModeToggle = ({
  viewMode,
  onViewModeChange,
}: {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}) => (
  <div className="flex items-center gap-1 rounded-xl border border-gray-200/70 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/60 p-1 shadow-sm backdrop-blur-sm">
    <button
      type="button"
      onClick={() => onViewModeChange('grid')}
      className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 cursor-pointer ${
        viewMode === 'grid'
          ? 'bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 shadow-sm'
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
      aria-label="Grid view"
      aria-pressed={viewMode === 'grid'}
    >
      <GridIcon />
    </button>
    <button
      type="button"
      onClick={() => onViewModeChange('list')}
      className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 cursor-pointer ${
        viewMode === 'list'
          ? 'bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 shadow-sm'
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
      aria-label="List view"
      aria-pressed={viewMode === 'list'}
    >
      <ListIcon />
    </button>
  </div>
);

const Portfolio: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const localize = useLocalizedValue();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeSort, setActiveSort] = useState<SortOption['id']>('latest');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAppliedDeepLinkRef = useRef(false);
  const hasInitializedUrlSyncRef = useRef(false);

  useEffect(() => {
    const updateLayoutMode = () => {
      const width = window.innerWidth;
      setIsTwoColumnsLayout(width >= 768 && width < 1024);
    };
    updateLayoutMode();
    window.addEventListener('resize', updateLayoutMode);
    return () => window.removeEventListener('resize', updateLayoutMode);
  }, []);

  const availableCategories = PROJECT_FILTER_OPTIONS.filter((option: ProjectFilterOption) => {
    if (option.id === 'all') return true;
    return PROJECTS_DATA.some((project) =>
      (option.categories ?? []).some((category) => project.category.includes(category))
    );
  });

  const categoryCounts: Record<string, number> = Object.fromEntries(
    availableCategories.map((option) => {
      if (option.id === 'all') return [option.id, PROJECTS_DATA.length];
      const count = PROJECTS_DATA.filter((project) =>
        (option.categories ?? []).some((category) => project.category.includes(category))
      ).length;
      return [option.id, count];
    })
  );

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => {
        const selectedOption = availableCategories.find((option) => option.id === activeFilter);
        if (!selectedOption?.categories?.length) return false;
        return selectedOption.categories.some((category) => project.category.includes(category));
      });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (activeSort === 'latest') return extractProjectDateValue(b.date) - extractProjectDateValue(a.date);
    if (activeSort === 'oldest') return extractProjectDateValue(a.date) - extractProjectDateValue(b.date);
    if (activeSort === 'title-asc') return a.title.localeCompare(b.title);
    return b.title.localeCompare(a.title);
  });

  const collapsedProjectsCount = isTwoColumnsLayout ? 8 : 9;
  const displayedProjects = isExpanded ? sortedProjects : sortedProjects.slice(0, collapsedProjectsCount);
  const localePrefix = locale === 'fr' ? '/fr' : '';
  const projectUrl = (projectId: string) =>
    `${localePrefix}/projects/${projectId}?${new URLSearchParams({
      ...(activeFilter !== 'all' && { from: activeFilter }),
      ...(activeSort !== 'latest' && { sort: activeSort }),
    }).toString()}`;
  const sortOptionLabels: Record<SortOption['id'], string> = {
    latest: t('portfolio.sortOptions.latest'),
    oldest: t('portfolio.sortOptions.oldest'),
    'title-asc': t('portfolio.sortOptions.titleAsc'),
    'title-desc': t('portfolio.sortOptions.titleDesc'),
  };
  const filterLabels: Record<string, string> = {
    all: t('filters.all'),
    'ux-ui-design': t('filters.uxUiDesign'),
    development: t('filters.development'),
    branding: t('filters.branding'),
    'visual-communication': t('filters.visualCommunication'),
  };
  const formatProjectCategories = (categories: string[]) =>
    categories
      .map((category) => filterLabels[CATEGORY_TO_FILTER_ID[category]] ?? category)
      .join(' · ');

  useEffect(() => {
    if (hasAppliedDeepLinkRef.current) return;
    hasAppliedDeepLinkRef.current = true;

    // Ne restaure les filtres que si on vient d'une page projet
    // (navigation back), pas d'un refresh
    const navigationType = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationType?.type === 'reload') return;

    const url = new URL(window.location.href);
    const categoryFromUrl = url.searchParams.get('category');
    const sortFromUrl = url.searchParams.get('sort');

    // Restore sort
    if (sortFromUrl && ['latest', 'oldest', 'title-asc', 'title-desc'].includes(sortFromUrl)) {
      setActiveSort(sortFromUrl as SortOption['id']);
    }

    // Restore filter (code existant)
    if (!categoryFromUrl) return;
    const normalizedCategory =
      categoryFromUrl === 'web-integration' || categoryFromUrl === 'frontend-dev'
        ? 'development'
        : categoryFromUrl;
    const isValidCategory = availableCategories.some((option) => option.id === normalizedCategory);
    if (!isValidCategory || normalizedCategory === 'all') return;
    setActiveFilter(normalizedCategory);
    setIsExpanded(false);
    setTimeout(() => {
      const portfolioAnchor = document.getElementById('portfolio');
      portfolioAnchor?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  }, [availableCategories]);

  useEffect(() => {
    if (!hasInitializedUrlSyncRef.current) {
      hasInitializedUrlSyncRef.current = true;
      return;
    }
    const url = new URL(window.location.href);
    if (activeFilter === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', activeFilter);
    }
    if (activeSort === 'latest') {
      url.searchParams.delete('sort');
    } else {
      url.searchParams.set('sort', activeSort);
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }, [activeFilter, activeSort]);

  const getGridSpan = (index: number) => {
    const patterns = [
      "lg:col-span-8", "lg:col-span-4",
      "lg:col-span-6", "lg:col-span-6",
      "lg:col-span-5", "lg:col-span-7",
      "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"
    ];
    return patterns[index % patterns.length] || "lg:col-span-6";
  };

  const getAspectRatio = (index: number) => {
    const ratios = [
      "lg:aspect-[16/9]", "lg:aspect-[4/5]",
      "lg:aspect-square", "lg:aspect-square",
      "lg:aspect-[4/4]", "lg:aspect-[16/9]",
      "lg:aspect-square", "lg:aspect-square", "lg:aspect-square"
    ];
    return ratios[index % ratios.length] || "lg:aspect-video";
  };

  const handleToggleExpand = () => {
    const wasExpanded = isExpanded;
    setIsExpanded(!isExpanded);
    if (wasExpanded && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleFilterChange = (filterId: string) => {
    if (!availableCategories.some((option) => option.id === filterId)) return;
    setActiveFilter(filterId);
    setIsExpanded(false);
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const handleSortChange = (sortId: SortOption['id']) => {
    setActiveSort(sortId);
    setIsExpanded(false);
  };

  return (
    <section ref={sectionRef} className="px-6 md:px-24 py-16 md:py-24 space-y-0">
      <AnimatedSection className="max-w-4xl md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-8 tracking-tighter">{t('portfolio.title')}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
          {t('portfolio.description')}
        </p>
      </AnimatedSection>

      <AnimatedSection className="md:mb-8 mb-7">
        {/* Mobile filters — XS: filtre pleine largeur, tri + vue sur la 2e ligne ; sm+: tout sur une ligne */}
        <div className="lg:hidden mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3">
          <div className="w-full sm:min-w-0 sm:flex-1">
            <label htmlFor="project-filter" className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 truncate">
              {t('portfolio.filterLabel')}
            </label>
            <div className="relative">
              <select
                id="project-filter"
                value={activeFilter}
                onChange={(event) => handleFilterChange(event.target.value)}
                className="w-full min-w-0 appearance-none rounded-2xl border border-gray-200/70 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 px-3 py-2.5 pr-9 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-50 shadow-sm backdrop-blur-sm cursor-pointer transition-all duration-200 hover:bg-white dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef7f7] dark:focus-visible:ring-offset-[#0f1117]"
              >
                {availableCategories.map((option) => (
                  <option key={option.id} value={option.id}>
                    {(filterLabels[option.id] ?? option.label)} ({categoryCounts[option.id] ?? 0})
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500" aria-hidden="true">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex w-full items-end gap-2 sm:contents">
            <div className="min-w-0 flex-1 sm:min-w-0 sm:flex-1">
              <label htmlFor="project-sort" className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 truncate">
                {t('portfolio.sortLabel')}
              </label>
              <div className="relative">
                <select
                  id="project-sort"
                  value={activeSort}
                  onChange={(event) => handleSortChange(event.target.value as SortOption['id'])}
                  className="w-full min-w-0 appearance-none rounded-2xl border border-gray-200/70 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 px-3 py-2.5 pr-9 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-50 shadow-sm backdrop-blur-sm cursor-pointer transition-all duration-200 hover:bg-white dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef7f7] dark:focus-visible:ring-offset-[#0f1117]"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {sortOptionLabels[option.id]}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500" aria-hidden="true">
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
          </div>
        </div>

        {/* Desktop filters */}
        <div className="hidden lg:flex w-full flex-col xl:flex-row items-start xl:items-end justify-start xl:justify-between gap-4 xl:gap-6">
          <div className="inline-flex min-w-max items-center gap-2 rounded-2xl border border-gray-200/70 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/60 shadow-sm p-2 backdrop-blur-sm">
            {availableCategories.map((option) => {
              const isActive = option.id === activeFilter;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleFilterChange(option.id)}
                  className={`cursor-pointer whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white/0 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  aria-pressed={isActive}
                >
                  {(filterLabels[option.id] ?? option.label)} ({categoryCounts[option.id] ?? 0})
                </button>
              );
            })}
          </div>
          <div className="flex shrink-0 items-center gap-3 text-sm text-gray-600 dark:text-gray-400 xl:self-auto self-end">
            <label htmlFor="project-sort-desktop" className="text-xs font-semibold text-gray-600 dark:text-gray-400">
              {t('portfolio.sortLabel')}
            </label>
            <div className="relative">
              <select
                id="project-sort-desktop"
                value={activeSort}
                onChange={(event) => handleSortChange(event.target.value as SortOption['id'])}
                className="appearance-none rounded-xl border border-gray-200/70 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/60 py-2 pl-3 pr-9 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm backdrop-blur-sm cursor-pointer transition-all duration-200 hover:bg-white dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef7f7] dark:focus-visible:ring-offset-[#0f1117]"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {sortOptionLabels[option.id]}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500" aria-hidden="true">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
        </div>
      </AnimatedSection>

      {/* Project grid */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10">
          {displayedProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              immediate={index < 2}
              delay={index < 2 ? 0 : index % 8 * 50}
              className={getGridSpan(index)}
            >

              <a
                href={projectUrl(project.id)}
                className={`group relative flex h-full w-full overflow-hidden md:rounded-[2.5rem] rounded-[1rem] bg-gray-200/50 dark:bg-gray-700/50 border border-white/30 dark:border-white/10 shadow-md max-md:shadow-xl md:shadow-sm md:hover:shadow-2xl transition-all duration-700 ease-in-out aspect-video md:aspect-square focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef7f7] dark:focus-visible:ring-offset-[#0f1117] ${getAspectRatio(index)}`}
                aria-label={`View project ${project.title}`}
              >
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} - ${localize(project.type)} - Portfolio project by Kevin Sovet`}
                  fill
                  priority={index < 3}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw"
                  className="w-full h-full object-cover transition-transform duration-1000 scale-105 md:scale-100 md:group-hover:scale-105"

                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12 text-white">
                  <div className="transform translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-500 mb-2 block">{localize(project.type)}</span>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">{project.title}</h3>
                    <div className="flex justify-between items-center border-t border-white/20 pt-4">
                      <span className="text-xs font-mono opacity-60">{formatProjectDisplayYear(project.date)}</span>
                      <span className="text-xs font-bold flex items-center gap-2 group/btn">
                        {t('portfolio.exploreStudy')} <span className="transition-transform translate-x-1 md:translate-x-0 md:group-hover/btn:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      )}

      {viewMode === 'list' && (
        <div className="flex flex-col divide-y divide-gray-200/60 dark:divide-gray-700/60">
          {displayedProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              immediate={index < 4}
              delay={index < 4 ? 0 : index % 8 * 30}
            >
              <a
                href={projectUrl(project.id)}
                className="group flex items-center gap-4 sm:gap-6 py-4 sm:py-5 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-2xl px-2 sm:px-4 -mx-2 sm:-mx-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/60"
                aria-label={`View project ${project.title}`}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden bg-gray-200/50 dark:bg-gray-700/50">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} - ${localize(project.type)}`}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-600 dark:text-cyan-400 mb-1 block">
                    {localize(project.type)}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-50 tracking-tight truncate">
                    {project.title}
                  </h3>
                  {project.category.length > 0 && (
                    <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                      {formatProjectCategories(project.category)}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                  <span className="text-xs sm:text-sm font-mono text-gray-400 dark:text-gray-500">
                    {formatProjectDisplayYear(project.date)}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    →
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      )}

      {sortedProjects.length > collapsedProjectsCount && (
        <div className="flex justify-center pt-12">
          <AnimatedSection>
            <button
              onClick={handleToggleExpand}
              className="px-10 py-5 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-3 group/btn cursor-pointer"
            >
              {isExpanded ? t('portfolio.seeLess') : t('portfolio.viewArchives')}
              <span className={`transition-transform duration-500 ${isExpanded ? 'rotate-180 group-hover/btn:-translate-y-1' : 'group-hover/btn:translate-y-1'}`}>↓</span>
            </button>
          </AnimatedSection>
        </div>
      )}
    </section>
  );
};

export default Portfolio;