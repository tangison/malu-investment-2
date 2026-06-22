"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Taxi Transport",
    description: "Reliable point-to-point rides across Oshakati, Ongwediva, and Ondangwa. 24/7 availability. MI-WAY dispatched. Safe, on time, every time.",
    status: "Active",
    image: "/assets/brand/brand-asset-04.webp",
    waLink: "https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+taxi+ride.",
    color: "amber",
  },
  {
    title: "Construction & Renovation",
    description: "Residential and commercial building projects across northern Namibia. Quality work, honest timelines, professional results.",
    status: "Coming Soon",
    image: "/assets/brand/brand-asset-07.webp",
    waLink: "https://wa.me/264812111920?text=Hi!+I'm+interested+in+your+construction+services.",
    color: "text-primary",
  },
  {
    title: "Logistics & Import/Export",
    description: "Goods movement across Namibia and borders. Cross-border capable supply chain support that keeps your business moving.",
    status: "Coming Soon",
    image: "/assets/brand/brand-asset-08.webp",
    waLink: "https://wa.me/264812111920?text=Hi!+I+need+logistics+support.",
    color: "text-primary",
  },
  {
    title: "Cleaning & Carwash",
    description: "Professional cleaning for homes, offices, and vehicles. Every space spotless. Northern Namibia coverage from day one.",
    status: "Coming Soon",
    image: "/assets/brand/brand-asset-09.webp",
    waLink: "https://wa.me/264812111920?text=Hi!+I'd+like+to+book+a+cleaning+service.",
    color: "text-primary",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section id="services" ref={sectionRef} className="relative bg-base-elevated border-y border-base-border">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              animate={isInView ? { clipPath: "inset(0% 0 0 0)", y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] text-text-primary leading-[0.9]"
            >
              OUR SERVICES
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary max-w-md leading-relaxed"
          >
            Four service verticals. One operational standard. From taxi dispatch on Oshakati&apos;s roads to logistics corridors connecting Namibia.
          </motion.p>
        </div>

        {/* Scroll indicators — mobile */}
        <div className="flex items-center justify-between mt-8 lg:hidden">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.15em] text-text-muted uppercase">
            Swipe to explore →
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-8 h-8 border border-base-border flex items-center justify-center text-text-muted hover:text-amber hover:border-amber/30 disabled:opacity-30 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-8 h-8 border border-base-border flex items-center justify-center text-text-muted hover:text-amber hover:border-amber/30 disabled:opacity-30 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal snap scroll | Desktop: grid */}
      <div className="relative">
        {/* Mobile carousel */}
        <div
          ref={scrollRef}
          className="lg:hidden flex overflow-x-auto snap-x-mandatory gap-4 px-4 sm:px-6 pb-16"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="min-w-[85vw] snap-start flex-shrink-0"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-0 max-w-7xl mx-auto border-t border-base-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="border-r border-base-border last:border-r-0"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* See all link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6 border-t border-base-border">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] text-amber hover:text-amber-light uppercase transition-colors"
        >
          View All Services →
        </Link>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div className="group relative bg-base-card hover:bg-base-elevated transition-all duration-300 h-full">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 85vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-card via-transparent to-transparent opacity-60" />
        
        {/* Status badge */}
        <span className={`absolute top-3 right-3 font-[family-name:var(--font-space-grotesk)] text-[9px] tracking-[0.15em] uppercase font-bold px-3 py-1.5 ${
          service.status === "Active"
            ? "bg-amber text-base"
            : "bg-base/80 text-text-muted border border-base-border"
        }`}>
          {service.status}
        </span>

        {/* Hover CTA overlay */}
        <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <a
            href={service.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-[0.1em] font-bold px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl text-text-primary group-hover:text-amber transition-colors duration-200 mb-2">
          {service.title}
        </h3>
        <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>
    </div>
  );
}
