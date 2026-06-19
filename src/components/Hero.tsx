export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-malu-obsidian">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-malu-obsidian via-malu-charcoal to-malu-obsidian" />

        {/* Subtle radial glow */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-malu-gold/[0.03] rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-malu-gold/[0.02] rounded-full blur-[100px]" />

        {/* Geometric pattern - subtle Namibian-inspired lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #C8A44E 12%, transparent 12.5%, transparent 87%, #C8A44E 87.5%, #C8A44E),
              linear-gradient(150deg, #C8A44E 12%, transparent 12.5%, transparent 87%, #C8A44E 87.5%, #C8A44E),
              linear-gradient(30deg, #C8A44E 12%, transparent 12.5%, transparent 87%, #C8A44E 87.5%, #C8A44E),
              linear-gradient(150deg, #C8A44E 12%, transparent 12.5%, transparent 87%, #C8A44E 87.5%, #C8A44E)
            `,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        />

        {/* Diagonal gold accent line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              165deg,
              transparent 0%,
              transparent 42%,
              rgba(200, 164, 78, 0.06) 44%,
              rgba(200, 164, 78, 0.12) 45%,
              rgba(200, 164, 78, 0.06) 46%,
              transparent 48%,
              transparent 100%
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 sm:pt-36 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 bg-malu-gold/[0.08] border border-malu-gold/20 px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-malu-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-malu-gold" />
            </span>
            <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.25em] font-medium">
              Now Accepting Rides
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-outfit)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-malu-cream leading-[0.95] tracking-tight mb-6">
            Okahandja&apos;s
            <br />
            <span className="animate-gold-shimmer">Trusted</span>
            <br />
            Transport CC
          </h1>

          {/* Subheading */}
          <p className="text-malu-cream/50 font-[var(--font-plus-jakarta)] text-lg sm:text-xl md:text-[1.35rem] leading-relaxed mb-10 max-w-xl font-normal">
            Professional taxi, construction, logistics, and cleaning services.
            One call. One trusted partner. Since 2017.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-malu-gold text-malu-obsidian font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-malu-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-malu-gold/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book a Ride
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-malu-cream/15 text-malu-cream/60 font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-medium px-8 py-4 hover:border-malu-gold/40 hover:text-malu-gold transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>

          {/* Registration & trust line */}
          <div className="mt-14 flex items-center gap-4">
            <div className="w-10 h-px bg-gradient-to-r from-malu-gold/50 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="text-malu-cream/25 font-[var(--font-plus-jakarta)] text-xs tracking-[0.15em] uppercase">
                CC/2017/00248
              </span>
              <span className="text-malu-gold/30">|</span>
              <span className="text-malu-cream/25 font-[var(--font-plus-jakarta)] text-xs tracking-[0.15em] uppercase">
                Registered in Namibia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-malu-obsidian to-transparent z-[5]" />
    </section>
  );
}
