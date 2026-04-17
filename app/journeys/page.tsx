"use client";

import { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";

interface Journey {
  slug: string;
  image: string;
  number: string;
  overline: string;
  title: string;
  description: string;
  meta: string;
}

const featured: Journey[] = [
  {
    slug: "astypalea-before-everyone-else",
    image: "/astypalea.jpg",
    number: "01",
    overline: "Featured Journey \u00b7 01",
    title: "Astypalea, Before\nEveryone Else.",
    description: "Athens, then the Greek island the Guardian named the world\u2019s #1 destination of 2026. While there\u2019s still no one there.",
    meta: "7 Nights \u00b7 Athens + Astypalea \u00b7 May\u2013September",
  },
  {
    slug: "mykonos-timed-right",
    image: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?auto=format&fit=crop&w=1920&q=85",
    number: "06",
    overline: "Featured Journey \u00b7 06",
    title: "Mykonos,\nTimed Right.",
    description: "The jet-set is not a place. It\u2019s a calendar. We have it. Five nights in a private villa, timed in real time by the eb. studio.",
    meta: "5 Nights \u00b7 Mykonos \u00b7 June\u2013September",
  },
];

const secondary: Journey[] = [
  {
    slug: "athens-slowly",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1400&q=85",
    number: "02",
    overline: "Private Journey \u00b7 02",
    title: "Athens, Slowly.",
    description: "The city seen at the pace it was actually built for. Five nights, one base, no ferries.",
    meta: "5 Nights \u00b7 Athens + Day Trips \u00b7 Year-round",
  },
  {
    slug: "a-slow-honeymoon-in-the-cyclades",
    image: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?auto=format&fit=crop&w=1400&q=85",
    number: "03",
    overline: "Private Journey \u00b7 03",
    title: "A Slow Honeymoon\nin the Cyclades.",
    description: "No rose petals. Just stone, wind, sea, and the kind of week that resets a marriage.",
    meta: "7 Nights \u00b7 Milos + Folegandros \u00b7 May\u2013September",
  },
  {
    slug: "a-family-summer-greek-style",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
    number: "04",
    overline: "Private Journey \u00b7 04",
    title: "A Family Summer,\nGreek-Style.",
    description: "A villa, a yacht for the day, and a coastline that works for eight-year-olds and grandparents alike.",
    meta: "10 Nights \u00b7 Porto Heli + Saronic \u00b7 June\u2013August",
  },
  {
    slug: "a-week-in-the-cyclades-by-sea",
    image: "https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1400&q=85",
    number: "05",
    overline: "Private Journey \u00b7 05",
    title: "A Week in the\nCyclades, By Sea.",
    description: "A 33-metre Italian yacht, six islands, a crew of five. The Cyclades the way they were meant to be reached.",
    meta: "7 Nights \u00b7 6 Islands \u00b7 Private Yacht \u00b7 May\u2013September",
  },
  {
    slug: "paros-antiparos-privately",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
    number: "07",
    overline: "Private Journey \u00b7 07",
    title: "Paros + Antiparos,\nPrivately.",
    description: "The Cyclades the Italian set has been keeping to itself for twenty years.",
    meta: "7 Nights \u00b7 Paros + Antiparos \u00b7 May\u2013October",
  },
];

function FeaturedBlock({ j }: { j: Journey }) {
  return (
    <a
      href={`/journeys/${j.slug}`}
      data-nav-dark
      className="reveal group relative block h-[80vh] md:h-[85vh] w-full overflow-hidden"
    >
      <img
        src={j.image}
        alt={j.title.replace("\n", " ")}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-end">
        <div className="p-8 md:p-16 max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-4">
            {j.overline}
          </span>
          <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/70 font-medium mb-4" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            {j.meta}
          </p>
          <h2
            className="font-heading text-white uppercase leading-[0.95] mb-5"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              letterSpacing: "-0.01em",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            {j.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && j.title.includes("\n") && <br />}
              </span>
            ))}
          </h2>
          <p className="font-body text-white/85 text-[14px] md:text-[16px] font-light leading-relaxed max-w-[520px] mb-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            {j.description}
          </p>
          {j.slug === "astypalea-before-everyone-else" && (
            <div className="mb-5">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-white/90 font-medium">
                Featured #1 by The Guardian, 2026
              </span>
            </div>
          )}
          <span className="inline-block font-body text-white text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-white/80 group-hover:border-white transition-colors">
            Discover the journey &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}

