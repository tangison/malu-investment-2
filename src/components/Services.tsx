import Image from "next/image";

const services = [
  {
    title: "Taxi Transport",
    description: "Reliable point-to-point rides across Okahandja and surrounding areas. Day or night — we show up.",
    status: "Active" as const,
    image: "https://sfile.chatglm.cn/images-ppt/7460586637f0.jpeg",
  },
  {
    title: "Construction & Renovation",
    description: "Residential and commercial building projects. Quality work, honest timelines.",
    status: "Coming Soon" as const,
    image: "https://sfile.chatglm.cn/images-ppt/96d044b023b9.jpg",
  },
  {
    title: "Logistics & Import/Export",
    description: "Goods movement across Namibia and borders. Supply chain support that keeps your business moving.",
    status: "Coming Soon" as const,
    image: "https://sfile.chatglm.cn/images-ppt/ce22f2ddd21a.jpg",
  },
  {
    title: "Cleaning & Carwash",
    description: "Professional cleaning for homes, offices, and vehicles. Every space spotless.",
    status: "Coming Soon" as const,
    image: "https://sfile.chatglm.cn/images-ppt/cac5ce59d116.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-malu-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.3em] font-medium">
            What We Do
          </span>
          <h2 className="font-[var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-malu-navy tracking-tight mt-3">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-malu-gold mt-4" />
        </div>

        {/* Service cards with images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden bg-white transition-all duration-400 hover:-translate-y-0.5 ${
                service.status === "Active"
                  ? "border-2 border-malu-gold/25 hover:border-malu-gold/50"
                  : "border border-malu-border hover:border-malu-gold/30"
              }`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                {/* Status badge */}
                <span
                  className={`absolute top-3 right-3 font-[var(--font-outfit)] text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 z-10 ${
                    service.status === "Active"
                      ? "text-white bg-malu-gold/90"
                      : "text-malu-text-muted/60 bg-white/90 border border-malu-border"
                  }`}
                >
                  {service.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3
                  className={`font-[var(--font-outfit)] text-lg sm:text-xl font-bold tracking-tight mb-2 ${
                    service.status === "Active"
                      ? "text-malu-navy"
                      : "text-malu-navy group-hover:text-malu-gold"
                  } transition-colors duration-300`}
                >
                  {service.title}
                </h3>
                <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-sm leading-relaxed">
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
