import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";

export const metadata = {
  title: "About",
  description: "Malu Investment was founded in 2017 in Oshakati, Northern Namibia. From one taxi to a multi-service enterprise covering Oshakati, Ongwediva, and Ondangwa.",
  openGraph: {
    title: "About Malu Investment — MI-WAY",
    description: "Our story: from one taxi in Oshakati to a multi-service enterprise across Northern Namibia.",
    type: "website",
  },
  alternates: { canonical: "https://malu-investment-2.vercel.app/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">Our Story</span>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] text-text-primary leading-[0.9] mb-8">FROM THE<br/><span className="text-amber">NORTH</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/80 leading-[1.8]">
                Malu Investment was founded in 2017 with a straightforward belief: northern Namibia deserves reliable, professional services from people who live here. We started with one taxi and one phone number in Oshakati, and a commitment to showing up — every single time.
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/60 leading-[1.8]">
                From our base in Oshakati, we&apos;ve expanded across the northern corridor — Ongwediva, Ondangwa, and beyond. Growth hasn&apos;t changed who we are. We still answer every call. We still know every street. We still run on the same principle: be there, be reliable, be professional.
              </p>
              <h2 className="font-display text-2xl text-amber mt-8 mb-4">WHY NORTHERN NAMIBIA?</h2>
              <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/60 leading-[1.8]">
                Northern Namibia is one of the most underserved regions in the country when it comes to professional, reliable services. The population is growing, the economy is expanding, but the service infrastructure hasn&apos;t kept pace. We saw an opportunity — not just for business, but for impact. When you operate in a community where you know people by name, accountability isn&apos;t a policy — it&apos;s personal.
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/60 leading-[1.8]">
                Our roots are here. Our team lives here. When someone in Ongwediva calls for a ride at 5 AM, it&apos;s not a ticket number — it&apos;s a neighbor. That&apos;s why reliability matters more than scale, and why we&apos;re building MI-WAY from the ground up, starting right here.
              </p>
              <div className="bg-base-card border border-base-border p-6 mt-8">
                <span className="font-display text-lg text-amber block mb-2">OUR VISION</span>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary italic">
                  &ldquo;Full Namibia coverage — starting from where it matters most.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[16/10] overflow-hidden border border-base-border mb-8">
                <Image src="/assets/brand/brand-asset-13.webp" alt="MI-WAY vehicle on northern Namibian road" width={600} height={440} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-base/80 px-4 py-3 flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.12em] text-text-muted uppercase">MI-WAY UNIT 02 /// ONGWEDIVA</span>
                  <span className="font-mono text-[9px] tracking-[0.12em] text-amber uppercase">N 47989 SH</span>
                </div>
              </div>
              <h3 className="font-display text-xl text-text-primary mb-6">MILESTONES</h3>
              <div className="relative border-l-2 border-amber/20 pl-6 space-y-6">
                {[
                  { year: "2017", event: "First taxi launched in Oshakati. One car, one phone number, one mission." },
                  { year: "2019", event: "Expanded service to Ongwediva and Ondangwa. The northern corridor begins." },
                  { year: "2022", event: "Launched MI-WAY dispatch system. From phone calls to platform-based coordination." },
                  { year: "2025", event: "Construction & Logistics divisions added. From one service to five." },
                  { year: "2026", event: "Full platform launch + national expansion begins. The vision takes shape." },
                ].map((m) => (
                  <div key={m.year} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-amber border-2 border-base" />
                    <span className="font-display text-lg text-amber">{m.year}</span>
                    <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary">{m.event}</p>
                  </div>
                ))}
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
