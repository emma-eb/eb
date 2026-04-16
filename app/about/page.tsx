"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";

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

    // Counter trigger
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
          BLOC 1 — HERO (compact split, instant)
      ═══════════════════════════════════════════ */}
      <section className="flex flex-col md:flex-row md:max-h-[500px]">
        <div className="w-full md:w-1/2 max-h-[400px] md:max-h-[500px] overflow-hidden bg-[#fcf7f1]">
          <img
            src="/DSC_9459-Edit.jpg"
            alt="Emma Bonnefous"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#fcf7f1] px-6 py-6 md:px-16 md:py-0">
          <p className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-5">
            About
          </p>
          <h1 className="text-[28px] md:text-[42px] text-[#2e5a88] leading-[1.1]" style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontWeight: 300 }}>
            Emma Bonnefous
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#1a1a1a]/40 font-light mt-2">
            eb. Private Travel Studio
          </p>
          <p className="font-body text-[13px] md:text-[14px] text-[#1a1a1a]/40 font-light mt-1">
            From Paris, based in Athens
          </p>
          <p className="font-body text-[14px] md:text-[15px] text-[#2e5a88] font-normal mt-4">
            Greece, privately.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 + 3 — STORY + NUMBERS (beige continu)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] pt-10 md:pt-14 pb-10 md:pb-14 px-6 md:px-16">
        <div className="max-w-[720px] mx-auto">
          <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 text-center mb-4">
            The Story
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-4 mb-6 md:mb-8 mx-auto" data-delay="80" />

          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/65 leading-[1.8] font-light text-left" data-delay="160">
            Twelve years producing launches, press events and influencer campaigns for luxury houses including Balmain, Van Cleef &amp; Arpels, Karl Lagerfeld, Jimmy Choo and Coach. Over eighty productions across Paris, London, Amsterdam and Copenhagen.
          </p>

          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/65 leading-[1.8] font-light text-left mt-5 md:mt-6" data-delay="240">
            Before eb., I designed private journeys for high-net-worth travelers across Tanzania, Botswana, and Morocco, where I lived for several years.
          </p>

          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/65 leading-[1.8] font-light text-left mt-5 md:mt-6" data-delay="320">
            Ninety-five countries. Greece is where everything came together. eb. is a private travel studio dedicated to one country, for clients anywhere in the world.
          </p>
        </div>

        {/* Numbers — integrated into beige block */}
        <div ref={numbersRef} className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center mt-10 md:mt-12">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal" data-delay={i * 100}>
              <p className="font-body text-[36px] md:text-[48px] font-semibold text-[#2e5a88] leading-none">
                <CounterNumber target={s.n} suffix={s.suffix} trigger={numbersVisible} />
              </p>
              <p className="font-body text-[12px] md:text-[13px] text-[#1a1a1a]/40 font-light mt-2 leading-[1.4]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — WHY GREECE (full-bleed, bottom-left)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[55vh] md:h-[75vh] min-h-[450px] md:min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1920&q=80"
            alt="Santorini caldera, golden light"
            className="img-settle w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 bg-black/20 md:bg-transparent" />

        <div className="relative z-10 p-6 pt-16 md:p-12 md:pt-12 max-w-xl">
          <h2 className="reveal font-heading text-[32px] md:text-[48px] leading-[0.9] text-white uppercase mb-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Why Greece.
          </h2>
          <p className="reveal font-body text-[15px] md:text-[17px] text-white/85 font-light leading-[1.7] md:leading-[1.8] max-w-none md:max-w-xl" data-delay="100" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece is not a backdrop. It is a geography of extreme contrasts, a tradition of hospitality that predates most nations, and a network of people who don&apos;t put what they offer online.
          </p>
          <p className="reveal font-body text-[15px] md:text-[17px] text-white/85 font-light leading-[1.7] md:leading-[1.8] max-w-none md:max-w-xl mt-5 md:mt-6" data-delay="200" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            A private visit before the crowds arrive. A dinner where the chef closes for your table only. A villa that never appears online. None of this is bookable. It takes the right network, and knowing exactly who to call.
          </p>
          <p className="reveal font-body text-[20px] md:text-[24px] text-white font-normal leading-[1.4] max-w-none md:max-w-xl mt-8 md:mt-10" data-delay="300" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            That is what eb. provides.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — COLLABORATIONS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-10 md:py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 text-center mb-4">
            Selected Collaborations
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-4 mb-8 mx-auto" data-delay="100" />

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
          BLOC 6 — CITATION + ligne bleue
      ═══════════════════════════════════════════ */}
      <section className="bg-white flex flex-col items-center justify-center py-10 md:py-12 px-6 md:px-8">
        <p className="reveal font-body text-[18px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-[1.6]">
          I had traveled through ninety-five countries and kept coming back to one.
        </p>
        <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-6 md:mt-8 mx-auto" data-delay="100" />
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 7 — CTA FINAL (instant)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80"
            alt="Cyclades view, white architecture, blue sea, bougainvillea"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] leading-[0.9] text-white mb-4 uppercase" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Let&apos;s start with<br />a conversation.
          </h2>
          <p className="font-body text-[15px] md:text-[17px] text-white/80 font-light mt-3 md:mt-4 max-w-lg mx-auto leading-relaxed" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Whether you are planning a private journey or a celebration in Greece.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 mt-6 md:mt-8 min-h-[44px] items-center door-cta"
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 8 — FOOTER
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
