// 3. Giải pháp
const points = [
  ['Linh hoạt', 'chọn đúng 1 ngày phù hợp lịch của bạn.'],
  ['Hứng khởi', 'học bằng giao tiếp thật, không học vẹt.'],
  ['Rõ ràng', 'nhận bản lộ trình 90 ngày dành riêng cho bạn.'],
];

export default function Solution() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl bg-sky p-8 text-center order-2 md:order-1">
          <p className="text-6xl font-extrabold text-brand">1 ngày</p>
          <p className="mt-2 text-navy font-semibold">để thử trước, quyết định sau</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
            {['Học thật', 'Test trình độ', 'Lộ trình riêng'].map((t) => (
              <span key={t} className="bg-white rounded-full px-3 py-1 font-medium">{t}</span>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy">Một ngày đủ để lấy lại cảm hứng</h2>
          <p className="mt-3 text-slate-600">Thay vì cam kết dài hạn, bạn dành đúng một ngày để học cùng mentor, biết mình đang ở đâu và cần làm gì tiếp theo.</p>
          <ul className="mt-5 space-y-3">
            {points.map(([b, t]) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 w-6 h-6 shrink-0 rounded-full bg-cta text-white text-sm flex items-center justify-center">✓</span>
                <span><b>{b}:</b> {t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
