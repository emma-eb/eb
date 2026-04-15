"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";

const collabs = [
  "Balmain \u00b7 Silencio, Paris",
  "Van Cleef & Arpels \u00b7 Peninsula, Paris",
  "Karl Lagerfeld \u00b7 Monnaie de Paris",
  "Jimmy Choo \u00b7 Sea Containers, London",
  "Coach \u00b7 The High Line, New York",
  "Lanvin \u00b7 Grand Palais, Paris",
  "Boucheron \u00b7 Arc de Triomphe, Paris",
  "Repetto \u00b7 Royal Monceau, Paris",
];

const stats = [
  { n: "12+", label: "years in luxury PR & production" },
  { n: "80+", label: "high-level productions" },
  { n: "40+", label: "countries explored" },
  { n: "1", label: "focus: Greece" },
];

export default function About() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const d = parseInt(el.dataset.delay || "0", 10);
          setTimeout(() => {
            el.classList.add("visible");
            setTimeout(() => el.classList.add("done"), 800);
          }, d);
          revealObs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    const settleEls = document.querySelectorAll<HTMLElement>(".img-settle");
    const settleObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).classList.add("settled");
          settleObs.unobserve(e.target);
        });
      },
      { threshold: 0.1 }
    );
    settleEls.forEach((el) => settleObs.observe(el));

    return () => { revealObs.disconnect(); settleObs.disconnect(); };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/about" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO (split layout, instant)
      ═══════════════════════════════════════════ */}
      <section className="flex flex-col md:flex-row min-h-[500px]">
        {/* Portrait */}
        <div className="w-full md:w-1/2 h-auto max-h-[450px] md:max-h-none overflow-hidden bg-[#d4cfc7]" style={{ aspectRatio: "3/4" }}>
          <img
            src="/DSC_9459-Edit.jpg"
            alt="Emma Bonnefous"
            className="w-full h-full object-cover object-top md:aspect-auto md:h-full"
          />
        </div>
        {/* Name */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#fcf7f1] px-6 py-8 md:px-16 md:py-20">
          <p className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-5">
            About
          </p>
          <h1 className="font-body text-[30px] md:text-[42px] text-[#2e5a88] leading-[1.1] font-light">
            Emma Bonnefous
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#1a1a1a]/40 font-light mt-2">
            Founder, eb.
          </p>
          <p className="font-body text-[14px] text-[#1a1a1a]/40 font-light mt-1">
            French, based in Athens
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — STORY (editorial, left-aligned)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-[800px] mx-auto">
          <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 text-center mb-4">
            The Background
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-4 mb-10 mx-auto" data-delay="80" />

          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/40 leading-[1.8] font-light text-left" data-delay="160">
            French, trained in the world of luxury production. Twelve years of PR, influence and event production for houses that don&apos;t accept approximation: Balmain at Silencio, Van Cleef &amp; Arpels at the Peninsula, Karl Lagerfeld at the Monnaie de Paris, Jimmy Choo at Sea Containers London, Coach on the High Line in New York. Eighty productions across Europe and the US. Events where the guest count hit six hundred and the margin for error was zero.
          </p>

          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/40 leading-[1.8] font-light text-left mt-8" data-delay="240">
            Before eb., I spent years as a travel planner for high-net-worth clients in Southern Africa, designing private journeys through Tanzania and Botswana. That experience taught me what this kind of traveler actually expects, and how far the details need to go.
          </p>

          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/40 leading-[1.8] font-light text-left mt-8" data-delay="320">
            I have lived in Morocco, traveled through India, Japan, Brazil, South Africa, Australia, China, the US. Dozens of countries, always looking for the same thing: the people who know their place deeply enough to open doors that aren&apos;t visible from the outside. I found more of them in Greece than anywhere else. eb. is the result.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — NUMBERS (compact)
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-10 md:py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
          {stats.map((s, i) => (
            <div key={s.n} className="reveal" data-delay={i * 100}>
              <p className="font-body text-[36px] md:text-[48px] font-semibold text-[#2e5a88] leading-none">{s.n}</p>
              <p className="font-body text-[13px] md:text-[14px] text-[#1a1a1a]/40 font-light mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — WHY GREECE (full-bleed, bottom-left)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[55vh] md:h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1920&q=80"
            alt="Santorini caldera, golden light"
            className="img-settle w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 p-6 md:p-12 max-w-xl">
          <h2 className="reveal font-heading text-[32px] md:text-[48px] leading-[0.9] text-white uppercase mb-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Why Greece.
          </h2>
          <div className="reveal font-body text-[15px] md:text-[17px] text-white/85 font-light leading-[1.8] max-w-xl" data-delay="100" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            <p>
              Greece is not a backdrop. It is a geography of extreme contrasts, a tradition of hospitality that predates most nations, and a network of people who don&apos;t put what they offer online.
            </p>
            <p className="mt-6">
              Getting access to the Acropolis before dawn. Anchoring in Kleftiko in August without another boat in sight. Having dinner in a cave on Kimolos that seats eight. None of this is bookable. It takes years of presence, trust, and the right phone numbers.
            </p>
            <p className="mt-6">
              That is what eb. provides.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — COLLABORATIONS (single centered column)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 text-center mb-4">
            Selected Collaborations
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-4 mb-10 mx-auto" data-delay="100" />

          <div className="reveal text-center" data-delay="200">
            {collabs.map((c) => (
              <p key={c} className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/40 font-light leading-[2.2]">
                {c}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — CITATION
      ═══════════════════════════════════════════ */}
      <section className="bg-white flex items-center justify-center py-12 md:py-16 px-8">
        <p className="reveal font-body text-[18px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-relaxed">
          I had traveled through forty countries and kept coming back to one.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 7 — CTA FINAL (instant, no animation)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&w=1920&q=80"
            alt="Greece golden hour coast"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] leading-[0.9] text-white mb-4 uppercase" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Let&apos;s start with<br />a conversation.
          </h2>
          <p className="font-body text-[15px] md:text-[17px] text-white/80 font-light mt-4 max-w-lg mx-auto leading-relaxed" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Whether you are planning a private journey, a celebration, or a brand production in Greece.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 mt-8 py-3 -my-3"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 8 — FOOTER
      ═══════════════════════════════════════════ */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-4 order-1">
            <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-80" /></a>
            <p className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider text-left">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
            <a href="mailto:hello@emmabonnefous.com" className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors">
              hello@emmabonnefous.com
            </a>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-6 gap-y-2 font-body text-xs tracking-[0.15em] uppercase text-[#fcf7f1]/80 text-center md:text-right md:justify-end order-2 md:order-3">
            <a href="/influencer-production" className="hover:text-[#fcf7f1] transition-colors py-2">For Brands</a>
            <a href="/journal" className="hover:text-[#fcf7f1] transition-colors py-2">Journal</a>
            <a href="/about" className="hover:text-[#fcf7f1] transition-colors py-2">About</a>
            <a href="/contact" className="hover:text-[#fcf7f1] transition-colors py-2">Contact</a>
          </div>

          <div className="flex flex-col items-center gap-4 order-3 md:order-2">
            <div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/60 tracking-wider">
              <a href="https://www.instagram.com/emma_bonnefous_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">Instagram</a>
              <span className="py-2">&middot;</span>
              <a href="https://www.linkedin.com/in/emmabonnefous/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">LinkedIn</a>
            </div>
            <div className="hidden md:flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider">
              <a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a>
              <span className="py-2">&middot;</span>
              <a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a>
            </div>
          </div>

          <div className="flex md:hidden flex-col items-center gap-3 order-4">
            <a href="mailto:hello@emmabonnefous.com" className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors">
              hello@emmabonnefous.com
            </a>
            <div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider">
              <a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a>
              <span className="py-2">&middot;</span>
              <a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a>
            </div>
            <p className="font-body text-xs text-[#fcf7f1]/50 tracking-wider text-center">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
