"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Project } from '@/data/types';
import { linkify } from '@/utils/linkify';
import ImageCarousel from './ImageCarousel';

interface ProjectPageProps {
    project: Project;
    projectIndex: number;
    totalProjects: number;
    prevId: string;
    nextId: string;
    activeFilter: string;
    activeSort: string;
}

const formatProjectDisplayYear = (date: string): string => {
    const yearMatches = date.match(/\d{4}/g);
    if (!yearMatches || yearMatches.length === 0) return date;
    return yearMatches[0];
};

const formatPosition = (value: number) => String(value).padStart(2, '0');

export default function ProjectPage({
    project,
    projectIndex,
    totalProjects,
    prevId,
    nextId,
    activeFilter,
    activeSort,
}: ProjectPageProps) {
    const router = useRouter();
    const isDevelopmentProject = project.category.includes('Development');

    const buildUrl = (id: string) => {
        const params = new URLSearchParams({
            ...(activeFilter !== 'all' && { from: activeFilter }),
            ...(activeSort !== 'latest' && { sort: activeSort }),
        });
        const query = params.toString();
        return `/projects/${id}${query ? `?${query}` : ''}`;
    };

    const backUrl = () => {
        const params = new URLSearchParams({
            ...(activeFilter !== 'all' && { category: activeFilter }),
            ...(activeSort !== 'latest' && { sort: activeSort }),
        });
        const query = params.toString();
        return `/${query ? `?${query}` : ''}#portfolio`;
    };

    // Navigation clavier
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                router.push(buildUrl(nextId));  // ← remplace l'ancien
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                router.push(buildUrl(prevId));  // ← remplace l'ancien
            }
            if (e.key === 'Escape') {
                router.push(backUrl());  // ← remplace l'ancien
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextId, prevId, router, activeFilter, activeSort]);

    return (
        <div className="min-h-screen bg-[#fcfdfd]">

            {/* Barre de navigation — fixed, alignée sur le container */}
            <div className="fixed top-0 left-0 right-0 z-50 px-8 md:px-24 py-6 flex items-center justify-between pointer-events-none">
                <button
                    onClick={() => router.push(backUrl())}
                    className="pointer-events-auto px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-white/95 border border-gray-100/50 hover:border-gray-100 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] active:scale-95 flex items-center gap-2 group/btn cursor-pointer"
                    aria-label="Back to portfolio"
                    title="Back to portfolio (Esc)"
                >
                    <span className="transition-transform duration-300 group-hover/btn:-translate-x-0.5 text-sm">←</span>
                    <span className="text-xs font-medium">
                        <span className="sm:hidden">Back</span>
                        <span className="hidden sm:inline">Back to gallery</span>
                    </span>
                </button>

                <div className="pointer-events-auto flex items-center gap-2">

                    <a href={buildUrl(prevId)}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-900 transition-all shadow-xl backdrop-blur-md active:scale-90 border border-black/5"
                        aria-label="Previous project"
                        title="Previous project (←)"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </a>
                    <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-black/5 px-3 py-2 text-xs font-mono tracking-[0.2em] text-gray-900">
                        {formatPosition(projectIndex + 1)}/{formatPosition(totalProjects)}
                    </span>

                    <a href={buildUrl(nextId)}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-900 transition-all shadow-xl backdrop-blur-md active:scale-90 border border-black/5"
                        aria-label="Next project"
                        title="Next project (→)"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </a>
                </div>
            </div>
            <div>
                {/* Hero image — démarre directement */}
                <div className="w-full h-[40vh] relative">
                    <img
                        src={project.thumbnail}
                        alt={`${project.title} - ${project.type}`}
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to top, #fcfdfd 40%, transparent 100%)'
                        }}
                    />
                    <div className="absolute bottom-12 left-8 md:left-24">
                        <span className="text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-2 block text-cyan-500">
                            {project.type}
                        </span>
                        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-gray-900">
                            {project.title}
                        </h1>
                    </div>
                </div>

                {/* Content */}
                <div className="px-8 md:px-24 py-8 pb-24 lg:flex lg:gap-24">
                    {/* Left column */}
                    <div className="lg:flex-1 space-y-20 lg:min-w-0">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                Main Goal
                            </h4>
                            <p className="text-3xl md:text-4xl font-medium text-gray-900 leading-[1.1] tracking-tighter">
                                {linkify(project.description)}
                            </p>
                        </div>

                        {project.content && (
                            <div className="space-y-8">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                    Methods
                                </h4>
                                <p className="text-xl text-gray-600 leading-relaxed font-light">
                                    {linkify(project.content)}
                                </p>
                            </div>
                        )}

                        {/* Images */}
                        {project.images && project.images.length > 0 && (
                            <div className="grid grid-cols-1 gap-16">
                                {project.images.map((img, i) => (
                                    <figure key={i}>
                                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100/50">
                                            <img
                                                src={img.url}
                                                alt={img.caption ?? `${project.title} project detail`}
                                                className="w-full h-auto hover:scale-105 transition-transform duration-1000"
                                                loading="lazy"
                                            />
                                        </div>
                                        {img.caption && (
                                            <figcaption className="mt-4 px-1 text-sm text-gray-600 font-light leading-relaxed text-center">
                                                {img.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                ))}
                            </div>
                        )}

                        {/* Content blocks */}
                        {project.contentBlocks?.map((block, blockIndex) => {
                            if (block.type === 'carousel') {
                                return (
                                    <div key={blockIndex} className="space-y-8">
                                        <ImageCarousel images={block.images} />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>

                    {/* Right column — sticky sidebar */}
                    <div className="lg:w-[380px] lg:shrink-0">
                        <div className="lg:sticky lg:top-24 space-y-8 bg-white p-10 rounded-[2.5rem] border border-gray-200/50">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Year</h4>
                                <p className="text-2xl font-mono text-gray-900">
                                    {formatProjectDisplayYear(project.date)}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Scope</h4>
                                <ul className="space-y-1">
                                    {project.scope.map((item, i) => (
                                        <li key={i} className="text-xl text-gray-900 font-bold">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {isDevelopmentProject && project.stack && project.stack.length > 0 && (
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tag, i) => (
                                            <span key={i} className="px-5 py-2 rounded-full bg-cyan-50/80 text-[10px] font-bold text-cyan-600 tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Focus</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.focus.map((tag, i) => (
                                        <span key={i} className="px-5 py-2 rounded-full bg-gray-100 text-[10px] font-bold text-gray-500 tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.website && (
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Website</h4>

                                    <a href={project.website.startsWith('http') ? project.website : `https://${project.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-cyan-700 hover:text-cyan-900 block break-all"
                                    >
                                        {project.website.startsWith('https://')
                                            ? project.website.slice(8)
                                            : project.website.startsWith('http://')
                                                ? project.website.slice(7)
                                                : project.website}
                                    </a>
                                </div>
                            )}

                            <button
                                onClick={() => router.push(backUrl())}
                                className="w-full py-5 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 group/btn cursor-pointer"
                            >
                                <span className="transition-transform group-hover/btn:-translate-x-1">←</span>
                                Back to gallery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}