export default function About() {
  return (
    <section id="about" className="relative bg-malu-sand/40 py-20 sm:py-28 overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #A9802D20 0.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Narrative */}
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
                Today, we&apos;re expanding into construction, logistics, and cleaning — and building MI-WAY, our own fleet management platform. Our goal: full Namibia coverage. When you work with Malu, you work with a partner who&apos;s in it for the long haul.
              </p>
            </div>
          </div>

          {/* Right — Key facts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-malu-white border border-malu-sand p-6">
              <span className="font-[var(--font-outfit)] text-4xl sm:text-5xl font-extrabold text-malu-gold/25 leading-none">
                &apos;17
              </span>
              <h3 className="font-[var(--font-outfit)] text-base font-bold text-malu-navy mt-2 mb-1">Established</h3>
              <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-xs leading-relaxed">
                Registered CC since 2017
              </p>
            </div>

            <div className="bg-malu-white border border-malu-sand p-6">
              <div className="w-10 h-10 border border-malu-gold/30 flex items-center justify-center text-malu-gold mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-[var(--font-outfit)] text-base font-bold text-malu-navy mb-1">Okahandja</h3>
              <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-xs leading-relaxed">
                Founded. Based. Expanding nationally.
              </p>
            </div>

            <div className="bg-malu-white border border-malu-sand p-6">
              <div className="w-10 h-10 border border-malu-gold/30 flex items-center justify-center text-malu-gold mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3 className="font-[var(--font-outfit)] text-base font-bold text-malu-navy mb-1">5 Service Lines</h3>
              <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-xs leading-relaxed">
                Transport, Construction, Logistics, Cleaning, Software
              </p>
            </div>

            <div className="bg-malu-gold/[0.06] border border-malu-gold/25 p-6">
              <div className="w-10 h-10 bg-malu-gold/10 border border-malu-gold/30 flex items-center justify-center text-malu-gold mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-outfit)] text-base font-bold text-malu-navy mb-1">MI-WAY</h3>
              <p className="text-malu-text-muted font-[var(--font-plus-jakarta)] text-xs leading-relaxed">
                Our fleet management platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
