import React from 'react';

type SectionHeaderProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  headingClassName?: string;
};

export default function SectionHeader({ title, subtitle, headingClassName = 'mb-6' }: SectionHeaderProps) {
  return (
    <>
      <h2 className={`text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-200 tracking-tighter ${headingClassName}`}>
        {title}
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
        {subtitle}
      </p>
    </>
  );
}
