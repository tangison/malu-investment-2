import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-malu-substrate border-b border-malu-grid">
      {/* Background — Halftone dithered landscape */}
      <div className="absolute inset-0">
        <Image
          src="/assets/brand/brand-asset-05.webp"
          alt="Northern Namibian road landscape"
          fill
          className="object-cover object-center opacity-20"
          priority
          quality={60}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-malu-substrate/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 sm:pt-32">
        {/* Top ticker bar */}
        <div className="border-b border-malu-grid overflow-hidden">
          <div className="py-2 bg-malu-navy overflow-hidden">
            <div className="animate-ticker whitespace-nowrap">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.15em] text-malu-silver/70">
                {'>>> OSHAKATI /// ONGWEDIVA /// ONDANGWA /// TRANSPORT /// CONSTRUCTION /// LOGISTICS /// CLEANING /// MI-WAY FLEET MANAGEMENT /// NAMIBIA >>> '}
                {'>>> OSHAKATI /// ONGWEDIVA /// ONDANGWA /// TRANSPORT /// CONSTRUCTION /// LOGISTICS /// CLEANING /// MI-WAY FLEET MANAGEMENT /// NAMIBIA >>> '}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start py-12 sm:py-20 lg:py-24">
            {/* Left — Macro Typography */}
            <div className="lg:col-span-8 border-r-0 lg:border-r border-malu-grid pr-0 lg:pr-12">
              {/* Micro label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-malu-gold" />
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.15em] text-malu-silver-dark uppercase">
                  [ Active — Northern Namibia ]
                </span>
              </div>

              {/* Massive headline — Swiss Industrial */}
              <h1 className="macro-type text-malu-navy" style={{ fontSize: "clamp(3.5rem, 10vw, 12rem)" }}>
                MOVING
                <br />
                <span className="text-malu-gold">NAMIBIA</span>
                <br />
                FORWARD
              </h1>

              {/* Sub-line micro data */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-malu-grid">
                <div className="py-4 pr-4 border-r border-malu-grid">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver-dark block">
                    REG
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-sm font-bold text-malu-navy">
                    2017
                  </span>
                </div>
                <div className="py-4 px-4 border-r border-malu-grid">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver-dark block">
                    HUB
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-sm font-bold text-malu-navy">
                    Oshakati
                  </span>
                </div>
                <div className="py-4 px-4 border-r border-malu-grid">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver-dark block">
                    SERVICES
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-sm font-bold text-malu-navy">
                    5 Lines
                  </span>
                </div>
                <div className="py-4 px-4">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver-dark block">
                    STATUS
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-sm font-bold text-malu-gold">
                    Active
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-0 border-t border-malu-grid">
                <a
                  href="https://wa.me/264811277308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-malu-navy text-malu-substrate font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-malu-navy-deep transition-colors duration-150 border-r border-malu-substrate/20"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book a Ride
                </a>
                <a
                  href="#services"
                  className="flex items-center gap-2 border border-malu-grid text-malu-navy font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.1em] font-medium px-8 py-4 hover:bg-malu-navy hover:text-malu-substrate transition-colors duration-150"
                >
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-malu-silver-dark">SRV</span>
                  Our Services
                </a>
              </div>
            </div>

            {/* Right — Logo compartment */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-8 lg:py-0 lg:pl-12">
              <div className="relative w-full max-w-[280px] aspect-[5/3] border border-malu-grid p-6 flex items-center justify-center bg-white">
                <Image
                  src="/assets/brand/brand-asset-02.webp"
                  alt="Malu Investment logo"
                  width={250}
                  height={150}
                  className="object-contain w-full h-auto"
                  priority
                />
                {/* Corner marks */}
                <span className="absolute top-1 left-1 font-[family-name:var(--font-jetbrains-mono)] text-[7px] text-malu-silver-dark">+</span>
                <span className="absolute top-1 right-1 font-[family-name:var(--font-jetbrains-mono)] text-[7px] text-malu-silver-dark">+</span>
                <span className="absolute bottom-1 left-1 font-[family-name:var(--font-jetbrains-mono)] text-[7px] text-malu-silver-dark">+</span>
                <span className="absolute bottom-1 right-1 font-[family-name:var(--font-jetbrains-mono)] text-[7px] text-malu-silver-dark">+</span>
              </div>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.2em] text-malu-silver-dark mt-3 uppercase">
                REF /// MI-LOGO-001
              </span>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="warning-stripe" />
      </div>
    </section>
  );
}
