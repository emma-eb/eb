import { NextResponse } from "next/server";
import { resend, EMAIL_FROM, EMAIL_TO_GENERAL, renderHtml, renderText, safeSendConfirmation } from "../../lib/email";
import { rateLimit, rateLimitResponse } from "../../lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const rl = rateLimit(req, { key: "contact-occasion", windowMs: 60_000, max: 3 });
  if (!rl.ok) return rateLimitResponse(rl);

  try {
    const data = await req.json().catch(() => null);
    if (!data || typeof data !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    const email = typeof data.email === "string" ? data.email.trim() : "";
    const name = typeof data.name === "string" ? data.name.trim() : "";

    if (!name) return NextResponse.json({ ok: false, error: "Name required" }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (!data.consent) {
      return NextResponse.json({ ok: false, error: "Consent required" }, { status: 400 });
    }

    const fields = [
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Phone", value: data.phone },
      { label: "Country", value: data.country },
      { label: "Occasion", value: data.occasion },
      { label: "Other (if not in list)", value: data.otherOccasion },
      { label: "Location", value: data.location },
      { label: "Style", value: data.style },
      { label: "Vision", value: data.vision },
      { label: "Budget", value: data.budget },
      { label: "How heard", value: data.howHeard },
    ];

    const subject = `New occasion enquiry — ${name}${data.occasion ? ` (${data.occasion})` : ""}`;

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO_GENERAL],
      replyTo: email,
      subject,
      html: renderHtml({ title: "Occasion enquiry", fields }),
      text: renderText({ title: subject, fields }),
    });

    if (error) {
      console.error("[contact-occasion] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    const firstName = name.split(" ")[0] || "you";
    await safeSendConfirmation({
      to: email,
      subject: "Your occasion enquiry, received",
      preheader: "We have your enquiry. We come back within 48 hours.",
      greeting: `${firstName}, your enquiry is with us.`,
      paragraphs: [
        "We received the details of your occasion. The studio is reading them now.",
        "Within forty-eight hours we come back with a first read, a few clarifying questions, and the next step. Always by email, always on your time.",
        "Until then, nothing else is needed.",
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact-occasion] Unexpected error:", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
