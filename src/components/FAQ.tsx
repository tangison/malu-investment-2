"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  { q: "How do I book a ride?", a: "Simply send us a WhatsApp message at +264 81 211 1920 or tap the 'Book a Ride' button anywhere on our site. We'll confirm your pickup location and time within minutes." },
  { q: "Do you operate at night?", a: "Yes! Our taxi service operates 24/7 across Oshakati, Ongwediva, and Ondangwa. Late-night rides, early morning pickups — we're always available." },
  { q: "Which areas do you cover?", a: "We currently cover the Northern Namibia corridor: Oshakati, Ongwediva, Ondangwa, and surrounding areas. We're planning expansion to other regions soon." },
  { q: "Are you expanding to other regions?", a: "Yes! We're planning national expansion. Construction, logistics, and cleaning services will extend our coverage beyond northern Namibia. Stay tuned via our WhatsApp community." },
  { q: "What is MI-WAY?", a: "MI-WAY is our in-house fleet management and dispatch platform. It coordinates our taxi operations, tracks vehicles in real-time, and ensures reliable service delivery. Currently in development." },
  { q: "How do I join the WhatsApp community?", a: "Join our WhatsApp community here: https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc — get updates, promotions, and direct access to our dispatch team." },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="bg-base border-y border-base-border py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-amber" />
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase">
            FAQ
          </span>
        </div>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-text-primary leading-[0.9] mb-10">
          COMMON QUESTIONS
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className="border-b border-base-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base text-text-primary group-hover:text-amber transition-colors pr-4">
                  {faq.q}
                </span>
                <span className={`text-amber text-lg transition-transform duration-200 flex-shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                className="overflow-hidden"
              >
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary leading-relaxed pb-5">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
