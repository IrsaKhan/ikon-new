import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";
import { sendWelcomeEmail } from "../../../lib/email";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const email = body.email?.trim().toLowerCase();
    const product_id = body.product_id?.trim();

    if (!email) {
      return NextResponse.json({ ok: false, error: "NO_EMAIL" }, { status: 400 });
    }

    if (!product_id) {
      return NextResponse.json({ ok: false, error: "NO_PRODUCT_ID" }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from("waitlist")
      .insert({ email, product_id });

    if (error) {
      if (error.message.includes("duplicate")) {
        await sendWelcomeEmail({ to: email });
        return NextResponse.json(
          { ok: true, message: "Already in waitlist — welcome email sent." },
          { status: 200 }
        );
      }
      console.error(error);
      return NextResponse.json({ ok: false, error: "DB_ERROR" }, { status: 500 });
    }

    await sendWelcomeEmail({ to: email });

    return NextResponse.json(
      { ok: true, message: "Added to waitlist and welcome email sent." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}
