import { PROJECTS_DATA } from '@/data/constants';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProjectPage from '@/components/ProjectPage';

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);
  if (!project) return {};

  const shortDescription = project.description.length > 120
    ? project.description.slice(0, 120).trimEnd() + '...'
    : project.description;

  return {
    title: `${project.title} — Portfolio Kevin Sovet`,
    description: shortDescription,
    metadataBase: new URL('https://by-sovet.me'),
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Portfolio Kevin Sovet`,
      description: shortDescription,
      url: `https://by-sovet.me/projects/${project.id}`,
      siteName: 'Kevin Sovet Portfolio',
      images: [
        {
          url: `https://by-sovet.me/projects/${project.id}/opengraph-image`,
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
      images: [`https://by-sovet.me/projects/${project.id}/opengraph-image`],
    },
  };
}

export default async function Page(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fcfdfd]" />}>
      <ProjectPage project={project} />
    </Suspense>
  );
}