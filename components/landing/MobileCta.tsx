// Thanh CTA cố định đáy màn hình, chỉ hiện trên mobile
export default function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 p-3 flex items-center gap-3">
      <p className="text-xs leading-tight flex-1"><span className="line-through text-slate-400">199k</span> <b className="text-cta text-base">0đ</b><br />Học thử 1 ngày</p>
      <a href="#dang-ky" className="btn-cta text-white font-bold px-6 py-3 rounded-xl">Đăng ký ngay</a>
    </div>
  );
}
