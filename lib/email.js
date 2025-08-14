import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.IKON_FROM_EMAIL || 'IKON <onboarding@ikonidentity.com>';
const ADMIN = process.env.ADMIN_EMAIL;

export async function sendWelcomeEmail({ to, name }) {
  if (!to) return;
  try {
    await resend.emails.send({
      from: FROM,
      to,
      subject: 'Welcome to IKON',
      html: `
        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; line-height:1.6; color:#111111; max-width:600px; margin:0 auto; padding:40px 20px;">
          <h1 style="font-size:28px; font-weight:600; margin-bottom:24px;">Welcome to IKON${name ? `, ${name}` : ''}</h1>
          <p style="font-size:16px; margin-bottom:20px;">
            We are delighted to have you join the IKON community. You are now part of a network of individuals who value excellence, innovation, and access to the extraordinary.
          </p>
          <p style="font-size:16px; margin-bottom:20px;">
            From this moment forward, you will enjoy early access to our releases, exclusive updates, and curated experiences designed to inspire and empower.
          </p>
          <p style="font-size:16px; margin-top:40px;">Warm regards,</p>
          <p style="font-size:16px; font-weight:500;">The IKON Team</p>
        </div>
      `,
    });
  } catch (err) {
    console.error('sendWelcomeEmail error', err);
  }
}

export async function notifyAdmin({ subject, payload }) {
  if (!ADMIN) return;
  try {
    await resend.emails.send({
      from: FROM,
      to: ADMIN,
      subject,
      html: `
        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; line-height:1.6; color:#111111; max-width:600px; margin:0 auto; padding:20px;">
          <h2 style="font-size:20px; font-weight:600; margin-bottom:16px;">${escapeHtml(subject)}</h2>
          <pre style="font-size:14px; background:#f8f8f8; padding:16px; border-radius:6px; overflow-x:auto;">
${escapeHtml(JSON.stringify(payload, null, 2))}
          </pre>
        </div>
      `,
    });
  } catch (err) {
    console.error('notifyAdmin error', err);
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
