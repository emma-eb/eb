"use client";

import { useState } from "react";

interface NavProps {
  theme?: "light" | "dark"; // light = logo bleu sur fond crème, dark = logo beige sur fond navy
  activePage?: string;
}

const links = [
  { href: "/journeys", label: "Private Journeys" },
  { href: "/collection", label: "Collection" },
  { href: "/experiences", label: "Experiences" },
  { href: "/journal", label: "Journal" },
];

export default function Nav({ theme = "light", activePage }: NavProps) {
  const [open, setOpen] = useState(false);

  const logoSrc = theme === "dark" ? "/logo-beige.svg" : "/logo-bleu.svg";
  const textColor = theme === "dark" ? "text-[#fcf7f1]" : "text-[#2e5a88]";
  const borderColor = theme === "dark" ? "border-[#fcf7f1]" : "border-[#2e5a88]";
  const hoverBg = theme === "dark"
    ? "hover:bg-[#fcf7f1] hover:text-[#2e5a88]"
    : "hover:bg-[#2e5a88] hover:text-[#fcf7f1]";
  const hamburgerColor = theme === "dark" ? "bg-[#fcf7f1]" : "bg-[#2e5a88]";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#fcf7f1]/0">
        {/* Logo */}
        <a href="/" className="relative z-50">
          <img
            src={open ? "/logo-beige.svg" : logoSrc}
            alt="eb."
            className="h-8 w-auto transition-opacity duration-300"
          />
        </a>

        {/* Desktop links */}
        <div className={`hidden md:flex items-center gap-10 font-body text-xs tracking-[0.2em] uppercase ${textColor}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-opacity ${
                activePage === l.href
                  ? "border-b pb-px"
                  : "hover:opacity-60"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className={`hidden md:inline-block text-xs tracking-[0.2em] uppercase border ${borderColor} ${textColor} px-5 py-2.5 ${hoverBg} transition-colors`}
        >
          Inquire
        </a>

        {/* Mobile: Inquire + Hamburger */}
        <div className="flex md:hidden items-center gap-4 relative z-50">
          <a
            href="/contact"
            className={`text-xs tracking-[0.2em] uppercase border ${open ? "border-[#fcf7f1] text-[#fcf7f1]" : `${borderColor} ${textColor}`} px-4 py-2 transition-colors`}
          >
            Inquire
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] w-6 h-6"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-full transition-all duration-300 origin-center ${open ? "bg-[#fcf7f1] rotate-45 translate-y-[6px]" : hamburgerColor}`}
            />
            <span
              className={`block h-px w-full transition-all duration-300 ${open ? "opacity-0 bg-[#fcf7f1]" : hamburgerColor}`}
            />
            <span
              className={`block h-px w-full transition-all duration-300 origin-center ${open ? "bg-[#fcf7f1] -rotate-45 -translate-y-[6px]" : hamburgerColor}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#2e5a88] flex flex-col justify-between px-8 py-24 transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav links */}
        <nav className="flex flex-col gap-2">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-heading text-5xl text-[#fcf7f1] leading-tight transition-all duration-300 hover:text-[#a7d1c9] ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Bottom info */}
        <div
          className={`transition-all duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: open ? "300ms" : "0ms" }}
        >
          <div className="h-px bg-[#fcf7f1]/20 mb-6" />
          <p className="font-body text-xs text-[#fcf7f1]/40 tracking-wider mb-2">
            Athens, Greece
          </p>
          <a
            href="mailto:hello@emmabonnefous.com"
            className="font-body text-xs text-[#fcf7f1]/60 tracking-wider hover:text-[#fcf7f1] transition-colors"
          >
            hello@emmabonnefous.com
          </a>
        </div>
      </div>
    </>
  );
}
