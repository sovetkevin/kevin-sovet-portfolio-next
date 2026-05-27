"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const BASE_BUTTON_CLASS =
  "inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border cursor-pointer outline-none ring-0 [-webkit-tap-highlight-color:transparent] transition-[color,background-color,box-shadow] duration-300 active:scale-95 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0";

const VARIANT_CLASS = {
  normal:
    "border-transparent bg-transparent shadow-none text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50",
  bubble:
    "border-white/40 dark:border-gray-700/40 bg-white/70 dark:bg-gray-800/70 custom-blur text-gray-800 dark:text-gray-100 shadow-lg",
} as const;

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
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

export default function ThemeToggle({ className = "", variant = "bubble" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const buttonClass = `${BASE_BUTTON_CLASS} ${VARIANT_CLASS[variant]} ${className}`;

  if (!mounted) {
    return <div className={buttonClass} aria-hidden="true" tabIndex={-1} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={buttonClass}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
