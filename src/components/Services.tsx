import Image from "next/image";

const services = [
  {
    title: "Taxi Transport",
    description: "Reliable point-to-point rides across Oshakati, Ongwediva, and Ondangwa. Day or night — we show up. MI-WAY dispatched.",
    status: "Active" as const,
    unit: "UNIT/T-01",
    image: "/assets/brand/brand-asset-04.webp",
  },
  {
    title: "Construction & Renovation",
    description: "Residential and commercial building projects across northern Namibia. Quality work, honest timelines.",
    status: "Coming Soon" as const,
    unit: "UNIT/C-02",
    image: "/assets/brand/brand-asset-07.webp",
  },
  {
    title: "Logistics & Import/Export",
    description: "Goods movement across Namibia and borders. Supply chain support that keeps your business moving forward.",
    status: "Coming Soon" as const,
    unit: "UNIT/L-03",
    image: "/assets/brand/brand-asset-08.webp",
  },
  {
    title: "Cleaning & Carwash",
    description: "Professional cleaning for homes, offices, and vehicles. Every space spotless. Northern Namibia coverage.",
    status: "Coming Soon" as const,
    unit: "UNIT/CL-04",
    image: "/assets/brand/brand-asset-09.webp",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-malu-substrate border-b border-malu-grid">
      {/* Section header — Industrial grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 py-12 sm:py-16 border-b border-malu-grid">
          <div className="sm:col-span-4">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.15em] text-malu-silver-dark uppercase block">
              [ Services ]
            </span>
            <h2 className="macro-type text-malu-navy mt-2" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
              WHAT<br />WE DO
            </h2>
          </div>
          <div className="sm:col-span-8 flex items-end">
            <p className="font-[family-name:var(--font-inter)] text-sm text-malu-navy/60 leading-relaxed max-w-lg sm:pb-2">
              Four service verticals. One operational standard. From taxi dispatch on Oshakati&apos;s roads to logistics corridors connecting Namibia — every division runs on the same commitment to reliability and accountability.
            </p>
          </div>
        </div>

        {/* Service cards — Grid compartments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 bg-malu-grid-dark" style={{ gap: "1px" }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-malu-substrate hover:bg-white transition-colors duration-200"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-malu-grid halftone">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Unit ID overlay */}
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-malu-navy/80">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver uppercase">
                    {service.unit}
                  </span>
                  <span
                    className={`font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.1em] uppercase font-bold ${
                      service.status === "Active"
                        ? "text-malu-gold"
                        : "text-malu-silver-dark"
                    }`}
                  >
                    {service.status === "Active" ? ">>>" : "..."} {service.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-[family-name:var(--font-inter)] text-base sm:text-lg font-black tracking-[-0.02em] text-malu-navy uppercase leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-malu-navy/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
