"use client";

import { useRef } from "react";
import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";
import NextChapter from "../components/NextChapter";

const experiences = [
  {
    pill: "ATHENS",
    title: "Private Dinner\nFacing the Acropolis",
    desc: "A table set for your evening only. The kitchens that don\u2019t take reservations online, the terraces that close for one party. Michelin-starred rooftop or private penthouse, the format is yours.",
    cta: "Reserve your evening",
    photo: "/Screenshot 2026-03-09 at 11.30.58.png",
    pos: "center center",
  },
  {
    pill: "ACROSS GREECE",
    title: "Wedding Proposal\nin Greece",
    desc: "A clifftop terrace at golden hour. A private beach at the end of an unmarked road. We find the place, arrange every detail, and disappear. You just ask the question.",
    cta: "Plan the moment",
    photo: "/good-days-digital-5dusgr_R35E-unsplash.jpg",
    pos: "center 80%",
  },
  {
    pill: "GREECE",
    title: "Boutique\nWedding",
    desc: "For couples who want fewer guests and more meaning. A villa on a quiet island, a chapel by the sea with only the people who matter. We handle everything on the ground. Nothing is repeated.",
    cta: "Start planning",
    photo: "/Screenshot 2026-03-09 at 13.42.39.png",
    pos: "center 75%",
  },
  {
    pill: "ATHENS",
    title: "Private Shopping\nwith a Stylist",
    desc: "Kolonaki through someone who knows every door. Greek designers you won\u2019t find elsewhere, international houses with pieces set aside. A morning with no agenda but yours.",
    cta: "Book your morning",
    photo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1920&q=80",
    pos: "center center",
  },
];

