"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export const STORAGE_KEY = 'cookies-preferences';
const CLARITY_PROJECT_ID = 'x1t0iefjtj';
export const COOKIE_PREFERENCES_UPDATED_EVENT = 'cookies-preferences-updated';
export const OPEN_COOKIE_PREFERENCES_EVENT = 'open-cookie-preferences';

export type CookiePreferences = {
  analytics: boolean;
  maps: boolean;
};

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') return { analytics: false, maps: false };
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { analytics: false, maps: false };
  try {
    return JSON.parse(stored) as CookiePreferences;
  } catch {
    return { analytics: false, maps: false };
  }
};

const loadClarity = () => {
  if (typeof window === 'undefined') return;
  if (window.clarity) return;

  (function (c: Window, l: Document, a: string, r: string, i: string) {
    type ClarityStub = { (...args: unknown[]): void; q?: unknown[] };
    const w = c as Window & Record<string, ClarityStub | undefined>;
    w[a] =
      w[a] ||
      function (...args: unknown[]) {
        (w[a]!.q = w[a]!.q || []).push(args);
      };

    const script = l.createElement('script');
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${i}`;
    const firstScript = l.getElementsByTagName(r)[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
};

const CheckIcon = ({ muted = false }: { muted?: boolean }) => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path
      d="M1 4L3.5 6.5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={muted ? 'text-gray-400 dark:text-gray-500' : 'text-white dark:text-gray-900'}
    />
  </svg>
);

export default function CookieBanner() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<'banner' | 'preferences'>('banner');
  const [prefs, setPrefs] = useState<CookiePreferences>({ analytics: false, maps: false });

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      const savedPrefs = getCookiePreferences();
      if (savedPrefs.analytics) loadClarity();
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setPrefs(getCookiePreferences());
      setView('preferences');
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handler);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handler);
  }, []);

  const saveAndClose = (analytics: boolean, maps: boolean) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics, maps }));
    if (analytics) loadClarity();
    window.dispatchEvent(new Event(COOKIE_PREFERENCES_UPDATED_EVENT));
    setVisible(false);
    setView('banner');
  };

  const handleAcceptAll = () => saveAndClose(true, true);
  const handleDeclineAll = () => saveAndClose(false, false);
  const handleSavePreferences = () => saveAndClose(prefs.analytics, prefs.maps);

  const openPreferences = () => {
    setPrefs(getCookiePreferences());
    setView('preferences');
  };

  const handleBackFromPreferences = () => {
    const hasStoredPreferences = localStorage.getItem(STORAGE_KEY) !== null;
    if (hasStoredPreferences) {
      setVisible(false);
    }
    setView('banner');
  };

  const savedPrefs = getCookiePreferences();
  const hasPreferenceChanges =
    prefs.analytics !== savedPrefs.analytics || prefs.maps !== savedPrefs.maps;

  if (!mounted || !visible) return null;

  if (view === 'preferences') {
    return (
      <div className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
        <div className="bg-white dark:bg-[#1a1d27] rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-full max-w-lg p-6 space-y-6">
          <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{t('cookies.preferencesTitle')}</p>

          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{t('cookies.necessary')}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('cookies.necessaryDesc')}</p>
              <p className="text-[10px] pt-2 font-bold uppercase tracking-[0.15em] text-cyan-600 dark:text-gray-500">
                {t('cookies.alwaysActive')}
              </p>
            </div>
            <div className="w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center cursor-not-allowed border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
              <CheckIcon muted />
            </div>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setPrefs((p) => ({ ...p, analytics: !p.analytics }));
              }
            }}
            className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 cursor-pointer hover:border-gray-200 dark:hover:border-gray-600 transition-all"
          >
            <div className="flex-1 space-y-1">
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{t('cookies.analytics')}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('cookies.analyticsDesc')}</p>
            </div>
            <div
              className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                prefs.analytics
                  ? 'bg-gray-900 dark:bg-gray-50 border-gray-900 dark:border-gray-50'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              {prefs.analytics && <CheckIcon />}
            </div>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => setPrefs((p) => ({ ...p, maps: !p.maps }))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setPrefs((p) => ({ ...p, maps: !p.maps }));
              }
            }}
            className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 cursor-pointer hover:border-gray-200 dark:hover:border-gray-600 transition-all"
          >
            <div className="flex-1 space-y-1">
              <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{t('cookies.maps')}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t('cookies.mapsDesc')}</p>
            </div>
            <div
              className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                prefs.maps
                  ? 'bg-gray-900 dark:bg-gray-50 border-gray-900 dark:border-gray-50'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              {prefs.maps && <CheckIcon />}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSavePreferences}
              disabled={!hasPreferenceChanges}
              className={`px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                hasPreferenceChanges
                  ? 'bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 hover:bg-black dark:hover:bg-white cursor-pointer'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              }`}
            >
              {t('cookies.save')}
            </button>
            <button
              type="button"
              onClick={handleBackFromPreferences}
              className="px-4 py-3 rounded-xl text-xs font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:text-gray-900 dark:hover:text-gray-50 transition-all cursor-pointer"
            >
              {t('cookies.back')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] w-[calc(100%-3rem)] max-w-xl">
      <div className="bg-white dark:bg-[#1a1d27] rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-bold text-gray-900 dark:text-gray-50">{t('cookies.title')}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t('cookies.description')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 hover:bg-black dark:hover:bg-white transition-all cursor-pointer"
          >
            {t('cookies.acceptAll')}
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-gray-50 transition-all cursor-pointer"
          >
            {t('cookies.customize')}
          </button>
          <button
            type="button"
            onClick={handleDeclineAll}
            className="px-4 py-2 rounded-xl text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-all cursor-pointer"
          >
            {t('cookies.declineAll')}
          </button>
        </div>
      </div>
    </div>
  );
}
