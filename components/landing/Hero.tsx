// 1. Hero: tiêu đề, khung ảnh/video, nút CTA
export default function Hero() {
  return (
    <section className="bg-navy text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="inline-block bg-sun text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">Chỉ còn 20 suất trong tháng này</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Chỉ 1 ngày để biết tiếng Anh của bạn <span className="text-sun">có thể đi xa đến đâu</span>
          </h1>
          <p className="mt-4 text-sky/90 text-base md:text-lg max-w-md">
            01 Ngày Trải Nghiệm: học thật với mentor IELTS 7.5+, nhận lộ trình riêng cho bạn. Hoàn toàn miễn phí, không ràng buộc.
          </p>
          <a href="#dang-ky" className="btn-cta mt-6 block md:inline-block text-center text-white font-bold text-lg px-8 py-4 rounded-2xl">Đăng ký ngay</a>
          <p className="mt-3 text-xs text-sky/70">Đã có hơn 3.200 người trải nghiệm. Không cần thẻ, không phí ẩn.</p>
        </div>
        {/* Chỗ đặt ảnh/video: thay bằng <video> hoặc next/image */}
        <div className="relative">
          <div className="aspect-video md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand to-sky/30 border-4 border-white/20 flex items-center justify-center">
            <button type="button" aria-label="Phát video giới thiệu" className="w-20 h-20 rounded-full bg-sun text-navy flex items-center justify-center shadow-xl">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </button>
          </div>
          <div className="absolute -bottom-4 -left-2 bg-white text-navy rounded-2xl px-4 py-2 shadow-lg text-sm font-bold">4.9/5 từ 1.800 đánh giá</div>
        </div>
      </div>
    </section>
  );
}
