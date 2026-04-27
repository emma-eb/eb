"use client";

import { useState, useEffect, useCallback } from "react";

interface NavProps {
  activePage?: string;
}

const links = [
  { href: "/journeys", label: "Private Journeys" },
  { href: "/experiences", label: "Experiences" },
  { href: "/collection", label: "Collection" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

const NAV_H = 80; // hauteur de la zone nav en px

export default function Nav({ activePage }: NavProps) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const check = useCallback(() => {
    if (open) return;
    setHasScrolled(window.scrollY > 100);
    const darkSections = document.querySelectorAll("[data-nav-dark]");
    let dark = false;
    darkSections.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < NAV_H && r.bottom > 0) dark = true;
    });
    setIsDark(dark);
  }, [open]);

  useEffect(() => {
    // IntersectionObserver sur toutes les sections pour déclencher le check
    const allSections = document.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(check, {
      threshold: 0,
      rootMargin: "0px 0px -80% 0px",
    });
    allSections.forEach((s) => observer.observe(s));

    // Scroll en parallèle pour la fluidité
    window.addEventListener("scroll", check, { passive: true });
    check(); // état initial

    // Force-reveal global : sur restauration bfcache (back/forward), s'assurer que
    // tous les elements .reveal et .eb-image-settle sont visibles (les animations
    // d'apparition peuvent ne pas se rejouer correctement depuis le cache)
    const forceReveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("visible", "done");
      });
      document.querySelectorAll(".eb-image-settle, .eb-fade-up, .eb-fade-in").forEach((el) => {
        el.classList.add("eb-visible");
      });
    };
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) forceReveal();
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [check]);

  const dark = open || isDark;

  return (
    <>
      <nav
        style={{ WebkitTransform: "translateZ(0)", transform: "translateZ(0)", willChange: "transform" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 md:px-8 md:py-4 transition-all duration-300 ${
          !hasScrolled
            ? "bg-transparent"
            : dark
              ? "bg-[#1a1a1a]/95 md:bg-[#1a1a1a]/85 md:backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)]"
              : "bg-[#fcf7f1]/98 md:bg-[#fcf7f1]/95 md:backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)]"
        }`}
      >

        <a
          href="/"
          aria-label="eb. — back to home"
          className="relative z-50 inline-block hover:opacity-70 transition-opacity duration-200"
        >
          <img
            src={dark ? "/logo-beige.svg" : "/logo-dark.svg"}
            alt="eb."
            className="h-8 w-auto"
          />
        </a>

        <div className={`hidden md:flex items-center gap-10 font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${dark ? "text-[#fcf7f1]" : "text-[#2e5a88]"}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={activePage === l.href ? "border-b pb-px" : "hover:opacity-50 transition-opacity"}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className={`hidden md:inline-block text-xs tracking-[0.2em] uppercase border px-5 py-2.5 transition-colors duration-300 ${
            dark
              ? "border-[#fcf7f1] text-[#fcf7f1] hover:bg-[#fcf7f1] hover:text-[#1a1a1a]"
              : "border-[#2e5a88] text-[#2e5a88] hover:bg-[#2e5a88] hover:text-white"
          }`}
        >
          Inquire
        </a>

        <div className="flex md:hidden items-center gap-3 relative z-50">
          <a
            href="/contact"
            className={`text-[10px] tracking-[0.2em] uppercase border px-3 py-2.5 transition-colors duration-300 ${
              dark
                ? "border-[#fcf7f1] text-[#fcf7f1] bg-black/30"
                : "border-[#2e5a88] text-[#2e5a88] bg-white/50"
            } backdrop-blur-sm`}
          >
            Inquire
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] w-11 h-11 items-center"
            aria-label={open ? "Close" : "Menu"}
          >
            <span className={`block h-px w-6 transition-all duration-300 origin-center ${open ? "bg-[#fcf7f1] rotate-45 translate-y-[6px]" : dark ? "bg-[#fcf7f1]" : "bg-[#2e5a88]"}`} />
            <span className={`block h-px w-6 transition-all duration-300 ${open ? "opacity-0" : dark ? "bg-[#fcf7f1]" : "bg-[#2e5a88]"}`} />
            <span className={`block h-px w-6 transition-all duration-300 origin-center ${open ? "bg-[#fcf7f1] -rotate-45 -translate-y-[6px]" : dark ? "bg-[#fcf7f1]" : "bg-[#2e5a88]"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col justify-between px-8 py-24 transition-opacity duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-heading text-5xl text-[#fcf7f1] leading-snug transition-all duration-300 hover:text-[#fcf7f1]/60 ${
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
            className={`font-heading text-5xl text-[#fcf7f1] leading-snug mt-4 transition-all duration-300 hover:text-[#fcf7f1]/60 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: open ? `${80 + links.length * 70}ms` : "0ms" }}
          >
            Inquire
          </a>
        </nav>
        <div
          className={`transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: open ? "420ms" : "0ms" }}
        >
          <div className="h-px bg-[#fcf7f1]/20 mb-6" />
          <a
            href="/influencer-production"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center gap-1.5 font-body text-[11px] text-[#fcf7f1]/60 tracking-[0.2em] uppercase hover:text-[#fcf7f1] transition-colors mb-5"
          >
            For brands &amp; agencies
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">&rarr;</span>
          </a>
          <p className="font-body text-xs text-[#fcf7f1]/40 tracking-widest uppercase mb-2">Athens, Greece</p>
          <a href="mailto:hello@emmabonnefous.com" className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1] transition-colors">
            hello@emmabonnefous.com
          </a>
        </div>
      </div>
    </>
  );
}
