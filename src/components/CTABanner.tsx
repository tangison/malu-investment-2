export default function CTABanner() {
  return (
    <section id="contact" className="relative bg-malu-navy overflow-hidden scanlines">
      <div className="warning-stripe" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Left — Macro CTA */}
          <div className="lg:col-span-7 lg:pr-12 lg:border-r border-malu-silver/15">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-malu-gold" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.15em] text-malu-silver/40 uppercase">
                [ Contact ]
              </span>
            </div>

            <h2 className="macro-type text-malu-silver-light" style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}>
              NEED A<br />
              RIDE<span className="text-malu-gold">?</span>
            </h2>

            <p className="font-[family-name:var(--font-inter)] text-sm text-malu-silver/40 leading-relaxed mt-4 mb-8 max-w-md">
              Operating across Oshakati, Ongwediva, and Ondangwa. Call or WhatsApp — we pick up fast, we show up on time, and we get you there safely.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-0 border-t border-malu-silver/10 pt-6">
              <a
                href="https://wa.me/264811277308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-malu-gold text-malu-navy font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-malu-gold-muted transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+264811277308"
                className="flex items-center gap-2 border border-malu-silver/15 text-malu-silver/50 hover:text-malu-gold font-[family-name:var(--font-jetbrains-mono)] text-sm transition-colors duration-150 px-8 py-4 hover:border-malu-gold/30"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +264 81 127 7308
              </a>
            </div>
          </div>

          {/* Right — Operational grid */}
          <div className="lg:col-span-5 lg:pl-12 pt-8 lg:pt-0">
            <div className="grid grid-cols-1 gap-0 bg-malu-silver/5" style={{ gap: "1px" }}>
              <div className="bg-malu-navy p-5 border border-malu-silver/10">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/30 uppercase block mb-1">
                  HUB-01
                </span>
                <span className="font-[family-name:var(--font-inter)] text-lg font-black text-malu-silver-light uppercase tracking-[-0.02em]">
                  Oshakati
                </span>
              </div>
              <div className="bg-malu-navy p-5 border border-malu-silver/10">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/30 uppercase block mb-1">
                  HUB-02
                </span>
                <span className="font-[family-name:var(--font-inter)] text-lg font-black text-malu-silver-light uppercase tracking-[-0.02em]">
                  Ongwediva
                </span>
              </div>
              <div className="bg-malu-navy p-5 border border-malu-silver/10">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.12em] text-malu-silver/30 uppercase block mb-1">
                  HUB-03
                </span>
                <span className="font-[family-name:var(--font-inter)] text-lg font-black text-malu-silver-light uppercase tracking-[-0.02em]">
                  Ondangwa
                </span>
              </div>
            </div>
            <div className="mt-4 border border-malu-silver/10 p-4 bg-malu-navy">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.15em] text-malu-silver/30 uppercase">
                NORTHERN NAMIBIA /// OPERATIONAL ZONE
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="warning-stripe" />
    </section>
  );
}
