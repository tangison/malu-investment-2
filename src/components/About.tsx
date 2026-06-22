"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2017", event: "First taxi, Oshakati", icon: "🚕" },
  { year: "2019", event: "Expanded to Ongwediva & Ondangwa", icon: "🗺️" },
  { year: "2022", event: "Launched MI-WAY dispatch system", icon: "💻" },
  { year: "2025", event: "Construction & Logistics divisions added", icon: "🏗️" },
  { year: "2026", event: "Full platform + national expansion", icon: "🇳🇦" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={sectionRef} className="relative bg-base border-b border-base-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Story */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-px bg-amber" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              animate={isInView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] text-text-primary leading-[0.9] mb-8"
            >
              FROM THE<br />
              <span className="text-amber">NORTH</span>
            </motion.h2>

            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/80 leading-[1.8]"
              >
                Malu Investment was founded with a straightforward belief: northern Namibia deserves reliable, professional services from people who live here. We started with one taxi and one phone number in Oshakati, and a commitment to showing up — every single time.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/60 leading-[1.8]"
              >
                From our base in Oshakati, we&apos;ve expanded across the northern corridor — Ongwediva, Ondangwa, and beyond. Growth hasn&apos;t changed who we are. We still answer every call. We still know every street. We still run on the same principle: be there, be reliable, be professional.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/40 leading-[1.8]"
              >
                Why Northern Namibia? It&apos;s an underserved market with growing demand. We have local roots and community-first values. Our goal: full Namibia coverage, starting from where it matters most.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-amber/30 text-amber font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] uppercase font-bold px-6 py-3 hover:bg-amber hover:text-base transition-all duration-200"
              >
                Read Our Full Story →
              </Link>
            </motion.div>
          </div>

          {/* Right — Photo + Timeline */}
          <div className="lg:col-span-6">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden border border-base-border mb-8"
            >
              <Image
                src="/assets/brand/brand-asset-13.webp"
                alt="MI-WAY vehicle on northern Namibian road"
                width={600}
                height={440}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-base/80 px-4 py-3 flex items-center justify-between">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[9px] tracking-[0.12em] text-text-muted uppercase">
                  MI-WAY UNIT 02 /// Ongwediva
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-amber uppercase">
                  N 47989 SH
                </span>
              </div>
            </motion.div>

            {/* Timeline milestones */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-display text-xl text-text-primary mb-4">Milestones</h3>
              <div className="relative border-l-2 border-amber/20 pl-6 space-y-5">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-amber border-2 border-base" />
                    <span className="font-display text-lg text-amber">{m.year}</span>
                    <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary">
                      {m.event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
