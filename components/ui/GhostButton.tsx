"use client";

import React from 'react';

type GhostButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
  title?: string;
};

const CLASSNAME =
  'px-4 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white/95 dark:hover:bg-gray-800/95 border border-gray-100/50 dark:border-gray-700/50 hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] active:scale-95 flex items-center gap-2 group/btn cursor-pointer';

/** Light/translucent pill button — the "ghost" counterpart to CtaButton's dark pill. */
export default function GhostButton({ href, onClick, children, className = '', ...rest }: GhostButtonProps) {
  const classes = `${CLASSNAME} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
