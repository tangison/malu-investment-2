"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quickReplies = [
  { label: "Book a Ride 🚕", value: "I'd like to book a taxi ride" },
  { label: "Our Services 🏗️", value: "Tell me about your services" },
  { label: "Talk to a Human 💬", value: "I need to speak with someone" },
];

const SYSTEM_PROMPT = `You are Mia, the friendly AI assistant for Malu Investment, a multi-service company proudly based in Northern Namibia. You help customers book taxis, get quotes for construction, logistics, and cleaning services, and learn about the MI-WAY fleet management platform. Services currently active: Taxi Transport across Oshakati, Ongwediva, Ondangwa, and surrounding northern towns. Construction, Logistics, and Cleaning are coming soon. Always be warm, brief, and direct. If someone wants to book or needs a human, send them to WhatsApp: https://wa.me/264812111920. To join the community group: https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc. The company was founded in 2017 and plans to expand services across all of Namibia.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function MiaChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! I'm Mia 👋 Need a ride, a quote, or just info about what we do? I've got you." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg], system: SYSTEM_PROMPT }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "I'm having trouble right now. Please WhatsApp us at +264 81 211 1920 for immediate help." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please WhatsApp us directly at +264 81 211 1920. We're always there!" }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-base-card border border-amber/30 rounded-full flex items-center justify-center shadow-lg hover:border-amber transition-colors"
        aria-label="Open Mia chatbot"
      >
        <span className="font-display text-amber text-lg">{open ? "✕" : "M"}</span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] bg-base-card border border-base-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-amber px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-base rounded-full flex items-center justify-center">
                <span className="font-display text-amber text-sm">M</span>
              </div>
              <div>
                <span className="font-display text-base text-lg leading-none">MIA</span>
                <span className="block font-[family-name:var(--font-space-grotesk)] text-[8px] tracking-[0.15em] text-base/60 uppercase">AI Assistant</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" aria-live="polite" aria-atomic="true" role="log">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 text-sm ${
                    msg.role === "user"
                      ? "bg-amber text-base font-[family-name:var(--font-space-grotesk)]"
                      : "bg-base-elevated border border-base-border text-text-secondary font-[family-name:var(--font-space-grotesk)]"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-base-elevated border border-base-border px-4 py-2.5 text-sm text-text-muted font-[family-name:var(--font-space-grotesk)]">
                    Mia is thinking...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => sendMessage(qr.value)}
                    className="bg-amber-muted border border-amber/20 text-amber font-[family-name:var(--font-space-grotesk)] text-xs px-3 py-1.5 hover:bg-amber/20 transition-colors"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-base-border p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask Mia anything..."
                aria-label="Type your message to Mia"
                className="flex-1 bg-base border border-base-border px-3 py-2 text-sm text-text-primary placeholder:text-text-muted font-[family-name:var(--font-space-grotesk)] focus:outline-none focus:border-amber/50"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="bg-amber text-base px-4 py-2 font-display text-sm hover:bg-amber-light transition-colors disabled:opacity-40"
              >
                SEND
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
