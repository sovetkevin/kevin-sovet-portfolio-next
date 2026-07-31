"use client";
import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import CtaButton from './ui/CtaButton';
import { RECOMMENDATIONS_DATA } from '@/data/constants';
import { useLocalizedValue } from '@/utils/localization';
import { parseMonthYearLabel } from '@/utils/projectDate';

const Recommendations: React.FC = () => {
  const t = useTranslations('recommendations');
  const locale = useLocale();
  const localize = useLocalizedValue();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const formatRecommendationDate = (value: string) => {
    const localeCode = locale === 'fr' ? 'fr-FR' : 'en-US';

    if (/^\d{4}$/.test(value)) return value;

    const parsed = parseMonthYearLabel(value);
    if (!parsed) return value;

    const date = new Date(parsed.year, parsed.monthIndexZeroBased, 1);
    return new Intl.DateTimeFormat(localeCode, { month: 'long', year: 'numeric' }).format(date);
  };

  const toRecommendationDateTime = (value: string) => {
    const parsed = parseMonthYearLabel(value);
    if (!parsed) return value;

    const month = String(parsed.monthIndexZeroBased + 1).padStart(2, '0');
    return `${parsed.year}-${month}`;
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="recommendations" className="px-6 md:px-24 py-16 md:py-24 relative" aria-label="Professional recommendations and testimonials">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#eef7f7] to-white dark:from-[#0f1117] dark:to-[#1a1d27] -z-10 rounded-bl-[100px]"></div>

      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="md:mb-20 mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-200 mb-8 tracking-tighter">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
            {t('description')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 items-start">
        {RECOMMENDATIONS_DATA.map((rec, index) => (
          <AnimatedSection key={rec.id} delay={index * 100} className="h-full">
            <article 
              onClick={() => toggleExpand(rec.id)}
              className="group relative flex flex-col p-8 md:p-10 md:pb-8 rounded-[2.5rem] bg-white dark:bg-[#1a1d27] border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-700 cursor-pointer overflow-hidden h-full"
            >
              {/* Header */}
              <header className="flex items-center gap-5 mb-4">
                <div className="relative">
                  {rec.linkedin ? (
                    <a 
                      href={rec.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="block w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-gray-200 dark:from-gray-600 to-transparent hover:from-cyan-200 hover:to-cyan-100 transition-all duration-300"
                      aria-label={t('viewLinkedin', { name: rec.name })}
                    >
                      <Image 
                        src={rec.image} 
                        alt={`Professional headshot photo of ${rec.name}, ${rec.role} at ${rec.company} - Testimonial recommendation for Kevin Sovet`}
                        title={`${rec.name} - ${rec.role} at ${rec.company}`}
                        width={80}
                        height={80}
                        className="w-full h-full rounded-full object-cover border-2 border-white dark:border-[#1a1d27]" 
                      />
                    </a>
                  ) : (
                    <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-gray-200 dark:from-gray-600 to-transparent">
                      <Image 
                        src={rec.image} 
                        alt={`Professional headshot photo of ${rec.name}, ${rec.role} at ${rec.company} - Testimonial recommendation for Kevin Sovet`}
                        title={`${rec.name} - ${rec.role} at ${rec.company}`}
                        width={80}
                        height={80}
                        className="w-full h-full rounded-full object-cover border-2 border-white dark:border-[#1a1d27]" 
                      />
                    </div>
                  )}
                  {/* Quote Icon Badge */}
                  <div className="absolute -bottom-0 -right-0 bg-cyan-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-[20px] pt-1 shadow-sm" aria-hidden="true">
                    ❝
                  </div>
                </div>
                <div>
                  {rec.linkedin ? (
                    <a 
                      href={rec.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-xl text-gray-900 dark:text-gray-200 leading-tight hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {rec.name}
                    </a>
                  ) : (
                    <h3 className="font-bold text-xl text-gray-900 dark:text-gray-200 leading-tight">{rec.name}</h3>
                  )}
                  <p className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-[0.2em] mt-1">
                    {rec.role} @ {rec.company}
                  </p>
                </div>
              </header>
              
              {/* Content with Expand Logic */}
              <div className="relative flex-grow">
                {/* Large decorative quote mark */}
                <span className="absolute -top-4 -left-2 text-6xl text-gray-100 dark:text-gray-800 font-serif opacity-50 z-0" aria-hidden="true">"</span>
                
                <blockquote 
                  className={`relative z-10 text-md leading-relaxed text-gray-600 dark:text-gray-400 font-light transition-all duration-700 ease-in-out overflow-hidden ${expandedId === rec.id ? 'mb-4' : ''}`}
                  style={{ maxHeight: expandedId === rec.id ? '1000px' : '64px' }}
                  dangerouslySetInnerHTML={{ __html: localize(rec.quote).replace(/<br\s*\/?>/gi, '<br />') }}
                />
                
                {/* Gradient Fade at bottom when collapsed */}
                {expandedId !== rec.id && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/100 via-white/80 via-white/40 to-transparent dark:from-[#1a1d27] dark:via-[#1a1d27]/80 dark:via-[#1a1d27]/40 pointer-events-none z-20"
                  ></div>
                )}
              </div>

              {/* Action */}
              <footer className="pt-6 mt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center mt-auto">
                <time className="text-xs font-mono text-gray-500" dateTime={toRecommendationDateTime(rec.date)}>
                  {formatRecommendationDate(rec.date)}
                </time>
                <button 
                  type="button"
                  className="text-xs font-bold flex items-center gap-2 group/btn cursor-pointer bg-transparent border-none p-0"
                  aria-label={expandedId === rec.id ? t('collapseRecommendation', { name: rec.name }) : t('expandRecommendation', { name: rec.name })}
                  aria-expanded={expandedId === rec.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(rec.id);
                  }}
                >
                  <span className="transition-colors text-gray-500 group-hover/btn:text-cyan-600">
                    {expandedId === rec.id ? t('readLess') : t('readMore')}
                  </span>
                  <span className={`transition-all text-gray-500 group-hover/btn:text-cyan-600 ${expandedId === rec.id ? 'rotate-180 group-hover/btn:-translate-y-1' : 'group-hover/btn:translate-y-1'}`} aria-hidden="true">
                    ↓
                  </span>
                </button>
              </footer>
            </article>
          </AnimatedSection>
        ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection className="md:mt-20 mt-12  text-center">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-200 tracking-tight">
                {t('ctaTitle')}
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {t('ctaDescription')}
              </p>
            </div>
            <CtaButton href="mailto:kevin.sovet@gmail.com?subject=Recommendation%20for%20Kevin%20Sovet" size="lg">
              {t('ctaButton')}
            </CtaButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Recommendations;
