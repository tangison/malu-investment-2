"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section id="contact" ref={sectionRef} className="relative bg-navy overflow-hidden scanlines">
      {/* Amber accent stripe */}
      <div className="h-1 bg-amber" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-px bg-amber" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-text-secondary/50 uppercase">
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              animate={isInView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(2.5rem,7vw,7rem)] text-text-primary leading-[0.9] mb-4"
            >
              NEED A<br />RIDE<span className="text-amber">?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/50 leading-relaxed mb-8 max-w-md"
            >
              Operating across Oshakati, Ongwediva, and Ondangwa. Call or WhatsApp. We pick up fast, show up on time, and get you there safely.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href="https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+ride."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-amber-light transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+264812111920"
                className="flex items-center gap-2 border border-base-border text-text-secondary/50 hover:text-amber font-[family-name:var(--font-space-grotesk)] text-sm transition-colors px-8 py-4 hover:border-amber/30"
              >
                +264 81 211 1920
              </a>
            </motion.div>

            {/* Community + Facebook */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp/10 border border-whatsapp/20 text-whatsapp font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.1em] uppercase font-bold px-5 py-3 hover:bg-whatsapp/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join Our WhatsApp Community
              </a>
              <a
                href="https://www.facebook.com/share/p/1HoFSQW4o2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.1em] uppercase font-bold px-5 py-3 hover:bg-blue-500/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow us on Facebook
              </a>
            </motion.div>
          </div>

          {/* Right — Operational zones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Oshakati", id: "HUB-01", desc: "Main operations hub" },
                { name: "Ongwediva", id: "HUB-02", desc: "Extended coverage" },
                { name: "Ondangwa", id: "HUB-03", desc: "Northern corridor" },
              ].map((hub, i) => (
                <motion.div
                  key={hub.id}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="bg-base-elevated border border-base-border p-5 flex items-center justify-between group hover:border-amber/20 transition-colors"
                >
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.12em] text-text-muted uppercase block">{hub.id}</span>
                    <span className="font-display text-2xl text-text-primary group-hover:text-amber transition-colors">{hub.name}</span>
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-text-muted block mt-1">{hub.desc}</span>
                  </div>
                  <span className="text-amber text-xl">→</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 border border-amber/10 bg-amber-muted p-4">
              <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.15em] text-amber/60 uppercase">
                Northern Namibia /// Operational Zone /// Expanding Across Namibia
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-1 bg-amber" />
    </section>
  );
}
