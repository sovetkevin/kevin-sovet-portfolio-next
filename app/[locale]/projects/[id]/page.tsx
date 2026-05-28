import { PROJECTS_DATA } from '@/data/constants';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProjectPage from '@/components/ProjectPage';
import { resolveLocalizedValue } from '@/utils/localization';

export async function generateStaticParams() {
  const locales = ['en', 'fr'] as const;

  return locales.flatMap((locale) =>
    PROJECTS_DATA.map((project) => ({
      locale,
      id: project.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr'; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);
  if (!project) return {};

  const projectDescription = resolveLocalizedValue(project.description, locale);
  const shortDescription =
    projectDescription.length > 120 ? projectDescription.slice(0, 120).trimEnd() + '...' : projectDescription;

  const routePath = locale === 'fr' ? `/fr/projects/${project.id}` : `/projects/${project.id}`;

  return {
    title: `${project.title} — Portfolio Kevin Sovet`,
    description: shortDescription,
    metadataBase: new URL('https://by-sovet.me'),
    alternates: {
      canonical: routePath,
    },
    openGraph: {
      title: `${project.title} — Portfolio Kevin Sovet`,
      description: shortDescription,
      url: `https://by-sovet.me${routePath}`,
      siteName: 'Kevin Sovet Portfolio',
      images: [
        {
          url: `https://by-sovet.me${routePath}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Portfolio Kevin Sovet`,
      description: shortDescription,
      images: [`https://by-sovet.me${routePath}/opengraph-image`],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr'; id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fcfdfd] dark:bg-[#0f1117]" />}>
      <ProjectPage project={project} />
    </Suspense>
  );
}