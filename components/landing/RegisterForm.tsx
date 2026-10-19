'use client';
import { useState, type FormEvent } from 'react';

type Errors = Partial<Record<'name' | 'phone' | 'email', string>>;

// 8. Form đăng ký, gửi tới /api/register
export default function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get('name')).trim();
    const phone = String(d.get('phone')).replace(/[\s.-]/g, '');
    const email = String(d.get('email')).trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = 'Vui lòng nhập họ và tên.';
    if (!/^(0|\+84)\d{9}$/.test(phone)) errs.phone = 'Số điện thoại cần có 10 chữ số, ví dụ 0912345678.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Email chưa đúng định dạng.';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      const res = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, phone, email }) });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      setErrors({ email: 'Gửi chưa được, vui lòng thử lại.' });
    } finally {
      setLoading(false);
    }
  }

  const fields = [
    { id: 'name', label: 'Họ và tên', type: 'text', ph: 'Nguyễn Văn A', ac: 'name' },
    { id: 'phone', label: 'Số điện thoại', type: 'tel', ph: '0912 345 678', ac: 'tel' },
    { id: 'email', label: 'Email', type: 'email', ph: 'ban@email.com', ac: 'email' },
  ] as const;

  return (
    <section id="dang-ky" className="py-14 scroll-mt-4">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy text-center">Đăng ký học thử miễn phí</h2>
        <p className="text-center text-slate-600 mt-2 text-sm">Để lại thông tin, tư vấn viên sẽ gọi xác nhận trong 30 phút.</p>
        {done ? (
          <div className="mt-6 bg-sky rounded-2xl p-6 text-center">
            <p className="text-4xl" aria-hidden="true">🎉</p>
            <p className="font-bold text-navy text-lg mt-2">Đăng ký thành công!</p>
            <p className="text-sm text-slate-600 mt-1">Chúng tôi sẽ liên hệ bạn sớm để chốt lịch học thử.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
            {fields.map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-sm font-semibold mb-1">{f.label}</label>
                <input id={f.id} name={f.id} type={f.type} autoComplete={f.ac} placeholder={f.ph}
                  className={`w-full rounded-xl border-2 px-4 py-3 text-base focus:border-brand focus:outline-none ${errors[f.id] ? 'border-red-500' : 'border-slate-200'}`} />
                {errors[f.id] && <p className="text-xs text-red-600 mt-1">{errors[f.id]}</p>}
              </div>
            ))}
            <button type="submit" disabled={loading} className="btn-cta w-full text-white font-bold text-lg py-4 rounded-2xl disabled:opacity-60">
              {loading ? 'Đang gửi...' : 'Gửi đăng ký'}
            </button>
            <p className="text-xs text-center text-slate-500">Thông tin của bạn được bảo mật và không dùng để gửi spam.</p>
          </form>
        )}
      </div>
    </section>
  );
}
