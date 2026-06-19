import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-malu-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://sfile.chatglm.cn/images-ppt/73126345b4e3.jpg"
          alt="Namibian savanna landscape at golden hour"
          fill
          className="object-cover object-center"
          priority
          quality={80}
          sizes="100vw"
        />
        {/* Light overlay — keeps it bright but readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-malu-gold/[0.08] border border-malu-gold/20 px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 bg-malu-gold rounded-full animate-pulse" />
              <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.25em] font-medium">
                Now Accepting Rides
              </span>
            </div>

            <h1 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-malu-navy leading-[0.95] tracking-tight mb-5">
              Moving
              <br />
              <span className="text-malu-gold">Namibia</span>
              <br />
              Forward
            </h1>

            <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Okahandja-founded. Operating nationally. From transport to technology — one company, one vision, full Namibia coverage.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="https://wa.me/264811277308"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-malu-navy text-white font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-bold px-7 py-3.5 hover:bg-malu-navy-light transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book a Ride
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-malu-navy/15 text-malu-navy/60 font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-medium px-7 py-3.5 hover:border-malu-gold/40 hover:text-malu-gold transition-all duration-300"
              >
                Our Services
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-9 flex items-center gap-3">
              <div className="w-8 h-px bg-malu-gold/40" />
              <span className="text-malu-text-muted/40 font-[var(--font-plus-jakarta)] text-[11px] tracking-[0.18em] uppercase">
                CC/2017/00248 · Namibia
              </span>
            </div>
          </div>

          {/* Right — Logo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-malu-gold/[0.06] rounded-2xl blur-[40px]" />
              <Image
                src="/assets/brand/malu-investment-logo.webp"
                alt="Malu Investment CC logo"
                width={300}
                height={185}
                className="relative z-10 drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
