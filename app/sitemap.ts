import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/data/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://by-sovet.me';

  const projectUrls = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}