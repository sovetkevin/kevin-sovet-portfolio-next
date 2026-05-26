
import React from 'react';

const LAST_PROD_UPDATE = 'May 26, 2026';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-24 py-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-24 gap-8">
      <div className="order-1 md:order-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-600 text-sm leading-relaxed max-w-sm">
        <span>© 2026 Kevin Sovet</span>
        <span className="opacity-50">·</span>
        <a
          href="/files/resume_sovetkevin.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition-colors"
        >
          My resume
        </a>
      </div>
      <div className="order-3 md:order-2 text-xs text-gray-600 text-center">
        <span>Latest update on </span>
        <time dateTime="2026-05-26">{LAST_PROD_UPDATE}</time>
      </div>
      <div className="order-2 md:order-3 flex gap-8 text-gray-600 text-sm leading-relaxed max-w-sm">
        <a href="mailto:kevin.sovet@gmail.com" className="hover:text-gray-900 transition-colors">Email</a>
        <a href="https://www.linkedin.com/in/kevinsovet/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
