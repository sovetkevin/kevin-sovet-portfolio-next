"use client";
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const HERO_IMAGE = '/images/hero_picture.avif';
const HERO_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1200';

const Hero: React.FC = () => {
  const [heroImageSrc, setHeroImageSrc] = useState(HERO_IMAGE);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pl-6 md:pl-24 pr-6 pt-0">
      {/* Images réelles (au lieu de background-image) pour un meilleur LCP */}
      <img
        src={heroImageSrc}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-right lg:hidden"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        width={1800}
        height={1800}
        onError={() => setHeroImageSrc(HERO_IMAGE_FALLBACK)}
      />
      <img
        src={heroImageSrc}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-contain object-right lg:block"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        width={1800}
        height={1800}
        onError={() => setHeroImageSrc(HERO_IMAGE_FALLBACK)}
      />

      {/* Lisibilité du texte sur l’image */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#eef7f7] via-[#eef7f7]/92 to-[#eef7f7]/32 md:from-[#eef7f7]/95 md:via-[#eef7f7]/72 md:to-[#eef7f7]/22 lg:from-[#eef7f7]/65 lg:via-[#eef7f7]/12 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl py-12 md:py-24">
        <AnimatedSection>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-600">
              Hello, I'm Kevin,
            </span>
          </div>
          <div className="space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 max-w-2xl tracking-tight">
            Web & UI/UX Designer, Front-end Integration.{' '}
              <span className="hidden md:inline lg:text-5xl font-mono text-gray-500 font-medium italic">
                #FullStackDesigner
              </span>
            </h1>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-tight font-medium tracking-tight">
                Currently UX/UI Consultant for{' '}
                <a
                  href="https://www.tms-group.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-link font-bold"
                >
                  TMS Group
                </a>
                , I empower our partners by designing engaging interfaces that not only captivate
                users but also drive businesses toward their most ambitious goals.
              </p>
              <div className="flex flex-wrap gap-6 text-gray-600 font-medium">
                <a href="mailto:kevin.sovet@gmail.com" className="premium-link">
                  Email
                </a>
                <span className="opacity-50">/</span>
                <a
                  href="https://www.linkedin.com/in/kevinsovet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-link"
                >
                  LinkedIn
                </a>
                <span className="opacity-50">/</span>
                <a href="/files/resume_sovetkevin.pdf" target="_blank" className="premium-link">
                  My resume
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
