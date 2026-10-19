// 6. Feedback / Social proof
const stats = [['3.200+', 'học viên'], ['94%', 'hài lòng'], ['4.9/5', 'điểm đánh giá']];
const reviews = [
  { text: '“Mình mất gốc 10 năm, học thử xong dám mở miệng nói ngay trong buổi chiều. Lộ trình rất rõ ràng.”', by: 'Lan Phương, nhân viên văn phòng' },
  { text: '“Đi làm bận nên chỉ dám thử 1 ngày. Không bị ép đăng ký khóa, mentor tư vấn rất thật.”', by: 'Quang Huy, kỹ sư phần mềm' },
  { text: '“Phát âm của mình được sửa từng âm một. Học xong lại muốn học tiếp.”', by: 'Thanh Hà, sinh viên năm cuối' },
];

export default function SocialProof() {
  return (
    <section className="bg-navy text-white py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center">Họ đã thử, và đây là cảm nhận</h2>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-white/10 rounded-2xl py-4">
              <p className="text-2xl md:text-4xl font-extrabold text-sun">{n}</p>
              <p className="text-xs md:text-sm">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.by} className="bg-white text-slate-800 rounded-2xl p-5">
              <p className="text-sm">{r.text}</p>
              <footer className="mt-3 text-sm font-bold text-navy">{r.by}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
