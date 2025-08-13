import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { sendWelcomeEmail, notifyAdmin } from '@/lib/email';

export const runtime = 'nodejs';

const CommunitySchema = z.object({
  name: z.string().trim().min(1).optional().or(z.literal('')),
  email: z.string().email(),
  interests: z.union([
    z.array(z.string()),
    z.string().transform((s) =>
      s.split(',').map((t) => t.trim()).filter(Boolean)
    )
  ]).optional(),
  website: z.string().optional(), // honeypot
});

export async function POST(req) {
  try {
    const data = await readData(req);
    const parsed = CommunitySchema.parse(data);

    // Honeypot trap — ignore bots
    if (parsed.website) return NextResponse.json({ ok: true }, { status: 200 });

    const interests = Array.isArray(parsed.interests) ? parsed.interests : [];

    const payload = {
      name: emptyToNull(parsed.name),
      email: parsed.email.toLowerCase(),
      interests,
      meta: {},
    };

    const { error } = await supabaseAdmin
      .from('community_members')
      .insert(payload);

    if (error) {
      if (error.message && error.message.includes('duplicate')) {
        // If they're already in, still send welcome email
        await sendWelcomeEmail({
          to: payload.email,
          name: payload.name || undefined
        });
        return NextResponse.json(
          { ok: true, message: 'Already a member — welcome email sent.' },
          { status: 200 }
        );
      }
      console.error(error);
      return NextResponse.json(
        { ok: false, error: 'DB_INSERT_FAILED' },
        { status: 500 }
      );
    }

    // Send welcome email + notify admin
    await Promise.all([
      sendWelcomeEmail({ to: payload.email, name: payload.name || undefined }),
      notifyAdmin({ subject: 'New IKON Community Member', payload })
    ]);

    return NextResponse.json(
      { ok: true, message: 'Welcome to the IKON community!' },
      { status: 200 }
    );

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: 'INVALID_INPUT' },
      { status: 400 }
    );
  }
}

async function readData(req) {
  const type = req.headers.get('content-type') || '';
  if (type.includes('application/json')) return await req.json();
  const fd = await req.formData();
  return Object.fromEntries(fd.entries());
}

function emptyToNull(v) {
  return v === '' ? null : v;
}
