"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';
import CtaButton from './ui/CtaButton';
import { COOKIE_PREFERENCES_UPDATED_EVENT, getCookiePreferences } from './CookieBanner';

const Contact: React.FC = () => {
  const t = useTranslations('contact');
  const [mapsAccepted, setMapsAccepted] = useState(false);

  useEffect(() => {
    setMapsAccepted(getCookiePreferences().maps);

    const syncMapsPreference = () => {
      setMapsAccepted(getCookiePreferences().maps);
    };

    window.addEventListener(COOKIE_PREFERENCES_UPDATED_EVENT, syncMapsPreference);
    return () => window.removeEventListener(COOKIE_PREFERENCES_UPDATED_EVENT, syncMapsPreference);
  }, []);

  return (
    <section className="px-6 md:px-24 md:py-24 py-16 space-y-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

        <AnimatedSection className="space-y-12 order-1">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-200 tracking-tighter">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
              {t('description')}{' '}
              <span className="text-gray-900 dark:text-gray-200 font-bold">{t('belgianBeer')}</span>{' '}
              {t('descriptionEnd')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                {t('location')}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{t('locationValue')}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                {t('email')}
              </h3>
              <a
                href="mailto:kevin.sovet@gmail.com"
                className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-200 premium-link"
              >
                kevin.sovet@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('bookingText')}
            </p>
            <CtaButton
              href="https://cal.com/kevin-sovet-qvfnxt/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('bookButton')}
            </CtaButton>
          </div>
        </AnimatedSection>

        <AnimatedSection className="order-2" delay={200}>
          <div className="relative group">
            <div className="relative h-[min(100vw,500px)] lg:h-auto lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl bg-white dark:bg-[#1a1d27] border border-gray-100/50 dark:border-gray-700/30 p-2 transition-all duration-700">
              {mapsAccepted ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13973.445712875604!2d4.862885029473817!3d50.46668581234004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sbe!4v1781105482341!5m2!1sfr!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '2.25rem' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kevin Sovet - Location Namur"
                  className="map-embed"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-gray-50 dark:bg-gray-800/50 rounded-[2.25rem] p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-200">{t('locationValue')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[200px] leading-relaxed">
                      {t('mapConsent')}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMapsAccepted(true)}
                    className="px-6 py-3 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-black dark:bg-gray-50/90 dark:text-gray-900 dark:hover:bg-white transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-2 group/btn"
                  >
                    {t('showMap')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover/btn:translate-y-[-2px]">
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                      <line x1="9" y1="3" x2="9" y2="18" />
                      <line x1="15" y1="6" x2="15" y2="21" />
                    </svg>
                  </button>
                </div>
              )}

              {mapsAccepted && (
                <div className="absolute top-10 right-10 bg-gray-900/90 dark:bg-gray-50/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl text-white dark:text-gray-900 pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Namur, BE</span>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-100/40 dark:bg-cyan-900/20 rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Contact;
