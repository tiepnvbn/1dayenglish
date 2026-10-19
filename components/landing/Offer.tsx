import Countdown from './Countdown';

// 7. Ưu đãi và khan hiếm
export default function Offer() {
  return (
    <section className="py-14 bg-sun/20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy">Ưu đãi dùng thử kết thúc sau</h2>
        <Countdown />
        <div className="mt-6 bg-white rounded-3xl p-6 shadow-lg border-2 border-cta">
          <p className="text-slate-500">Giá gốc <span className="line-through text-xl font-bold">199.000đ</span></p>
          <p className="text-5xl font-extrabold text-cta mt-1">0đ</p>
          <p className="text-sm text-slate-600 mt-1">Giá dùng thử cho 20 học viên đăng ký sớm nhất</p>
          <div className="mt-4 h-3 bg-slate-100 rounded-full overflow-hidden"><div className="h-full w-[85%] bg-cta rounded-full" /></div>
          <p className="text-sm font-semibold text-ctaDark mt-2">Đã có 85% suất được giữ chỗ</p>
          <a href="#dang-ky" className="btn-cta mt-5 block text-center text-white font-bold text-lg px-6 py-4 rounded-2xl">Giữ suất 0đ của tôi</a>
        </div>
      </div>
    </section>
  );
}
