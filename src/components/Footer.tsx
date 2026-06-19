import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-malu-obsidian border-t border-malu-gold/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="w-9 h-9 border-2 border-malu-gold flex items-center justify-center group-hover:bg-malu-gold/10 transition-colors duration-300">
                  <span className="text-malu-gold font-[var(--font-outfit)] text-sm font-bold tracking-wider">
                    M
                  </span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-malu-gold/60" />
              </div>
              <div className="flex flex-col">
                <span className="text-malu-cream font-[var(--font-outfit)] text-lg font-bold tracking-tight leading-none">
                  MALU
                </span>
                <span className="text-malu-muted font-[var(--font-plus-jakarta)] text-[10px] uppercase tracking-[0.25em] leading-none mt-1">
                  Investment CC
                </span>
              </div>
            </Link>
            <p className="text-malu-cream/30 font-[var(--font-plus-jakarta)] text-sm mt-5 leading-relaxed max-w-xs">
              Multi-service Close Corporation serving Okahandja and the Otjozondjupa Region since 2017.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-5 h-px bg-malu-gold/30" />
              <span className="text-malu-cream/20 font-[var(--font-plus-jakarta)] text-[10px] tracking-[0.2em] uppercase">
                CC/2017/00248
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-malu-cream font-[var(--font-outfit)] text-xs uppercase tracking-[0.25em] font-bold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-malu-cream/35 hover:text-malu-gold transition-colors duration-300 font-[var(--font-plus-jakarta)] text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-malu-gold/50 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-malu-cream font-[var(--font-outfit)] text-xs uppercase tracking-[0.25em] font-bold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {["Taxi Transport", "Construction & Renovation", "Logistics & Import/Export", "Cleaning & Carwash"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-malu-cream/35 hover:text-malu-gold transition-colors duration-300 font-[var(--font-plus-jakarta)] text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-malu-gold/50 transition-all duration-300 group-hover:w-3" />
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-malu-cream font-[var(--font-outfit)] text-xs uppercase tracking-[0.25em] font-bold mb-5">
              Get in Touch
            </h3>
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-malu-gold hover:text-malu-gold-light transition-colors text-sm mb-4 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="group-hover:underline">WhatsApp Us</span>
            </a>
            <p className="text-malu-cream/35 font-[var(--font-plus-jakarta)] text-sm mb-3">
              +264 81 127 7308
            </p>
            <p className="text-malu-cream/25 font-[var(--font-plus-jakarta)] text-sm">
              Okahandja, Namibia
            </p>
            <p className="text-malu-cream/20 font-[var(--font-plus-jakarta)] text-xs mt-1">
              Otjozondjupa Region
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-malu-cream/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-malu-cream/20 font-[var(--font-plus-jakarta)] text-xs">
            &copy; {currentYear} Malu Investment CC. All rights reserved.
          </p>
          <p className="text-malu-cream/15 font-[var(--font-plus-jakarta)] text-xs">
            Moving Okahandja Forward
          </p>
        </div>
      </div>
    </footer>
  );
}
