"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { playLocaleSwell } from "@/utils/uiSounds";

const BASE_BUTTON_CLASS =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border cursor-pointer [-webkit-tap-highlight-color:transparent] transition-[color,background-color,box-shadow] duration-300 active:scale-95";

const VARIANT_CLASS = {
  normal:
    "border-transparent bg-transparent shadow-none text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400",
  bubble:
    "border-white/40 dark:border-gray-700/40 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-800 dark:text-gray-100 shadow-lg",
} as const;

export function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

type ThemeToggleProps = {
  className?: string;
  variant?: keyof typeof VARIANT_CLASS;
};

/** Shared across all ThemeToggle instances (header has several). */
let themeTransitionLock = false;

function clearRevealVars(root: HTMLElement) {
  root.style.removeProperty("--reveal-x");
  root.style.removeProperty("--reveal-y");
  root.style.removeProperty("--reveal-r");
  root.style.removeProperty("--reveal-old-bg");
}

export function useThemeRevealToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (themeTransitionLock) return;

      playLocaleSwell(isDark ? "up" : "down");

      const nextTheme = isDark ? "light" : "dark";
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const doc = document as Document & {
        startViewTransition?: (cb: () => void) => ViewTransition;
        activeViewTransition?: ViewTransition | null;
      };

      if (!doc.startViewTransition || reduceMotion || doc.activeViewTransition) {
        setTheme(nextTheme);
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const maxRadius =
        Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        ) + 180;

      const root = document.documentElement;
      root.style.setProperty("--reveal-x", `${x}px`);
      root.style.setProperty("--reveal-y", `${y}px`);
      root.style.setProperty("--reveal-r", `${maxRadius}px`);
      root.style.setProperty(
        "--reveal-old-bg",
        getComputedStyle(document.body).backgroundColor,
      );

      themeTransitionLock = true;

      let transition: ViewTransition;
      try {
        transition = doc.startViewTransition(() => {
          flushSync(() => {
            setTheme(nextTheme);
          });
        });
      } catch {
        themeTransitionLock = false;
        clearRevealVars(root);
        setTheme(nextTheme);
        return;
      }

      const release = () => {
        themeTransitionLock = false;
        clearRevealVars(root);
      };

      void transition.ready.catch(() => {});
      void transition.finished.then(release, release);
    },
    [isDark, setTheme],
  );

  return { mounted, isDark, toggleTheme };
}

export default function ThemeToggle({ className = "", variant = "bubble" }: ThemeToggleProps) {
  const { mounted, isDark, toggleTheme } = useThemeRevealToggle();

  const buttonClass = `${BASE_BUTTON_CLASS} ${VARIANT_CLASS[variant]} ${className}`;

  if (!mounted) {
    return <div className={buttonClass} aria-hidden="true" tabIndex={-1} />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={buttonClass}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
