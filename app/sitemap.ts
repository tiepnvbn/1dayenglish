import type { MetadataRoute } from 'next';
import { getSlugs } from '@/sanity/lib/queries';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getSlugs();
  return [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, changeFrequency: 'daily', priority: 0.8 },
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.publishedAt, priority: 0.6 })),
  ];
}
