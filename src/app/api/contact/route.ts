import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 200;
}

function safe(value: string, max: number): string {
  return value.replace(/[\r\n]/g, " ").slice(0, max).trim();
}

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry && entry.count >= RATE_LIMIT && now < entry.resetTime) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
  }
  rateLimitMap.set(ip, {
    count: (entry?.count ?? 0) + 1,
    resetTime: entry?.resetTime ?? now + RATE_WINDOW_MS,
  });
  if (Math.random() < 0.01) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetTime) rateLimitMap.delete(key);
    }
  }

  // Parse + validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const data = (body ?? {}) as Record<string, unknown>;

  const name = safe(typeof data.name === "string" ? data.name : "", 120);
  const email = safe(typeof data.email === "string" ? data.email : "", 200);
  const subject = safe(typeof data.subject === "string" ? data.subject : "Website enquiry", 200);
  const message = safe(typeof data.message === "string" ? data.message : "", 4000);
  const honeypot = typeof data.website === "string" ? data.website : ""; // honeypot - should be empty
  const company = typeof data.company === "string" ? data.company : "";

  if (honeypot || company) {
    // Bots fill extra fields; silently accept and ignore.
    return NextResponse.json({ ok: true });
  }
  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please tell us your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }
  if (!message || message.length < 5) {
    return NextResponse.json({ error: "Please add a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "info@mi-way.org";
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@mi-way.org";

  if (!apiKey) {
    // Build environment: log to stderr so the operator sees it.
    console.warn("RESEND_API_KEY not set; contact-form message was not delivered.", {
      name, email, subject,
    });
    return NextResponse.json({ ok: true, delivered: false, mode: "build" });
  }

  // Production: send via Resend
  const html = renderEmail(name, email, subject, message);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `MI-WAY website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `[Website] ${subject}`,
        html,
        text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", res.status, errText);
      return NextResponse.json({ error: "Could not deliver your message. Please try WhatsApp." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("Resend fetch failed:", e);
    return NextResponse.json({ error: "Could not deliver your message. Please try WhatsApp." }, { status: 502 });
  }
}

function renderEmail(name: string, email: string, subject: string, message: string): string {
  const esc = (s: string) => s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  return `<!doctype html><meta charset="utf-8">
<div style="font-family:system-ui,sans-serif;max-width:560px;padding:24px;background:#0D0D0D;color:#fff;">
  <h2 style="color:#F5A623;margin:0 0 16px 0;">New website enquiry</h2>
  <p><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p>
  <p><strong>Subject:</strong> ${esc(subject)}</p>
  <hr style="border:0;border-top:1px solid #2A2A2A;margin:16px 0;" />
  <pre style="white-space:pre-wrap;font-family:inherit;margin:0;">${esc(message)}</pre>
  <hr style="border:0;border-top:1px solid #2A2A2A;margin:16px 0;" />
  <p style="font-size:12px;color:#8A8A8A;">Reply directly to this email to respond to ${esc(name)}.</p>
</div>`;
}
