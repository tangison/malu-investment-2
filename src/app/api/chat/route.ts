import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";

    let reply = "";

    if (lastUserMsg.includes("book") || lastUserMsg.includes("ride") || lastUserMsg.includes("taxi")) {
      reply = "Great! To book a ride, tap this WhatsApp link and we'll get you sorted: https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+taxi+ride. We operate 24/7 across Oshakati, Ongwediva, and Ondangwa!";
    } else if (lastUserMsg.includes("service") || lastUserMsg.includes("what do you")) {
      reply = "We offer 5 services: Taxi Transport (active now), Construction & Renovation (coming soon), Logistics & Import/Export (coming soon), Cleaning & Carwash (coming soon), and MI-WAY Fleet Management (in development). Want to book a taxi?";
    } else if (lastUserMsg.includes("human") || lastUserMsg.includes("talk") || lastUserMsg.includes("person")) {
      reply = "No problem! Reach our team directly on WhatsApp: https://wa.me/264812111920 — they respond fast!";
    } else if (lastUserMsg.includes("price") || lastUserMsg.includes("cost") || lastUserMsg.includes("how much")) {
      reply = "Our taxi fares depend on distance. For an exact quote, WhatsApp us at +264 81 211 1920 with your pickup and destination!";
    } else if (lastUserMsg.includes("area") || lastUserMsg.includes("where") || lastUserMsg.includes("location")) {
      reply = "We operate across Northern Namibia — Oshakati, Ongwediva, and Ondangwa. Expanding nationally soon!";
    } else if (lastUserMsg.includes("mi-way") || lastUserMsg.includes("fleet")) {
      reply = "MI-WAY is our in-house fleet management and dispatch platform — built for reliability. Currently in development but already powering our rides!";
    } else if (lastUserMsg.includes("community") || lastUserMsg.includes("group") || lastUserMsg.includes("join")) {
      reply = "Join our WhatsApp community: https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc — get updates and direct access to our team!";
    } else {
      reply = "Hey! I'm Mia — I can help you book a ride, tell you about our services, or connect you with our team on WhatsApp. What do you need?";
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "I'm having a moment — please WhatsApp us at +264 81 211 1920 for immediate help!" });
  }
}
