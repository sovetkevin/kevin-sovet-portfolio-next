import { PROJECTS_DATA, PROJECT_FILTER_OPTIONS } from '@/data/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProjectPage from '@/components/ProjectPage';

export async function generateStaticParams() {
    return PROJECTS_DATA.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata(
    { params, searchParams }: {
      params: Promise<{ id: string }>;
      searchParams: Promise<{ from?: string; sort?: string }>;
    }
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
            url: project.thumbnail,
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
        images: [project.thumbnail],
      },
    };
  }

export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ from?: string; sort?: string }>;
}) {
    const { id } = await params;
    const { from, sort } = await searchParams;

    const filterOption = PROJECT_FILTER_OPTIONS.find((o) => o.id === from);
    const filteredList = filterOption?.categories?.length
        ? PROJECTS_DATA.filter((p) =>
            filterOption.categories!.some((cat) => p.category.includes(cat))
        )
        : PROJECTS_DATA;

    // Appliquer le tri
    const MONTH_INDEX: Record<string, number> = {
        january: 1, jan: 1, february: 2, feb: 2, march: 3, mar: 3,
        april: 4, apr: 4, may: 5, june: 6, jun: 6, july: 7, jul: 7,
        august: 8, aug: 8, september: 9, sept: 9, sep: 9,
        october: 10, oct: 10, november: 11, nov: 11, december: 12, dec: 12,
    };

    const extractDateValue = (date: string): number => {
        const yearMatches = date.match(/\d{4}/g);
        if (!yearMatches) return 0;
        const year = parseInt(yearMatches[0], 10);
        const normalized = date.toLowerCase().replace(/\./g, ' ').replace(/-/g, ' ');
        const month = normalized.split(/\s+/).map(t => MONTH_INDEX[t]).find(Boolean) ?? 0;
        return year * 100 + month;
    };

    const sortedList = [...filteredList].sort((a, b) => {
        if (sort === 'oldest') return extractDateValue(a.date) - extractDateValue(b.date);
        if (sort === 'title-asc') return a.title.localeCompare(b.title);
        if (sort === 'title-desc') return b.title.localeCompare(a.title);
        return extractDateValue(b.date) - extractDateValue(a.date); // latest (default)
    });

    const projectIndex = sortedList.findIndex((p) => p.id === id);
    if (projectIndex === -1) notFound();

    const totalProjects = sortedList.length;
    const prevId = sortedList[(projectIndex - 1 + totalProjects) % totalProjects].id;
    const nextId = sortedList[(projectIndex + 1) % totalProjects].id;
    const activeFilter = from ?? 'all';
    const activeSort = sort ?? 'latest';

    return (
        <ProjectPage
            project={sortedList[projectIndex]}
            projectIndex={projectIndex}
            totalProjects={totalProjects}
            prevId={prevId}
            nextId={nextId}
            activeFilter={activeFilter}
            activeSort={activeSort}
        />
    );
}