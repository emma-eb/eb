import { NextResponse } from "next/server";
import { resend, EMAIL_FROM, EMAIL_TO_GENERAL, renderHtml, renderText, safeSendConfirmation } from "../../lib/email";
import { rateLimit, rateLimitResponse } from "../../lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const rl = rateLimit(req, { key: "newsletter", windowMs: 60_000, max: 5 });
  if (!rl.ok) return rateLimitResponse(rl);

  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const fields = [
      { label: "Email", value: email },
      { label: "Source", value: "Newsletter banner (footer)" },
      { label: "Submitted", value: new Date().toISOString() },
    ];

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO_GENERAL],
      replyTo: email,
      subject: `Newsletter signup — ${email}`,
      html: renderHtml({ title: "Newsletter signup", fields }),
      text: renderText({ title: "Newsletter signup", fields }),
    });

    if (error) {
      console.error("[newsletter] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    await safeSendConfirmation({
      to: email,
      subject: "Welcome — a letter from Greece is on its way",
      preheader: "We received your email. The first letter is on its way.",
      greeting: "Thank you for subscribing.",
      paragraphs: [
        "We received your email. The next letter from Greece will land in your inbox at the start of the season.",
        "Until then, a quiet promise: only what we would write to a friend. No noise, no oversharing, no schedule we cannot keep.",
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[newsletter] Unexpected error:", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
