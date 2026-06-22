"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#miway", label: "MI-WAY" },
  { href: "#contact", label: "Contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl shadow-md shadow-malu-navy/[0.04]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/assets/brand/malu-investment-icon.webp"
                alt="Malu Investment"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-malu-navy font-[var(--font-outfit)] text-sm sm:text-base font-bold tracking-[0.04em] leading-none">
                MALU INVESTMENT
              </span>
              <span className="text-malu-gold font-[var(--font-plus-jakarta)] text-[9px] sm:text-[10px] tracking-[0.2em] leading-none mt-0.5">
                CC
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-malu-navy/60 hover:text-malu-navy transition-colors duration-200 font-[var(--font-outfit)] text-sm uppercase tracking-[0.12em] font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-malu-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-malu-gold text-white font-[var(--font-outfit)] text-xs uppercase tracking-[0.1em] font-bold px-5 py-2.5 hover:bg-malu-gold-light transition-all duration-300"
            >
              Book a Ride
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-malu-gold text-white font-[var(--font-outfit)] text-[10px] uppercase tracking-[0.08em] font-bold px-3 py-2"
            >
              Book
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-malu-navy p-2 hover:text-malu-gold transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="4" y1="7" x2="20" y2="7" /><line x1="8" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-malu-border px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-malu-navy/60 hover:text-malu-navy hover:pl-2 transition-all duration-200 font-[var(--font-outfit)] text-base uppercase tracking-[0.12em] font-medium py-3 border-b border-malu-border/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/264811277308"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-malu-gold text-white font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-bold px-5 py-3 text-center mt-3"
          >
            Book a Ride
          </a>
        </div>
      </div>
    </nav>
  );
}
