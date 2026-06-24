import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact",
  description: "Book a taxi ride via WhatsApp at +264 81 211 1920. Operating across Oshakati, Ongwediva, and Ondangwa, Northern Namibia. 24/7 availability.",
  openGraph: {
    title: "Contact, MI-WAY by Malu Investment",
    description: "Book a ride or get in touch. WhatsApp: +264 81 211 1920.",
    type: "website",
  },
  alternates: { canonical: "https://www.mi-way.org/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main id="main" className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">Get in Touch</span>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] text-text-primary leading-[0.9] mb-8">CONTACT US</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-text-primary mb-4">WhatsApp</h2>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary mb-4">The fastest way to reach us. Send a message and we&apos;ll respond within minutes.</p>
                <a href="https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+ride." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-whatsapp text-white font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-6 py-4 hover:bg-whatsapp/90 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  +264 81 211 1920
                </a>
              </div>
              <div>
                <h2 className="font-display text-2xl text-text-primary mb-4">Community</h2>
                <a href="https://chat.whatsapp.com/CATYtLo7CQe60hGZDXlljc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-whatsapp/10 border border-whatsapp/20 text-whatsapp font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-6 py-4 hover:bg-whatsapp/20 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Join Our WhatsApp Community
                </a>
              </div>
              <div>
                <h2 className="font-display text-2xl text-text-primary mb-4">Social</h2>
                <a href="https://www.facebook.com/share/p/1HoFSQW4o2/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.1em] font-bold px-6 py-4 hover:bg-blue-500/20 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Follow us on Facebook
                </a>
              </div>
              <div className="border-t border-base-border pt-6">
                <h2 className="font-display text-2xl text-text-primary mb-4">Service-Specific Bookings</h2>
                <div className="space-y-3">
                  {[
                    { label: "Taxi", link: "https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+taxi+ride." },
                    { label: "Construction", link: "https://wa.me/264812111920?text=Hi!+I'm+interested+in+your+construction+services." },
                    { label: "Logistics", link: "https://wa.me/264812111920?text=Hi!+I+need+logistics+support." },
                    { label: "Cleaning", link: "https://wa.me/264812111920?text=Hi!+I'd+like+to+book+a+cleaning+service." },
                  ].map((s) => (
                    <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-base-border hover:border-amber/30 group">
                      <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary group-hover:text-amber transition-colors">{s.label}</span>
                      <span className="text-amber">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl text-text-primary mb-4">Our Locations</h2>
              <div className="space-y-3 mb-8">
                {["Oshakati, Main Hub", "Ongwediva, Extended Coverage", "Ondangwa, Northern Corridor"].map((loc) => (
                  <div key={loc} className="bg-base-card border border-base-border p-5 flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber flex-shrink-0" />
                    <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-primary">{loc}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-muted border border-amber/10 p-6">
                <span className="font-display text-lg text-amber block mb-2">OPERATIONAL ZONE</span>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary mb-4">
                  Northern Namibia corridor: Oshakati, Ongwediva, Ondangwa. Expanding across Namibia.
                </p>
                <div className="flex items-center justify-center gap-6 py-4 border-t border-amber/10">
                  <span className="font-display text-2xl text-text-primary">OSHAKATI</span>
                  <span className="text-amber">↔</span>
                  <span className="font-display text-2xl text-text-primary">ONGWEDIVA</span>
                  <span className="text-amber">↔</span>
                  <span className="font-display text-2xl text-text-primary">ONDANGWA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
