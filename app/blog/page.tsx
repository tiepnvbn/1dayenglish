import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { getPosts } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export const metadata: Metadata = {
  title: 'Blog học tiếng Anh',
  description: 'Mẹo học tiếng Anh, phương pháp luyện IELTS và kinh nghiệm cho người đi làm từ đội ngũ mentor EngDay.',
  alternates: { canonical: '/blog' },
};

// Trang danh sách bài viết
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy">Blog học tiếng Anh</h1>
        {posts.length === 0 && <p className="mt-6 text-slate-600">Chưa có bài viết nào. Hãy đăng bài đầu tiên tại /studio.</p>}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p._id} className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
              <Link href={`/blog/${p.slug}`} className="block">
                {p.mainImage ? (
                  <Image src={urlFor(p.mainImage).width(640).height(360).url()} alt={p.mainImage.alt || p.title} width={640} height={360} className="w-full aspect-video object-cover" />
                ) : (
                  <div className="aspect-video bg-sky" />
                )}
                <div className="p-5">
                  <time dateTime={p.publishedAt} className="text-xs text-slate-500">{new Date(p.publishedAt).toLocaleDateString('vi-VN')}</time>
                  <h2 className="font-bold text-lg text-navy mt-1">{p.title}</h2>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-3">{p.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
