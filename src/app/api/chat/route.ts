import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Mia, the friendly AI assistant for Malu Investment, a multi-service company proudly based in Northern Namibia. You help customers book taxis, get quotes for construction, logistics, and cleaning services, and learn about the MI-WAY fleet management platform. Services currently active: Taxi Transport across Oshakati, Ongwediva, Ondangwa, and surrounding northern towns. Construction, Logistics, and Cleaning are coming soon. Always be warm, brief, and direct. If someone wants to book or needs a human, send them to WhatsApp: https://wa.me/264812111920. To join the community group: https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc. The company was founded in 2017 and plans to expand services across all of Namibia. Keep responses under 3 sentences unless explaining something detailed. Never make up services, prices, or information not provided here.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

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
      console.error("OpenRouter API error:", response.status);
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
    } else {
      reply = "Hey! I'm Mia. I can help you book a ride, tell you about our services, or connect you with our team on WhatsApp. What do you need?";
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "I'm having trouble right now. Please WhatsApp us at +264 81 211 1920 for immediate help!" });
  }
}
