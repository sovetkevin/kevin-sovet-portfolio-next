"use client";

import React from 'react';

type TooltipProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

/** Wraps a trigger element with a hover tooltip bubble, matching the app's existing tooltip style. */
export default function Tooltip({ label, children, className = '' }: TooltipProps) {
  return (
    <span className={`group relative inline-flex ${className}`}>
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1.5 text-[10px] font-bold text-white shadow-lg transition-all duration-200 dark:bg-gray-50 dark:text-gray-900 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        {label}
        <span
          className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-50"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
