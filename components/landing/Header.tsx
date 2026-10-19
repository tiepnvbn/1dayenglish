import Link from 'next/link';

// Thanh điều hướng
export default function Header() {
  return (
    <header className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-lg">Eng<span className="text-sun">Day</span></Link>
        <nav className="flex items-center gap-4 text-sm font-semibold">
          <Link href="/blog" className="hover:text-sun">Blog</Link>
          <a href="#dang-ky" className="hidden md:inline-block bg-sun text-navy px-4 py-2 rounded-full">Đăng ký học thử</a>
        </nav>
      </div>
    </header>
  );
}
