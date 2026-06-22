import Image from "next/image";

export default function MiWay() {
  return (
    <section id="miway" className="relative bg-miway-navy py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-malu-gold/[0.03] rounded-full blur-[80px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-miway-silver/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Shield */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-malu-gold/[0.04] rounded-full blur-[50px]" />
              <Image
                src="/assets/brand/mi-way-shield.webp"
                alt="MI-WAY fleet management shield emblem"
                width={220}
                height={290}
                className="relative z-10 animate-float"
                priority
              />
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-6 h-px bg-miway-silver/30" />
              <span className="text-miway-silver/50 font-[var(--font-outfit)] text-[10px] uppercase tracking-[0.3em] font-medium">
                Fleet Management
              </span>
            </div>

            <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl font-extrabold text-miway-silver-light tracking-tight leading-[0.95] mb-2">
              MI-WAY
            </h2>
            <p className="text-miway-silver-dark font-[var(--font-plus-jakarta)] text-xs tracking-[0.2em] uppercase mb-8">
              by Malu Investment.cc
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-miway-silver/55 font-[var(--font-plus-jakarta)] text-base leading-[1.75]">
                MI-WAY is a taxi fleet dispatch and management platform developed in-house by Malu Investment CC. Born from real operational needs on Okahandja&apos;s roads.
              </p>
              <p className="text-miway-silver/40 font-[var(--font-plus-jakarta)] text-base leading-[1.75]">
                Built for operators who need reliability over features. Dispatch. Tracking. Management. That&apos;s the scope.
              </p>
            </div>

            {/* Fleet management preview image */}
            <div className="relative overflow-hidden border border-miway-silver/10 rounded-sm">
              <Image
                src="https://sfile.chatglm.cn/images-ppt/07d67f488016.png"
                alt="MI-WAY fleet management dispatch dashboard"
                width={600}
                height={384}
                className="w-full h-auto object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-miway-navy via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-malu-gold/60 rounded-full" />
                <span className="text-miway-silver/40 font-[var(--font-plus-jakarta)] text-xs tracking-[0.1em] uppercase">
                  In Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-miway-silver/10 to-transparent" />
    </section>
  );
}
