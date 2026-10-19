// 2. Vấn đề của người học
const items = [
  { icon: '⏰', title: 'Quá bận để đi học', text: 'Đi làm cả ngày, tối về chỉ muốn nghỉ. Lịch học cố định luôn bị bỏ dở giữa chừng.', border: 'border-cta' },
  { icon: '🧩', title: 'Mất gốc, không biết bắt đầu từ đâu', text: 'Ngữ pháp rời rạc, sợ nói sai, mở app học vài ngày rồi lại bỏ.', border: 'border-sun' },
  { icon: '💸', title: 'Sợ tốn tiền mà không hiệu quả', text: 'Đóng cả khóa vài chục triệu nhưng không biết có hợp với mình hay không.', border: 'border-brand' },
];

export default function PainPoints() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy text-center">Bạn có đang gặp những điều này?</h2>
        <p className="text-center text-slate-600 mt-2">Rất nhiều người đi làm cũng từng như vậy.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className={`bg-white rounded-2xl p-6 border-l-8 ${i.border} shadow-sm`}>
              <div className="text-3xl" aria-hidden="true">{i.icon}</div>
              <h3 className="font-bold text-lg mt-2">{i.title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
