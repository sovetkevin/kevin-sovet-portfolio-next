"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const t = useTranslations('contact');
  const [mapsAccepted, setMapsAccepted] = useState(false);

  return (
    <section className="px-6 md:px-24 md:py-24 py-16 space-y-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

        {/* Contact Info */}
        <AnimatedSection className="space-y-12 order-1">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 tracking-tighter">{t('title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
              {t('description')}{' '}
              <span className="text-gray-900 dark:text-gray-50 font-bold"> {t('belgianBeer')} </span> {t('descriptionEnd')}
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">{t('location')}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">{t('locationValue')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">{t('email')}</h3>
                <a href="mailto:kevin.sovet@gmail.com" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 premium-link">
                  kevin.sovet@gmail.com
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">{t('call')}</h3>
                <a href="tel:+32472814262" className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 premium-link">
                  +32 (0)472 81 42 62
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('closingText')}
            </p>
          </div>
        </AnimatedSection>

        {/* Google Map avec consentement */}
        <AnimatedSection className="order-2 lg:order-2" delay={200}>
          <div className="relative group">
            <div className="relative h-[min(100vw,500px)] lg:h-auto lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl bg-white dark:bg-[#1a1d27] border border-gray-100/50 dark:border-gray-700/30 p-2 transition-all duration-700">

              {mapsAccepted ? (
                /* Carte chargée après consentement */
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20300.32424367375!2d4.821361718507817!3d50.46512398453472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c19962a9b34365%3A0xc07a8264d144e54e!2sNamur%2C%20Belgium!5e0!3m2!1sen!2sus!4v1708892123456!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '2.25rem' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kevin Sovet - Location Namur"
                  className="grayscale contrast-[1.1] brightness-[1.05] hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                /* Placeholder avant consentement */
                <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-gray-50 dark:bg-gray-800 rounded-[2.25rem] p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{t('locationValue')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 max-w-[200px] leading-relaxed">{t('mapConsent')}</p>
                  </div>
                  <button
                    onClick={() => setMapsAccepted(true)}
                    className="px-6 py-3 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-black dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-white transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-2 group/btn"
                  >
                    {t('showMap')}
                    <span className="transition-transform duration-500 group-hover/btn:translate-y-[-2px]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                        <line x1="9" y1="3" x2="9" y2="18" />
                        <line x1="15" y1="6" x2="15" y2="21" />
                      </svg>
                    </span>
                  </button>
                </div>
              )}

              {/* Overlay Label */}
              {mapsAccepted && (
                <div className="absolute top-10 right-10 bg-gray-900/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl text-white pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Namur, BE</span>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Shadow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-100/40 dark:bg-cyan-900/20 rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;