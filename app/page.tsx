"use client";

import Nav from "./components/Nav";
import { useRef, useState, useEffect } from "react";

const islands = [
  "Santorini", "Mykonos", "Paros", "Naxos", "Milos", "Folegandros",
  "Sifnos", "Serifos", "Ios", "Koufonisia", "Amorgos", "Hydra",
  "Spetses", "Poros", "Lefkada", "Kefalonia", "Meganisi", "Ithaca",
  "Corfu", "Zakynthos", "Rhodes", "Patmos", "Symi", "Halki",
  "Skiathos", "Skopelos", "Alonissos", "Crete", "Chios", "Tinos",
  "Antiparos", "Sikinos", "Anafi", "Thirassia",
];

export default function Home() {
  const doorsRef = useRef<HTMLElement>(null);
  const ticker = [...islands, ...islands];
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ─── Scroll reveal + featured image settle ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const revealEls = document.querySelectorAll<HTMLElement>(".reveal, .featured-img");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.delay || "0", 10);
          setTimeout(() => {
            el.classList.add("visible");
            setTimeout(() => el.classList.add("done"), 800);
          }, delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ─── Parallax on image blocs ─── */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;
    const factor = isMobile ? 0.06 : 0.12;
    const wraps = document.querySelectorAll<HTMLElement>(".parallax-wrap");
    if (!wraps.length) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        wraps.forEach((wrap) => {
          const rect = wrap.getBoundingClientRect();
          if (rect.bottom < -100 || rect.top > vh + 100) return;
          const center = rect.top + rect.height / 2;
          const offset = (center - vh / 2) * factor;
          const img = wrap.querySelector("img");
          if (img) img.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToDoors = () => {
    doorsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ═══════════════════════════════════════════
          BLOC 01 — HERO (ne pas toucher)
      ═══════════════════════════════════════════ */}
      <section
        data-nav-dark
        className="relative h-[100dvh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="parallax-wrap absolute inset-0">
          <img
            src="/hero-bateau.jpg"
            alt="Aegean Sea, Greece"
            className="w-full object-cover"
            style={{
              objectPosition: "72% 65%",
              transform: heroLoaded ? "scale(1.0)" : "scale(1.08)",
              transition: "transform 2s ease-out",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-8 -mt-16 md:mt-0">
          <h1 className="font-heading text-[clamp(3rem,12vw,11rem)] leading-[0.85] text-white uppercase">
            Greece,<br />privately.
          </h1>
          <div className="mt-10">
            <button
              onClick={scrollToDoors}
              className="font-body text-xs tracking-[0.25em] uppercase border border-white/30 text-white/80 px-8 py-3.5 hover:bg-white hover:text-[#1a1a1a] hover:border-white transition-all duration-300 cursor-pointer"
            >
              Discover your Greece
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-80 md:opacity-50"}`}
        >
          <svg viewBox="0 0 20 20" fill="none" className="animate-bounce-slow w-8 h-8 md:w-5 md:h-5">
            <path d="M4 7l6 6 6-6" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 02 — THE STUDIO
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] pt-16 pb-8 md:pt-20 md:pb-10 px-8 md:px-16">
        <div className="max-w-[700px] mx-auto text-center">
          {/* Surtitre */}
          <p className="reveal font-body text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            The Studio
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mb-6 mx-auto" data-delay="100" />

          {/* Statement */}
          <p className="reveal font-body text-[22px] md:text-[30px] text-[#2e5a88] leading-[1.3] font-light mb-4" data-delay="200">
            eb. was born from twelve years of producing private experiences for the world&apos;s most demanding luxury houses.
          </p>

          {/* Closing */}
          <p className="reveal font-body text-[15px] md:text-base text-[#1a1a1a]/40 leading-[1.8] font-light mt-3" data-delay="300">
            eb. finds the Greece that fits you, and shapes every detail.
          </p>

          {/* Signature */}
          <p className="reveal font-body text-[13px] font-medium text-[#2e5a88] mt-10" data-delay="400">
            Founded by <a href="/about" className="text-[#2e5a88] underline decoration-[#2e5a88]/30 underline-offset-2 hover:decoration-[#2e5a88] transition-colors duration-300 inline-block py-2 -my-2">Emma Bonnefous</a> &middot; Athens
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 03 — THREE DOORS (ne pas toucher)
      ═══════════════════════════════════════════ */}
      <section ref={doorsRef} id="discover" data-nav-dark className="bg-white">
        <div className="flex flex-col md:flex-row md:h-[85vh]">
          {[
            {
              title: "Private Journeys",
              subtitle: "Multi-day itineraries designed from scratch",
              href: "/journeys",
              cta: "Explore journeys",
              image: "https://images.unsplash.com/photo-1629286521433-dfa4637fbe9a?auto=format&fit=crop&w=900&q=80",
              desktopDelay: 0,
            },
            {
              title: "Experiences",
              subtitle: "Singular moments, celebrations, private access",
              href: "/experiences",
              cta: "Discover",
              image: "https://images.unsplash.com/photo-1653470348722-158d4b0c33ac?auto=format&fit=crop&w=900&q=80",
              desktopDelay: 150,
            },
            {
              title: "Collection",
              subtitle: "Villas, yacht, private properties",
              href: "/collection",
              cta: "View the collection",
              image: "https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=900&q=80",
              desktopDelay: 300,
            },
          ].map((door) => (
            <a
              key={door.title}
              href={door.href}
              className="door-card group relative h-[55vh] md:h-full md:flex-1 overflow-hidden"
            >
              <img
                src={door.image}
                alt={door.title}
                className="featured-img absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="door-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="reveal absolute bottom-0 left-0 right-0 p-8 md:p-10" data-delay={door.desktopDelay}>
                <h2 className="font-heading text-4xl md:text-3xl lg:text-4xl text-white leading-tight uppercase">
                  {door.title}
                </h2>
                <p className="font-body text-sm text-white/60 mt-2 leading-relaxed">
                  {door.subtitle}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 font-body text-xs md:text-[10px] tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300 py-3 md:py-0 door-cta">
                  {door.cta}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 04 — TICKER D'ILES (deplace ici, fond clair)
      ═══════════════════════════════════════════ */}
      <div className="bg-[#fcf7f1] py-4 md:py-5 overflow-hidden">
        <div
          className="flex gap-0 whitespace-nowrap marquee-track"
        >
          {ticker.map((island, i) => (
            <span
              key={i}
              className="font-body text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/25 px-5"
            >
              {island}
              <span className="ml-5 text-[#1a1a1a]/15">&middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOC 05 — FEATURED JOURNEY (ne pas toucher)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[80vh] md:h-[85vh] flex items-end overflow-hidden">
        <div className="parallax-wrap absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1920&q=80"
            alt="Small Cyclades sailing"
            className="featured-img absolute inset-0 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-[4px] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-4">
            Featured journey
          </span>
          <h2 className="reveal font-heading text-4xl md:text-6xl text-white leading-[0.9] mb-4 uppercase" data-delay="100">
            5 days through<br />the Small Cyclades
          </h2>
          <p className="reveal font-body text-xs tracking-wider uppercase text-white/40 mb-4" data-delay="200">
            Koufonisia &middot; Schinoussa &middot; Iraklia
          </p>
          <p className="reveal font-body text-sm text-white/60 leading-relaxed max-w-md mb-8" data-delay="300">
            Anchor in bays where you&apos;re the only boat. Dine at tavernas with no menu, just today&apos;s catch.
          </p>
          <a
            href="/journeys"
            className="reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
            data-delay="400"
          >
            Where will you go?
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 06 — CITATION 1 (respiration)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center h-[15vh] md:h-[28vh] px-8">
        <p className="reveal font-body text-[17px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-relaxed">
          The difference between visiting Greece and truly knowing it.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 07 — FEATURED EXPERIENCE
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[80vh] md:h-[85vh] flex items-end overflow-hidden">
        <div className="parallax-wrap absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?auto=format&fit=crop&w=1920&q=80"
            alt="Athens evening"
            className="featured-img absolute inset-0 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-[4px] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-4">
            Featured experience
          </span>
          <h2 className="reveal font-heading text-4xl md:text-6xl text-white leading-[0.9] mb-4 uppercase" data-delay="100">
            Private Dinner<br />Facing the Acropolis
          </h2>
          <p className="reveal font-body text-xs tracking-wider uppercase text-white/40 mb-4" data-delay="200">
            Athens
          </p>
          <p className="reveal font-body text-sm text-white/60 leading-relaxed max-w-md mb-8" data-delay="300">
            A candlelit evening against the most iconic skyline in Europe.
          </p>
          <a
            href="/experiences"
            className="reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
            data-delay="400"
          >
            What will you celebrate?
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 08 — CITATION 2 (respiration)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center h-[15vh] md:h-[28vh] px-8">
        <p className="reveal font-body text-[17px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-relaxed">
          One country.<br className="md:hidden" /> A thousand ways to make it yours.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 09 — FEATURED COLLECTION (plein cadre immersif)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[80vh] md:h-[85vh] flex items-end overflow-hidden">
        <div className="parallax-wrap absolute inset-0">
          <img
            src="/134_terrace_privatebeach.jpg"
            alt="Private villa terrace with sea view, Greece"
            className="featured-img absolute inset-0 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-[4px] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-5">
            The collection
          </span>
          <h2 className="reveal font-heading text-4xl md:text-6xl text-white leading-[0.9] mb-4 uppercase" data-delay="100">
            Private Villas<br />&amp; Yacht
          </h2>
          <p className="reveal font-body text-sm text-white/60 leading-relaxed max-w-md mb-8" data-delay="200">
            Handpicked properties across the Greek islands and coastline.
          </p>
          <a
            href="/collection"
            className="reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
            data-delay="300"
          >
            Where will you stay?
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 10 — BANDEAU CHIFFRES (respiration)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center h-[15vh] md:h-[28vh] px-8">
        <p className="reveal hidden md:block font-body text-[22px] font-light text-[#1a1a1a]/40 text-center leading-relaxed whitespace-nowrap">
          12 years in luxury production &middot; 35+ islands covered &middot; Athens-based, worldwide clients
        </p>
        <div className="flex md:hidden flex-col items-center gap-1.5">
          <span className="reveal font-body text-[15px] font-light text-[#1a1a1a]/40">12 years in luxury production</span>
          <span className="reveal font-body text-[15px] font-light text-[#1a1a1a]/40" data-delay="100">35+ islands covered</span>
          <span className="reveal font-body text-[15px] font-light text-[#1a1a1a]/40" data-delay="200">Athens-based, worldwide clients</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 11 — GREECE ONLY. ALWAYS. (ne pas toucher)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative py-32 md:py-44 flex items-center justify-center overflow-hidden">
        <div className="parallax-wrap absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=1920&q=80"
            alt="Greece"
            className="absolute inset-0 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-8 max-w-3xl">
          <h2 className="reveal font-heading text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white mb-4 uppercase">
            Greece only.<br />Always.
          </h2>
          <p className="reveal font-body text-xs tracking-[0.25em] uppercase text-white/40 mb-10" data-delay="150">
            One country. One obsession.
          </p>
          <p className="reveal font-body text-[13px] md:text-base text-white/60 leading-[1.9] font-light max-w-xl mx-auto" data-delay="300">
            A skipper who knows where to anchor when the wind picks up. A villa that never appears online. A table that takes one phone call, to the right person. One country, one network, built over years.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 09 — CTA FINAL (fond clair, texte bleu marine)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-16 md:py-20 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="reveal font-body text-[28px] md:text-[40px] font-light leading-[1.1] text-[#2e5a88] mb-6">
            Ready to begin?
          </h2>
          <p className="reveal font-body text-sm text-[#1a1a1a]/50 leading-relaxed mb-10" data-delay="150">
            Tell us what you dream of. We take care of everything else.
          </p>
          <a
            href="/contact"
            className="reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors duration-300"
            data-delay="300"
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER (texte blanc/beige lisible)
      ═══════════════════════════════════════════ */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-4 order-1">
            <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-80" /></a>
            {/* Copyright + email: visible on desktop in this column */}
            <p className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider text-left">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
            <a href="mailto:hello@emmabonnefous.com" className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors">
              hello@emmabonnefous.com
            </a>
          </div>

          {/* Nav links — first on mobile, last on desktop */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-6 gap-y-2 font-body text-xs tracking-[0.15em] uppercase text-[#fcf7f1]/80 text-center md:text-right md:justify-end order-2 md:order-3">
            <a href="/influencer-production" className="hover:text-[#fcf7f1] transition-colors py-2">For Brands</a>
            <a href="/journal" className="hover:text-[#fcf7f1] transition-colors py-2">Journal</a>
            <a href="/about" className="hover:text-[#fcf7f1] transition-colors py-2">About</a>
            <a href="/contact" className="hover:text-[#fcf7f1] transition-colors py-2">Contact</a>
          </div>

          {/* Social — middle on mobile */}
          <div className="flex flex-col items-center gap-4 order-3 md:order-2">
            <div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/60 tracking-wider">
              <a href="https://www.instagram.com/emma_bonnefous_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">Instagram</a>
              <span className="py-2">&middot;</span>
              <a href="https://www.linkedin.com/in/emmabonnefous/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">LinkedIn</a>
            </div>
            {/* Legal + admin: on desktop in middle col */}
            <div className="hidden md:flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider">
              <a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a>
              <span className="py-2">&middot;</span>
              <a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a>
            </div>
          </div>

          {/* Mobile-only bottom: email, legal, copyright */}
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
