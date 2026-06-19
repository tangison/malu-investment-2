"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-malu-obsidian/95 backdrop-blur-xl border-b border-malu-gold/10 shadow-2xl shadow-malu-obsidian/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-malu-cream/60 hover:text-malu-gold transition-colors duration-300 font-[var(--font-outfit)] text-sm uppercase tracking-[0.15em] font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-malu-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-malu-gold text-malu-obsidian font-[var(--font-outfit)] text-xs uppercase tracking-[0.12em] font-bold px-6 py-2.5 hover:bg-malu-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-malu-gold/20"
            >
              Book a Ride
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <a
              href="https://wa.me/264811277308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-malu-gold text-malu-obsidian font-[var(--font-outfit)] text-[10px] uppercase tracking-[0.1em] font-bold px-4 py-2"
            >
              Book
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-malu-cream p-2 hover:text-malu-gold transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="8" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-malu-obsidian/98 backdrop-blur-xl border-t border-malu-gold/10 px-5 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-malu-cream/60 hover:text-malu-gold hover:pl-2 transition-all duration-300 font-[var(--font-outfit)] text-base uppercase tracking-[0.15em] font-medium py-3 border-b border-malu-charcoal/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/264811277308"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-malu-gold text-malu-obsidian font-[var(--font-outfit)] text-sm uppercase tracking-[0.1em] font-bold px-5 py-3.5 text-center mt-4 hover:bg-malu-gold-light transition-colors"
          >
            Book a Ride
          </a>
        </div>
      </div>
    </nav>
  );
}
