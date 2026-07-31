import React from 'react';

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
      {children}
    </span>
  );
}
