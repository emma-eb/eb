"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "../../components/Nav";
import NewsletterBanner from "../../components/NewsletterBanner";

/* ═══════════════════════════════════════════════════════
   ICONS (inline SVG, no external dep)
═══════════════════════════════════════════════════════ */

function IconCalendar({ className = "w-[14px] h-[14px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function IconMapPin({ className = "w-[14px] h-[14px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconSun({ className = "w-[14px] h-[14px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
function IconUsers({ className = "w-[14px] h-[14px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconArrowRight({ className = "w-[14px] h-[14px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
function IconDownload({ className = "w-[14px] h-[14px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   CONTENT
═══════════════════════════════════════════════════════ */

const JOURNEY_SLUG = "paros-antiparos-privately";

const highlights = [
  {
    image: "/paros_01.jpg",
    title: "The Villa",
    description: "Pool, pines, the quiet south coast.",
  },
  {
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
    title: "Naoussa at Sunset",
    description: "Boats unload. Mario opens.",
  },
  {
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
    title: "The Yacht",
    description: "Antiparos, Despotiko, lunch in a cove.",
  },
  {
    image: "/paros_03.jpg",
    title: "Lefkes",
    description: "The Byzantine hills. Untouched.",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    title: "Stou Beach",
    description: "The Italian set's afternoon spot.",
  },
  {
    image: "/paros_02.jpg",
    title: "The Chef",
    description: "Market-sourced. Villa-served.",
  },
];

const route = [
  { label: "Paros", sub: "The Villa", detail: "7 nights base, south coast" },
  { label: "Naoussa", sub: "Dinners", detail: "Evenings at Mario" },
  { label: "Lefkes", sub: "Byzantine inland", detail: "Cultural day" },
  { label: "Antiparos", sub: "The Yacht", detail: "Stou Beach + cove lunch" },
  { label: "Despotiko", sub: "Ancient ruins", detail: "Uninhabited islet" },
];

/* ═══════════════════════════════════════════════════════ */

export default function ParosJourney() {
  const heroRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const heroObs = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) heroObs.observe(heroRef.current);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObs: IntersectionObserver | null = null;
    if (!prefersReduced) {
      const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
      revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const d = parseInt(el.dataset.delay || "0", 10);
            setTimeout(() => {
              el.classList.add("visible");
              setTimeout(() => el.classList.add("done"), 800);
            }, d);
            revealObs!.unobserve(el);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => revealObs!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      heroObs.disconnect();
      revealObs?.disconnect();
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
        <div
          className="h-full bg-[#2e5a88] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Nav activePage="/journeys" />

      {/* ═══════════════════════════════════════════
          ECRAN 1 — HERO FICHE
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="/paros_01.jpg"
          alt="Paros and Antiparos, privately, by eb."
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/85 pointer-events-none" />

        {/* Breadcrumb pill (top-left) */}
        <div className="absolute top-[clamp(100px,15vh,140px)] left-[clamp(24px,6vw,80px)] z-10">
          <span className="inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] tracking-[0.15em] uppercase text-white font-medium">
            Featured Journey &middot; 07 &middot; Paros + Antiparos
          </span>
        </div>

        {/* Content bottom-left */}
        <div className="absolute left-[clamp(24px,6vw,80px)] right-[clamp(24px,6vw,80px)] md:right-auto bottom-[clamp(40px,8vh,80px)] max-w-[800px] z-10">
          <h1
            className="font-heading text-white uppercase leading-[0.95] tracking-wide"
            style={{
              fontSize: "clamp(52px, 9vw, 108px)",
              letterSpacing: "-0.01em",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Paros + Antiparos,<br />privately.
          </h1>

          <p
            className="mt-5 font-body text-white/90 text-[17px] md:text-[20px] font-light leading-relaxed max-w-[640px]"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            The chicest of the central Cyclades, without ever crossing a crowd.
          </p>

          <div className="w-16 h-px bg-white/30 my-7" />

          {/* Mood pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Slow", "Chic", "Discovery"].map((tag) => (
              <span
                key={tag}
                className="inline-block bg-white/10 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] border border-white/20 rounded-full px-3.5 py-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-white font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Key facts */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 font-body text-[11px] tracking-[0.12em] uppercase text-white/85 font-medium mb-7">
            <span className="inline-flex items-center gap-2"><IconCalendar /> 7 Nights</span>
            <span className="inline-flex items-center gap-2"><IconMapPin /> Paros + Antiparos</span>
            <span className="inline-flex items-center gap-2"><IconSun /> May&ndash;October</span>
            <span className="inline-flex items-center gap-2"><IconUsers /> Couples &middot; Friends &middot; Families</span>
          </div>

          {/* Double CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
            <a
              href={`/contact?journey=${JOURNEY_SLUG}`}
              className="inline-flex items-center gap-2 bg-white text-[#2e5a88] px-6 py-3 rounded-full font-body text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-white/90 transition-colors"
            >
              Inquire
              <IconArrowRight />
            </a>
            <a
              href={`/contact?request=pdf&journey=${JOURNEY_SLUG}`}
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.15em] uppercase text-white/90 hover:text-white font-medium pb-1 border-b border-white/40 hover:border-white/90 transition-colors"
            >
              Download the PDF
              <IconDownload />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => highlightsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label="Scroll to highlights"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 animate-bounce transition-opacity cursor-pointer"
        >
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14l-7 7-7-7M12 21V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          ECRAN 2 — 6 HIGHLIGHTS
      ═══════════════════════════════════════════ */}
      <section ref={highlightsRef} id="highlights" className="bg-white py-20 md:py-28 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium">
              Six Moments from the Week
            </p>
            <div className="reveal w-10 h-px bg-[#2e5a88] mx-auto mt-4" data-delay="80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {highlights.map((h, i) => (
              <div key={h.title} className="reveal relative group overflow-hidden aspect-[4/5]" data-delay={i * 80}>
                <img
                  src={h.image}
                  alt={h.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">
                  <h3
                    className="font-heading uppercase leading-[1] tracking-wide mb-2"
                    style={{
                      fontSize: "clamp(24px, 2.2vw, 32px)",
                      letterSpacing: "-0.01em",
                      textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                    }}
                  >
                    {h.title}
                  </h3>
                  <p
                    className="font-body text-[13px] md:text-[14px] text-white/85 font-light leading-relaxed max-w-[260px]"
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
                  >
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ECRAN 3 — THE ROUTE (timeline editoriale)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium">
              The Route
            </p>
            <div className="reveal w-10 h-px bg-[#2e5a88] mx-auto mt-4" data-delay="80" />
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-[11px] left-[5%] right-[5%] h-px bg-[#2e5a88]/25" />
            <div className="grid grid-cols-5 gap-4 relative">
              {route.map((r, i) => (
                <div key={r.label} className="reveal flex flex-col items-center text-center" data-delay={i * 100}>
                  <div className="relative">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#2e5a88] ring-4 ring-[#fcf7f1]" />
                  </div>
                  <p className="mt-6 font-heading uppercase text-[#2e5a88] text-[18px] tracking-wide leading-[1]" style={{ letterSpacing: "-0.01em" }}>
                    {r.label}
                  </p>
                  <p className="mt-2 font-body text-[10px] tracking-[0.15em] uppercase text-black/50 font-medium">
                    {r.sub}
                  </p>
                  <p className="mt-3 font-body text-[13px] text-black/60 font-light leading-relaxed max-w-[180px]">
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-6">
            <div className="absolute left-[4px] top-1 bottom-1 w-px bg-[#2e5a88]/25" />
            <ul className="space-y-8">
              {route.map((r) => (
                <li key={r.label} className="reveal relative">
                  <div className="absolute -left-6 top-1.5 w-[9px] h-[9px] rounded-full bg-[#2e5a88] ring-4 ring-[#fcf7f1]" />
                  <p className="font-heading uppercase text-[#2e5a88] text-[22px] leading-[1]" style={{ letterSpacing: "-0.01em" }}>
                    {r.label}
                  </p>
                  <p className="mt-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-black/50 font-medium">
                    {r.sub}
                  </p>
                  <p className="mt-2 font-body text-[14px] text-black/60 font-light leading-relaxed">
                    {r.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ECRAN 4 — A NOTE FROM eb.
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium">
            A Note
          </p>
          <div className="reveal w-10 h-px bg-[#2e5a88] mx-auto mt-4 mb-10" data-delay="80" />

          <p className="reveal font-body text-[18px] md:text-[20px] text-black/70 font-light leading-relaxed" data-delay="120">
            Paros and Antiparos, the Cyclades the Italian set has been keeping to itself for twenty years. We know the villa. We know the yacht captain, the chef, the table at Mario. You fly in. We have done the rest.
          </p>

          <p className="reveal mt-8 font-body italic text-[#2e5a88] text-[14px] font-medium" data-delay="200">
            eb. Athens.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ECRAN 5 — CTA FINAL (pleine largeur sombre)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full h-[75vh] md:h-[80vh] min-h-[560px] overflow-hidden">
        <img
          src="/paros_02.jpg"
          alt="Ready when you are"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 pointer-events-none" />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
          <span className="reveal mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Inquire
          </span>
          <h2
            className="reveal font-heading text-[52px] md:text-[88px] leading-[0.95] text-white uppercase"
            data-delay="80"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Ready when you are.
          </h2>
          <p
            className="reveal mt-6 max-w-[560px] text-white/85 text-[16px] md:text-[17px] leading-[1.6] font-light font-body"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Tell us when, with whom, and how you want to feel. We shape the rest.
          </p>
          <a
            href={`/contact?journey=${JOURNEY_SLUG}`}
            className="reveal mt-8 inline-block font-body text-white text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-white/80 hover:border-white transition-colors door-cta"
            data-delay="220"
          >
            Start the conversation &rarr;
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STICKY MOBILE BAR
      ═══════════════════════════════════════════ */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md [-webkit-backdrop-filter:blur(8px)] border-t border-black/10 px-4 py-3 flex items-center justify-between z-40 shadow-lg transition-transform duration-300 ${
          stickyVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col pr-3">
          <span className="font-body text-[10px] tracking-[0.15em] uppercase text-black/50 font-medium">7 nights &middot; Paros + Antiparos</span>
          <span className="font-body text-[13px] text-[#2e5a88] font-medium">Designed around you</span>
        </div>
        <a
          href={`/contact?journey=${JOURNEY_SLUG}`}
          className="shrink-0 inline-flex items-center gap-2 bg-[#2e5a88] text-white px-5 py-2.5 rounded-full font-body text-[11px] tracking-[0.15em] uppercase font-medium"
        >
          Inquire
          <IconArrowRight />
        </a>
      </div>

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
