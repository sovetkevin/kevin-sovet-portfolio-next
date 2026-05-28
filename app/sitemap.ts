import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/data/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://by-sovet.me';
  const locales = ['en', 'fr'] as const;

  const projectUrls = PROJECTS_DATA.flatMap((project) =>
    locales.map((locale) => ({
      url:
        locale === 'en'
          ? `${baseUrl}/projects/${project.id}`
          : `${baseUrl}/${locale}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}