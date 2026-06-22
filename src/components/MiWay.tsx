import Image from "next/image";

export default function MiWay() {
  return (
    <section id="miway" className="relative bg-malu-navy overflow-hidden scanlines">
      {/* Top divider */}
      <div className="warning-stripe" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
          {/* Left — Shield emblem compartment */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start py-8 lg:py-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-malu-silver/15">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.15em] text-malu-silver/40 uppercase mb-4">
              &lt; Fleet System /&gt;
            </span>
            <div className="relative w-44 sm:w-52">
              <Image
                src="/assets/brand/brand-asset-03.webp"
                alt="MI-WAY shield emblem"
                width={220}
                height={290}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-malu-gold" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.15em] text-malu-silver/40 uppercase blink-cursor">
                In Development
              </span>
            </div>
          </div>

          {/* Right — Copy + Fleet image */}
          <div className="lg:col-span-8 lg:pl-12 pt-8 lg:pt-0">
            {/* Micro label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-malu-silver/20" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.15em] text-malu-silver/40 uppercase">
                [ Dispatch Platform ]
              </span>
            </div>

            {/* Massive MI-WAY header */}
            <h2 className="macro-type text-malu-silver-light" style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}>
              MI-WAY
            </h2>
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] text-malu-silver-dark uppercase mt-1 mb-8">
              by Malu Investment /// Fleet Management System
            </p>

            {/* Description grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-malu-silver/10 mb-8">
              <div className="py-5 pr-6 border-b sm:border-b-0 sm:border-r border-malu-silver/10">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/30 uppercase block mb-2">
                  Function
                </span>
                <p className="font-[family-name:var(--font-inter)] text-sm text-malu-silver/60 leading-relaxed">
                  MI-WAY is a taxi fleet dispatch and management platform developed in-house. Born from real operational needs on Oshakati&apos;s roads — dispatch, tracking, management.
                </p>
              </div>
              <div className="py-5 sm:pl-6 border-b border-malu-silver/10">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/30 uppercase block mb-2">
                  Philosophy
                </span>
                <p className="font-[family-name:var(--font-inter)] text-sm text-malu-silver/40 leading-relaxed">
                  Built for operators who need reliability over features. No bloat. No vanity metrics. Dispatch. Track. Manage. That&apos;s the scope.
                </p>
              </div>
            </div>

            {/* Fleet photo — Oshakati */}
            <div className="relative overflow-hidden border border-malu-silver/10 halftone">
              <Image
                src="/assets/brand/brand-asset-15.webp"
                alt="MI-WAY fleet vehicles at Oshakati Commercial Hub"
                width={600}
                height={400}
                className="w-full h-auto object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-malu-navy via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-malu-navy/80">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/50 uppercase">
                  OSHAKATI COMMERCIAL HUB /// AUTHORIZED PARKING
                </span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-gold uppercase">
                  REV 2.6
                </span>
              </div>
            </div>

            {/* MI-WAY shields reference */}
            <div className="mt-4 flex items-center gap-4">
              <Image
                src="/assets/brand/brand-asset-12.webp"
                alt="MI-WAY shield variants"
                width={120}
                height={60}
                className="h-10 w-auto object-contain opacity-50"
              />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/30 uppercase">
                UNIT/MI-SHIELD-001 /// VARIANT A + B
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-malu-silver/10" />
    </section>
  );
}
