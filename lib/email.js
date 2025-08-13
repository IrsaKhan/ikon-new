import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.IKON_FROM_EMAIL || 'IKON <no-reply@example.com>';
const ADMIN = process.env.ADMIN_EMAIL;

export async function sendWelcomeEmail({ to, name }) {
  if (!to) return;
  try {
    await resend.emails.send({
      from: FROM,
      to,
      subject: 'Welcome to IKON 🎉',
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6">
          <h2>Hey ${name ? name : 'there'} — welcome to the IKON community!</h2>
          <p>We’re excited to have you. You’ll get early access, updates, and insider perks.</p>
          <p style="margin-top:24px">— Team IKON</p>
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
      html: `<pre>${escapeHtml(JSON.stringify(payload, null, 2))}</pre>`,
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