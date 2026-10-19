import { client } from './client';

export type Post = {
  _id: string; title: string; slug: string; excerpt: string; author?: string; publishedAt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body?: any[]; seoTitle?: string; seoDescription?: string; noIndex?: boolean;
};

const fields = `_id, title, "slug": slug.current, excerpt, author, publishedAt, mainImage, seoTitle, seoDescription, noIndex`;

// ISR: dữ liệu được làm mới sau tối đa 60 giây, không cần build lại
const opts = { next: { revalidate: 60 } };

export const getPosts = () =>
  client.fetch<Post[]>(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${fields}}`, {}, opts);

export const getPost = (slug: string) =>
  client.fetch<Post | null>(`*[_type == "post" && slug.current == $slug][0]{${fields}, body}`, { slug }, opts);

export const getSlugs = () =>
  client.fetch<{ slug: string; publishedAt: string }[]>(`*[_type == "post" && defined(slug.current)]{"slug": slug.current, publishedAt}`, {}, opts);
