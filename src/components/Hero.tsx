import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-malu-navy">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-malu-navy-deep via-malu-navy to-malu-navy-light" />

        {/* Radial glow */}
        <div className="absolute top-1/3 -right-1/4 w-[700px] h-[700px] bg-malu-gold/[0.04] rounded-full blur-[100px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-malu-gold/[0.02] rounded-full blur-[80px]" />

        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #A9802D 0.5px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Diagonal gold accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(165deg, transparent 42%, rgba(169,128,45,0.05) 44%, rgba(169,128,45,0.1) 45%, rgba(169,128,45,0.05) 46%, transparent 48%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-malu-gold/[0.08] border border-malu-gold/20 px-4 py-2 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-malu-gold opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-malu-gold" />
              </span>
              <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.25em] font-medium">
                Now Accepting Rides
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-malu-cream leading-[0.95] tracking-tight mb-6">
              Moving
              <br />
              <span className="animate-gold-shimmer">Namibia</span>
              <br />
              Forward
            </h1>

            {/* Subheading */}
            <p className="text-malu-cream/45 font-[var(--font-plus-jakarta)] text-base sm:text-lg leading-relaxed mb-9 max-w-md">
              Okahandja-founded. Operating nationally. From transport to technology — one company, one vision, full Namibia coverage.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/264811277308"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-malu-gold text-malu-navy font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-bold px-7 py-3.5 hover:bg-malu-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-malu-gold/15"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book a Ride
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-malu-cream/15 text-malu-cream/55 font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-medium px-7 py-3.5 hover:border-malu-gold/30 hover:text-malu-gold transition-all duration-300"
              >
                Our Services
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-10 flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-malu-gold/40 to-transparent" />
              <span className="text-malu-cream/20 font-[var(--font-plus-jakarta)] text-[11px] tracking-[0.18em] uppercase">
                CC/2017/00248 · Namibia
              </span>
            </div>
          </div>

          {/* Right — Logo mark */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-malu-gold/[0.06] rounded-3xl blur-[60px]" />
              <Image
                src="/assets/brand/malu-investment-logo.webp"
                alt="Malu Investment CC logo"
                width={340}
                height={210}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-malu-cream to-transparent z-[5]" />
    </section>
  );
}
