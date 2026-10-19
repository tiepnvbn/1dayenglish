import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const font = Be_Vietnam_Pro({ subsets: ['vietnamese', 'latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-be-vietnam' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: '01 Ngày Trải Nghiệm Tiếng Anh – Học thử 0đ', template: '%s | EngDay' },
  description: 'Một ngày học thử tiếng Anh cùng mentor IELTS 7.5+. Lấy lại cảm hứng, có lộ trình rõ ràng. Đăng ký miễn phí.',
  openGraph: { type: 'website', locale: 'vi_VN', siteName: 'EngDay' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${font.variable} font-sans text-slate-800 bg-white antialiased`}>{children}</body>
    </html>
  );
}
