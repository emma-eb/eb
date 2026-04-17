"use client";

import { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";

const otherJourneys = [
  {
    slug: "athens-beyond-the-acropolis",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=900&q=85",
    tag: "5 Nights \u00b7 Athens + Riviera \u00b7 Year-round",
    title: "Athens, Beyond\nthe Acropolis.",
    tagline: "The city locals live in. Private galleries, hidden tavernas, the Acropolis without the line.",
  },
  {
    slug: "a-slow-honeymoon-in-the-cyclades",
    image: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?auto=format&fit=crop&w=900&q=85",
    tag: "8 Nights \u00b7 2 Islands \u00b7 May\u2013September",
    title: "A Slow Honeymoon\nin the Cyclades.",
    tagline: "Two private islands, one yacht, and the kind of week that resets a marriage.",
  },
  {
    slug: "a-family-summer-greek-style",
    image: "https://images.unsplash.com/photo-1518558997970-ba7e3ad1b13b?auto=format&fit=crop&w=900&q=85",
    tag: "10 Nights \u00b7 Villa + Island \u00b7 June\u2013August",
    title: "A Family Summer,\nGreek-Style.",
    tagline: "A private villa in the Peloponnese, a yacht for the day, and experiences that work for 8-year-olds and grandparents.",
  },
  {
    slug: "sailing-the-small-cyclades",
    image: "https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=900&q=85",
    tag: "5 Nights \u00b7 Private Yacht \u00b7 May\u2013September",
    title: "Sailing the\nSmall Cyclades.",
    tagline: "Anchor in bays where you\u2019re the only boat. The Cyclades, the way they used to be.",
  },
];

export default function JourneysPage() {
  const journeysRef = useRef<HTMLElement>(null);

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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    return () => revealObs.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/journeys" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO plein ecran
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1920&q=85"
          alt="The Greek islands, by eb."
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/55 pointer-events-none" />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center pointer-events-none">
          <span className="mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium font-body">
            Private Journeys
          </span>
          <h1
            className="font-heading text-white uppercase text-[44px] md:text-[80px] lg:text-[96px] leading-[0.95] mb-5 md:mb-6 max-w-5xl"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Greece, in five<br />starting points.
          </h1>
          <p
            className="max-w-[620px] text-white/85 text-[15px] md:text-[17px] leading-[1.6] font-light font-body"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Each one designed firsthand. Each one yours to reshape.
          </p>
        </div>

        <button
          type="button"
          onClick={() => journeysRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label="Scroll to journeys"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 animate-bounce transition-opacity cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — FEATURED JOURNEY (Astypalea)
      ═══════════════════════════════════════════ */}
      <section ref={journeysRef} id="journeys-list" className="bg-[#fcf7f1] py-20 md:py-28 px-6 md:px-[5%] scroll-mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="reveal font-body text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-black/45">
              Featured Journey
            </p>
          </div>

          <a
            href="/journeys/astypalea-before-everyone-else"
            className="reveal group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center hover:opacity-95 transition-opacity"
          >
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1400&q=85"
                  alt="Astypalea, the Greek island named #1 destination by The Guardian for 2026"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2">
                <span className="font-body text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#2e5a88] font-medium">
                  Featured #1 by The Guardian, 2026
                </span>
              </div>
            </div>

            <div className="md:col-span-5 md:pl-4">
              <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black/45 font-medium mb-5 md:mb-6">
                7 Nights &middot; Athens + Astypalea &middot; May&ndash;September
              </p>
              <h2
                className="font-heading text-[#2e5a88] uppercase text-[32px] md:text-[44px] lg:text-[52px] leading-[1.02] mb-5 md:mb-6"
                style={{ letterSpacing: "-0.01em" }}
              >
                Astypalea,<br />Before Everyone Else.
              </h2>
              <p className="font-body text-black/65 text-[15px] md:text-[17px] font-light leading-relaxed mb-6 md:mb-8">
                Athens, then the Greek island named the world{'\u2019'}s most desirable destination of 2026.
              </p>
              <span className="inline-block font-body text-[#2e5a88] text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#2e5a88] group-hover:opacity-70 transition-opacity">
                Explore the journey &rarr;
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — THE OTHER FOUR (grille 2x2)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-20 md:py-32 px-6 md:px-[5%] border-t border-black/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="reveal font-body text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-black/45 block mb-3">
              The other four
            </p>
            <div className="reveal w-8 h-[1px] bg-[#2e5a88] mx-auto" data-delay="80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {otherJourneys.map((j, i) => (
              <a
                key={j.slug}
                href={`/journeys/${j.slug}`}
                className="reveal group block hover:opacity-95 transition-opacity"
                data-delay={String((i % 2) * 100)}
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={j.image}
                    alt={j.title.replace("\n", " ")}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black/45 font-medium mb-3">
                  {j.tag}
                </p>
                <h3
                  className="font-heading text-[#2e5a88] uppercase text-[26px] md:text-[32px] lg:text-[36px] leading-[1.05] mb-3"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {j.title.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx === 0 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="font-body text-black/60 text-[14px] md:text-[15px] font-light leading-relaxed mb-4">
                  {j.tagline}
                </p>
                <span className="inline-block font-body text-[#2e5a88] text-[11px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#2e5a88] group-hover:opacity-70 transition-opacity">
                  Explore &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "500px" }}>
        <img
          src="https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=1920&q=85"
          alt="Greece, designed for you"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="reveal mb-5 md:mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium font-body">
            Yours, From Scratch
          </span>
          <h2
            className="reveal font-heading text-white uppercase text-[36px] md:text-[56px] lg:text-[68px] leading-[0.95] mb-4 md:mb-5 max-w-3xl"
            data-delay="80"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Every journey<br />starts from scratch.
          </h2>
          <p
            className="reveal font-body text-white/85 text-[14px] md:text-[16px] font-light max-w-xl mb-8 md:mb-10"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            The five above are starting points. Tell us what you have in mind. We design the rest.
          </p>
          <a
            href="/contact"
            className="reveal inline-block font-body text-white text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium pb-1.5 border-b border-white hover:opacity-80 transition-opacity door-cta"
            data-delay="220"
          >
            Start the conversation &rarr;
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
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
      </footer>
    </main>
  );
}
