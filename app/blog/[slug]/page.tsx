import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { getPost, getSlugs } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

type Props = { params: Promise<{ slug: string }> };

// Tạo sẵn các trang bài viết lúc build (SSG), bài mới vẫn được render theo yêu cầu
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

// Thẻ SEO: title, description, canonical, Open Graph, Twitter, noindex
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const image = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: post.noIndex ? { index: false, follow: false } : undefined,
    openGraph: { type: 'article', title, description, url: `/blog/${post.slug}`, publishedTime: post.publishedAt, images: image ? [{ url: image, width: 1200, height: 630 }] : undefined },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image src={urlFor(value).width(900).url()} alt={value.alt || ''} width={900} height={600} className="rounded-2xl my-6 w-full h-auto" />
    ),
  },
};

// Trang chi tiết bài viết
export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  // Dữ liệu có cấu trúc (JSON-LD) giúp Google hiểu đây là bài viết
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt,
    author: post.author ? { '@type': 'Person', name: post.author } : undefined,
    image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
  };

  return (
    <>
      <Header />
      <main>
        <article className="max-w-3xl mx-auto px-4 py-10 md:py-14">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">{post.title}</h1>
          <p className="mt-3 text-sm text-slate-500">
            {post.author && <span>{post.author} · </span>}
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</time>
          </p>
          {post.mainImage && (
            <Image src={urlFor(post.mainImage).width(1200).height(630).url()} alt={post.mainImage.alt || post.title} width={1200} height={630} priority className="rounded-2xl mt-6 w-full h-auto" />
          )}
          <div className="mt-8 space-y-4 leading-relaxed text-slate-700 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_a]:text-brand [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
            <PortableText value={post.body || []} components={components} />
          </div>
          <a href="/#dang-ky" className="btn-cta mt-10 block text-center text-white font-bold text-lg px-6 py-4 rounded-2xl">Đăng ký học thử miễn phí</a>
        </article>
      </main>
      <Footer />
    </>
  );
}
