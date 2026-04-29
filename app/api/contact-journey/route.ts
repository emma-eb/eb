import { NextResponse } from "next/server";
import { resend, EMAIL_FROM, EMAIL_TO_GENERAL, renderHtml, renderText } from "../../lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
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

    const journeyContext = data.journeySlug
      ? `Building on the existing journey: ${data.journeyTitle || data.journeySlug}`
      : "Designing from scratch";

    const fields = [
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Phone", value: data.phone },
      { label: "Country", value: data.country },
      { label: "—", value: " " },
      { label: "Context", value: journeyContext },
      { label: "Dates", value: data.startDate && data.endDate ? `${data.startDate} → ${data.endDate}` : "" },
      { label: "Flexibility", value: data.flexibility },
      { label: "—", value: " " },
      { label: "Adults", value: data.adults },
      { label: "Kids", value: data.kids },
      { label: "Kids ages", value: data.kidsAges },
      { label: "—", value: " " },
      { label: "Length", value: data.length },
      { label: "Pace", value: data.pace },
      { label: "Accommodation", value: data.accommodation },
      { label: "Must-haves", value: data.mustHaves },
      { label: "Personalization", value: data.personalization },
      { label: "—", value: " " },
      { label: "Vision", value: data.vision },
      { label: "Budget", value: data.budget },
      { label: "How heard", value: data.howHeard },
    ].filter((f) => f.label !== "—");

    const subject = `New journey enquiry — ${name}${data.journeyTitle ? ` (${data.journeyTitle})` : ""}`;

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO_GENERAL],
      replyTo: email,
      subject,
      html: renderHtml({ title: "Journey enquiry", intro: journeyContext, fields }),
      text: renderText({ title: subject, fields }),
    });

    if (error) {
      console.error("[contact-journey] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact-journey] Unexpected error:", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
