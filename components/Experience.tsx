"use client";
import React, { useState, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCE_DATA } from '@/data/constants';
import { linkify } from '@/utils/linkify';

const Experience: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedDetails, setExpandedDetails] = useState<{ [key: number]: boolean }>({});
  const sectionRef = useRef<HTMLElement>(null);
  
  const visibleExperiences = isExpanded 
    ? EXPERIENCE_DATA 
    : EXPERIENCE_DATA.slice(0, 5);

  const handleToggleExpand = () => {
    const wasExpanded = isExpanded;
    setIsExpanded(!isExpanded);
    
    // Si on réduit le contenu, scroll vers le haut de la section
    if (wasExpanded && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="px-6 md:px-24 md:py-24 py-16 md:space-y-24 space-y-12">
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-1 gap-12">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tighter md:col-span-2">
        Over a decade, I have been building bridges between human emotion and technological innovation.
        </h2>
        <div className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light md:col-span-1 md:self-end">
          <ul className="space-y-4">
            <li className="group flex items-start gap-4">
              <span className="mt-4 h-[2px] w-10 bg-gray-300 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-500" />
              <p className="w-auto">
                <span className="text-gray-900 font-bold">10+ years</span> of experience navigating the intersection of human emotion, design, business, and tech.
              </p>
            </li>
            <li className="group flex items-start gap-4">
              <span className="mt-4 h-[2px] w-10 bg-gray-300 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-500" />
              <p className="w-auto">
                <span className="text-gray-900 font-bold">Leading cross-functional teams</span> of all sizes, fostering collaboration to reach collective excellence.
              </p>
            </li>
            <li className="group flex items-start gap-4">
              <span className="mt-4 h-[2px] w-10 bg-gray-300 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-500" />
              <p className="w-auto">
                <span className="text-gray-900 font-bold">Partnering with diverse industries</span>, helping both niche startups and major groups hit their strategic milestones.
              </p>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <div className="relative pt-12">
        <div className="absolute left-[34px] lg:left-[427px] top-0 bottom-0 w-[1px] bg-gray-200"></div>
        
        <div className="space-y-24">
          {visibleExperiences.map((item, index) => {
            const hasDetails = item.bottomLine || item.valueAdd || item.website;

            return (
              <AnimatedSection key={index} className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-16 items-start">
                <div className="flex flex-row justify-between items-center lg:flex-col lg:items-end lg:justify-start gap-2 pr-4 pt-2.5">
                  <span className="text-gray-500 font-mono text-sm">{item.year}</span>
                  {item.logo && item.logo.length > 0 && (
                    <div className="lg:flex flex-row lg:flex-col hidden items-center lg:items-end gap-2 lg:gap-3 lg:mt-2">
                      {item.logo.map((logoUrl, logoIndex) => (
                        <img
                          key={logoIndex}
                          src={logoUrl}
                          alt={`${item.company} company logo`}
                          className="h-10 w-auto  max-w-[180px] lg:h-20 object-contain object-right lg:object-center grayscale hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                          decoding="async"
                          width={180}
                          height={80}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative pl-12 lg:pl-0">
                  <div className="hidden lg:block absolute -left-[44px] top-3 w-4 h-4 rounded-full bg-[#eef7f7] border-2 border-gray-900 z-10 transition-transform group-hover:scale-125"></div>
                  
                  <div className="space-y-6 group">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight group-hover:text-cyan-600 transition-colors">
                      {item.role} <span className="font-light text-gray-500 tracking-normal">at</span> {item.company}
                    </h3>

                   

                    <p className="text-gray-600 leading-relaxed text-xl max-w-2xl font-light">
                      {linkify(item.description)}
                    </p>

                    
                    {item.subRoles && (
                      <div className="space-y-3">
                        {item.subRoles.map((sub, i) => (
                          <div key={i} className="flex gap-4 items-center">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-600 min-w-[80px] uppercase">{sub.year}</span>
                            <span className="text-gray-700 font-semibold">{sub.title}</span>
                          </div>
                        ))}
                      </div>
                    )}

{item.missionVia && (
                      <div className="flex gap-3 items-center text-sm">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-600 uppercase">
                          {item.missionVia.label}
                        </span>
                        <span className="text-gray-700 font-semibold">
                          {item.missionVia.company}
                        </span>
                      </div>
                    )}

                    {hasDetails && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDetails(prev => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                        className="text-xs font-bold flex items-center gap-2 group/btn cursor-pointer bg-transparent border-none p-0 mt-1"
                        aria-expanded={!!expandedDetails[index]}
                      >
                        <span className="transition-colors text-gray-500 group-hover/btn:text-cyan-600">
                          {expandedDetails[index] ? 'Less details' : 'More details'}
                        </span>
                        <span
                          className={`transition-all text-gray-500 group-hover/btn:text-cyan-600 ${
                            expandedDetails[index]
                              ? 'group-hover/btn:-translate-y-[1px]'
                              : 'group-hover/btn:translate-y-[1px]'
                          }`}
                          aria-hidden="true"
                        >
                          {expandedDetails[index] ? '−' : '+'}
                        </span>
                      </button>
                    )}
                    {hasDetails && expandedDetails[index] && (
                      <div className="bg-white/60 p-6 rounded-2xl border border-gray-100/60 shadow-sm max-w-2xl mt-6 space-y-4">
                        {item.bottomLine && (
                          <p className="text-gray-900 text-sm leading-relaxed">
                            <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 block mb-2">What I did</span> 
                            {item.bottomLine}
                          </p>
                        )}
                        {item.valueAdd && (
                          <p className="text-gray-900 text-sm leading-relaxed">
                            <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 block mb-2">Added value</span> 
                            {item.valueAdd}
                          </p>
                        )}
                        {item.website && (
                          <p className="text-gray-900 text-sm leading-relaxed">
                            <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 block mb-2">Website{item.website && Array.isArray(item.website) && item.website.length > 1 ? 's' : ''}</span> 
                            <div className="flex flex-wrap gap-3 items-center">
                              {(Array.isArray(item.website) ? item.website : [item.website]).map((url, index) => (
                                <a
                                  key={index}
                                  href={url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-900"
                                >
                                  {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                </a>
                              ))}
                            </div>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {EXPERIENCE_DATA.length > 5 && (
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-16 mt-24">
            <div className="hidden lg:block"></div>
            <div className="pl-12 lg:pl-0">
              <button 
                onClick={handleToggleExpand}
                className="px-10 py-5 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-3 group/btn"
              >
                <span
                  className={`transition-transform duration-500 ${
                    isExpanded ? 'rotate-180 group-hover/btn:-translate-y-1' : 'group-hover/btn:translate-y-1'
                  }`}
                >
                  ↓
                </span>
                {isExpanded ? 'Archive earlier years' : 'Reveal early career'}
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Experience;
