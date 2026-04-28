"use client";

import { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";
import NextChapter from "../components/NextChapter";

/* ═══════════════════════════════════════════════════════
   VILLA DATA — 5 public residences
   ═══════════════════════════════════════════════════════ */

type VillaCard = {
  slug: string;
  image: string;
  location: string;
  name: string;
  description: string;
  specs: string;
  priceFrom?: string;
  combinableWith?: string;
  badge?: string;
  href: string;
  ctaLabel: string;
};

const villas: VillaCard[] = [
  {
    slug: "you-and-me",
    image: "/villas/you-and-me/cover.jpg",
    location: "Aleomandra, Mykonos",
    name: "Villa You & Me",
    description: "A private estate above the Aegean.",
    specs: "900 m\u00b2 \u00b7 Up to 20 Guests \u00b7 Seafront",
    combinableWith: "Combinable with Villa Celestia",
    href: "/collection/you-and-me",
    ctaLabel: "View residence",
  },
  {
    slug: "celestia",
    image: "/villas/celestia/cover.jpg",
    location: "Aleomandra, Mykonos",
    name: "Villa Celestia",
    description: "Contemporary architecture meeting the open sea.",
    specs: "950 m\u00b2 \u00b7 Up to 18 Guests \u00b7 Seafront",
    combinableWith: "Combinable with Villa You & Me",
    badge: "New for 2026",
    href: "/collection/celestia",
    ctaLabel: "View residence",
  },
  {
    slug: "esmeralda",
    image: "/villas/esmeralda/cover.jpg",
    location: "Mykonos",
    name: "Villa Esmeralda",
    description: "A beachfront estate, a minute from the sand.",
    specs: "600 m\u00b2 \u00b7 10 Bed \u00b7 Up to 20 Guests \u00b7 Beachfront",
    href: "/collection/esmeralda",
    ctaLabel: "View residence",
  },
  {
    slug: "tourlos-breeze",
    image: "/villas/tourlos-breeze/cover.jpg",
    location: "Tourlos, Mykonos",
    name: "Villa Tourlos Breeze",
    description: "Eight bedrooms above the harbour, the Cyclades at your feet.",
    specs: "840 m\u00b2 \u00b7 8 Bed \u00b7 Up to 16 Guests \u00b7 Sea View",
    href: "/collection/tourlos-breeze",
    ctaLabel: "View residence",
  },
  {
    slug: "santorini-estate",
    image: "/villas/santorini-estate/cover.jpg",
    location: "Messaria, Santorini",
    name: "Santorini Estate",
    description: "Two acres on the caldera. Five suites, a spa, a chapel.",
    specs: "5 Suites \u00b7 Up to 10 Guests \u00b7 Caldera View",
    href: "/collection/santorini-estate",
    ctaLabel: "View residence",
  },
  {
    slug: "silent-coast",
    image: "/villas/silent-coast/cover.jpg",
    location: "Porto Heli, Peloponnese",
    name: "Silent Coast",
    description: "Stone, olive trees, and a private beach on the Argolic Gulf.",
    specs: "6 Bed \u00b7 6 Bath \u00b7 Up to 12 Guests \u00b7 Beachfront",
    href: "/collection/silent-coast",
    ctaLabel: "View residence",
  },
  {
    slug: "aegean-residence",
    image: "/villas/aegean-residence/cover.jpg",
    location: "Porto Heli, Peloponnese",
    name: "Aegean Residence",
    description: "An 8,000 m² estate, three private coves below.",
    specs: "7 Bed \u00b7 7 Bath \u00b7 Up to 14 Guests \u00b7 Seafront",
    href: "/collection/aegean-residence",
    ctaLabel: "View residence",
  },
  {
    slug: "anavissos-lux",
    image: "/villas/anavissos-lux/cover.jpg",
    location: "Anavyssos, Athens Riviera",
    name: "Anavissos Lux",
    description: "Five pools, a wellness wing, twenty metres from the sand.",
    specs: "700 m\u00b2 \u00b7 6 Bed \u00b7 Up to 12 Guests \u00b7 Sea View",
    priceFrom: "Price on request",
    badge: "Off Market",
    href: "/collection/anavissos-lux",
    ctaLabel: "View residence",
  },
];

/* ═══════════════════════════════════════════════════════ */

export default function CollectionPage() {
  const exploreRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    revealEls.forEach((el) => {
      // Si l'element est deja scrollped past au mount (ex: arrivee via #homes),
      // le marquer visible immediatement plutot que de l'observer (sinon "trou")
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) {
        el.classList.add("visible", "done");
      } else {
        revealObs.observe(el);
      }
    });

    // Observer separe pour les images "settle" (zoom subtil a l'apparition)
    const settleEls = document.querySelectorAll<HTMLElement>(".eb-image-settle");
    const settleObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("eb-visible");
            settleObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    settleEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) {
        el.classList.add("eb-visible");
      } else {
        settleObs.observe(el);
      }
    });

    return () => {
      revealObs.disconnect();
      settleObs.disconnect();
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/collection" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO (gardé tel quel)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="/villas/celestia/gallery-01.jpg"
          alt="Private residence above Mykonos at dusk"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <span className="mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Collection
          </span>
          <h1
            className="reveal font-heading text-[36px] sm:text-[52px] md:text-[88px] leading-[1.05] sm:leading-[0.95] text-white uppercase text-balance px-2"
            data-delay="100"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Your address in Greece.
          </h1>
          <p
            className="reveal mt-6 max-w-[580px] text-white/85 text-[16px] md:text-[17px] leading-[1.6] font-light font-body"
            data-delay="200"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Villas that rarely appear online. Yachts across the Greek coast.
          </p>
        </div>

        <button
          type="button"
          onClick={() => exploreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label="Scroll to content"
          className="absolute left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 active:opacity-100 animate-bounce transition-opacity cursor-pointer p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))" }}
        >
          <svg className="w-6 h-6 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — MANIFESTO (refait)
      ═══════════════════════════════════════════ */}
      <section ref={exploreRef} id="explore" className="bg-[#fcf7f1] px-6 pt-24 md:pt-28 pb-4 md:pb-6 scroll-mt-20">
        <div className="max-w-[620px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium">
            Collection
          </p>
          <div className="reveal mt-4 w-10 h-[2px] bg-[#2e5a88] mx-auto" data-delay="50" />
          <h2
            className="reveal font-body mt-12 text-[22px] md:text-[30px] text-[#2e5a88] leading-[1.35] font-normal"
            data-delay="100"
          >
            A private collection. The rest is a conversation.
          </h2>
          <p className="reveal mt-10 text-[15px] md:text-[16px] leading-[1.8] text-[#1a1a1a]/65 font-light font-body" data-delay="150">
            Not a portfolio. A private network. We know the owners, the coastlines, the houses that deliver and the ones that photograph better than they live. When you reach out, we already know which one is yours.
          </p>
          <p className="reveal mt-8 text-[14px] md:text-[15px] leading-[1.7] text-[#1a1a1a]/55 font-light font-body" data-delay="200">
            Tell us how you want to live for the week. We know where that is.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — THE HOMES (grille unique, 5 villas)
      ═══════════════════════════════════════════ */}
      <section id="homes" className="bg-[#fcf7f1] px-6 md:px-12 pt-6 md:pt-10 pb-4 md:pb-6 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 md:gap-y-10">
            {villas.map((villa, i) => (
              <a
                key={villa.slug}
                id={`villa-${villa.slug}`}
                href={villa.href}
                className={`reveal group block relative overflow-hidden eb-card-hover scroll-mt-24 ${
                  i < 2 ? "md:col-span-2 aspect-[4/5] md:aspect-[5/2]" : "aspect-[3/4] md:aspect-[3/2]"
                }`}
                data-delay={String((i % 2) * 120)}
              >
                <img
                  src={villa.image}
                  alt={villa.name}
                  loading="lazy"
                  className="eb-image-settle absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-45% to-black/10" />
                {villa.badge && (
                  <span className="absolute top-4 left-4 md:top-5 md:left-5 inline-block px-3 py-1.5 bg-[#2e5a88] rounded-full text-white text-[10px] uppercase tracking-[0.2em] font-medium font-body" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                    {villa.badge}
                  </span>
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.15em] text-white font-medium font-body" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7), 0 0 12px rgba(0,0,0,0.4)" }}>
                    {villa.location}
                  </p>
                  <h3
                    className="mt-2 font-heading text-white uppercase leading-[0.95] tracking-wide text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px]"
                    style={{
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 6px rgba(0,0,0,0.8), 0 0 14px rgba(0,0,0,0.4)",
                    }}
                  >
                    {villa.name}
                  </h3>
                  <p className="hidden md:block mt-2 text-[13px] md:text-[14px] leading-[1.5] text-white font-light max-w-[400px] font-body" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>
                    {villa.description}
                  </p>
                  <p className="mt-3 md:mt-3 text-[9px] md:text-[11px] uppercase tracking-[0.12em] md:tracking-[0.12em] text-white/90 font-medium font-body" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
                    {villa.specs}
                  </p>
                  {villa.combinableWith && (
                    <p className="hidden md:block mt-1.5 text-[10px] md:text-[11px] tracking-[0.02em] text-white/75 italic font-light font-body" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
                      {villa.combinableWith}
                    </p>
                  )}
                  <span className="eb-cta-link mt-4 text-[11px] md:text-[12px] uppercase tracking-[0.15em] md:tracking-[0.1em] font-medium text-white font-body">
                    {villa.ctaLabel} <span className="eb-cta-arrow">&rarr;</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3.5 — CITATION DE RESPIRATION
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center h-[15vh] md:h-[28vh] px-8">
        <p className="reveal font-body text-[17px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-relaxed">
          The right address changes the week.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — THE YACHT (plein écran image + overlay)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative min-h-[70vh] md:min-h-[90vh] flex items-end">
        <img
          src="/yatch%20on%20board.jpg"
          alt="Private yacht charter, gangway over open Aegean waters"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 via-50% to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 pb-12 md:pb-20 pt-20">
          <div className="max-w-[1400px] mx-auto">
            <span className="reveal inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body mb-5 md:mb-6">
              Private Yacht Charter
            </span>
            <h2
              className="reveal font-heading text-white text-[32px] md:text-[56px] leading-[0.95] uppercase max-w-[700px]"
              data-delay="100"
              style={{ letterSpacing: "-0.01em", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
            >
              The Cyclades, at 35 knots.
            </h2>
            <p
              className="reveal hidden md:block mt-6 text-white/85 text-[15px] md:text-[17px] leading-[1.65] font-light max-w-[520px] font-body"
              data-delay="150"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              BESTIA. The only Sanlorenzo SP110 in charter, worldwide. 33 metres, fresh from 2024, Athens-based. Four cabins, eight guests, a crew of five.
            </p>
            <p className="reveal mt-4 md:mt-6 text-[10px] md:text-[12px] uppercase tracking-[0.15em] md:tracking-[0.12em] text-white/80 font-medium font-body" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
              33m &middot; 4 Cabins &middot; 8 Guests &middot; Crew of 5
            </p>
            <a
              href="/collection/bestia"
              className="reveal eb-cta-link mt-6 md:mt-8 text-[12px] md:text-[13px] uppercase tracking-[0.15em] md:tracking-[0.12em] font-medium text-white font-body min-h-[44px] py-3 relative z-[2]"
              data-delay="250"
            >
              View the yacht <span className="eb-cta-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — THE PRIVATE CIRCLE
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative min-h-[55vh] md:min-h-[65vh] flex items-center">
        <img
          src="/photo%20bandeau_page%20Collection.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-[600px] mx-auto text-center">
            <span className="reveal inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
              By Introduction Only
            </span>
            <h2
              className="reveal mt-8 font-heading text-white text-[32px] md:text-[56px] leading-[0.95] uppercase"
              data-delay="100"
              style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              Private residences.<br />By introduction.
            </h2>
            <p
              className="reveal mt-6 text-white/85 text-[15px] md:text-[16px] leading-[1.7] font-light font-body"
              data-delay="150"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              Our most private residences never appear online.
            </p>
            <a
              href="/contact?type=stay"
              className="reveal eb-cta-link mt-10 text-[13px] md:text-[14px] uppercase tracking-[0.12em] font-medium text-white font-body min-h-[44px]"
              data-delay="250"
            >
              Request introduction <span className="eb-cta-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — CTA FINAL (titre + CTA uniquement)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden eb-image-vignette">
        <img
          src="https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1920&q=80"
          alt="Greek coast golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-[3] text-center px-8 max-w-[640px]">
          <h2
            className="reveal font-heading text-white text-[32px] md:text-[56px] leading-[0.95] uppercase mb-6"
            data-delay="80"
            style={{ letterSpacing: "0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 0 16px rgba(0,0,0,0.4)" }}
          >
            A stay begins with a conversation.
          </h2>
          <p
            className="reveal font-body text-white text-base md:text-lg font-light leading-relaxed max-w-[480px] mx-auto mb-10"
            data-delay="150"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
          >
            Tell us what you have in mind.
          </p>
          <a
            href="/contact?type=stay"
            className="reveal eb-cta-link font-body text-sm tracking-[0.2em] uppercase text-white min-h-[44px] py-3 relative z-[2]"
            data-delay="220"
          >
            Start the conversation <span className="eb-cta-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER (gardé tel quel)
      ═══════════════════════════════════════════ */}
      <NextChapter currentHref="/collection" />

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
            <a href="/journeys" className="hover:text-[#fcf7f1] transition-colors py-2">Journeys</a>
            <a href="/experiences" className="hover:text-[#fcf7f1] transition-colors py-2">Experiences</a>
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