const concierge = [
  {
    tag: "DINING",
    title: "Private Dining & Reservations",
    desc: "Michelin-starred rooftops in Athens, caldera tables in Santorini, sunset seats on the Riviera. We know which number to call, and which table to ask for.",
    photo: "https://images.unsplash.com/photo-1761047726498-67eeb8b35d7c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    tag: "GASTRONOMY",
    title: "Gastronomic Journeys",
    desc: "Market mornings with a local chef, wine on a hillside, a cooking class in a village kitchen where the recipe has never been written down.",
    /* TODO: Emma validate photo — table grecque dressee avec meze/poulpe/feta (pas une table vide) */
    photo: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    tag: "WINE",
    title: "Private Vineyard Visits",
    desc: "Santorini\u2019s volcanic soil, the quiet estates of Nemea and Naoussa. A glass poured by the winemaker, in the cellar where it aged.",
    photo: "https://images.unsplash.com/photo-1658754491350-e620df293b48?auto=format&fit=crop&w=1200&q=85",
  },
  {
    tag: "LIFESTYLE",
    title: "Lifestyle & Concierge",
    desc: "A private museum visit at dawn, a last-minute boat for the afternoon, villa staff for the week. One call, handled quietly.",
    photo: "https://images.unsplash.com/photo-1742218410508-500a3142663d?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Experiences() {
  const exploreRef = useRef<HTMLElement>(null);


  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/experiences" />

      {/* ═══════════════════════════════════════════
          HERO — instant
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?auto=format&fit=crop&w=1920&q=80"
          alt="Greek coastal town, aerial view"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Experiences
          </span>
          <h1
            className="font-heading text-[40px] sm:text-[52px] md:text-[88px] leading-[0.95] text-white uppercase"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Moments you can&apos;t book online.
          </h1>
          <p
            className="mt-6 max-w-[580px] text-white/85 text-[16px] md:text-[17px] leading-[1.6] font-light font-body"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Designed around your occasion, across Athens and the Greek islands.
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
          INTRO STATEMENT — beige
      ═══════════════════════════════════════════ */}
      <section ref={exploreRef} id="explore" className="bg-[#fcf7f1] py-14 md:py-16 px-8 md:px-16 scroll-mt-20">
        <div className="max-w-[90%] md:max-w-2xl mx-auto text-center">
          <p className="reveal font-body text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            01 &middot; Signature Experiences
          </p>
          <div className="reveal w-10 h-[2px] bg-[#2e5a88] mt-4 mb-8 mx-auto" data-delay="100" />
          <h2 className="reveal font-body text-[22px] md:text-[30px] text-[#2e5a88] leading-[1.35] font-normal" data-delay="200">
            The moments worth remembering.
          </h2>
          <p className="reveal mt-8 text-[15px] md:text-[16px] leading-[1.8] text-[#1a1a1a]/65 font-light font-body" data-delay="300">
            A private dinner where the chef knows your name before you arrive. A proposal where every detail has been rehearsed except the answer.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERIENCES — full-bleed immersive
      ═══════════════════════════════════════════ */}
      {experiences.map((exp) => (
        <section key={exp.pill + exp.title} data-nav-dark className="relative h-[60vh] md:h-[75vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={exp.photo}
              alt={exp.title.replace("\n", " ")}
              className="img-settle w-full h-full object-cover"
              style={{ objectPosition: exp.pos }}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

          <div className="relative z-10 px-6 pb-8 pt-6 md:p-12 w-full max-w-[92%] sm:max-w-lg">
            <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-4">
              {exp.pill}
            </span>
            <h2 className="reveal font-heading text-[28px] sm:text-[36px] md:text-[56px] text-white leading-[0.95] uppercase whitespace-pre-line mb-3 md:mb-4" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.7)" }} data-delay="100">
              {exp.title}
            </h2>
            <p className="reveal font-body text-[13px] md:text-[16px] text-white/95 font-light leading-[1.6] md:leading-[1.7] mt-3 md:mt-4" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }} data-delay="200">
              {exp.desc}
            </p>
            <a
              href="/contact?type=occasion"
              className="reveal eb-cta-link mt-5 md:mt-6 min-h-[44px] font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white"
              data-delay="300"
            >
              {exp.cta}
              <span className="eb-cta-arrow">&rarr;</span>
            </a>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════
          BREATHING — citation + concierge intro (beige)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-12 md:py-14 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal font-body text-[18px] md:text-[20px] font-light text-[#1a1a1a]/40 leading-relaxed">
            You tell us the occasion. We take care of everything around it.
          </p>

          <div className="mt-8">
            <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40" data-delay="100">
              02 &middot; Concierge
            </p>
            <div className="reveal w-10 h-[2px] bg-[#2e5a88] mt-4 mb-6 mx-auto" data-delay="150" />
            <p className="reveal font-body text-[22px] md:text-[26px] text-[#2e5a88] leading-[1.3] font-normal" data-delay="200">
              The rest is handled.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONCIERGE — 2x2 immersive grid
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-4 md:px-8 pb-4 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-[1400px] mx-auto">
          {concierge.map((c) => (
            <div key={c.tag} className="reveal relative aspect-[4/5] md:aspect-square overflow-hidden group">
              <img
                src={c.photo}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 100%)" }} />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10">
                <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] font-medium tracking-[0.15em] uppercase text-white">
                  {c.tag}
                </span>
                <h3
                  className="font-heading text-white uppercase leading-[1.05] tracking-wide mt-3 md:mt-4"
                  style={{ fontSize: "clamp(20px, 2.4vw, 30px)", letterSpacing: "-0.01em", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-body text-[12px] md:text-[13px] leading-[1.55] text-white/90 font-light mt-2 md:mt-3 max-w-[28ch]"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BREATHING — before CTA
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-10 md:py-14 px-8">
        <p className="reveal font-body text-[17px] md:text-[20px] font-light text-[#1a1a1a]/40 text-center leading-relaxed">
          One country. Every detail.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL — instant
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden eb-image-vignette">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?auto=format&fit=crop&w=1920&q=80"
            alt="Athens evening skyline"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-[3] text-center px-8 max-w-[640px]">
          <h2 className="reveal font-heading text-white text-[32px] md:text-[56px] leading-[0.95] uppercase mb-6" style={{ letterSpacing: "0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 0 16px rgba(0,0,0,0.4)" }}>
            Every detail, already thought of.
          </h2>
          <p className="reveal font-body text-white text-base md:text-lg font-light leading-relaxed max-w-[480px] mx-auto mb-10" data-delay="100" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>
            Tell us the occasion. The rest is shaped around it.
          </p>
          <a
            href="/contact?type=occasion"
            className="eb-cta-link font-body text-sm tracking-[0.2em] uppercase text-white"
          >
            Start the conversation
            <span className="eb-cta-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <NextChapter currentHref="/experiences" />

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
