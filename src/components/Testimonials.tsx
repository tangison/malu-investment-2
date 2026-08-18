"use client";

import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  { name: "Ndapewa M.", location: "Oshakati", stars: 5, text: "Malu is always on time. I use them every morning to get to work. Reliable and safe, that's all I need." },
  { name: "Tuyeimo H.", location: "Ongwediva", stars: 5, text: "Finally a taxi service that actually shows up when they say they will. MI-WAY is changing things for the north." },
  { name: "Shikongo A.", location: "Ondangwa", stars: 4, text: "Good service, friendly drivers. I recommended Malu to my whole family. Looking forward to their other services." },
  { name: "Kamati P.", location: "Oshakati", stars: 5, text: "I run a small business and I need transport I can count on. Malu delivers every time. No complaints." },
];

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };
  const viewport = prefersReducedMotion ? { once: true, amount: 0 } : { once: true, amount: 0.15, margin: "0px 0px -80px 0px" };

  return (
    <section className="bg-base-elevated border-y border-base-border py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-amber" />
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase">
            Testimonials
          </span>
        </div>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-text-primary leading-[0.9] mb-10">
          WHAT PEOPLE SAY
        </h2>

        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto snap-x-mandatory gap-4 lg:gap-0 pb-4 lg:pb-0">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="min-w-[80vw] lg:min-w-0 snap-start bg-base-card border border-base-border p-6 lg:border-r lg:last:border-r-0 flex flex-col"
            >
              <div className="flex gap-1 mb-3" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={`s-${j}`} className="text-amber text-sm" aria-hidden="true">★</span>
                ))}
                {Array.from({ length: 5 - t.stars }).map((_, j) => (
                  <span key={`e-${j}`} className="text-base-border text-sm" aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div>
                <span className="font-display text-base text-text-primary">{t.name}</span>
                <span className="block font-[family-name:var(--font-space-grotesk)] text-xs text-text-muted">{t.location}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
