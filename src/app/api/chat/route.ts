import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Mia, the friendly AI assistant for Malu Investment, a multi-service company proudly based in Northern Namibia. You help customers book taxis, get quotes for construction, logistics, and cleaning services, and learn about the MI-WAY fleet management platform. Services currently active: Taxi Transport across Oshakati, Ongwediva, Ondangwa, and surrounding northern towns. Construction, Logistics, and Cleaning are coming soon. Always be warm, brief, and direct. If someone wants to book or needs a human, send them to WhatsApp: https://wa.me/264812111920. To join the community group: https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc. The company was founded in 2017 and plans to expand services across all of Namibia. Keep responses under 3 sentences unless explaining something detailed. Never make up services, prices, or information not provided here.`;

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per window
const RATE_WINDOW = 60_000; // 1 minute

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (entry && entry.count >= RATE_LIMIT && now < entry.resetTime) {
      return NextResponse.json({ error: "Rate limit exceeded. Please try again in a minute." }, { status: 429 });
    }

    rateLimitMap.set(ip, {
      count: (entry?.count || 0) + 1,
      resetTime: entry?.resetTime || now + RATE_WINDOW,
    });

    // Clean up old entries periodically
    if (Math.random() < 0.01) {
      for (const [key, val] of rateLimitMap.entries()) {
        if (now > val.resetTime) rateLimitMap.delete(key);
      }
    }

    // Input validation
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    if (!body || typeof body !== "object" || !Array.isArray((body as Record<string, unknown>).messages)) {
      return NextResponse.json({ error: "Messages array required" }, { status: 400 });
    }

    const messages = (body as { messages: { role: string; content: string }[] }).messages;

    if (messages.length === 0 || messages.length > 20) {
      return NextResponse.json({ error: "Messages must contain 1-20 items" }, { status: 400 });
    }

    for (const msg of messages) {
      if (typeof msg.content !== "string" || msg.content.length > 2000) {
        return NextResponse.json({ error: "Invalid message content" }, { status: 400 });
      }
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    // If API key is available, use the real LLM
    if (apiKey) {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://malu-investment-2.vercel.app",
          "X-Title": "Mia - MI-WAY Assistant",
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.slice(-8), // Keep last 8 messages for context
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "I'm having trouble right now. Please WhatsApp us at +264 81 211 1920 for immediate help!";
        return NextResponse.json({ reply });
      }

      // If API fails, fall through to rule-based
      console.error("Chat API error:", response.status);
    }

    // Fallback: rule-based responses
    const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let reply = "";

    if (lastUserMsg.includes("book") || lastUserMsg.includes("ride") || lastUserMsg.includes("taxi")) {
      reply = "Great! To book a ride, tap this WhatsApp link: https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+taxi+ride. We operate 24/7 across Oshakati, Ongwediva, and Ondangwa!";
    } else if (lastUserMsg.includes("service") || lastUserMsg.includes("what do you")) {
      reply = "We offer 5 services: Taxi Transport (active now), Construction & Renovation (coming soon), Logistics & Import/Export (coming soon), Cleaning & Carwash (coming soon), and MI-WAY Fleet Management (in development). Want to book a taxi?";
    } else if (lastUserMsg.includes("human") || lastUserMsg.includes("talk") || lastUserMsg.includes("person")) {
      reply = "No problem! Reach our team directly on WhatsApp: https://wa.me/264812111920. They respond fast!";
    } else if (lastUserMsg.includes("price") || lastUserMsg.includes("cost") || lastUserMsg.includes("how much")) {
      reply = "Our taxi fares depend on distance. For an exact quote, WhatsApp us at +264 81 211 1920 with your pickup and destination!";
    } else if (lastUserMsg.includes("area") || lastUserMsg.includes("where") || lastUserMsg.includes("location")) {
      reply = "We operate across Northern Namibia: Oshakati, Ongwediva, and Ondangwa. Expanding nationally soon!";
    } else if (lastUserMsg.includes("mi-way") || lastUserMsg.includes("fleet")) {
      reply = "MI-WAY is our in-house fleet management and dispatch platform, built for reliability. Currently in development but already powering our rides!";
    } else if (lastUserMsg.includes("community") || lastUserMsg.includes("group") || lastUserMsg.includes("join")) {
      reply = "Join our WhatsApp community: https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc. Get updates and direct access to our team!";
    } else if (lastUserMsg.includes("driver") || lastUserMsg.includes("owner") || lastUserMsg.includes("programme")) {
      reply = "Our Driver-to-Owner programme helps you go from driver to vehicle owner in 3 steps. Learn more at https://malu-investment-2.vercel.app/driver-to-owner or WhatsApp us!";
    } else {
      reply = "Hey! I'm Mia. I can help you book a ride, tell you about our services, or connect you with our team on WhatsApp. What do you need?";
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "I'm having trouble right now. Please WhatsApp us at +264 81 211 1920 for immediate help!" });
  }
}
