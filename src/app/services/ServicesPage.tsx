"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    title: "Taxi Transport",
    status: "Active",
    image: "/assets/brand/brand-asset-04.webp",
    waLink: "https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+taxi+ride.",
    description: "Reliable point-to-point rides across Oshakati, Ongwediva, and Ondangwa. Our taxi service operates 24/7 — day or night, rain or shine, we show up. Every ride is MI-WAY dispatched for accountability and tracking.",
    features: ["24/7 Availability", "MI-WAY Dispatched", "Safe & Professional Drivers", "Oshakati ↔ Ongwediva ↔ Ondangwa", "WhatsApp Booking"],
    pricing: "Contact for quote — fair, distance-based pricing",
  },
  {
    title: "Construction & Renovation",
    status: "Coming Soon",
    image: "/assets/brand/brand-asset-07.webp",
    waLink: "https://wa.me/264812111920?text=Hi!+I'm+interested+in+your+construction+services.",
    description: "Residential and commercial building projects across northern Namibia. Quality workmanship, honest timelines, and professional project management from start to finish.",
    features: ["Residential Building", "Commercial Projects", "Renovation & Remodeling", "Honest Timelines", "Quality Materials"],
    pricing: "Contact for quote — project-based pricing",
  },
  {
    title: "Logistics & Import/Export",
    status: "Coming Soon",
    image: "/assets/brand/brand-asset-08.webp",
    waLink: "https://wa.me/264812111920?text=Hi!+I+need+logistics+support.",
    description: "Goods movement across Namibia and across borders. Cross-border capable supply chain support that keeps your business moving. From warehousing to last-mile delivery.",
    features: ["Cross-Border Transport", "Supply Chain Support", "Warehousing", "Last-Mile Delivery", "Import/Export Documentation"],
    pricing: "Contact for quote — route-based pricing",
  },
  {
    title: "Cleaning & Carwash",
    status: "Coming Soon",
    image: "/assets/brand/brand-asset-09.webp",
    waLink: "https://wa.me/264812111920?text=Hi!+I'd+like+to+book+a+cleaning+service.",
    description: "Professional cleaning for homes, offices, and vehicles. Every space spotless, every time. Northern Namibia coverage from day one when we launch.",
    features: ["Home Cleaning", "Office Cleaning", "Vehicle Carwash", "Deep Cleaning", "Scheduled Services"],
    pricing: "Contact for quote — service-based pricing",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">
          Our Services
        </span>
        <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-text-primary leading-[0.9] mb-4">
          WHAT WE DO
        </h1>
        <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary max-w-2xl mb-12">
          Four service verticals built on one principle: show up, be reliable, deliver. From taxi dispatch on Oshakati&apos;s roads to logistics corridors connecting Namibia.
        </p>
      </motion.div>

      <div className="space-y-16">
        {serviceDetails.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start border-b border-base-border pb-16"
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-base-border">
              <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <span className={`absolute top-3 right-3 font-[family-name:var(--font-space-grotesk)] text-[9px] tracking-[0.15em] uppercase font-bold px-3 py-1.5 ${
                service.status === "Active" ? "bg-amber text-base" : "bg-base/80 text-text-muted border border-base-border"
              }`}>
                {service.status}
              </span>
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-4">{service.title}</h2>
              <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary leading-relaxed mb-6">{service.description}</p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-text-muted mb-4">{service.pricing}</p>
              <a
                href={service.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-[0.1em] font-bold px-6 py-3 hover:bg-amber-light transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {service.status === "Active" ? "Book Now" : "Enquire"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
