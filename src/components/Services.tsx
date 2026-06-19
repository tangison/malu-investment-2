const services = [
  {
    title: "Taxi Transport",
    description:
      "Reliable point-to-point rides across Okahandja and surrounding areas. Day or night, we get you where you need to be — safely and on time.",
    status: "Active",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 002 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    title: "Construction & Renovation",
    description:
      "From new builds to renovations, our skilled team handles residential and commercial construction projects with precision and care.",
    status: "Coming Soon",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M17 14v7" />
        <path d="M7 14v7" />
        <path d="M17 3v3" />
        <path d="M7 3v3" />
        <path d="M10 14 2.3 6.3" />
        <path d="M14 6 21.7 13.7" />
        <path d="M8 6h8" />
      </svg>
    ),
  },
  {
    title: "Logistics & Import/Export",
    description:
      "Efficient goods movement and supply chain support. We help your business move products across borders and within Namibia.",
    status: "Coming Soon",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 03 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Cleaning & Carwash",
    description:
      "Professional cleaning for homes, offices, and vehicles. We take pride in leaving every space spotless and every car gleaming.",
    status: "Coming Soon",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-malu-obsidian py-24 sm:py-32">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-malu-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="mb-16 sm:mb-20">
          <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.3em] font-medium">
            What We Do
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl font-extrabold text-malu-cream tracking-tight mt-3">
            Our Services
          </h2>
          <div className="w-14 h-0.5 bg-malu-gold mt-5" />
          <p className="text-malu-cream/40 font-[var(--font-plus-jakarta)] text-base sm:text-lg mt-6 max-w-lg leading-relaxed">
            From your daily commute to major construction projects, Malu Investment CC is building Okahandja&apos;s future — one service at a time.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                i === 0
                  ? "bg-malu-gold/[0.06] border border-malu-gold/30 hover:border-malu-gold/50"
                  : "bg-malu-charcoal/40 border border-malu-cream/[0.06] hover:border-malu-gold/20"
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-malu-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-7 sm:p-8">
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 flex items-center justify-center border transition-colors duration-300 ${
                      i === 0
                        ? "border-malu-gold/40 text-malu-gold group-hover:bg-malu-gold/10"
                        : "border-malu-cream/10 text-malu-cream/30 group-hover:border-malu-gold/30 group-hover:text-malu-gold/60"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <span
                    className={`font-[var(--font-outfit)] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 ${
                      service.status === "Active"
                        ? "text-malu-gold bg-malu-gold/10 border border-malu-gold/20"
                        : "text-malu-cream/25 border border-malu-cream/[0.08]"
                    }`}
                  >
                    {service.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-[var(--font-outfit)] text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                    i === 0 ? "text-malu-gold" : "text-malu-cream group-hover:text-malu-gold/80"
                  } transition-colors duration-300`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-malu-cream/40 font-[var(--font-plus-jakarta)] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-2">
                  <span
                    className={`font-[var(--font-outfit)] text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                      i === 0
                        ? "text-malu-gold/70 group-hover:text-malu-gold"
                        : "text-malu-cream/20 group-hover:text-malu-gold/60"
                    }`}
                  >
                    Learn More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-300 group-hover:translate-x-1 ${
                      i === 0 ? "text-malu-gold/70" : "text-malu-cream/20"
                    }`}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
