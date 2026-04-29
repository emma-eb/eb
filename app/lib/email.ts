import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.warn("[email] RESEND_API_KEY is not set — emails will fail.");
}

export const resend = new Resend(apiKey ?? "missing-key");

export const EMAIL_FROM = process.env.EMAIL_FROM ?? "eb. <onboarding@resend.dev>";
export const EMAIL_TO_GENERAL = process.env.EMAIL_TO_GENERAL ?? "hello@emmabonnefous.com";
export const EMAIL_TO_BRANDS = process.env.EMAIL_TO_BRANDS ?? "brands@emmabonnefous.com";

const escape = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export interface FieldRow {
  label: string;
  value: unknown;
}

export function renderHtml({
  title,
  intro,
  fields,
}: {
  title: string;
  intro?: string;
  fields: FieldRow[];
}) {
  const rows = fields
    .filter((f) => {
      const v = f.value;
      if (v === null || v === undefined) return false;
      if (typeof v === "string" && v.trim() === "") return false;
      if (Array.isArray(v) && v.length === 0) return false;
      return true;
    })
    .map((f) => {
      const v = Array.isArray(f.value) ? f.value.join(", ") : String(f.value);
      return `<tr>
        <td style="padding:8px 16px 8px 0;color:#1a1a1a99;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;vertical-align:top;white-space:nowrap;">${escape(f.label)}</td>
        <td style="padding:8px 0;color:#1a1a1a;font-size:14px;line-height:1.55;vertical-align:top;">${escape(v).replace(/\n/g, "<br>")}</td>
      </tr>`;
    })
    .join("");

  return `<!doctype html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:32px 16px;background:#fcf7f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e8e4de;">
    <tr>
      <td style="padding:32px 32px 16px;border-bottom:1px solid #e8e4de;">
        <p style="margin:0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#2e5a88;">eb. — new submission</p>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:400;color:#2e5a88;">${escape(title)}</h1>
        ${intro ? `<p style="margin:12px 0 0;font-size:14px;color:#1a1a1aaa;line-height:1.6;">${escape(intro)}</p>` : ""}
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px 24px;border-top:1px solid #e8e4de;font-size:11px;color:#1a1a1a66;letter-spacing:0.05em;">
        Sent automatically from emmabonnefous.com
      </td>
    </tr>
  </table>
</body></html>`;
}

export function renderText({ title, fields }: { title: string; fields: FieldRow[] }) {
  const lines = [title, "", ...fields
    .filter((f) => f.value !== null && f.value !== undefined && f.value !== "" && !(Array.isArray(f.value) && f.value.length === 0))
    .map((f) => {
      const v = Array.isArray(f.value) ? f.value.join(", ") : String(f.value);
      return `${f.label}: ${v}`;
    })];
  return lines.join("\n");
}

export function renderConfirmationHtml({
  preheader,
  greeting,
  paragraphs,
  signOff = "Emma",
}: {
  preheader: string;
  greeting: string;
  paragraphs: string[];
  signOff?: string;
}) {
  const body = paragraphs
    .map(
      (p) =>
        `<p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#1a1a1a;">${escape(p)}</p>`
    )
    .join("");

  return `<!doctype html>
<html><head><meta charset="utf-8"><title>${escape(greeting)}</title></head>
<body style="margin:0;padding:32px 16px;background:#fcf7f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <span style="display:none;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">${escape(preheader)}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e8e4de;">
    <tr>
      <td style="padding:36px 36px 24px;">
        <p style="margin:0 0 24px;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#2e5a88;font-weight:500;">eb. private greece</p>
        <p style="margin:0 0 20px;font-size:18px;line-height:1.5;color:#2e5a88;font-weight:400;">${escape(greeting)}</p>
        ${body}
        <p style="margin:32px 0 0;font-size:14px;color:#1a1a1a;line-height:1.6;">${escape(signOff)}</p>
        <p style="margin:4px 0 0;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#1a1a1a99;">eb. founder &middot; Athens</p>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 36px 28px;border-top:1px solid #e8e4de;text-align:center;">
        <a href="https://emmabonnefous.com" style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#2e5a88;text-decoration:none;">emmabonnefous.com</a>
      </td>
    </tr>
  </table>
  <p style="margin:24px auto 0;max-width:560px;font-size:11px;color:#1a1a1a66;text-align:center;line-height:1.6;">
    You received this email because you contacted eb. via emmabonnefous.com.<br>
    If this was not you, please disregard.
  </p>
</body></html>`;
}

export async function safeSendConfirmation(opts: {
  to: string;
  subject: string;
  preheader: string;
  greeting: string;
  paragraphs: string[];
}) {
  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [opts.to],
      replyTo: EMAIL_TO_GENERAL,
      subject: opts.subject,
      html: renderConfirmationHtml({
        preheader: opts.preheader,
        greeting: opts.greeting,
        paragraphs: opts.paragraphs,
      }),
    });
    if (error) {
      console.warn("[confirmation] Resend warning:", error);
    }
  } catch (e) {
    console.warn("[confirmation] Could not send confirmation email:", e);
  }
}
