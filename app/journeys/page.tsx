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
    description: "Athens, then the Cycladic island that travel writers are quietly putting at the top of their 2026 lists. Before everyone else catches on.",
    meta: "7 Nights \u00b7 Athens + Astypalea \u00b7 May\u2013September",
  },
  {
    slug: "mykonos-timed-right",
    image: "/mykonos%20villa.jpg",
    number: "02",
    overline: "Featured Journey \u00b7 02",
    title: "Mykonos,\nTimed Right.",
    description: "The beach club table, the after-party invitation, the right night to be on the island. Five nights in a private villa, timed by the eb. studio.",
    meta: "5 Nights \u00b7 Mykonos \u00b7 May\u2013September",
  },
];

const secondary: Journey[] = [
  {
    slug: "a-slow-honeymoon-in-the-cyclades",
    image: "/MILOS_03.jpg",
    number: "03",
    overline: "Private Journey \u00b7 03",
    title: "A Honeymoon\nin the Cyclades.",
    description: "No rose petals. Just stone, wind, sea, and the kind of week that starts a marriage right.",
    meta: "7 Nights \u00b7 Milos + Folegandros \u00b7 May\u2013September",
  },
  {
    slug: "paros-antiparos-privately",
    image: "/paros_01.jpg",
    number: "04",
    overline: "Private Journey \u00b7 04",
    title: "Paros + Antiparos,\nPrivately.",
    description: "The Greek island that works for everyone. Without ever feeling like everyone.",
    meta: "7 Nights \u00b7 Paros + Antiparos \u00b7 May\u2013October",
  },
  {
    slug: "athens-slowly",
    image: "/tourism-revenue.jpg",
    number: "05",
    overline: "Private Journey \u00b7 05",
    title: "Athens, Slowly.",
    description: "The city seen at the pace it was actually built for. Five nights, one base, no ferries.",
    meta: "5 Nights \u00b7 Athens + Day Trips \u00b7 Year-round",
  },
  {
    slug: "a-family-summer-greek-style",
    image: "/familly%20journey.jpg",
    number: "06",
    overline: "Private Journey \u00b7 06",
    title: "A Family Summer,\nGreek-Style.",
    description: "A villa, a yacht for the day, and a coastline that works for eight-year-olds and grandparents alike.",
    meta: "10 Nights \u00b7 Porto Heli + Saronic \u00b7 April\u2013October",
  },
  {
    slug: "a-week-in-the-cyclades-by-sea",
    image: "/hero-bateau.jpg",
    number: "07",
    overline: "Private Journey \u00b7 07",
    title: "A Week in the\nCyclades, By Sea.",
    description: "A 33-metre Italian yacht, six islands, a crew of five. The only way to see the Cyclades from the inside out.",
    meta: "7 Nights \u00b7 6 Islands \u00b7 Private Yacht \u00b7 May\u2013September",
  },
];

