"use client";

import { useState, useEffect, useRef } from "react";

interface NavProps {
  activePage?: string;
}

const links = [
  { href: "/journeys", label: "Private Journeys" },
  { href: "/collection", label: "Collection" },
  { href: "/experiences", label: "Experiences" },
  { href: "/journal", label: "Journal" },
];

export default function Nav({ activePage }: NavProps) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // true = nav sur fond foncé → texte blanc
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function detect() {
      if (open) return;
      // On mesure le pixel au centre de la nav (60px du haut)
      const probe = document.elementFromPoint(window.innerWidth / 2, 60);
      if (!probe) return;
      // On remonte l'arbre pour trouver la section/div parente avec une couleur de fond définie
      let el: Element | null = probe;
      while (el && el !== document.body) {
        const bg = getComputedStyle(el).backgroundColor;
        const m = bg.match(/\d+/g);
        if (m && !(bg === "rgba(0, 0, 0, 0)" || bg === "transparent")) {
          const [r, g, b] = m.map(Number);
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          setIsDark(lum < 150);
          return;
        }
        el = el.parentElement;
      }
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(detect);
    }

    detect();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [open]);

  // Quand le menu overlay est ouvert, nav est toujours foncée (overlay navy)
  const dark = open || isDark;

  return (
    <>
      {/* Nav — toujours transparente, couleur adaptative */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">

        {/* Logo */}
        <a href="/" className="relative z-50">
          <img
            src={dark ? "/logo-beige.svg" : "/logo-bleu.svg"}
            alt="eb."
            className="h-8 w-auto transition-colors duration-150"
          />
        </a>

        {/* Desktop links */}
        <div
          className={`hidden md:flex items-center gap-10 font-body text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
            dark ? "text-[#fcf7f1]" : "text-[#2e5a88]"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-opacity duration-100 ${
                activePage === l.href ? "border-b pb-px" : "hover:opacity-50"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className={`hidden md:inline-block text-xs tracking-[0.2em] uppercase border px-5 py-2.5 transition-colors duration-150 ${
            dark
              ? "border-[#fcf7f1] text-[#fcf7f1] hover:bg-[#fcf7f1] hover:text-[#2e5a88]"
              : "border-[#2e5a88] text-[#2e5a88] hover:bg-[#2e5a88] hover:text-[#fcf7f1]"
          }`}
        >
          Inquire
        </a>

        {/* Mobile: Inquire + Hamburger */}
        <div className="flex md:hidden items-center gap-4 relative z-50">
          <a
            href="/contact"
            className={`text-xs tracking-[0.2em] uppercase border px-4 py-2 transition-colors duration-150 ${
              dark
                ? "border-[#fcf7f1] text-[#fcf7f1]"
                : "border-[#2e5a88] text-[#2e5a88]"
            }`}
          >
            Inquire
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] w-6 h-6"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className={`block h-px w-full transition-all duration-300 origin-center ${open ? "bg-[#fcf7f1] rotate-45 translate-y-[6px]" : dark ? "bg-[#fcf7f1]" : "bg-[#2e5a88]"}`} />
            <span className={`block h-px w-full transition-all duration-300 ${open ? "opacity-0" : dark ? "bg-[#fcf7f1]" : "bg-[#2e5a88]"}`} />
            <span className={`block h-px w-full transition-all duration-300 origin-center ${open ? "bg-[#fcf7f1] -rotate-45 -translate-y-[6px]" : dark ? "bg-[#fcf7f1]" : "bg-[#2e5a88]"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — plein écran navy */}
      <div
        className={`fixed inset-0 z-40 bg-[#2e5a88] flex flex-col justify-between px-8 py-24 transition-colors duration-150 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-heading text-5xl text-[#fcf7f1] leading-snug transition-all duration-300 hover:text-[#a7d1c9] ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 70}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className={`font-heading text-5xl text-[#a7d1c9] leading-snug mt-4 transition-all duration-300 hover:text-[#fcf7f1] ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: open ? `${80 + links.length * 70}ms` : "0ms" }}
          >
            Inquire
          </a>
        </nav>

        <div
          className={`transition-colors duration-150 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: open ? "420ms" : "0ms" }}
        >
          <div className="h-px bg-[#fcf7f1]/20 mb-6" />
          <p className="font-body text-xs text-[#fcf7f1]/40 tracking-widest uppercase mb-2">Athens, Greece</p>
          <a
            href="mailto:hello@emmabonnefous.com"
            className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1] transition-colors"
          >
            hello@emmabonnefous.com
          </a>
        </div>
      </div>
    </>
  );
}