function SecondaryCard({ j }: { j: Journey }) {
  return (
    <a
      href={`/journeys/${j.slug}`}
      className="reveal group block relative overflow-hidden aspect-[3/2]"
    >
      <img
        src={j.image}
        alt={j.title.replace("\n", " ")}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 via-40% to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-white/70 font-medium font-body">
          {j.overline}
        </p>
        <h3
          className="mt-2 font-heading text-white uppercase leading-[1] tracking-wide"
          style={{
            fontSize: "clamp(26px, 2.8vw, 40px)",
            letterSpacing: "-0.01em",
            textShadow: "0 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          {j.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && j.title.includes("\n") && <br />}
            </span>
          ))}
        </h3>
        <p className="mt-2 text-[13px] md:text-[14px] leading-[1.5] text-white/85 font-light max-w-[400px] font-body">
          {j.description}
        </p>
        <p className="mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-white/60 font-medium font-body">
          {j.meta}
        </p>
        <span className="mt-4 inline-block text-[11px] md:text-[12px] uppercase tracking-[0.1em] font-medium text-white border-b border-white/70 pb-1 group-hover:border-white transition-colors w-fit font-body">
          Discover the journey &rarr;
        </span>
      </div>
    </a>
  );
}

export default function JourneysPage() {
  const listRef = useRef<HTMLElement>(null);

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
          BLOC 1 — HERO (texte bas-gauche, pattern aligne)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1920&q=85"
          alt="Private journeys across Greece, by eb."
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex items-end">
          <div className="p-8 md:p-16 max-w-[680px]">
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-5">
              Private Journeys
            </span>
            <h1
              className="font-heading text-white uppercase leading-[0.95] mb-5"
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                letterSpacing: "-0.01em",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Greece, designed firsthand.
            </h1>
            <p
              className="font-body text-white/85 text-[15px] md:text-[16px] font-light leading-relaxed max-w-[520px] mb-6"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              Seven private journeys through Greece. Each one shaped by the eb. studio. Each one yours to reshape.
            </p>
            <button
              type="button"
              onClick={() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="inline-block font-body text-white text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-white/80 hover:border-white transition-colors cursor-pointer"
            >
              Explore the journeys &rarr;
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label="Scroll to journeys"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 animate-bounce transition-opacity cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — 2 FEATURED pleine largeur empiles
      ═══════════════════════════════════════════ */}
      <section ref={listRef} id="journeys-list" className="scroll-mt-20">
        {featured.map((j) => (
          <FeaturedBlock key={j.slug} j={j} />
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — GRILLE 5 SECONDAIRES (pattern /collection)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 md:gap-y-10">
            {secondary.map((j, i) => (
              <SecondaryCard key={j.slug} j={j} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — BY INTRODUCTION ONLY
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-6 border-t border-black/[0.08]">
        <div className="max-w-[720px] mx-auto text-center">
          <span className="reveal inline-block mb-10 md:mb-12 px-4 py-1.5 bg-[#2e5a88]/10 rounded-full text-[#2e5a88] text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium font-body">
            By Introduction Only
          </span>
          <h2
            className="reveal font-heading text-[#2e5a88] leading-[1.05] mb-10"
            data-delay="80"
            style={{
              fontSize: "clamp(32px, 4.5vw, 64px)",
              letterSpacing: "-0.01em",
            }}
          >
            Some islands aren{'\u2019'}t on the map.
            <br />
            <span className="text-[#2e5a88]/45">At least, not on ours.</span>
          </h2>
          <p className="reveal font-body text-[15px] md:text-[16px] text-black/65 font-light leading-relaxed mb-6" data-delay="150">
            Patmos. Amorgos. Symi. The islands the eb. studio designs around for clients who already know what they want, who arrive with a date, a number of guests, and a single sentence describing the kind of week they have in mind.
          </p>
          <p className="reveal font-body text-[15px] md:text-[16px] text-black/65 font-light leading-relaxed mb-10" data-delay="200">
            These journeys do not appear in our published collection. They are slower to assemble, smaller in scale, and reserved for clients introduced through past work or trusted networks. If one of these names matters to you, the conversation starts the same way as the others.
          </p>
          <a
            href="/contact?ref=by-introduction"
            className="reveal inline-block font-body text-[#2e5a88] text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#2e5a88] hover:opacity-70 transition-opacity"
            data-delay="260"
          >
            Inquire privately &rarr;
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CTA FINAL compact
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-20 md:py-24 px-6 border-t border-black/[0.08]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium mb-6">
            Inquire
          </p>
          <h2
            className="reveal font-heading text-[#2e5a88] leading-[1.05] mb-6"
            data-delay="80"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.01em",
            }}
          >
            Yours, from scratch.
          </h2>
          <p className="reveal font-body text-[15px] md:text-[16px] text-black/65 font-light leading-relaxed mb-8 max-w-[500px] mx-auto" data-delay="150">
            The seven above are starting points. Tell us what you have in mind. We design the rest.
          </p>
          <a
            href="/contact"
            className="reveal inline-block font-body text-[#2e5a88] text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#2e5a88] hover:opacity-70 transition-opacity door-cta"
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
