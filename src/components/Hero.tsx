"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroImg = document.querySelector(".hero-bg-img") as HTMLElement;
      if (heroImg && scrollY < window.innerHeight) {
        heroImg.style.transform = `scale(1.1) translateY(${scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-base">
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/assets/brand/brand-asset-05.webp"
          alt="Northern Namibian road landscape"
          fill
          className="hero-bg-img object-cover object-center scale-110 opacity-30"
          priority
          quality={70}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-base/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/60 to-transparent" />
      </div>

      {/* Ticker tape */}
      <div className="absolute top-16 sm:top-20 left-0 right-0 z-10 border-y border-amber/20 bg-base/50 backdrop-blur-sm overflow-hidden">
        <div className="animate-ticker whitespace-nowrap py-2">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] sm:text-[11px] tracking-[0.2em] text-amber/70 uppercase">
            {'OSHAKATI ✦ ONGWEDIVA ✦ ONDANGWA ✦ TAXI TRANSPORT ✦ CONSTRUCTION ✦ LOGISTICS ✦ CLEANING ✦ MI-WAY FLEET ✦ NAMIBIA ✦ 24/7 AVAILABLE ✦ '}
            {'OSHAKATI ✦ ONGWEDIVA ✦ ONDANGWA ✦ TAXI TRANSPORT ✦ CONSTRUCTION ✦ LOGISTICS ✦ CLEANING ✦ MI-WAY FLEET ✦ NAMIBIA ✦ 24/7 AVAILABLE ✦ '}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — Hero text */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
              className="inline-flex items-center gap-2 bg-amber-muted border border-amber/20 px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] sm:text-[11px] tracking-[0.2em] text-amber uppercase font-medium">
                Now Accepting Rides — Northern Namibia
              </span>
            </motion.div>

            {/* Title — Bebas Neue display */}
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(3.5rem,12vw,10rem)] text-text-primary leading-[0.9] tracking-[0.02em] mb-4"
            >
              MOVING
              <br />
              <span className="text-amber">NAMIBIA</span>
              <br />
              FORWARD
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg"
            >
              Taxi transport across Oshakati, Ongwediva, and Ondangwa. Construction, logistics, and cleaning coming soon. One company, one vision, full Namibia coverage.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href="https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+taxi+ride."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-amber-light transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book a Ride
              </a>
              <a
                href="/services"
                className="flex items-center gap-2 border border-base-border text-text-secondary font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-medium px-8 py-4 hover:border-amber/50 hover:text-amber transition-all duration-200"
              >
                Our Services
              </a>
            </motion.div>

            {/* Stats strip — counter animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-0 border-t border-base-border"
            >
              <div className="py-4 pr-4 border-r border-base-border">
                <span className="font-display text-2xl sm:text-3xl text-amber">2017</span>
                <span className="block font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.1em] text-text-muted uppercase mt-1">Established</span>
              </div>
              <div className="py-4 px-4 border-r border-base-border">
                <span className="font-display text-2xl sm:text-3xl text-text-primary">5+</span>
                <span className="block font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.1em] text-text-muted uppercase mt-1">Services</span>
              </div>
              <div className="py-4 px-4">
                <span className="font-display text-2xl sm:text-3xl text-text-primary">3</span>
                <span className="block font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.1em] text-text-muted uppercase mt-1">Cities</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Logo/brand panel */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[3/2] border border-base-border p-8 flex items-center justify-center bg-base-card">
              <Image
                src="/assets/brand/brand-asset-16.webp"
                alt="MI-WAY promotional banner"
                width={350}
                height={230}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-[9px] tracking-[0.2em] text-text-muted uppercase mt-3">
              MI-WAY by Malu Investment /// Est. 2017
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
