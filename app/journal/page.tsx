"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";

export default function Journal() {
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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
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
      <Nav activePage="/journal" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO (instant, compact)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[40vh] md:h-[45vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1920&q=80"
            alt="Aegean Sea, deep blue, aerial view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 px-8">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
            Journal
          </span>
          <h1 className="font-heading text-[34px] md:text-[52px] leading-[0.9] text-white uppercase" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece, closely.
          </h1>
          <p className="font-body text-[14px] md:text-[16px] text-white/80 font-light max-w-xl mx-auto leading-relaxed mt-3" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            News, openings, and the conversations shaping how the world sees Greece right now.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — FEATURED ARTICLE
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1920&q=80"
            alt="Santorini caldera, golden hour"
            className="img-settle w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)" }} />

        <div className="relative z-10 p-6 md:p-12 max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] font-medium tracking-[0.15em] uppercase text-white">
              In the press
            </span>
            <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] font-medium tracking-[0.15em] uppercase text-white" data-delay="50">
              BusinessToday &middot; April 2026
            </span>
          </div>
          <h2 className="reveal font-heading text-[26px] md:text-[40px] text-white leading-[0.9] uppercase mb-4" data-delay="100" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece is the new Dubai for India&apos;s ultra-wealthy.
          </h2>
          <p className="reveal font-body text-[14px] md:text-[16px] text-white/80 font-light leading-[1.7] max-w-lg mt-4" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            India&apos;s high-net-worth travelers are choosing Greece over the Gulf. Authentic luxury, historic depth, and a beauty that no amount of engineering can replicate.
          </p>
          <a
            href="https://www.businesstoday.in/nri/invest/story/is-greece-the-new-dubai-why-hni-indians-are-shifting-their-investments-525576-2026-04-14"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 mt-6 min-h-[44px] items-center door-cta"
            data-delay="300"
          >
            Read the article
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — GRILLE ASYMÉTRIQUE MAGAZINE (fond noir)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] py-8 md:py-12 px-3 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* LIGNE 1 : 1 grand + 2 petits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Article 1 — Emily in Paris (GRAND) */}
            <a
              href="https://variety.com/2026/tv/global/emily-in-paris-season-6-shoot-greece-monaco-1236713273/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative block aspect-[3/4] md:col-span-2 md:row-span-2 overflow-hidden group cursor-pointer"
              data-delay="0"
            >
              <img src="https://images.unsplash.com/photo-1515091943-9d5c0ad475af?auto=format&fit=crop&w=900&q=80" alt="Emily in Paris Greece" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Culture</span>
              <div className="absolute bottom-0 left-0 p-5 md:p-8" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">Variety &middot; April 2026</p>
                <h3 className="font-body text-[18px] md:text-[20px] font-semibold text-white leading-[1.3] mt-2">Emily in Paris heads to Greece for Season 6</h3>
              </div>
            </a>

            {/* Article 2 — Four Seasons (PETIT) */}
            <a
              href="https://tornosnews.gr/en/tourism-businesses/hotels/55111-the-high-profile-hotel-openings-expected-in-2026.html"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative block aspect-[3/4] md:aspect-auto overflow-hidden group cursor-pointer"
              data-delay="60"
            >
              <img src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=80" alt="Four Seasons Mykonos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Openings</span>
              <div className="absolute bottom-0 left-0 p-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">TornosNews &middot; 2026</p>
                <h3 className="font-body text-[15px] md:text-[16px] font-semibold text-white leading-[1.3] mt-2">Four Seasons opens in Mykonos</h3>
              </div>
            </a>

            {/* Article 3 — Conrad Athens (PETIT) */}
            <a
              href="https://tornosnews.gr/en/tourism-businesses/hotels/55111-the-high-profile-hotel-openings-expected-in-2026.html"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative block aspect-[3/4] md:aspect-auto overflow-hidden group cursor-pointer"
              data-delay="120"
            >
              <img src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80" alt="Conrad Athens" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Openings</span>
              <div className="absolute bottom-0 left-0 p-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">TornosNews &middot; 2026</p>
                <h3 className="font-body text-[15px] md:text-[16px] font-semibold text-white leading-[1.3] mt-2">Conrad Athens replaces the iconic Hilton</h3>
              </div>
            </a>
          </div>

          {/* LIGNE 2 : 3 égaux */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
            {/* Article 4 — Eréma Milos */}
            <a
              href="https://tornosnews.gr/en/businesses/hotels/empiria-group-expands-in-the-cyclades-new-luxury-all-suite-hotel-in-milos-in-jun.html"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden group cursor-pointer"
              data-delay="180"
            >
              <img src="https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?auto=format&fit=crop&w=800&q=80" alt="Eréma Milos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Openings</span>
              <div className="absolute bottom-0 left-0 p-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">TornosNews &middot; Feb 2026</p>
                <h3 className="font-body text-[15px] md:text-[16px] font-semibold text-white leading-[1.3] mt-2">Er&eacute;ma opens in Milos</h3>
              </div>
            </a>

            {/* Article 5 — Hyatt Paros */}
            <a
              href="https://www.travelandtourworld.com/news/article/greeces-paros-to-welcome-the-stunning-parian-chronicle-hotel-in-summer-2026-offering-luxury-culture-and-wellness-in-a-stunning-aegean-setting/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden group cursor-pointer"
              data-delay="240"
            >
              <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80" alt="Hyatt Paros" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Openings</span>
              <div className="absolute bottom-0 left-0 p-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">TATW &middot; April 2026</p>
                <h3 className="font-body text-[15px] md:text-[16px] font-semibold text-white leading-[1.3] mt-2">Destination by Hyatt arrives in Paros</h3>
              </div>
            </a>

            {/* Article 6 — Athens WTA */}
            <a
              href="https://www.travelandtourworld.com/news/article/india-maldives-jamaica-chile-greece-portugal-vietnam-triumph-at-world-travel-awards-2025-cementing-their-status-as-top-choices-for-adventure-safari-and-luxury-travel/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden group cursor-pointer"
              data-delay="300"
            >
              <img src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=800&q=80" alt="Athens World Travel Awards" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">In the press</span>
              <div className="absolute bottom-0 left-0 p-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">World Travel Awards &middot; 2025</p>
                <h3 className="font-body text-[15px] md:text-[16px] font-semibold text-white leading-[1.3] mt-2">Athens named World&apos;s Leading City Break</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — THE HEIGHT (Real Estate)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[45vh] md:h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
            alt="Contemporary luxury villa, sea view"
            className="img-settle w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 p-6 md:p-12 max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] font-medium tracking-[0.15em] uppercase text-white">
              Real Estate
            </span>
            <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] font-medium tracking-[0.15em] uppercase text-white" data-delay="50">
              Attica &middot; Greece
            </span>
          </div>
          <h2 className="reveal font-heading text-[28px] md:text-[40px] text-white leading-[0.9] uppercase mb-2" data-delay="100" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            The Height.
          </h2>
          <p className="reveal font-body text-[18px] md:text-[20px] text-white font-normal mt-2" data-delay="150" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            A new landmark near Athens
          </p>
          <p className="reveal font-body text-[14px] md:text-[16px] text-white/80 font-light leading-[1.7] max-w-lg mt-4" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            An extraordinary residential project on the Attic coast, designed by one of Europe&apos;s most celebrated architects. For clients exploring investment or primary residences in Greece.
          </p>
          <p className="reveal font-body text-[14px] text-white/60 font-light mt-4" data-delay="250" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            eb. works with a select number of clients as a trusted introduction to this project.
          </p>
          <div className="reveal flex flex-col md:flex-row gap-4 md:gap-8 mt-6" data-delay="300">
            <a
              href="https://theheight.estate/el/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 min-h-[44px] items-center door-cta"
            >
              View project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 min-h-[44px] items-center"
            >
              Request an introduction
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CTA FINAL (beige)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-10 md:py-14 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="reveal text-[22px] md:text-[30px] text-[#2e5a88] leading-[1.2]" style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 300 }}>
            Stay close to Greece.
          </h2>
          <p className="reveal font-body text-[15px] text-[#1a1a1a]/40 font-light mt-3 leading-relaxed" data-delay="100">
            Destinations, openings, and the conversations that matter.
          </p>
          <a
            href="/contact"
            className="reveal inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors duration-300 mt-8 min-h-[44px] items-center door-cta"
            data-delay="200"
          >
            Have a project in mind
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — FOOTER
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
            <a href="mailto:hello@emmabonnefous.com" className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors py-2">
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
