import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";

export const metadata = {
  title: "Driver-to-Owner Programme",
  description:
    "Turn your driving performance into asset ownership. Discover Mi-Way's transparent three-phase Driver-to-Owner programme in Namibia.",
  openGraph: {
    title: "Join Mi-Way: From Driver to Owner – Your Path to Independence",
    description:
      "Turn your driving performance into asset ownership. Discover Mi-Way's transparent three-phase Driver-to-Owner programme in Namibia.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mi-way.org/driver-to-owner",
  },
};

export default function DriverToOwnerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main id="main" className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-base py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">
              Driver-to-Owner Programme
            </span>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-text-primary leading-[0.9] mb-6">
              FROM DRIVER<br />
              <span className="text-amber">TO OWNER</span>
            </h1>
            <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary max-w-2xl leading-relaxed mb-4">
              At Mi-Way, a division of Maluinvestment.cc, we are building a pathway out of unemployment and into genuine economic freedom in Namibia.
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/60 max-w-2xl leading-relaxed">
              The best person to own the car is the dedicated individual behind the wheel. We turn capable drivers into successful small-business owners through a transparent, supportive vehicle ownership programme.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-light border-y border-light-border py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">
              The Programme
            </span>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-light-text leading-[0.9] mb-4">
              HOW IT WORKS
            </h2>
            <p className="font-[family-name:var(--font-space-grotesk)] text-base text-light-text-secondary max-w-2xl mb-12">
              Our structured three-phase journey ensures your professional success and protects the high standards our passengers expect.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white border border-light-border p-8">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase font-bold block mb-2">
                  Step 1
                </span>
                <h3 className="font-display text-2xl text-light-text mb-4">
                  Application & Screening
                </h3>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-secondary leading-relaxed mb-6">
                  We seek honest, committed individuals ready to change their lives.
                </p>
                <div className="space-y-3">
                  <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-[0.1em] text-light-text-muted uppercase font-bold">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    <li className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber flex-shrink-0 mt-1.5" />
                      Submit a complete CV
                    </li>
                    <li className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber flex-shrink-0 mt-1.5" />
                      Submit a recent Police Clearance Certificate (not older than 3 months)
                    </li>
                  </ul>
                </div>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-muted leading-relaxed mt-6">
                  We evaluate driving history, personal integrity, and a customer-first attitude to select drivers who represent Mi-Way with pride.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-light-border p-8">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase font-bold block mb-2">
                  Step 2
                </span>
                <h3 className="font-display text-2xl text-light-text mb-4">
                  6-Month Probation & Development
                </h3>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-secondary leading-relaxed mb-6">
                  A trial period designed to equip you with the tools needed to succeed.
                </p>
                <ul className="space-y-3">
                  {[
                    "Full access to a branded, well-maintained Mi-Way vehicle equipped with Cartrack telematics and a dual-facing dash cam",
                    "Transparent monitoring and coaching using advanced tracking and customer feedback to improve safety and earning consistency",
                    "Performance tracking based on driving behavior, customer service ratings, work reliability, and vehicle care",
                    "Full operational training covering app usage, procedure manuals, and vehicle cleanliness standards",
                  ].map((feature, i) => (
                    <li key={i} className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber flex-shrink-0 mt-1.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-light-border p-8">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase font-bold block mb-2">
                  Step 3
                </span>
                <h3 className="font-display text-2xl text-light-text mb-4">
                  Qualification & Drive-to-Own
                </h3>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-secondary leading-relaxed mb-6">
                  Drivers meeting performance, safety, and service benchmarks transition to an installment plan where generated income goes toward purchasing the vehicle.
                </p>
                <div className="bg-amber-muted border border-amber/20 p-4 mt-4">
                  <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-amber leading-relaxed">
                    Once fulfilled, the car belongs to you completely. You transition from a fleet driver to an independent owner-operator, holding a tangible asset to build your own transport business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide / What We Expect */}
        <section className="bg-base py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What Mi-Way Provides */}
              <div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">
                  What You Get
                </span>
                <h2 className="font-display text-3xl text-text-primary mb-6">
                  WHAT MI-WAY PROVIDES
                </h2>
                <ul className="space-y-4">
                  {[
                    "A reliable, fully insured, and tracked vehicle",
                    "Full integration with ride-hailing platforms",
                    "In-cabin and road-facing camera protection",
                    "Fuel and maintenance support based on contract terms",
                    "Consistent coaching and administrative backing",
                  ].map((item, i) => (
                    <li key={i} className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Expect */}
              <div>
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">
                  What It Takes
                </span>
                <h2 className="font-display text-3xl text-text-primary mb-6">
                  WHAT WE EXPECT
                </h2>
                <ul className="space-y-4">
                  {[
                    "Unwavering honesty and a strong work ethic",
                    "Exceptional customer service, treating every passenger like family",
                    "Respect for the vehicle and the rules of the road",
                    "A strong desire to work toward a goal that is truly your own",
                  ].map((item, i) => (
                    <li key={i} className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary flex items-start gap-3">
                      <span className="w-2 h-2 bg-amber flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-navy border-y border-amber/10 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-text-primary leading-[0.9] mb-6">
              WHY THIS MODEL<br />
              <span className="text-amber">CHANGES LIVES</span>
            </h2>
            <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary/70 leading-relaxed max-w-2xl mx-auto">
              Traditional driving jobs trap you in a cycle of earning for someone else. Mi-Way&apos;s Driver-to-Owner programme breaks that cycle by tying your daily performance directly to asset ownership. The car you work in today becomes the property you own tomorrow.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-light border-y border-light-border py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-light-text leading-[0.9] mb-6">
              READY TO START<br />
              <span className="text-amber">YOUR JOURNEY?</span>
            </h2>
            <p className="font-[family-name:var(--font-space-grotesk)] text-base text-light-text-secondary leading-relaxed mb-4 max-w-xl mx-auto">
              If you have a valid driver&apos;s licence, a clean police record, and the determination to write your own success story, we want to hear from you.
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-light-text-muted leading-relaxed mb-8 max-w-xl mx-auto">
              Send your detailed CV and recent Police Clearance Certificate to the designated email address or fill out the online application form below.
            </p>
            <a
              href="https://wa.me/264812111920?text=Hi!+I'm+interested+in+the+Driver-to-Owner+programme."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 hover:bg-amber-light transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Apply via WhatsApp
            </a>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-light-text-muted mt-6 max-w-md mx-auto">
              Mi-Way is an initiative of Maluinvestment.cc, committed to empowering Namibians through practical, sustainable economic opportunities.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
