// 4. Nội dung khóa học: lịch học sáng / chiều / tối
const sessions = [
  { name: 'Ca sáng', time: '08:30 – 11:30', head: 'bg-sun text-navy', items: ['Test trình độ 4 kỹ năng', 'Phát âm chuẩn trong 60 phút', 'Bí quyết nghe hiểu tự nhiên'] },
  { name: 'Ca chiều', time: '13:30 – 16:30', head: 'bg-brand text-white', items: ['Thực hành giao tiếp theo tình huống', 'Từ vựng nhớ lâu bằng ngữ cảnh', 'Chữa lỗi trực tiếp cùng mentor'] },
  { name: 'Ca tối', time: '19:00 – 21:00', head: 'bg-navy text-white', items: ['Tư vấn 1-1 và nhận lộ trình riêng', 'Giải đáp mọi thắc mắc về học phí', 'Nhận bộ tài liệu tự học'] },
];

export default function Curriculum() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy text-center">Một ngày học diễn ra thế nào?</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {sessions.map((s) => (
            <article key={s.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className={`${s.head} px-5 py-3 flex justify-between font-bold`}><span>{s.name}</span><span>{s.time}</span></div>
              <ul className="p-5 space-y-2 text-sm text-slate-700">
                {s.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">Bạn có thể chọn học một hoặc nhiều ca trong ngày.</p>
      </div>
    </section>
  );
}
