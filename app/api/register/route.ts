import { NextResponse } from 'next/server';

// TODO: lưu lead vào Google Sheets, CRM, Zalo/Telegram hoặc email tại đây
export async function POST(req: Request) {
  const { name, phone, email } = await req.json();
  if (!name || !phone || !email) return NextResponse.json({ ok: false }, { status: 400 });
  console.log('New lead:', { name, phone, email });
  return NextResponse.json({ ok: true });
}
