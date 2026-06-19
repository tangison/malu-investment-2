const services = [
  {
    title: "Taxi Transport",
    description:
      "Reliable point-to-point rides across Okahandja and surrounding areas. Day or night, rain or shine — we show up.",
    status: "Active",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 002 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    title: "Construction & Renovation",
    description:
      "Residential and commercial building projects. From new builds to renovations — quality work, honest timelines.",
    status: "Coming Soon",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="8" rx="1" /><path d="M17 14v7" /><path d="M7 14v7" /><path d="M17 3v3" /><path d="M7 3v3" />
      </svg>
    ),
  },
  {
    title: "Logistics & Import/Export",
    description:
      "Goods movement across Namibia and borders. Supply chain support that keeps your business moving.",
    status: "Coming Soon",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 03 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Cleaning & Carwash",
    description:
      "Professional cleaning for homes, offices, and vehicles. Every space spotless, every car gleaming.",
    status: "Coming Soon",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "MI-WAY Fleet Software",
    description:
      "Our own taxi fleet dispatch and management platform. Built from the road up, by people who know the business.",
    status: "In Development",
    isMiWay: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-malu-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-18">
          <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.3em] font-medium">
            What We Do
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-malu-navy tracking-tight mt-3">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-malu-gold mt-4" />
          <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-base sm:text-lg mt-5 max-w-lg leading-relaxed">
            From daily transport to fleet technology — Malu Investment CC is building Namibia&apos;s future across every sector we touch.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-400 hover:-translate-y-0.5 ${
                service.isMiWay
                  ? "bg-miway-navy border border-miway-silver/20 hover:border-malu-gold/30 sm:col-span-2 lg:col-span-1"
                  : service.status === "Active"
                  ? "bg-malu-white border-2 border-malu-gold/30 hover:border-malu-gold/50"
                  : "bg-malu-white border border-malu-sand hover:border-malu-gold/25"
              }`}
            >
              <div className="p-6 sm:p-7">
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 ${
                      service.isMiWay
                        ? "border-miway-silver/30 text-miway-silver group-hover:bg-miway-silver/10 group-hover:text-malu-gold"
                        : service.status === "Active"
                        ? "border-malu-gold/30 text-malu-gold group-hover:bg-malu-gold/5"
                        : "border-malu-sand text-malu-text-muted/40 group-hover:border-malu-gold/25 group-hover:text-malu-gold/60"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <span
                    className={`font-[var(--font-outfit)] text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 ${
                      service.status === "Active"
                        ? "text-malu-gold bg-malu-gold/[0.08] border border-malu-gold/20"
                        : service.status === "In Development"
                        ? "text-miway-silver bg-miway-silver/[0.08] border border-miway-silver/15"
                        : "text-malu-text-muted/40 border border-malu-sand/60"
                    }`}
                  >
                    {service.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-[var(--font-outfit)] text-lg font-bold tracking-tight mb-2 ${
                    service.isMiWay
                      ? "text-miway-silver-light group-hover:text-malu-gold"
                      : service.status === "Active"
                      ? "text-malu-navy"
                      : "text-malu-navy group-hover:text-malu-gold/80"
                  } transition-colors duration-300`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`font-[var(--font-plus-jakarta)] text-sm leading-relaxed mb-4 ${
                  service.isMiWay ? "text-miway-silver/50" : "text-malu-text-muted"
                }`}>
                  {service.description}
                </p>

                {/* Link */}
                {service.isMiWay && (
                  <a
                    href="#miway"
                    className="inline-flex items-center gap-1.5 text-miway-silver/60 hover:text-malu-gold font-[var(--font-outfit)] text-xs uppercase tracking-[0.12em] font-medium transition-colors duration-300"
                  >
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
