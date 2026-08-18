import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Malu Investment collects, uses and protects your personal information on mi-way.org. Covers contact forms, AI chat, WhatsApp and analytics.",
  alternates: { canonical: "https://www.mi-way.org/privacy" },
  openGraph: {
    title: "Privacy Policy - MI-WAY by Malu Investment",
    description: "How we handle your personal information on mi-way.org.",
    type: "article",
    url: "https://www.mi-way.org/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main id="main" className="flex-1 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">
            Legal
          </span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] text-text-primary leading-[0.9] mb-4">
            PRIVACY POLICY
          </h1>
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-muted mb-8">
            Last updated 17 August 2026. Effective immediately.
          </p>

          <div className="space-y-8 font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">1. Who we are</h2>
              <p>
                This website, <strong className="text-text-primary">mi-way.org</strong>, is operated by
                {" "}
                <strong className="text-text-primary">Malu Investment CC</strong>, a Namibian Close
                Corporation trading as <strong className="text-text-primary">MI-WAY</strong>. We are
                based in Oshakati, Northern Namibia, and provide taxi transport across Oshakati,
                Ongwediva and Ondangwa.
              </p>
              <p className="mt-3">
                For privacy questions, contact us at{" "}
                <a href="mailto:info@mi-way.org" className="text-amber underline">
                  info@mi-way.org
                </a>{" "}
                or on WhatsApp at{" "}
                <a
                  href="https://wa.me/264812111920"
                  className="text-amber underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +264 81 211 1920
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">2. What we collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-text-primary">Contact form data</strong>: your name, email,
                  subject and message when you use the form on <a href="/contact" className="text-amber underline">/contact</a>.
                </li>
                <li>
                  <strong className="text-text-primary">Chat data</strong>: messages you send to our
                  AI assistant <strong className="text-text-primary">Mia</strong> via the chat
                  widget on any page. We log these messages to improve the assistant.
                </li>
                <li>
                  <strong className="text-text-primary">Operational data</strong>: server access logs
                  (IP address, user agent, URL) for security and abuse prevention. We retain these for
                  30 days.
                </li>
              </ul>
              <p className="mt-3">
                We do not use third-party analytics (no Google Analytics, no Meta Pixel, no Hotjar).
                We do not set tracking cookies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">3. How we use it</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To reply to your enquiries.</li>
                <li>To operate, secure and improve the website.</li>
                <li>To improve the Mia assistant via anonymised chat logs.</li>
              </ul>
              <p className="mt-3">
                We do not sell your data. We do not send marketing email unless you ask for it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">4. Third parties we use</h2>
              <p>
                To run this site we share narrow slices of data with the following processors:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>
                  <strong className="text-text-primary">Vercel</strong> - hosting and CDN
                  (<a href="https://vercel.com/legal/privacy-policy" className="text-amber underline" target="_blank" rel="noopener noreferrer">privacy</a>).
                </li>
                <li>
                  <strong className="text-text-primary">Cloudflare</strong> - DNS and CDN
                  (<a href="https://www.cloudflare.com/privacypolicy/" className="text-amber underline" target="_blank" rel="noopener noreferrer">privacy</a>).
                </li>
                <li>
                  <strong className="text-text-primary">Resend</strong> - transactional email
                  delivery for the contact form
                  (<a href="https://resend.com/privacy" className="text-amber underline" target="_blank" rel="noopener noreferrer">privacy</a>).
                </li>
                <li>
                  <strong className="text-text-primary">OpenRouter</strong> - large language model
                  API used by the Mia chat widget
                  (<a href="https://openrouter.ai/privacy" className="text-amber underline" target="_blank" rel="noopener noreferrer">privacy</a>).
                </li>
                <li>
                  <strong className="text-text-primary">Meta Platforms (WhatsApp)</strong> - if you
                  choose to contact us via WhatsApp, your messages are processed by Meta on their
                  servers
                  (<a href="https://www.whatsapp.com/legal/privacy-policy" className="text-amber underline" target="_blank" rel="noopener noreferrer">privacy</a>).
                </li>
                <li>
                  <strong className="text-text-primary">Google Fonts</strong> - we serve font files
                  from <code>fonts.gstatic.com</code>
                  (<a href="https://policies.google.com/privacy" className="text-amber underline" target="_blank" rel="noopener noreferrer">privacy</a>).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">5. Cookies</h2>
              <p>
                We do not set any non-essential cookies. The site uses only session cookies required
                for the chat widget to function (it remembers the conversation within your session).
                No persistent tracking cookies. No third-party advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">6. Your rights</h2>
              <p>
                Under the Namibia Data Protection framework and applicable international law, you have
                the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Ask what personal information we hold about you.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Withdraw consent to processing at any time.</li>
                <li>Lodge a complaint with a regulator.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{" "}
                <a href="mailto:info@mi-way.org" className="text-amber underline">info@mi-way.org</a>.
                We will respond within 14 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">7. Data retention</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Contact form messages: 12 months, then deleted.</li>
                <li>Chat logs with Mia: 90 days, then deleted.</li>
                <li>Server access logs: 30 days, then deleted.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">8. Security</h2>
              <p>
                We use HTTPS with HSTS preload, strict Content-Security-Policy, X-Frame-Options DENY,
                and rate limiting on all interactive endpoints. Contact form data is delivered via
                Resend over TLS to a verified operator inbox.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-primary mb-3">9. Changes to this policy</h2>
              <p>
                We will update this page and the &ldquo;Last updated&rdquo; date when anything
                material changes. Material changes will be summarised at the top of this page for at
                least 30 days.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
