"use client";

import { useEffect, useState } from "react";
import Nav from "../components/Nav";

export default function Journal() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    // TODO: connect to Beehiiv/Mailchimp/Resend when service is chosen
    console.log("Newsletter subscription:", email);
    setSubmitted(true);
  };

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
      <section data-nav-dark className="relative h-[70vh] md:h-[45vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt="Aerial view Greek coast, turquoise water"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-8">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
            Journal
          </span>
          <h1 className="font-heading text-[clamp(2.2rem,8vw,4rem)] leading-[0.9] text-white uppercase" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
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
      <section data-nav-dark className="relative h-[60vh] md:h-[60vh] flex items-end overflow-hidden">
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
          <h2 className="reveal font-heading text-[26px] md:text-[40px] text-white leading-[0.9] uppercase mb-4" data-delay="100" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece is the new Dubai for India&apos;s ultra-wealthy.
          </h2>
          <p className="reveal hidden md:block font-body text-[16px] text-white/80 font-light leading-[1.7] max-w-lg mt-4" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
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
          BLOC 3 — GRILLE 7 ARTICLES (fond noir, asymétrique)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] py-8 md:py-12 px-3 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* LIGNE 1 : 1 featured (2/3) + 2 petits (1/3 empiles) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Art 1 — Emily in Paris (FEATURED) */}
            <a href="https://variety.com/2026/tv/global/emily-in-paris-season-6-shoot-greece-monaco-1236713273/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto overflow-hidden group cursor-pointer" data-delay="0">
              <img src="/emily-paris.jpg" alt="Greek terrace, blue shutters, bougainvillea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Culture</span>
              <div className="absolute bottom-0 left-0 p-5 md:p-8" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">Variety &middot; April 2026</p>
                <h3 className="font-body text-[18px] md:text-[24px] font-semibold text-white leading-[1.3] mt-2 max-w-lg">Emily in Paris heads to Greece for Season 6</h3>
              </div>
            </a>

            {/* Art 2 — Tourism Revenue (PETIT) */}
            <a href="https://greekcitytimes.com/2026/03/26/tourism-revenue-jumps-58-4-in-january-reaches-e473-3-million/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer" data-delay="50">
              <img src="/tourism-revenue.jpg" alt="Girl photographing the Parthenon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">In the press</span>
              <div className="absolute bottom-0 left-0 p-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">Greek City Times &middot; March 2026</p>
                <h3 className="font-body text-[15px] md:text-[16px] font-semibold text-white leading-[1.3] mt-2">Tourism revenue jumps 58.4% to &euro;473M</h3>
              </div>
            </a>

            {/* Art 3 — Greece #1 Expats (PETIT) */}
            <a href="https://www.newsweek.com/greece-worlds-top-retirement-destination-how-americans-can-move-there-11124134" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer" data-delay="100">
              <img src="https://images.unsplash.com/photo-1692445772695-5a5b88ecb786?auto=format&fit=crop&w=800&q=80" alt="Greece sunset village" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">In the press</span>
              <div className="absolute bottom-0 left-0 p-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">Newsweek &middot; 2026</p>
                <h3 className="font-body text-[15px] md:text-[16px] font-semibold text-white leading-[1.3] mt-2">Greece named world&apos;s #1 retirement destination</h3>
              </div>
            </a>
          </div>

          {/* LIGNE 2 : 4 articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
            {/* Art 4 — Astypalea */}
            <a href="https://greekreporter.com/2026/03/30/greece-astypalaia-world-destination-guardian/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer" data-delay="150">
              <img src="/astypalea..jpg" alt="Astypalea windmills" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Destination</span>
              <div className="absolute bottom-0 left-0 p-4" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">The Guardian &middot; 2026</p>
                <h3 className="font-body text-[14px] md:text-[15px] font-semibold text-white leading-[1.3] mt-2">Astypalea crowned world&apos;s top destination</h3>
              </div>
            </a>

            {/* Art 5 — Hotel Openings 2026 */}
            <a href="https://tornosnews.gr/en/businesses/hotels/55111-the-high-profile-hotel-openings-expected-in-2026.html" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer" data-delay="200">
              <img src="/raphael-lopes-zqGvYYqDvs4-unsplash (1).jpg" alt="Luxury hotel Greece" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Hospitality Pipeline</span>
              <div className="absolute bottom-0 left-0 p-4" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">Tornos News &middot; 2026</p>
                <h3 className="font-body text-[14px] md:text-[15px] font-semibold text-white leading-[1.3] mt-2">The high-profile hotel openings expected in 2026</h3>
              </div>
            </a>

            {/* Art 6 — Real Estate UHNW */}
            <a href="https://greekcitytimes.com/2026/04/14/greece-a-safe-haven-for-luxury-real-estate-investment/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer" data-delay="250">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="Luxury villa modern architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">Capital &amp; Lifestyle</span>
              <div className="absolute bottom-0 left-0 p-4" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">Greek City Times &middot; April 2026</p>
                <h3 className="font-body text-[14px] md:text-[15px] font-semibold text-white leading-[1.3] mt-2">Greece becomes a safe haven for luxury real estate</h3>
              </div>
            </a>

            {/* Art 7 — Gulf shift */}
            <a href="https://greekcitytimes.com/2026/03/11/gulf-tourism-slump-redirects-travelers-greece/" target="_blank" rel="noopener noreferrer" className="reveal relative block aspect-[4/3] overflow-hidden group cursor-pointer" data-delay="300">
              <img src="/gulf-shift.jpg" alt="Aerial view boats turquoise water Greece" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] font-medium tracking-[0.15em] uppercase text-white">In the press</span>
              <div className="absolute bottom-0 left-0 p-4" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                <p className="font-body text-[9px] tracking-[0.1em] uppercase text-white/50">Greek City Times &middot; March 2026</p>
                <h3 className="font-body text-[14px] md:text-[15px] font-semibold text-white leading-[1.3] mt-2">Tourists reroute to Greece as Gulf slumps</h3>
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
          BLOC 5 — CTA FINAL (newsletter + conversation)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="reveal text-[28px] md:text-[42px] text-[#2e5a88] leading-[1.2]" style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 300 }}>
            Stay close to Greece.
          </h2>

          {/* Subtitle */}
          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/70 font-normal mt-4 leading-[1.6] max-w-md mx-auto" data-delay="100">
            Quarterly dispatches on what&apos;s moving in Athens, the islands, and the circles that matter. No spam.
          </p>

          {/* Newsletter form */}
          <div className="reveal mt-10" data-delay="200">
            {submitted ? (
              <p className="font-body text-[15px] text-[#2e5a88] font-normal">
                &check; You&apos;re in. First dispatch coming soon.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center gap-3 md:gap-0 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="email@example.com"
                  className="w-full md:flex-1 bg-transparent border-b border-[#2e5a88]/30 focus:border-[#2e5a88] outline-none py-3 px-0 font-body text-[16px] text-[#2e5a88] placeholder:text-[#1a1a1a]/30 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="font-body text-[13px] md:text-[14px] font-medium tracking-[0.1em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 hover:border-[#2e5a88] transition-colors duration-300 py-3 px-6 min-h-[44px] cursor-pointer whitespace-nowrap"
                >
                  Subscribe &rarr;
                </button>
              </form>
            )}
            {error && (
              <p className="font-body text-[12px] text-[#c0392b]/80 mt-2">{error}</p>
            )}
            {!submitted && (
              <p className="font-body text-[12px] text-[#1a1a1a]/30 mt-4">
                Your email stays private. Unsubscribe anytime.
              </p>
            )}
          </div>

          {/* Separator "or" */}
          <div className="flex items-center justify-center gap-4 mt-16 md:mt-20">
            <div className="h-px w-16 bg-[#1a1a1a]/15" />
            <span className="font-body text-[12px] text-[#1a1a1a]/30">or</span>
            <div className="h-px w-16 bg-[#1a1a1a]/15" />
          </div>

          {/* Secondary CTA */}
          <p className="font-body text-[16px] md:text-[17px] text-[#1a1a1a]/50 font-normal mt-6">
            Ready to start a project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-[13px] md:text-[14px] font-medium tracking-[0.1em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors duration-300 mt-3 min-h-[44px] items-center"
          >
            Start the conversation
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
