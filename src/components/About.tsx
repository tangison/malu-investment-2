import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-malu-substrate-warm border-b border-malu-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left — Narrative compartment */}
          <div className="lg:col-span-7 py-16 sm:py-20 lg:pr-12 border-b lg:border-b-0 lg:border-r border-malu-grid">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-malu-gold" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.15em] text-malu-silver-dark uppercase">
                [ About ]
              </span>
            </div>

            <h2 className="macro-type text-malu-navy mb-8" style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}>
              FROM THE<br />
              <span className="text-malu-gold">NORTH</span>
            </h2>

            <div className="space-y-5 border-t border-malu-grid pt-6">
              <p className="font-[family-name:var(--font-inter)] text-base text-malu-navy/70 leading-[1.8]">
                Malu Investment was founded with a straightforward belief: northern Namibia deserves reliable, professional services from people who live here. We started with one taxi and one phone number in Oshakati, and a commitment to showing up — every single time.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-base text-malu-navy/50 leading-[1.8]">
                From our base in Oshakati, we&apos;ve expanded across the northern corridor — Ongwediva, Ondangwa, and beyond. Growth hasn&apos;t changed who we are. We still answer every call. We still know every street. We still run on the same principle: be there, be reliable, be professional.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-base text-malu-navy/40 leading-[1.8]">
                Today, we&apos;re expanding into construction, logistics, and cleaning — and building MI-WAY, our own fleet management platform. Our goal: full Namibia coverage, starting from where it matters most.
              </p>
            </div>
          </div>

          {/* Right — Photo + Key facts */}
          <div className="lg:col-span-5 py-8 lg:py-16 lg:pl-12">
            {/* Real photo from the north */}
            <div className="relative overflow-hidden border border-malu-grid halftone mb-6">
              <Image
                src="/assets/brand/brand-asset-13.webp"
                alt="MI-WAY branded vehicle on northern Namibian road"
                width={600}
                height={440}
                className="w-full h-auto object-cover"
              />
              {/* Telemetry overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-malu-navy/85 px-4 py-3 flex items-center justify-between">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/60 uppercase">
                  MI-WAY UNIT 02 /// ONGWEDIVA
                </span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-gold uppercase">
                  N 47989 SH
                </span>
              </div>
            </div>

            {/* Key facts — Grid compartments */}
            <div className="grid grid-cols-2 gap-0 bg-malu-navy" style={{ gap: "1px" }}>
              <div className="bg-malu-substrate p-5">
                <span className="font-[family-name:var(--font-inter)] text-3xl font-black text-malu-gold/30 leading-none">
                  &apos;17
                </span>
                <h3 className="font-[family-name:var(--font-inter)] text-xs font-bold text-malu-navy mt-2 uppercase tracking-[0.04em]">Established</h3>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-malu-silver-dark tracking-[0.1em] mt-1">SINCE 2017</p>
              </div>
              <div className="bg-malu-substrate p-5">
                <span className="font-[family-name:var(--font-inter)] text-3xl font-black text-malu-navy/15 leading-none">
                  5
                </span>
                <h3 className="font-[family-name:var(--font-inter)] text-xs font-bold text-malu-navy mt-2 uppercase tracking-[0.04em]">Service Lines</h3>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-malu-silver-dark tracking-[0.1em] mt-1">TRANSPORT+TECH</p>
              </div>
              <div className="bg-malu-substrate p-5">
                <span className="font-[family-name:var(--font-inter)] text-xs font-bold text-malu-navy uppercase tracking-[0.04em]">3 Cities</span>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-malu-silver-dark tracking-[0.1em] mt-1">OSH///ONGW///OND</p>
              </div>
              <div className="bg-malu-substrate p-5">
                <span className="font-[family-name:var(--font-inter)] text-xs font-bold text-malu-navy uppercase tracking-[0.04em]">1 Number</span>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-malu-gold tracking-[0.1em] mt-1">+264 81 127 7308</p>
              </div>
            </div>

            {/* WhatsApp dispatch reference */}
            <div className="mt-4 border border-malu-grid p-4 flex items-center gap-4">
              <Image
                src="/assets/brand/brand-asset-14.webp"
                alt="MI-WAY WhatsApp dispatch"
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
              />
              <div>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver-dark uppercase block">
                  DISPATCH CHANNEL
                </span>
                <span className="font-[family-name:var(--font-inter)] text-sm font-bold text-malu-navy">
                  WhatsApp Fleet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
