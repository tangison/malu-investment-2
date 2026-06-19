export default function About() {
  return (
    <section id="about" className="relative bg-malu-charcoal py-24 sm:py-32 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C8A44E 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-malu-gold/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-malu-gold/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Story */}
          <div>
            <span className="text-malu-gold font-[var(--font-outfit)] text-[11px] uppercase tracking-[0.3em] font-medium">
              Our Story
            </span>
            <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-malu-cream tracking-tight mt-3 mb-6">
              Built on the
              <br />
              <span className="text-malu-gold">Streets of Okahandja</span>
            </h2>
            <div className="w-14 h-0.5 bg-malu-gold mb-8" />

            <div className="space-y-5">
              <p className="text-malu-cream/50 font-[var(--font-plus-jakarta)] text-base leading-[1.8]">
                Malu Investment CC was founded with a simple belief: Okahandja deserves reliable, professional services from people who actually live here. We started with one taxi, one phone number, and an unwavering commitment to showing up — every single time.
              </p>
              <p className="text-malu-cream/50 font-[var(--font-plus-jakarta)] text-base leading-[1.8]">
                Registered in 2017 as Close Corporation CC/2017/00248, we&apos;ve grown from a transport service into a multi-service company serving our community. But growth hasn&apos;t changed who we are. We still answer every call. We still know every street. And we still treat every customer like a neighbour.
              </p>
              <p className="text-malu-cream/50 font-[var(--font-plus-jakarta)] text-base leading-[1.8]">
                Today, we&apos;re expanding into construction, logistics, and cleaning — bringing the same dependability that made our taxi service the trusted choice in Okahandja. When you work with Malu, you work with family.
              </p>
            </div>
          </div>

          {/* Right - Key facts */}
          <div className="space-y-6">
            {/* Year established */}
            <div className="bg-malu-obsidian/60 border border-malu-cream/[0.06] p-7 sm:p-8">
              <div className="flex items-center gap-5">
                <span className="font-[var(--font-outfit)] text-6xl sm:text-7xl font-extrabold text-malu-gold/20 leading-none">
                  &apos;17
                </span>
                <div>
                  <h3 className="font-[var(--font-outfit)] text-lg font-bold text-malu-cream mb-1">
                    Established
                  </h3>
                  <p className="text-malu-cream/40 font-[var(--font-plus-jakarta)] text-sm">
                    Registered Close Corporation since 2017
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-malu-obsidian/60 border border-malu-cream/[0.06] p-7 sm:p-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 border border-malu-gold/30 flex items-center justify-center text-malu-gold shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[var(--font-outfit)] text-lg font-bold text-malu-cream mb-1">
                    Okahandja, Namibia
                  </h3>
                  <p className="text-malu-cream/40 font-[var(--font-plus-jakarta)] text-sm">
                    Local knowledge. Local routes. Local trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-malu-obsidian/60 border border-malu-cream/[0.06] p-7 sm:p-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 border border-malu-gold/30 flex items-center justify-center text-malu-gold shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[var(--font-outfit)] text-lg font-bold text-malu-cream mb-1">
                    4 Service Lines
                  </h3>
                  <p className="text-malu-cream/40 font-[var(--font-plus-jakarta)] text-sm">
                    Transport, Construction, Logistics, Cleaning
                  </p>
                </div>
              </div>
            </div>

            {/* One number */}
            <div className="bg-malu-gold/[0.08] border border-malu-gold/25 p-7 sm:p-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-malu-gold/10 border border-malu-gold/30 flex items-center justify-center text-malu-gold shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[var(--font-outfit)] text-lg font-bold text-malu-gold mb-1">
                    One Number
                  </h3>
                  <p className="text-malu-cream/50 font-[var(--font-plus-jakarta)] text-sm">
                    All services, one call — +264 81 127 7308
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
