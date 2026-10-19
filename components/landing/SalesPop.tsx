'use client';
import { useEffect, useState } from 'react';

const names = ['Anh Trần Văn B', 'Chị Nguyễn Thị C', 'Anh Lê Minh D', 'Chị Phạm Thu H', 'Bạn Hoàng Gia K', 'Chị Đặng Ngọc M', 'Anh Vũ Quốc T'];
const times = ['1 phút trước', '3 phút trước', '5 phút trước', '8 phút trước', '12 phút trước'];
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];

// Thông báo ảo: hiện ngẫu nhiên mỗi 5–7 giây, tự ẩn sau 4 giây
export default function SalesPop() {
  const [msg, setMsg] = useState<{ name: string; time: string; k: number } | null>(null);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>, t2: ReturnType<typeof setTimeout>, k = 0;
    const show = () => {
      setMsg({ name: pick(names), time: pick(times), k: ++k });
      t1 = setTimeout(() => setMsg(null), 4000);
      t2 = setTimeout(show, 5000 + Math.random() * 2000);
    };
    t2 = setTimeout(show, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!msg) return null;
  return (
    <div key={msg.k} role="status" aria-live="polite" className="fixed left-3 bottom-24 md:bottom-6 z-50 max-w-[300px] pop-in">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex items-center gap-3">
        <div className="w-10 h-10 shrink-0 rounded-full bg-cta text-white flex items-center justify-center font-bold">{msg.name.split(' ').pop()?.charAt(0)}</div>
        <p className="text-sm leading-snug"><b>{msg.name}</b> vừa đăng ký thành công khóa học <span className="text-slate-500">{msg.time}</span></p>
      </div>
    </div>
  );
}
