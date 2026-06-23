import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";

export const metadata = {
  title: "MI-WAY Fleet Management",
  description: "MI-WAY is Malu Investment's in-house taxi fleet dispatch and management platform. Real-time dispatch, GPS tracking, and fleet analytics for Northern Namibia.",
  openGraph: {
    title: "MI-WAY Fleet Management — Malu Investment",
    description: "Namibia's first local fleet management platform. Dispatch, track, manage.",
    type: "website",
  },
  alternates: { canonical: "https://malu-investment-2.vercel.app/mi-way" },
};

export default function MiWayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">Fleet Management Platform</span>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] text-text-primary leading-[0.9] mb-2">MI-WAY</h1>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm tracking-[0.2em] text-amber/60 uppercase mb-8">by Malu Investment /// Dispatch System</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/80 leading-[1.8]">
                MI-WAY is a taxi fleet dispatch and management platform developed in-house by Malu Investment. Born from real operational needs on Oshakati&apos;s roads, it was designed to solve a simple problem: how do you reliably coordinate multiple vehicles across three cities without losing track?
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/60 leading-[1.8]">
                The platform handles three core functions: dispatch coordination (matching riders with the nearest available driver), real-time tracking (knowing where every vehicle is at all times), and fleet management (maintenance schedules, driver performance, operational analytics). No bloat. No vanity metrics. Just dispatch, track, manage.
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/40 leading-[1.8]">
                MI-WAY is currently in active development. Our beta fleet is already operating in Oshakati and Ongwediva, with real passengers and real rides every day. The platform will expand to cover all of northern Namibia, and eventually, the entire country.
              </p>
              <div className="bg-base-card border border-base-border p-6">
                <h3 className="font-display text-xl text-text-primary mb-4">PLATFORM CAPABILITIES</h3>
                <ul className="space-y-3">
                  {["Real-time dispatch coordination", "GPS vehicle tracking", "Driver performance analytics", "Maintenance scheduling", "Passenger booking via WhatsApp", "Fleet utilization reporting"].map((f) => (
                    <li key={f} className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/264812111920?text=Hi!+I'm+interested+in+the+MI-WAY+platform."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-[0.1em] font-bold px-6 py-3 hover:bg-amber-light transition-colors"
              >
                Enquire About MI-WAY →
              </a>
            </div>
            <div className="space-y-6">
              <div className="bg-navy border border-amber/10 p-8 flex items-center justify-center scanlines">
                <Image src="/assets/brand/brand-asset-03.webp" alt="MI-WAY Shield" width={160} height={211} className="shield-pulse w-40 h-auto" />
              </div>
              <div className="bg-base-card border border-base-border p-4">
                <div className="font-mono text-[10px] tracking-[0.12em] text-amber/50 uppercase space-y-1">
                  <p>&gt; SYSTEM: MI-WAY v2.6</p>
                  <p>&gt; STATUS: <span className="text-whatsapp">In Development</span></p>
                  <p>&gt; DEPLOY: Oshakati, Ongwediva, Ondangwa</p>
                  <p>&gt; ACTIVE_UNITS: 02</p>
                  <p>&gt; FUTURE: National Expansion</p>
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border border-base-border">
                <Image src="/assets/brand/brand-asset-15-crop-bottom.webp" alt="MI-WAY fleet vehicles" width={768} height={499} className="w-full h-full object-cover opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 bg-base/80 px-4 py-3">
                  <span className="font-mono text-[8px] tracking-[0.12em] text-text-muted uppercase">MI-WAY FLEET /// OSHAKATI COMMERCIAL HUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
