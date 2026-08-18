"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: "" }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Could not send. Please use WhatsApp instead.");
        return;
      }
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please use WhatsApp instead.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main id="main" className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">
            Get in Touch
          </span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-text-primary leading-[0.9] mb-4">
            CONTACT US
          </h1>
          <p className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg text-text-secondary max-w-2xl mb-12">
            Choose WhatsApp for the fastest reply, or send a message below and we will respond within one working day.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Direct channels */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl text-text-primary mb-4">WhatsApp</h2>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary mb-4">
                  The fastest way to reach us. Send a message and we will respond within minutes.
                </p>
                <a
                  href="https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+ride."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-whatsapp text-white font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-6 py-4 hover:bg-whatsapp/90 transition-colors min-h-[48px]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+264812111920"
                  className="block mt-3 font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary hover:text-amber"
                >
                  +264 81 211 1920
                </a>
              </div>

              <div>
                <h2 className="font-display text-2xl text-text-primary mb-4">Community</h2>
                <a
                  href="https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-whatsapp/10 border border-whatsapp/20 text-whatsapp font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-6 py-4 hover:bg-whatsapp/20 transition-colors min-h-[48px]"
                >
                  Join Our WhatsApp Community
                </a>
              </div>

              <div>
                <h2 className="font-display text-2xl text-text-primary mb-4">Social</h2>
                <a
                  href="https://www.facebook.com/share/p/1HoFSQW4o2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-6 py-4 hover:bg-blue-500/20 transition-colors min-h-[48px]"
                >
                  Follow us on Facebook
                </a>
              </div>

              <div className="border-t border-base-border pt-6">
                <h2 className="font-display text-2xl text-text-primary mb-4">Service-Specific Bookings</h2>
                <div className="space-y-1">
                  {[
                    { label: "Taxi", link: "https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+taxi+ride." },
                    { label: "Construction", link: "https://wa.me/264812111920?text=Hi!+I'm+interested+in+your+construction+services." },
                    { label: "Logistics", link: "https://wa.me/264812111920?text=Hi!+I+need+logistics+support." },
                    { label: "Cleaning", link: "https://wa.me/264812111920?text=Hi!+I'd+like+to+book+a+cleaning+service." },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3 border-b border-base-border hover:border-amber/30 group min-h-[48px]"
                    >
                      <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary group-hover:text-amber transition-colors">
                        {s.label}
                      </span>
                      <span className="text-amber" aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Email form */}
            <div>
              <h2 className="font-display text-2xl text-text-primary mb-4">Send a Message</h2>
              <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary mb-6">
                Prefer email? Use the form below. We will respond within one working day.
              </p>
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] text-amber uppercase mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={120}
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-base-card border border-base-border px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:border-amber focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] text-amber uppercase mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-base-card border border-base-border px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:border-amber focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] text-amber uppercase mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    minLength={2}
                    maxLength={200}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-base-card border border-base-border px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:border-amber focus:outline-none transition-colors"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] text-amber uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={5}
                    maxLength={4000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-base-card border border-base-border px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:border-amber focus:outline-none transition-colors resize-y"
                    placeholder="Tell us what you need."
                  />
                </div>
                {/* Honeypot field - hidden from real users, visible to bots */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-amber-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] w-full sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "sent" && (
                  <p role="status" className="font-[family-name:var(--font-space-grotesk)] text-sm text-amber">
                    Thank you. We will reply within one working day.
                  </p>
                )}
                {status === "error" && (
                  <p role="alert" className="font-[family-name:var(--font-space-grotesk)] text-sm text-red-400">
                    {errorMsg} You can also reach us on{" "}
                    <a href="https://wa.me/264812111920" className="underline" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                    .
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-display text-2xl text-text-primary mb-4">Our Locations</h2>
              <div className="space-y-3 mb-8">
                {["Oshakati, Main Hub", "Ongwediva, Extended Coverage", "Ondangwa, Northern Corridor"].map((loc) => (
                  <div key={loc} className="bg-base-card border border-base-border p-5 flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber flex-shrink-0" aria-hidden="true" />
                    <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-primary">
                      {loc}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-muted border border-amber/10 p-6">
                <span className="font-display text-lg text-amber block mb-2">OPERATIONAL ZONE</span>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary mb-4">
                  Northern Namibia corridor: Oshakati, Ongwediva, Ondangwa. Expanding across Namibia.
                </p>
                <div className="flex items-center justify-center gap-6 py-4 border-t border-amber/10 flex-wrap">
                  <span className="font-display text-2xl text-text-primary">OSHAKATI</span>
                  <span className="text-amber" aria-hidden="true">↔</span>
                  <span className="font-display text-2xl text-text-primary">ONGWEDIVA</span>
                  <span className="text-amber" aria-hidden="true">↔</span>
                  <span className="font-display text-2xl text-text-primary">ONDANGWA</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>

          <div className="mt-16">
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
