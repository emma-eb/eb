"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";

const experiences = [
  {
    pill: "ATHENS",
    title: "Private Dinner\nFacing the Acropolis",
    desc: "A table set for your evening only. The kitchens that don\u2019t take reservations online, the terraces that close for one party. Michelin-starred rooftop or private villa, the format is yours.",
    cta: "Reserve your evening",
    photo: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80",
  },
  {
    pill: "ACROSS GREECE",
    title: "Wedding Proposal\nin Greece",
    desc: "A clifftop terrace at golden hour. A private beach at the end of an unmarked road. We find the place, arrange every detail, and disappear. You just ask the question.",
    cta: "Plan the moment",
    photo: "https://images.unsplash.com/photo-1571406761713-5133645a6e8d?auto=format&fit=crop&w=1920&q=80",
  },
  {
    pill: "GREECE",
    title: "Boutique\nWedding",
    desc: "For couples who want fewer guests and more meaning. A villa on a quiet island, a chapel by the sea with only the people who matter. We handle everything on the ground. Nothing is repeated.",
    cta: "Start planning",
    photo: "https://images.unsplash.com/photo-1763604608266-6ee862e562da?auto=format&fit=crop&w=1920&q=80",
  },
  {
    pill: "ATHENS",
    title: "Private Shopping\nwith a Stylist",
    desc: "Kolonaki through someone who knows every door. Greek designers you won\u2019t find elsewhere, international houses with pieces set aside. A morning with no agenda but yours.",
    cta: "Book your morning",
    photo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1920&q=80",
  },
];

const concierge = [
  {
    pill: "DINING",
    title: "Private Dining\n& Reservations",
    desc: "Michelin-starred rooftops in Athens, caldera tables in Santorini. We know which table to ask for.",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80",
  },
  {
    pill: "GASTRONOMY",
    title: "Gastronomic\nJourneys",
    desc: "Market mornings with a local chef, wine on a hillside, a cooking class where the recipe has no written version.",
    photo: "https://images.unsplash.com/photo-1550293750-dde2bed30d54?auto=format&fit=crop&w=1920&q=80",
  },
  {
    pill: "WINE",
    title: "Private\nVineyard Visits",
    desc: "Santorini\u2019s volcanic soil, the quiet estates of the Peloponnese. A glass poured by the winemaker.",
    photo: "https://images.unsplash.com/photo-1658754491350-e620df293b48?auto=format&fit=crop&w=1920&q=80",
  },
  {
    pill: "LIFESTYLE",
    title: "Lifestyle\n& Concierge",
    desc: "A private museum at dawn, a boat for the afternoon, villa staff for the week. One call.",
    photo: "https://images.unsplash.com/photo-1742218410508-500a3142663d?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function Experiences() {
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
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
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
      <Nav activePage="/experiences" />

      {/* ═══════════════════════════════════════════
          HERO — instant
      ═══════════════════════════════════════════ */}
      <section
        data-nav-dark
        className="relative h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?auto=format&fit=crop&w=1920&q=80"
            alt="Greek coastal town, aerial view"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-8">
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-white/15 backdrop-blur-sm rounded-full font-body text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
            Experiences
          </span>
          <h1 className="font-heading text-[clamp(2.2rem,8vw,4rem)] leading-[0.9] text-white uppercase mb-5">
            Moments you can&apos;t<br />book online.
          </h1>
          <p className="font-body text-[15px] md:text-[18px] text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            Designed around your occasion, across Athens and the Greek islands.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTRO STATEMENT — beige
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-14 md:py-24 px-8 md:px-16">
        <div className="max-w-[90%] md:max-w-2xl mx-auto text-center">
          <p className="reveal font-body text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            01 &middot; Signature Experiences
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-4 mb-8 mx-auto" data-delay="100" />
          <p className="reveal font-body text-[20px] md:text-[26px] text-[#2e5a88] leading-[1.3] font-light" data-delay="200">
            A private dinner where the chef knows your name before you arrive. A proposal where every detail has been rehearsed except the answer.
          </p>
          <p className="reveal font-body text-[15px] md:text-base text-[#1a1a1a]/40 leading-[1.8] font-light mt-6" data-delay="300">
            Four experiences we build from scratch. No format, no repeat. Just a conversation, and then we begin.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERIENCES — full-bleed immersive (like homepage featured)
      ═══════════════════════════════════════════ */}
      {experiences.map((exp) => (
        <section key={exp.pill + exp.title} data-nav-dark className="relative h-[60vh] md:h-[75vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={exp.photo}
              alt={exp.title.replace("\n", " ")}
              className="img-settle w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

          <div className="relative z-10 p-6 md:p-12 max-w-lg">
            <span className="reveal inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full font-body text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-4">
              {exp.pill}
            </span>
            <h2 className="reveal font-heading text-[28px] md:text-[44px] text-white leading-[0.9] uppercase whitespace-pre-line mb-4" data-delay="100">
              {exp.title}
            </h2>
            <p className="reveal font-body text-[14px] md:text-[16px] text-white/85 font-light leading-[1.7] max-w-lg mt-4" data-delay="200">
              {exp.desc}
            </p>
            <a
              href="/contact"
              className="reveal inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 mt-6 py-3 -my-3 door-cta"
              data-delay="300"
            >
              {exp.cta}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════
          CITATION — beige
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center py-12 md:py-24 px-8">
        <p className="reveal font-body text-[17px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-[85%] md:max-w-2xl mx-auto leading-relaxed">
          You tell us the occasion. We take care of everything around it.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          CONCIERGE INTRO — white
      ═══════════════════════════════════════════ */}
      <section className="bg-white pt-12 pb-10 md:pt-20 md:pb-12 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal font-body text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            02 &middot; Concierge
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-4 mb-8 mx-auto" data-delay="100" />
          <p className="reveal font-body text-[22px] md:text-[28px] text-[#2e5a88] leading-[1.3] font-light" data-delay="200">
            The rest is handled.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONCIERGE — 2x2 full-bleed immersive grid
      ═══════════════════════════════════════════ */}
      <div data-nav-dark className="grid grid-cols-1 md:grid-cols-2">
        {concierge.map((c) => (
          <div key={c.pill} className="group relative h-[45vh] md:h-[50vh] overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={c.photo}
                alt={c.title.replace("\n", " ")}
                className="img-settle w-full h-full object-cover transition-transform duration-600 ease-out md:group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <span className="reveal inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full font-body text-[10px] font-medium tracking-[0.15em] uppercase text-white mb-3">
                {c.pill}
              </span>
              <h3 className="reveal font-heading text-[22px] md:text-[28px] text-white leading-[0.9] uppercase whitespace-pre-line" data-delay="100">
                {c.title}
              </h3>
              <p className="reveal font-body text-[13px] md:text-[14px] text-white/80 font-light leading-[1.7] max-w-sm mt-3" data-delay="200">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════
          CTA FINAL — instant
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?auto=format&fit=crop&w=1920&q=80"
            alt="Athens evening skyline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] leading-[0.9] text-white mb-4 uppercase">
            What will you<br />celebrate?
          </h2>
          <p className="font-body text-[15px] md:text-[18px] text-white/80 font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Tell us the occasion. We shape everything around it.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 mt-8 py-3 -my-3"
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
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
