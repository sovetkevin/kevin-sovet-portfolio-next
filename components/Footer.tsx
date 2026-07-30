"use client";
import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { SpeakerHighIcon } from '@phosphor-icons/react/dist/csr/SpeakerHigh';
import { SpeakerXIcon } from '@phosphor-icons/react/dist/csr/SpeakerX';
import { OPEN_COOKIE_PREFERENCES_EVENT } from './CookieBanner';
import {
  areSoundsEnabled,
  playGalleryTick,
  setSoundsEnabled,
  UI_SOUNDS_CHANGED_EVENT,
} from '@/utils/uiSounds';

const LAST_PROD_UPDATE =
  process.env.NEXT_PUBLIC_SITE_LAST_UPDATE ?? new Date().toISOString().slice(0, 10);

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [soundsEnabled, setSoundsEnabledState] = useState(true);
  const formattedLastUpdate = new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${LAST_PROD_UPDATE}T00:00:00`));

  useEffect(() => {
    setSoundsEnabledState(areSoundsEnabled());

    const syncFromStorage = () => setSoundsEnabledState(areSoundsEnabled());
    const onSoundsChanged = (event: Event) => {
      const detail = (event as CustomEvent<{ enabled: boolean }>).detail;
      if (typeof detail?.enabled === 'boolean') {
        setSoundsEnabledState(detail.enabled);
      } else {
        syncFromStorage();
      }
    };

    window.addEventListener(UI_SOUNDS_CHANGED_EVENT, onSoundsChanged);
    window.addEventListener('storage', syncFromStorage);
    return () => {
      window.removeEventListener(UI_SOUNDS_CHANGED_EVENT, onSoundsChanged);
      window.removeEventListener('storage', syncFromStorage);
    };
  }, []);

  const toggleSounds = () => {
    const next = !soundsEnabled;
    setSoundsEnabled(next);
    setSoundsEnabledState(next);
    if (next) {
      playGalleryTick('next');
    }
  };

  const soundLabel = soundsEnabled ? t('muteSounds') : t('unmuteSounds');

  return (
    <footer className="px-6 md:px-24 py-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 mt-24 gap-8">
      <div className="order-1 md:order-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
        <span>© 2026 Kevin Sovet</span>
        <span className="opacity-50">·</span>
        <a
          href="/files/resume_sovetkevin.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
        >
          {t('resume')}
        </a>
      </div>
      <div className="order-3 md:order-2 text-xs text-gray-600 dark:text-gray-400 text-center">
        <span>{t('latestUpdate')} </span>
        <time dateTime={LAST_PROD_UPDATE}>{formattedLastUpdate}</time>
      </div>
      <div className="order-2 md:order-3 flex flex-wrap items-center gap-x-8 gap-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
        <a href="mailto:kevin.sovet@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">{t('email')}</a>
        <a href="https://www.linkedin.com/in/kevinsovet/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">{t('linkedin')}</a>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
          className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer bg-transparent border-none p-0 text-sm"
        >
          {t('cookiePreferences')}
        </button>
        <button
          type="button"
          onClick={toggleSounds}
          className="group relative inline-flex items-center justify-center rounded-lg p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer bg-transparent border-none"
          aria-label={soundLabel}
          aria-pressed={!soundsEnabled}
          title={soundLabel}
        >
          <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1.5 text-[10px] font-bold text-white shadow-lg transition-all duration-200 dark:bg-gray-50 dark:text-gray-900 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            {soundLabel}
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-50"
              aria-hidden="true"
            />
          </span>
          {soundsEnabled ? (
            <SpeakerHighIcon weight="fill" size={18} aria-hidden />
          ) : (
            <SpeakerXIcon weight="fill" size={18} aria-hidden />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
