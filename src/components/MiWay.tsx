import Image from "next/image";

export default function MiWay() {
  return (
    <section id="miway" className="relative bg-miway-navy-deep py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-miway-navy-deep via-miway-navy to-miway-navy-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-malu-gold/[0.02] rounded-full blur-[80px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#C0C8D4 1px, transparent 1px), linear-gradient(90deg, #C0C8D4 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-miway-silver/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Shield emblem */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-malu-gold/[0.04] rounded-full blur-[60px]" />
              <Image
                src="/assets/brand/mi-way-shield.webp"
                alt="MI-WAY fleet management shield emblem"
                width={260}
                height={343}
                className="relative z-10 animate-float"
                priority
              />
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            {/* Sub-brand label */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-6 h-px bg-miway-silver/40" />
              <span className="text-miway-silver/60 font-[var(--font-outfit)] text-[10px] uppercase tracking-[0.3em] font-medium">
                Fleet Management
              </span>
            </div>

            {/* Wordmark */}
            <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl font-extrabold text-miway-silver-light tracking-tight leading-[0.95] mb-2">
              MI-WAY
            </h2>
            <p className="text-miway-silver-dark font-[var(--font-plus-jakarta)] text-xs tracking-[0.2em] uppercase mb-8">
              by Malu Investment.cc
            </p>

            {/* Body copy — restrained, enterprise */}
            <div className="space-y-4 mb-8">
              <p className="text-miway-silver/55 font-[var(--font-plus-jakarta)] text-base leading-[1.75]">
                MI-WAY is a taxi fleet dispatch and management platform developed in-house by Malu Investment CC. Born from real operational needs on Okahandja&apos;s roads — not from a boardroom.
              </p>
              <p className="text-miway-silver/40 font-[var(--font-plus-jakarta)] text-base leading-[1.75]">
                Built for operators who need reliability over features. Dispatch. Tracking. Management. That&apos;s the scope.
              </p>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-malu-gold/60 rounded-full" />
              <span className="text-miway-silver/40 font-[var(--font-plus-jakarta)] text-xs tracking-[0.12em] uppercase">
                In Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-miway-silver/15 to-transparent" />
    </section>
  );
}
