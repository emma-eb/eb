import { NextResponse } from "next/server";
import { resend, EMAIL_FROM, EMAIL_TO_BRANDS, renderHtml, renderText } from "../../lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);
    if (!data || typeof data !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    const email = typeof data.email === "string" ? data.email.trim() : "";
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const company = typeof data.company === "string" ? data.company.trim() : "";

    if (!name) return NextResponse.json({ ok: false, error: "Name required" }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const fields = [
      { label: "Name", value: name },
      { label: "Company", value: company },
      { label: "Role", value: data.role },
      { label: "Email", value: email },
      { label: "Phone", value: data.phone },
      { label: "Project type", value: data.projectType },
      { label: "Team size", value: data.teamSize },
      { label: "Budget band", value: data.budget },
      { label: "Dates", value: data.dates },
      { label: "Brief", value: data.brief },
      { label: "How heard", value: data.howHeard },
    ];

    const subject = `New brand brief — ${company || name}${data.projectType ? ` (${data.projectType})` : ""}`;

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO_BRANDS],
      replyTo: email,
      subject,
      html: renderHtml({ title: "Brand brief", fields }),
      text: renderText({ title: subject, fields }),
    });

    if (error) {
      console.error("[brand-brief] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[brand-brief] Unexpected error:", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
