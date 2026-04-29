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

    const fields = [
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Phone", value: data.phone },
      { label: "Country", value: data.country },
      { label: "Interest", value: data.interest },
      { label: "Specific villa", value: data.villa || (data.interest === "Yacht" ? "Yacht charter" : "") },
      { label: "Dates", value: data.startDate && data.endDate ? `${data.startDate} → ${data.endDate}` : "" },
      { label: "Flexibility", value: data.flexibility },
      { label: "Adults", value: data.adults },
      { label: "Kids", value: data.kids },
      { label: "Kids ages", value: data.kidsAges },
      { label: "Bedrooms", value: data.bedrooms },
      { label: "Services", value: data.services },
      { label: "Vision", value: data.vision },
      { label: "Budget", value: data.budget },
      { label: "How heard", value: data.howHeard },
    ];

    const subject = `New stay enquiry — ${name}${data.villa ? ` (${data.villa})` : ` (${data.interest || "Villa or Yacht"})`}`;

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO_GENERAL],
      replyTo: email,
      subject,
      html: renderHtml({ title: "Stay enquiry", fields }),
      text: renderText({ title: subject, fields }),
    });

    if (error) {
      console.error("[contact-stay] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact-stay] Unexpected error:", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
