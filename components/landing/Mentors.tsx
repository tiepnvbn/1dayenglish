// 5. Đội ngũ giảng viên. Thay khối chữ cái bằng <Image> khi có ảnh thật
const mentors = [
  { initial: 'M', name: 'Ms. Minh Anh', ielts: 'IELTS 8.0', bio: '7 năm giảng dạy. Chuyên luyện giao tiếp và phát âm cho người mất gốc.', bg: 'from-brand to-sky' },
  { initial: 'H', name: 'Mr. Hoàng Long', ielts: 'IELTS 7.5', bio: '5 năm kinh nghiệm. Từng hướng dẫn hơn 800 học viên đi làm.', bg: 'from-cta to-sun' },
  { initial: 'T', name: 'Ms. Thu Trang', ielts: 'IELTS 8.5', bio: '9 năm giảng dạy. Du học Anh, chuyên xây lộ trình cá nhân hóa.', bg: 'from-navy to-brand' },
];

export default function Mentors() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-navy text-center">Học cùng mentor đã từng đi qua</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <div key={m.name} className="rounded-2xl border border-slate-200 p-5 text-center last:sm:col-span-2 last:lg:col-span-1">
              <div className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${m.bg} flex items-center justify-center text-4xl text-white font-bold`}>{m.initial}</div>
              <h3 className="font-bold text-lg mt-3">{m.name}</h3>
              <span className="inline-block mt-1 bg-sun text-navy text-sm font-bold px-3 py-1 rounded-full">{m.ielts}</span>
              <p className="text-sm text-slate-600 mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
