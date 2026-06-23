import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base border-t border-base-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/brand/brand-asset-01.webp"
              alt="Malu Investment"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="font-display text-sm text-text-primary leading-none">MI-WAY</span>
            <span className="font-mono text-[9px] tracking-[0.1em] text-text-muted uppercase">
              &copy; {currentYear} Malu Investment
            </span>
          </div>

          {/* Nav links inline */}
          <nav className="flex items-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/driver-to-owner", label: "Driver-to-Owner" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.1em] text-text-muted hover:text-amber uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
