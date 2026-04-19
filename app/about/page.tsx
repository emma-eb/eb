"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";
import NextChapter from "../components/NextChapter";

const collabsData = [
  { house: "Balmain", venue: "Silencio, Paris" },
  { house: "Van Cleef & Arpels", venue: "Peninsula, Paris" },
  { house: "Karl Lagerfeld", venue: "Monnaie de Paris" },
  { house: "Jimmy Choo", venue: "Sea Containers, London" },
  { house: "Coach", venue: "The High Line, New York" },
  { house: "Lanvin", venue: "Grand Palais, Paris" },
  { house: "Boucheron", venue: "Arc de Triomphe, Paris" },
  { house: "Repetto", venue: "Royal Monceau, Paris" },
];

const stats = [
  { n: 12, suffix: "+", label: "years in the world of luxury" },
  { n: 80, suffix: "+", label: "productions, no two alike" },
  { n: 95, suffix: "+", label: "countries visited before choosing one" },
  { n: 35, suffix: "+", label: "Greek islands, known firsthand" },
];

function CounterNumber({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target]);

  return <>{value}{trigger && value === target ? suffix : ""}</>;
}

export default function About() {
  const numbersRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const [numbersVisible, setNumbersVisible] = useState(false);

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
      { threshold: typeof window !== "undefined" && window.innerWidth < 768 ? 0.15 : 0.2, rootMargin: "0px 0px -50px 0px" }
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

    if (numbersRef.current) {
      const counterObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setNumbersVisible(true);
            counterObs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      counterObs.observe(numbersRef.current);
    }

    return () => { revealObs.disconnect(); settleObs.disconnect(); };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/about" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO plein ecran centre
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1920&q=80"
          alt="Athens at golden hour, Acropolis in distance"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            About
          </span>
          <h1
            className="font-heading text-[44px] md:text-[88px] leading-[0.95] text-white uppercase"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            From Paris,<br className="md:hidden" /> for Greece.
          </h1>
          <p
            className="mt-6 max-w-[580px] text-white/85 text-[16px] md:text-[17px] leading-[1.6] font-light font-body"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Emma Bonnefous, founder of eb. Athens.
          </p>
        </div>
        <button
          type="button"
          onClick={() => storyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label="Scroll to story"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 animate-bounce transition-opacity cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — THE STORY (diptyque editorial)
      ═══════════════════════════════════════════ */}
      <section ref={storyRef} id="story" className="bg-[#fcf7f1] py-24 md:py-32 px-6 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center mb-16 md:mb-20">
            <p className="reveal font-body text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium text-[#1a1a1a]/45 mb-4">
              The Story
            </p>
            <div className="reveal w-10 h-[2px] bg-[#2e5a88]" data-delay="80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="reveal md:col-span-5 md:row-span-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/Emma_About_1.jpg"
                  alt="Emma Bonnefous, founder of eb."
                  className="img-settle w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 space-y-6">
              <p
                className="reveal font-body text-[22px] md:text-[30px] text-[#2e5a88] leading-[1.35] font-normal"
                data-delay="100"
              >
                Twelve years producing for the world{'\u2019'}s most demanding luxury houses. Then Greece.
              </p>
              <p className="reveal font-body text-[15px] md:text-[17px] text-[#1a1a1a]/65 leading-[1.7] font-light" data-delay="160">
                I produced launches, press events and influencer campaigns for Balmain, Van Cleef &amp; Arpels, Karl Lagerfeld, Jimmy Choo, Coach. Over eighty productions across Paris, London, Amsterdam, Copenhagen.
              </p>
              <p className="reveal font-body text-[15px] md:text-[17px] text-[#1a1a1a]/65 leading-[1.7] font-light" data-delay="220">
                Before eb., I designed private journeys for high-net-worth travelers across Tanzania, Botswana, Morocco. I had visited ninety-five countries. Greece is the one I came back to.
              </p>
              <p className="reveal font-body text-[15px] md:text-[17px] text-[#1a1a1a]/65 leading-[1.7] font-light" data-delay="280">
                eb. is a private travel studio dedicated to one country, for clients anywhere in the world. The same standards I held for the houses, applied to the way you{'\u2019'}ll experience Greece.
              </p>
              <p className="reveal pt-4 text-[13px] md:text-[14px] text-[#2e5a88] font-medium font-body" data-delay="340">
                Emma Bonnefous. Athens.
              </p>
            </div>

            <div className="reveal md:col-span-4 md:col-start-3 mt-8 md:mt-16" data-delay="150">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/Emma_About_2.jpg"
                  alt="Emma Bonnefous on her Athens terrace"
                  className="img-settle w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div ref={numbersRef} className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className="reveal text-center" data-delay={i * 100}>
                <p className="font-body text-[36px] md:text-[48px] font-medium text-[#2e5a88] leading-none">
                  <CounterNumber target={s.n} suffix={s.suffix} trigger={numbersVisible} />
                </p>
                <p className="font-body text-[12px] md:text-[13px] text-[#1a1a1a]/55 font-light mt-2 leading-[1.4]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — WHY GREECE
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[75vh] md:h-[85vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1920&q=80"
            alt="Santorini caldera, golden light"
            className="img-settle w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)" }}
        />

        <div className="relative z-10 p-6 pt-16 md:p-12 md:pt-12 max-w-xl">
          <span className="reveal inline-block mb-6 px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            Belief
          </span>
          <h2
            className="reveal font-heading text-[36px] md:text-[72px] leading-[0.95] text-white uppercase"
            data-delay="80"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Why Greece.
          </h2>
          <p
            className="reveal font-body text-[15px] md:text-[17px] text-white/85 font-light leading-[1.7] mt-6"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Greece is not a backdrop. It is a geography of extreme contrasts, a tradition of hospitality that predates most nations, and a network of people who don{'\u2019'}t put what they offer online.
          </p>
          <p
            className="reveal font-body text-[15px] md:text-[17px] text-white/85 font-light leading-[1.7] mt-5"
            data-delay="220"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            A private visit before the crowds arrive. A dinner where the chef closes for your table only. A villa that never appears online. None of this is bookable. It takes the right network, and knowing exactly who to call.
          </p>
          <p
            className="reveal font-body text-[18px] md:text-[22px] text-white font-medium leading-[1.4] mt-8"
            data-delay="300"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            That is what eb. provides.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — SELECTED COLLABORATIONS (liste centree)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-10 md:py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 text-center mb-4">
            Selected Collaborations
          </p>
          <div className="reveal w-10 h-[2px] bg-[#2e5a88] mt-4 mb-8 mx-auto" data-delay="100" />

          <div className="reveal text-center" data-delay="200">
            {collabsData.map((c) => (
              <p key={c.house} className="font-body text-[14px] md:text-[15px] leading-[2.2]">
                <span className="font-medium text-[#2e5a88]">{c.house}</span>
                <span className="text-[#1a1a1a]/30"> &middot; </span>
                <span className="font-light text-[#1a1a1a]/40">{c.venue}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CITATION + ligne bleue
      ═══════════════════════════════════════════ */}
      <section className="bg-white flex flex-col items-center justify-center py-10 md:py-12 px-6 md:px-8">
        <p className="reveal font-body text-[18px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-[1.6]">
          I had traveled through ninety-five countries and kept coming back to one.
        </p>
        <div className="reveal w-10 h-[2px] bg-[#2e5a88] mt-6 md:mt-8 mx-auto" data-delay="100" />
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden eb-image-vignette">
        {/* TODO: replace with final photo */}
        <img
          src="/DSC_9385-Edit.jpg"
          alt="Greek atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-[3] text-center px-6 max-w-[640px]">
          <div className="reveal inline-block bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-[10px] tracking-[0.35em] uppercase text-white font-light mb-6">
            Work with eb.
          </div>
          <h2
            className="reveal font-anton font-normal uppercase text-white text-[36px] md:text-[56px] leading-tight mb-6"
            data-delay="80"
            style={{ letterSpacing: "0.02em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Tell us your story.
          </h2>
          <p
            className="reveal font-body text-white/80 text-base md:text-lg font-light leading-relaxed max-w-[480px] mx-auto mb-10"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Whether it{'\u2019'}s a first trip or a tenth, we start from you.
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
          FOOTER
      ═══════════════════════════════════════════ */}
      <NextChapter currentHref="/about" />

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
