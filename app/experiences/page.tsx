"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";

const experiences = [
  {
    num: "#1",
    location: "ATHENS",
    title: "Private Dinner Facing the Acropolis",
    p1: "A table set for your evening only. The Acropolis lit against the sky, the city quiet below.",
    p2: "We know the kitchens that don\u2019t take online reservations, the terraces that close for one party, the chefs who design a menu from a single conversation. Michelin-starred rooftop or private villa, the format is yours.",
    cta: "Reserve your evening",
    photo: "/Screenshot 2026-03-09 at 11.30.58.png",
    pos: "center center",
  },
  {
    num: "#2",
    location: "ACROSS GREECE",
    title: "Wedding Proposal in Greece",
    p1: "The setting says everything. A clifftop terrace at golden hour. A private beach at the end of an unmarked road. A garden in the Peloponnese, lit only by candles.",
    p2: "We find the place, arrange every detail, and disappear. The photographer is already in position. The flowers were placed that morning. You just ask the question.",
    cta: "Plan the moment",
    photo: "/good-days-digital-5dusgr_R35E-unsplash.jpg",
    pos: "center 35%",
  },
  {
    num: "#3",
    location: "GREECE",
    title: "Boutique Wedding",
    p1: "For couples who want fewer guests and more meaning. A villa on a quiet island. An estate in the hills. A chapel by the sea with only the people who matter.",
    p2: "We handle everything on the ground, from the venue to the kitchen to the ceremony. Every detail is considered. Nothing is repeated.",
    cta: "Start planning",
    photo: "/Screenshot 2026-03-09 at 13.42.39.png",
    pos: "center 65%",
  },
  {
    num: "#4",
    location: "ATHENS",
    title: "Private Shopping with a Stylist",
    p1: "Kolonaki through someone who knows every door. A stylist who understands what you are looking for before you say it.",
    p2: "Greek designers you won\u2019t find outside Athens, international houses with pieces set aside. A morning with no agenda but yours.",
    cta: "Book your morning",
    photo: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=85",
    pos: "center center",
  },
];

const concierge = [
  {
    tag: "DINING",
    title: "Private Dining & Reservations",
    desc: "Michelin-starred rooftops in Athens, caldera tables in Santorini, sunset seats on the Riviera. We know which number to call, and which table to ask for.",
    photo: "https://images.unsplash.com/photo-1761047726498-67eeb8b35d7c?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "GASTRONOMY",
    title: "Gastronomic Journeys",
    desc: "Beyond the restaurant. A morning at the central market with a local chef. Wine on a hillside. A cooking class in a village kitchen where the recipe has never been written down.",
    photo: "https://images.unsplash.com/photo-1550293750-dde2bed30d54?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "WINE",
    title: "Private Wine & Vineyard Visits",
    desc: "Santorini\u2019s volcanic soil, the quiet estates of Nemea and Naoussa. A glass poured by the winemaker, in the cellar where it aged. Private visits, no groups.",
    photo: "https://images.unsplash.com/photo-1658754491350-e620df293b48?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "LIFESTYLE",
    title: "Lifestyle & Concierge",
    desc: "Everything else. A private museum visit at dawn. A last-minute boat for the afternoon. Villa staff for the week. One call, handled quietly.",
    photo: "https://images.unsplash.com/photo-1742218410508-500a3142663d?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Experiences() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    /* Scroll reveal */
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

    /* Image settle */
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
          HERO — instant, no animation
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
          <p className="font-body text-[15px] md:text-[18px] text-white/80 font-light max-w-[90%] md:max-w-xl mx-auto leading-relaxed">
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
          EXPERIENCES #1–#4 — alternating, flush, white bg text
      ═══════════════════════════════════════════ */}
      {experiences.map((exp, i) => {
        const isEven = i % 2 === 1;
        return (
          <section key={exp.num}>
            <div className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} md:h-[520px]`}>
              {/* Image */}
              <div className="w-full md:w-1/2 h-[260px] md:h-full overflow-hidden">
                <img
                  src={exp.photo}
                  alt={exp.title}
                  className="img-settle w-full h-full object-cover"
                  style={{ objectPosition: exp.pos }}
                  loading="lazy"
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center bg-white px-6 py-8 md:px-16 md:py-12">
                <div className="max-w-lg">
                  <div className="reveal flex items-center gap-3 mb-5">
                    <span className="font-body text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#1a1a1a]/40">{exp.num}</span>
                    <span className="font-body text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#1a1a1a]/40">{exp.location}</span>
                  </div>
                  <h3 className="reveal font-body text-[22px] md:text-[30px] font-semibold text-[#2e5a88] leading-[1.2] mb-5" data-delay="80">
                    {exp.title}
                  </h3>
                  <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/40 leading-[1.7] font-light" data-delay="160">
                    {exp.p1}
                  </p>
                  <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/40 leading-[1.7] font-light mt-6" data-delay="240">
                    {exp.p2}
                  </p>
                  <a
                    href="/contact"
                    className="reveal inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-[#2e5a88] pb-1 border-b border-[#2e5a88]/30 hover:border-[#2e5a88] transition-colors duration-300 mt-8 py-3 -my-3 door-cta"
                    data-delay="320"
                  >
                    {exp.cta}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════
          CITATION — beige, breathing pause
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center py-12 md:py-16 px-8">
        <p className="reveal font-body text-[17px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-[85%] md:max-w-2xl mx-auto leading-relaxed">
          You tell us the occasion. We take care of everything around it.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          CONCIERGE INTRO — white (visual reset)
      ═══════════════════════════════════════════ */}
      <section className="bg-white pt-12 pb-10 md:pt-16 md:pb-12 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal font-body text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            02 &middot; Concierge
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mt-4 mb-8 mx-auto" data-delay="100" />
          <p className="reveal font-body text-[22px] md:text-[28px] text-[#2e5a88] leading-[1.3] font-light mb-0" data-delay="200">
            The rest is handled.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONCIERGE CARDS — beige, 2x2
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] pt-8 pb-12 md:pt-8 md:pb-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {concierge.map((card, i) => (
            <div
              key={card.tag}
              className="reveal group bg-white overflow-hidden rounded-sm"
              data-delay={i * 150}
            >
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  src={card.photo}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="px-8 pt-5 pb-8 md:px-10 md:pb-8 border-b border-[#1a1a1a]/10">
                <span className="font-body text-[11px] tracking-[0.15em] uppercase text-[#1a1a1a]/40">{card.tag}</span>
                <h3 className="font-body text-[20px] font-semibold text-[#2e5a88] leading-[1.2] mt-2">
                  {card.title}
                </h3>
                <p className="font-body text-[15px] text-[#1a1a1a]/40 leading-[1.7] font-light mt-3">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL — instant, no animation
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