function FeaturedBlock({ j }: { j: Journey }) {
  return (
    <a
      href={`/journeys/${j.slug}`}
      data-nav-dark
      className="group relative block min-h-[90vh] md:min-h-0 md:h-[85vh] w-full overflow-hidden"
    >
      <img
        src={j.image}
        alt={j.title.replace("\n", " ")}
        className={`featured-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
          j.slug === "mykonos-timed-right" ? "object-bottom md:object-center" : ""
        }`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-end">
        <div className="px-6 pb-10 pt-8 md:p-16 max-w-2xl">
          <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-4">
            {j.overline}
          </span>
          <h2
            className="reveal font-heading text-white uppercase leading-[0.95] mb-4"
            data-delay="100"
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              letterSpacing: "-0.01em",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            {j.slug === "astypalea-before-everyone-else" ? (
              <>
                <span className="md:hidden">
                  Astypalea,
                  <br />
                  Before Everyone Else.
                </span>
                <span className="hidden md:inline">
                  Astypalea, Before
                  <br />
                  Everyone Else.
                </span>
              </>
            ) : (
              j.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && j.title.includes("\n") && <br />}
                </span>
              ))
            )}
          </h2>
          <p className="reveal font-body text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/70 font-medium mb-4" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            {j.meta.split(" \u00b7 ").map((part, i, arr) => (
              <span key={i}>
                <span className="whitespace-nowrap">{part}</span>
                {i < arr.length - 1 && " \u00b7 "}
              </span>
            ))}
          </p>
          <p className="reveal font-body text-white/85 text-[13px] md:text-[16px] font-light leading-relaxed max-w-[520px] mb-5" data-delay="300" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            {j.description}
          </p>
          {j.slug === "astypalea-before-everyone-else" && (
            <div className="reveal mb-5" data-delay="350">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-white/90 font-medium">
                Featured #1 by The Guardian, 2026
              </span>
            </div>
          )}
          <span className="reveal eb-cta-link font-body text-white text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium" data-delay="400">
            Discover the journey <span className="eb-cta-arrow">&rarr;</span>
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
      className="reveal group block relative overflow-hidden h-[70vh] min-h-[500px] md:h-auto md:min-h-0 md:aspect-[3/2]"
    >
      <img
        src={j.image}
        alt={j.title.replace("\n", " ")}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={j.slug === "a-week-in-the-cyclades-by-sea" ? { objectPosition: "center 70%" } : undefined}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 via-40% to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-white/70 font-medium font-body">
          {j.overline}
        </p>
        <h3
          className="mt-2 font-heading text-white uppercase leading-[1] tracking-wide"
          style={{
            fontSize: "clamp(32px, 3vw, 44px)",
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
        <p className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/60 font-medium font-body">
          {j.meta.split(" \u00b7 ").map((part, i, arr) => (
            <span key={i}>
              <span className="whitespace-nowrap">{part}</span>
              {i < arr.length - 1 && " \u00b7 "}
            </span>
          ))}
        </p>
        <p className="mt-3 text-[13px] md:text-[14px] leading-[1.5] text-white/85 font-light max-w-[400px] font-body">
          {j.description}
        </p>
        <span className="eb-cta-link mt-4 text-[11px] md:text-[12px] uppercase tracking-[0.1em] font-medium text-white w-fit font-body">
          Discover the journey <span className="eb-cta-arrow">&rarr;</span>
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
          src="/detail%20archi%20greece_02.jpg"
          alt="Private journeys across Greece, by eb."
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Gradient top pour lisibilite menu sticky */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <span className="reveal mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Private Journeys
          </span>
          <h1
            className="reveal font-heading text-[48px] sm:text-[56px] md:text-[88px] leading-[0.95] text-white uppercase"
            data-delay="100"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Greece.<br className="md:hidden" /> Designed firsthand.
          </h1>
          <p
            className="reveal mt-6 max-w-[580px] text-white/85 text-[16px] md:text-[17px] leading-[1.6] font-light font-body"
            data-delay="200"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Private journeys through Greece. Each one shaped by the eb. studio, and yours to reshape.
          </p>
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

      {/* ============ BLOC RESPIRATION — CITATION ============ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center pt-14 md:pt-28 pb-8 md:pb-16 px-8">
        <p className="reveal font-body text-[17px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-relaxed">
          Designed on the ground.<br className="md:hidden" /> Not from a desk.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — GRILLE 5 SECONDAIRES (pattern /collection)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-6 md:px-12 pt-3 md:pt-6 pb-14 md:pb-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 md:gap-y-10">
            {secondary.map((j, i) => (
              <div key={j.slug} className={i === secondary.length - 1 && secondary.length % 2 !== 0 ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto md:w-full" : ""}>
                <SecondaryCard j={j} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — THE PATMOS NETWORK (pleine largeur sombre)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full h-[75vh] md:h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src="/patmos_01.avif"
          alt="Patmos, Greece"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 pointer-events-none" />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
          <span className="reveal mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Patmos · An island apart
          </span>
          <h2
            className="reveal font-heading text-[32px] md:text-[56px] lg:text-[64px] leading-[0.95] text-white uppercase"
            data-delay="80"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Some places we don&rsquo;t list.
          </h2>
          <p
            className="reveal mt-6 max-w-[580px] text-white/85 text-[13px] md:text-[17px] leading-[1.6] font-light font-body px-2"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            A handful of residences on the island where the eb. studio spends its summers, and the Athenian families have returned to for generations. Reachable by helicopter from Athens. By introduction, only.
          </p>
          <a
            href="/contact?type=introduction"
            className="reveal eb-cta-link mt-8 font-body text-white text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium"
            data-delay="260"
          >
            Reach out privately <span className="eb-cta-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CTA FINAL (pleine largeur sombre)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full h-[75vh] md:h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src="/hero-bateau.jpg"
          alt="A boat at the horizon"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 pointer-events-none" />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
          <span className="reveal mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Yours to shape
          </span>
          <h2
            className="reveal font-heading text-[36px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95] text-white uppercase"
            data-delay="80"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Every journey starts from scratch.
          </h2>
          <p
            className="reveal mt-6 max-w-[580px] text-white/85 text-[13px] md:text-[17px] leading-[1.6] font-light font-body px-2"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            The journeys above are starting points. Tell us what you have in mind. We shape the rest.
          </p>
          <a
            href="/contact"
            className="reveal eb-cta-link mt-8 font-body text-white text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium"
            data-delay="220"
          >
            Start the conversation <span className="eb-cta-arrow">&rarr;</span>
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
