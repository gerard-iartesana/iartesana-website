import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iartesana.com';
  const routes = [
    '',
    '/base-digital',
    '/ia-aplicada',
    '/seguridad-control',
    '/acompanamiento',
    '/diagnostico',
    '/agendar',
    '/legal',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
