'use client';
import { useEffect, useState } from 'react';

const DURATION = 2 * 24 * 3600 * 1000; // 2 ngày, đổi tại đây
const KEY = 'engday_deadline';

// Đồng hồ đếm ngược, hạn chót lưu trong localStorage
export default function Countdown() {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    let deadline = Date.now() + DURATION;
    try {
      const saved = parseInt(localStorage.getItem(KEY) || '', 10);
      if (saved && saved > Date.now()) deadline = saved;
      else localStorage.setItem(KEY, String(deadline));
    } catch {}
    const tick = () => setLeft(Math.max(0, Math.floor((deadline - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');
  const cells = [
    [pad(Math.floor(left / 86400)), 'Ngày'],
    [pad(Math.floor((left % 86400) / 3600)), 'Giờ'],
    [pad(Math.floor((left % 3600) / 60)), 'Phút'],
    [pad(left % 60), 'Giây'],
  ];

  return (
    <div className="mt-5 grid grid-cols-4 gap-2">
      {cells.map(([v, l]) => (
        <div key={l} className="bg-navy text-white rounded-xl py-3">
          <p className="text-2xl md:text-3xl font-extrabold">{v}</p>
          <p className="text-xs">{l}</p>
        </div>
      ))}
    </div>
  );
}
