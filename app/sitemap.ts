import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/data/constants';

const baseUrl = 'https://by-sovet.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          fr: `${baseUrl}/fr`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
  ];

  const projectPages = PROJECTS_DATA.flatMap((project) => [
    {
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/projects/${project.id}`,
          fr: `${baseUrl}/fr/projects/${project.id}`,
          'x-default': `${baseUrl}/projects/${project.id}`,
        },
      },
    },
  ]);

  return [...staticPages, ...projectPages];
}
