import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-malu-cream py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Photo + narrative */}
          <div>
            <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.3em] font-medium">
              Our Story
            </span>
            <h2 className="font-[var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-malu-navy tracking-tight mt-3 mb-5">
              From Okahandja,
              <br />
              <span className="text-malu-gold">Across Namibia</span>
            </h2>
            <div className="w-12 h-0.5 bg-malu-gold mb-7" />

            <div className="space-y-4">
              <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-base leading-[1.8]">
                Malu Investment CC was founded with a straightforward belief: Okahandja deserves reliable, professional services from people who live here. We started with one taxi and one phone number, and a commitment to showing up — every single time.
              </p>
              <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-base leading-[1.8]">
                Registered in 2017 as Close Corporation CC/2017/00248, we&apos;ve grown from a local taxi operator into a multi-service company serving the Otjozondjupa Region and beyond. But growth hasn&apos;t changed who we are. We still answer every call. We still know every street.
              </p>
              <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-base leading-[1.8]">
                Today, we&apos;re expanding into construction, logistics, and cleaning — and building MI-WAY, our own fleet management platform. Our goal: full Namibia coverage.
              </p>
            </div>
          </div>

          {/* Right — Okahandja photo + key facts */}
          <div>
            {/* Photo */}
            <div className="relative overflow-hidden mb-5">
              <Image
                src="https://sfile.chatglm.cn/images-ppt/266de076233b.jpg"
                alt="Okahandja, Namibia — aerial view"
                width={600}
                height={440}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-malu-navy/70 to-transparent p-4">
                <span className="text-white/80 font-[var(--font-plus-jakarta)] text-xs tracking-[0.12em] uppercase">
                  Okahandja, Otjozondjupa Region
                </span>
              </div>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-malu-border p-5">
                <span className="font-[var(--font-outfit)] text-3xl font-extrabold text-malu-gold/25 leading-none">
                  &apos;17
                </span>
                <h3 className="font-[var(--font-outfit)] text-sm font-bold text-malu-navy mt-2 mb-0.5">Established</h3>
                <p className="text-malu-text-muted/60 font-[var(--font-plus-jakarta)] text-xs">Registered CC since 2017</p>
              </div>
              <div className="bg-white border border-malu-border p-5">
                <h3 className="font-[var(--font-outfit)] text-sm font-bold text-malu-navy mb-0.5">5 Service Lines</h3>
                <p className="text-malu-text-muted/60 font-[var(--font-plus-jakarta)] text-xs">Transport, Construction, Logistics, Cleaning, Software</p>
              </div>
              <div className="bg-malu-gold/[0.06] border border-malu-gold/20 p-5 col-span-2">
                <h3 className="font-[var(--font-outfit)] text-sm font-bold text-malu-navy mb-0.5">One Number for Everything</h3>
                <p className="text-malu-gold font-[var(--font-outfit)] text-lg font-bold">+264 81 127 7308</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
