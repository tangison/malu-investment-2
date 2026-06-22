"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services", id: "SRV" },
  { href: "#miway", label: "MI-WAY", id: "FLT" },
  { href: "#about", label: "About", id: "ABT" },
  { href: "#contact", label: "Contact", id: "CNT" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-malu-substrate/98 backdrop-blur-sm shadow-[0_1px_0_#C0C8D4]"
          : "bg-malu-substrate"
      }`}
    >
      {/* Top warning stripe */}
      <div className="warning-stripe" />

      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between h-14 sm:h-16 border-b border-malu-grid">
          {/* Logo — Industrial */}
          <Link href="/" className="flex items-center gap-3 px-4 sm:px-6 h-full border-r border-malu-grid">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8">
              <Image
                src="/assets/brand/brand-asset-01.webp"
                alt="Malu Investment"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-[family-name:var(--font-inter)] text-[11px] font-black tracking-[-0.02em] text-malu-navy leading-none uppercase">
                Malu Investment
              </span>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[8px] tracking-[0.15em] text-malu-silver-dark leading-none mt-0.5">
                NAM /// EST. 2017
              </span>
            </div>
          </Link>

          {/* Desktop nav — Grid compartments */}
          <div className="hidden md:flex items-center h-full">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-2 h-full px-5 border-r border-malu-grid hover:bg-malu-navy hover:text-malu-substrate transition-colors duration-150 group"
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver-dark group-hover:text-malu-silver transition-colors">
                  {link.id}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[11px] font-bold tracking-[0.08em] uppercase group-hover:text-malu-substrate transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-full px-6 bg-malu-navy text-malu-substrate hover:bg-malu-navy-deep transition-colors duration-150"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-[family-name:var(--font-inter)] text-[10px] font-bold tracking-[0.1em] uppercase">
                Book
              </span>
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center h-full md:hidden">
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 h-full px-4 bg-malu-navy text-malu-substrate"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-[family-name:var(--font-inter)] text-[9px] font-bold tracking-[0.1em] uppercase">
                Book
              </span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="h-full px-4 border-l border-malu-grid text-malu-navy hover:bg-malu-navy hover:text-malu-substrate transition-colors duration-150"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — Grid drawers */}
      <div className={`md:hidden transition-all duration-200 overflow-hidden border-b border-malu-grid ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-malu-substrate">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between px-6 py-4 border-b border-malu-grid hover:bg-malu-navy hover:text-malu-substrate transition-colors duration-150 group"
            >
              <span className="font-[family-name:var(--font-inter)] text-sm font-bold tracking-[0.06em] uppercase group-hover:text-malu-substrate">
                {link.label}
              </span>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver-dark group-hover:text-malu-silver">
                {link.id}
              </span>
            </a>
          ))}
          <div className="px-6 py-4 bg-malu-navy">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.12em] text-malu-silver">
              OSH /// ONGWIVA /// ONDANGWA
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
