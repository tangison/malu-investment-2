import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-malu-substrate border-t border-malu-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid — 4 compartments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-0 bg-malu-navy" style={{ gap: "1px" }}>
          {/* Brand compartment */}
          <div className="bg-malu-substrate sm:col-span-2 lg:col-span-4 p-6 sm:p-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-7 h-7">
                <Image
                  src="/assets/brand/brand-asset-01.webp"
                  alt="Malu Investment"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-[family-name:var(--font-inter)] text-[11px] font-black tracking-[-0.02em] text-malu-navy uppercase leading-none">
                  Malu Investment
                </span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[7px] tracking-[0.15em] text-malu-silver-dark uppercase block mt-0.5">
                  Northern Namibia
                </span>
              </div>
            </Link>
            <p className="font-[family-name:var(--font-inter)] text-xs text-malu-navy/40 mt-4 leading-relaxed max-w-xs">
              Multi-service enterprise operating across Oshakati, Ongwediva, and Ondangwa. Transport, construction, logistics, cleaning, and MI-WAY fleet management.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-4 h-px bg-malu-gold/40" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.15em] text-malu-silver-dark uppercase">
                Est. 2017
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-malu-substrate lg:col-span-2 p-6 sm:p-8">
            <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.15em] text-malu-silver-dark uppercase mb-4">
              [ Navigation ]
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#services", label: "Services" },
                { href: "#miway", label: "MI-WAY" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] text-xs text-malu-navy/50 hover:text-malu-navy transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-malu-navy/30 group-hover:w-2 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-malu-substrate lg:col-span-3 p-6 sm:p-8">
            <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.15em] text-malu-silver-dark uppercase mb-4">
              [ Divisions ]
            </h3>
            <ul className="space-y-2">
              {["Taxi Transport", "Construction", "Logistics", "Cleaning", "MI-WAY Software"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="font-[family-name:var(--font-inter)] text-xs text-malu-navy/50 hover:text-malu-navy transition-colors duration-150 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-malu-navy/30 group-hover:w-2 transition-all duration-200" />
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-malu-substrate lg:col-span-3 p-6 sm:p-8">
            <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.15em] text-malu-silver-dark uppercase mb-4">
              [ Contact ]
            </h3>
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-malu-gold hover:text-malu-gold-muted transition-colors text-xs mb-3 group font-bold"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-malu-navy/50 tracking-[0.05em]">
              +264 81 127 7308
            </p>
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-malu-navy/30 tracking-[0.1em] uppercase mt-3">
              Oshakati /// Ongwediva
              <br />
              Ondangwa /// Namibia
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-malu-grid flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.1em] text-malu-silver-dark uppercase">
            &copy; {currentYear} Malu Investment. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[10px] font-black tracking-[-0.01em] text-malu-navy/20 uppercase">
            Moving Namibia Forward
          </p>
        </div>
      </div>
    </footer>
  );
}
