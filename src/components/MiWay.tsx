"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MiWay() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="miway" ref={sectionRef} className="relative bg-navy overflow-hidden scanlines border-y border-amber/10">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Shield + terminal */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/assets/brand/brand-asset-03.webp"
                alt="MI-WAY shield emblem"
                width={200}
                height={264}
                className="shield-pulse w-40 sm:w-52 h-auto"
                priority
              />
            </motion.div>

            {/* Terminal readout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 bg-base/50 border border-amber/10 p-4 w-full max-w-xs"
            >
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] text-amber/50 uppercase space-y-1">
                <p>&gt; SYSTEM: MI-WAY v2.6</p>
                <p>&gt; STATUS: <span className="text-whatsapp">In Development</span><span className="blink">_</span></p>
                <p>&gt; DEPLOY: Northern Namibia</p>
                <p>&gt; UNITS: 02 Active</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Copy + fleet image */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-amber/30" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-text-secondary/50 uppercase">
                Fleet Management Platform
              </span>
            </motion.div>

            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              animate={isInView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(3rem,8vw,8rem)] text-text-primary leading-[0.9] mb-2"
            >
              MI-WAY
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="font-[family-name:var(--font-space-grotesk)] text-sm tracking-[0.2em] text-amber/60 uppercase mb-8"
            >
              by Malu Investment /// Dispatch System
            </motion.p>

            <div className="space-y-4 mb-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/70 leading-relaxed"
              >
                MI-WAY is a taxi fleet dispatch and management platform developed in-house. Born from real operational needs on Oshakati&apos;s roads: dispatch, tracking, management. Built for operators who need reliability over features.
              </motion.p>
            </div>

            {/* Fleet photo — Oshakati */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="relative overflow-hidden border border-amber/10"
            >
              <Image
                src="/assets/brand/brand-asset-15-crop-top.webp"
                alt="MI-WAY fleet at Oshakati Commercial Hub"
                width={600}
                height={390}
                className="w-full h-auto object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-navy/80">
                <span className="font-mono text-[8px] tracking-[0.12em] text-text-secondary/50 uppercase">
                  OSHAKATI COMMERCIAL HUB /// AUTHORIZED PARKING
                </span>
                <span className="font-mono text-[8px] tracking-[0.12em] text-amber/60 uppercase">
                  REV 2.6
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6"
            >
              <Link
                href="/mi-way"
                className="inline-flex items-center gap-2 border border-amber/30 text-amber font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] uppercase font-bold px-6 py-3 hover:bg-amber hover:text-base transition-all duration-200"
              >
                Learn More About MI-WAY →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
