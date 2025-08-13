import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { notifyAdmin } from '@/lib/email';

export const runtime = 'nodejs';

const ContactSchema = z.object({
  name: z.string().trim().min(1).optional().or(z.literal('')),
  email: z.string().email(),
  message: z.string().trim().min(5),
  website: z.string().optional(), // honeypot
});

export async function POST(req) {
  try {
    const data = await readData(req);
    const parsed = ContactSchema.parse(data);
    if (parsed.website) return NextResponse.json({ ok: true }, { status: 200 });

    const payload = {
      name: emptyToNull(parsed.name),
      email: parsed.email.toLowerCase(),
      message: parsed.message,
      meta: {},
    };

    const { error } = await supabaseAdmin.from('contacts').insert(payload);
    if (error) {
      console.error(error);
      return NextResponse.json({ ok: false, error: 'DB_INSERT_FAILED' }, { status: 500 });
    }

    // Notify admin with the message
    await notifyAdmin({ subject: 'New Contact Message', payload });

    return NextResponse.json({ ok: true, message: 'Message received. Thank you!' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'INVALID_INPUT' }, { status: 400 });
  }
}

async function readData(req) {
  const type = req.headers.get('content-type') || '';
  if (type.includes('application/json')) return await req.json();
  const fd = await req.formData();
  return Object.fromEntries(fd.entries());
}

function emptyToNull(v) { return v === '' ? null : v; }