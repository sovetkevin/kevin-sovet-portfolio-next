"use client";

import React from 'react';

type CtaButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  /** Custom trailing/leading icon. Pass `null` to render no icon at all. Defaults to an arrow. */
  icon?: React.ReactNode | null;
  iconPosition?: 'start' | 'end';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  target?: string;
  rel?: string;
  className?: string;
  type?: 'button' | 'submit';
  'aria-label'?: string;
};

const SIZE_CLASSNAME: Record<'md' | 'lg', string> = {
  md: 'px-8 py-4 shadow-lg hover:shadow-xl group/cta',
  lg: 'px-10 py-5 shadow-xl hover:shadow-2xl group/btn',
};

const BASE_CLASSNAME =
  'inline-flex items-center gap-3 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black dark:bg-gray-50/90 dark:text-gray-900 dark:hover:bg-white transition-all duration-300 active:scale-95 cursor-pointer';

// Written out as literal class strings (not interpolated) so Tailwind's static scanner picks them up.
const ARROW_ICON_CLASSNAME: Record<'md' | 'lg', Record<'start' | 'end', string>> = {
  md: {
    start: 'transition-transform group-hover/cta:-translate-x-1',
    end: 'transition-transform group-hover/cta:translate-x-1',
  },
  lg: {
    start: 'transition-transform group-hover/btn:-translate-x-1',
    end: 'transition-transform group-hover/btn:translate-x-1',
  },
};

export default function CtaButton({
  href,
  onClick,
  children,
  icon,
  iconPosition = 'end',
  size = 'md',
  fullWidth = false,
  target,
  rel,
  className = '',
  type = 'button',
  ...rest
}: CtaButtonProps) {
  const resolvedIcon =
    icon === null ? null : icon ?? (
      <span className={ARROW_ICON_CLASSNAME[size][iconPosition]} aria-hidden="true">
        {iconPosition === 'start' ? '←' : '→'}
      </span>
    );

  const classes = `${BASE_CLASSNAME} ${SIZE_CLASSNAME[size]} ${fullWidth ? 'w-full justify-center' : ''} ${className}`;

  const content = (
    <>
      {iconPosition === 'start' && resolvedIcon}
      <span>{children}</span>
      {iconPosition === 'end' && resolvedIcon}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
