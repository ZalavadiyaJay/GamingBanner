"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Templates", href: "/templates" },
    // { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-outline-variant bg-surface-container-low/90 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-md md:px-xl h-16 w-full max-w-[1440px] mx-auto relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform group-hover:scale-105">
            <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinejoin="round" />
            <path d="M 12,14 Q 20,16 28,14 Q 33,14 34,18 L 35,24 Q 35,29 31,29 Q 27,29 25,23 Q 20,22 15,23 Q 13,29 9,29 Q 5,29 5,24 L 6,18 Q 7,14 12,14 Z" stroke="#00d4ff" strokeWidth="2" fill="none" strokeLinejoin="round" />
            <path d="M 10,20 h 4 M 12,18 v 4" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="27" cy="19" r="1.2" fill="#00d4ff" />
            <circle cx="30" cy="21" r="1.2" fill="#00d4ff" />
            <circle cx="27" cy="23" r="1.2" fill="#00d4ff" />
          </svg>
          <span className="font-extrabold text-lg tracking-wider font-sans select-none">
            <span className="text-on-background">GAMING</span>
            <span className="text-primary-container">BANNER</span>
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-semibold text-outline hover:text-on-background transition-colors relative py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-md">
          <Link
            href="/youtube-banners"
            className="hidden sm:inline-block bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-bold text-sm px-lg py-xs rounded-lg transition-all primary-glow hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-xs text-outline hover:text-on-background outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current stroke-2 fill-none">
              {isOpen ? (
                <path d="M6 18 L18 6 M6 6 L18 18" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6 h16 M4 12 h16 M4 18 h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-surface-container-low border-b border-outline-variant/80 flex flex-col p-lg md:hidden gap-md animate-fade-in shadow-xl z-50">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-outline hover:text-on-background transition-colors py-2 border-b border-outline-variant/20 last:border-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
