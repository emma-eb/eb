"use client";

import { useRef } from "react";
import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";
import NextChapter from "../components/NextChapter";

export default function Journal() {
  const exploreRef = useRef<HTMLElement>(null);


  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/journal" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO (instant, compact)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="/panos-katsigiannis-Ll4s8gKQ1xQ-unsplash.jpg"
          alt="Stone chapel framed by Cycladic arch, Greece"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="reveal mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Journal
          </span>
          <h1
            className="reveal font-heading text-[42px] sm:text-[52px] md:text-[88px] leading-[0.95] text-white uppercase"
            data-delay="80"
            style={{ letterSpacing: "-0.01em", textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 0 16px rgba(0,0,0,0.4)" }}
          >
            Greece, closely.
          </h1>
          <p
            className="reveal mt-6 max-w-[580px] text-white text-[16px] md:text-[17px] leading-[1.6] font-light font-body"
            data-delay="160"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.5)" }}
          >
            News, openings, and the conversations shaping how the world sees Greece right now.
          </p>
        </div>
        <button
          type="button"
          onClick={() => exploreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 animate-bounce transition-opacity cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — FEATURED ARTICLE
      ═══════════════════════════════════════════ */}
      <section ref={exploreRef} id="explore" data-nav-dark className="relative h-[60vh] md:h-[60vh] flex items-end overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1602769247692-126fdf1f1da6?auto=format&fit=crop&w=1920&q=80"
            alt="Greek coast dramatic sunset"
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
          <h2 className="reveal font-heading text-[32px] md:text-[48px] text-white leading-[1.05] uppercase mb-4" data-delay="100" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece is the new Dubai for India&apos;s ultra-wealthy.
          </h2>
          <p className="reveal hidden md:block font-body text-[16px] text-white/80 font-light leading-[1.7] max-w-lg mt-4" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            India&apos;s high-net-worth travelers are choosing Greece over the Gulf. Authentic luxury, historic depth, and a beauty that no amount of engineering can replicate.
          </p>
          <a
            href="https://www.businesstoday.in/nri/invest/story/is-greece-the-new-dubai-why-hni-indians-are-shifting-their-investments-525576-2026-04-14"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal eb-cta-link mt-6 min-h-[44px] font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white"
            data-delay="300"
          >
            Read the article
            <span className="eb-cta-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — GRILLE 7 ARTICLES (fond noir, asymétrique)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] py-8 md:py-12 px-3 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* LIGNE 1 : 1 featured (2/3) + 2 petits (1/3 empiles) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Art 1 — Emily in Paris (FEATURED) */}
            <a href="https://variety.com/2026/tv/global/emily-in-paris-season-6-shoot-greece-monaco-1236713273/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-300" data-delay="0">
              <img src="/emily-paris.jpg" alt="Greek terrace, blue shutters, bougainvillea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-3 left-3 md:top-4 md:left-4 inline-block px-2.5 py-1 bg-black/40 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] rounded-full font-body text-[8px] md:text-[9px] font-medium tracking-[0.15em] uppercase text-white/90">Culture</span>
              <div className="absolute bottom-0 left-0 p-4 md:p-6" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <p className="inline-block px-2 py-0.5 bg-black/30 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/90">Variety &middot; April 2026</p>
                <h3 className="font-heading text-white uppercase leading-[1.05] tracking-wide mt-2 max-w-lg line-clamp-3" style={{ fontSize: "clamp(18px, 2vw, 28px)", letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>Emily in Paris heads to Greece for Season 6</h3>
              </div>
            </a>

            {/* Art 2 — Tourism Revenue (PETIT) */}
            <a href="https://greekcitytimes.com/2026/03/26/tourism-revenue-jumps-58-4-in-january-reaches-e473-3-million/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-300" data-delay="50">
              <img src="/tourism-revenue.jpg" alt="Girl photographing the Parthenon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-3 left-3 inline-block px-2.5 py-1 bg-black/40 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] rounded-full font-body text-[8px] md:text-[9px] font-medium tracking-[0.15em] uppercase text-white/90">In the press</span>
              <div className="absolute bottom-0 left-0 p-4" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <p className="inline-block px-2 py-0.5 bg-black/30 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/90">Greek City Times &middot; March 2026</p>
                <h3 className="font-heading text-white uppercase leading-[1.15] tracking-[0.02em] mt-2 line-clamp-3" style={{ fontSize: "clamp(15px, 1.4vw, 20px)", letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>Tourism revenue jumps 58.4% to &euro;473M</h3>
              </div>
            </a>

            {/* Art 3 — Greece #1 Expats (PETIT) */}
            <a href="https://www.newsweek.com/greece-worlds-top-retirement-destination-how-americans-can-move-there-11124134" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-300" data-delay="100">
              <img src="https://images.unsplash.com/photo-1692445772695-5a5b88ecb786?auto=format&fit=crop&w=800&q=80" alt="Greece sunset village" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-3 left-3 inline-block px-2.5 py-1 bg-black/40 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] rounded-full font-body text-[8px] md:text-[9px] font-medium tracking-[0.15em] uppercase text-white/90">In the press</span>
              <div className="absolute bottom-0 left-0 p-4" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <p className="inline-block px-2 py-0.5 bg-black/30 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/90">Newsweek &middot; 2026</p>
                <h3 className="font-heading text-white uppercase leading-[1.15] tracking-[0.02em] mt-2 line-clamp-3" style={{ fontSize: "clamp(15px, 1.4vw, 20px)", letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>Greece named world&apos;s #1 retirement destination</h3>
              </div>
            </a>
          </div>

          {/* LIGNE 2 : 4 articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
            {/* Art 4 — Astypalea */}
            <a href="https://greekreporter.com/2026/03/30/greece-astypalaia-world-destination-guardian/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-300" data-delay="150">
              <img src="/astypalea.jpg" alt="Astypalea windmills" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-3 left-3 inline-block px-2.5 py-1 bg-black/40 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] rounded-full font-body text-[8px] md:text-[9px] font-medium tracking-[0.15em] uppercase text-white/90">Destination</span>
              <div className="absolute bottom-0 left-0 p-3" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <p className="inline-block px-2 py-0.5 bg-black/30 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/90">The Guardian &middot; 2026</p>
                <h3 className="font-heading text-white uppercase leading-[1.05] tracking-wide mt-2 line-clamp-3" style={{ fontSize: "clamp(15px, 1.4vw, 20px)", letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>Astypalea crowned world&apos;s top destination</h3>
              </div>
            </a>

            {/* Art 5 — Hotel Openings 2026 */}
            <a href="https://tornosnews.gr/en/businesses/hotels/55111-the-high-profile-hotel-openings-expected-in-2026.html" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-300" data-delay="200">
              <img src="/raphael-lopes-zqGvYYqDvs4-unsplash%20(1).jpg" alt="Luxury hotel Greece" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-3 left-3 inline-block px-2.5 py-1 bg-black/40 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] rounded-full font-body text-[8px] md:text-[9px] font-medium tracking-[0.15em] uppercase text-white/90">Hospitality Pipeline</span>
              <div className="absolute bottom-0 left-0 p-3" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <p className="inline-block px-2 py-0.5 bg-black/30 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/90">Tornos News &middot; 2026</p>
                <h3 className="font-heading text-white uppercase leading-[1.05] tracking-wide mt-2 line-clamp-3" style={{ fontSize: "clamp(15px, 1.4vw, 20px)", letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>The high-profile hotel openings expected in 2026</h3>
              </div>
            </a>

            {/* Art 6 — Real Estate UHNW */}
            <a href="https://greekcitytimes.com/2026/04/14/greece-a-safe-haven-for-luxury-real-estate-investment/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-300" data-delay="250">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="Luxury villa modern architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-3 left-3 inline-block px-2.5 py-1 bg-black/40 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] rounded-full font-body text-[8px] md:text-[9px] font-medium tracking-[0.15em] uppercase text-white/90">Capital &amp; Lifestyle</span>
              <div className="absolute bottom-0 left-0 p-3" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <p className="inline-block px-2 py-0.5 bg-black/30 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/90">Greek City Times &middot; April 2026</p>
                <h3 className="font-heading text-white uppercase leading-[1.05] tracking-wide mt-2 line-clamp-3" style={{ fontSize: "clamp(15px, 1.4vw, 20px)", letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>Greece becomes a safe haven for luxury real estate</h3>
              </div>
            </a>

            {/* Art 7 — Gulf shift */}
            <a href="https://greekcitytimes.com/2026/03/11/gulf-tourism-slump-redirects-travelers-greece/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-300" data-delay="300">
              <img src="/gulf-shift.jpg" alt="Aerial view boats turquoise water Greece" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-3 left-3 inline-block px-2.5 py-1 bg-black/40 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] rounded-full font-body text-[8px] md:text-[9px] font-medium tracking-[0.15em] uppercase text-white/90">In the press</span>
              <div className="absolute bottom-0 left-0 p-3" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <p className="inline-block px-2 py-0.5 bg-black/30 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/90">Greek City Times &middot; March 2026</p>
                <h3 className="font-heading text-white uppercase leading-[1.05] tracking-wide mt-2 line-clamp-3" style={{ fontSize: "clamp(15px, 1.4vw, 20px)", letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>Tourists reroute to Greece as Gulf slumps</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — THE HEIGHT (Real Estate)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[60vh] md:h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
            alt="Contemporary luxury villa, sea view"
            className="img-settle w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 p-6 md:p-12 max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] font-medium tracking-[0.15em] uppercase text-white">
              Real Estate &middot; Attica
            </span>
          </div>
          <h2 className="reveal font-heading text-[28px] md:text-[48px] text-white leading-[1.05] uppercase mb-2" data-delay="100" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            The Height.
          </h2>
          <p className="reveal font-body text-[15px] md:text-[20px] text-white font-light md:font-normal mt-2" data-delay="150" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            A new landmark near Athens.
          </p>
          <p className="reveal hidden md:block font-body text-[14px] md:text-[16px] text-white/80 font-light leading-[1.7] max-w-lg mt-4" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            An extraordinary residential project on the Attic coast, designed by one of Europe&apos;s most celebrated architects. For clients exploring investment or primary residences in Greece.
          </p>
          <p className="reveal hidden md:block font-body text-[14px] text-white/60 font-light mt-4" data-delay="250" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            eb. works with a select number of clients as a trusted introduction to this project.
          </p>
          <div className="reveal flex flex-col md:flex-row gap-4 md:gap-8 mt-6" data-delay="300">
            <a
              href="https://theheight.estate/el/"
              target="_blank"
              rel="noopener noreferrer"
              className="eb-cta-link font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white min-h-[44px] py-3"
            >
              View project
              <span className="eb-cta-arrow">&rarr;</span>
            </a>
            <a
              href="/contact?type=stay"
              className="eb-cta-link font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white min-h-[44px] py-3"
            >
              Request an introduction
              <span className="eb-cta-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden eb-image-vignette">
        <img
          src="/alexandra-kirr-pV7Cyd4bxkY-unsplash.jpg"
          alt="Alley opening onto the Aegean, Greek islands"
          className="absolute inset-0 w-full h-full object-cover object-[70%_35%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-[3] text-center px-8 max-w-[640px]">
          <h2
            className="reveal font-heading text-white text-[32px] md:text-[56px] leading-[0.95] uppercase mb-6"
            data-delay="80"
            style={{ letterSpacing: "0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 0 16px rgba(0,0,0,0.4)" }}
          >
            Stay close to Greece.
          </h2>
          <p
            className="reveal font-body text-white/80 text-base md:text-lg font-light leading-relaxed max-w-[480px] mx-auto mb-10"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Every great journey starts with a conversation.
          </p>
          <a
            href="/contact"
            className="reveal eb-cta-link font-body text-sm tracking-[0.2em] uppercase text-white"
            data-delay="220"
          >
            Start the conversation
            <span className="eb-cta-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — FOOTER
      ═══════════════════════════════════════════ */}
      <NextChapter currentHref="/journal" />

      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <NewsletterBanner />
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-t border-white/30" />
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-8 mt-8">
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
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10">
          <p className="text-[10px] md:text-[11px] text-white/35 font-light leading-[1.5] max-w-[540px] mx-auto md:mx-0 text-center md:text-left">
            eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece.
          </p>
        </div>
      </footer>
    </main>
  );
}
