"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";

const heroExperiences = [
  {
    num: "#1",
    location: "ATHENS",
    title: "Private Dinner Facing the Acropolis",
    desc: "A table set for your evening only. The Acropolis lit against the sky, the city quiet below.\n\nWe know the kitchens that don\u2019t take reservations online, the terraces that close for one group, the chefs who will design a menu around a single conversation. The format is yours: a Michelin-starred terrace, a private rooftop, a chef at your villa.",
    cta: "Tell us your occasion",
    photo: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    imgPosition: "center center",
  },
  {
    num: "#2",
    location: "ACROSS GREECE",
    title: "Wedding Proposal in Greece",
    desc: "The setting says everything. A clifftop terrace at golden hour. A private beach at the end of an unmarked road. A garden lit with candles in the Peloponnese.\n\nWe scout the location, arrange every detail, and disappear. The photographer is already in position. The flowers were placed that morning. You just ask the question.",
    cta: "Tell us your story",
    photo: "https://images.unsplash.com/photo-1571406761713-5133645a6e8d?auto=format&fit=crop&w=900&q=85",
    imgPosition: "center 30%",
  },
  {
    num: "#3",
    location: "GREECE",
    title: "Boutique Wedding",
    desc: "For couples who want fewer guests and more meaning. A villa on a quiet island. An estate in the hills. A chapel by the sea with only the people who matter.\n\nWe handle the venue, the kitchen, the ceremony, the logistics on the ground. Every detail considered, nothing templated.",
    cta: "Tell us your vision",
    photo: "https://images.unsplash.com/photo-1763604608266-6ee862e562da?auto=format&fit=crop&w=900&q=85",
    imgPosition: "center 25%",
  },
  {
    num: "#4",
    location: "ATHENS",
    title: "Private Shopping with a Stylist",
    desc: "Kolonaki through someone who knows every door. A stylist who understands what you are looking for before you say it.\n\nGreek designers you won\u2019t find elsewhere, international houses with pieces held aside, and a morning shaped entirely around your eye. No itinerary, no rush.",
    cta: "Book a session",
    photo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=85",
    imgPosition: "center center",
  },
];

const conciergeCards = [
  {
    tag: "DINING",
    title: "Private Dining & Restaurant Reservations",
    desc: "Michelin-starred rooftops in Athens, caldera tables in Santorini, sunset reservations on the Riviera. We know which number to call, and which table to ask for.",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "GASTRONOMY",
    title: "Gastronomic Journeys",
    desc: "Beyond the restaurant. A morning at the central market with a local chef. Wine on a hillside. A cooking class in a village kitchen where the recipe has no written version.",
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
    desc: "Everything else. A private museum visit at dawn, a last-minute transfer, villa staff for the week, a boat for the afternoon. One call, handled quietly.",
    photo: "https://images.unsplash.com/photo-1742218410508-500a3142663d?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Experiences() {
  /* Scroll reveal */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const els = document.querySelectorAll<HTMLElement>(".reveal");
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/experiences" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO (instant, no animation)
      ═══════════════════════════════════════════ */}
      <section
        data-nav-dark
        className="relative h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?auto=format&fit=crop&w=1920&q=80"
            alt="Greek coastal town, aerial view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-8">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-[4px] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
            Experiences
          </span>
          <h1 className="font-heading text-[clamp(2.2rem,8vw,5.5rem)] leading-[0.9] text-white uppercase mb-5">
            Moments you can&apos;t<br />book online.
          </h1>
          <p className="font-body text-sm md:text-base text-white/80 font-light max-w-[550px] mx-auto leading-relaxed">
            Designed around your occasion, across Athens and the Greek islands.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — INTRO STATEMENT
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-16 md:py-20 px-8 md:px-16">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="reveal font-body text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            01 &middot; Signature Experiences
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mb-6 mx-auto" data-delay="100" />
          <p className="reveal font-body text-[20px] md:text-[26px] text-[#2e5a88] leading-[1.3] font-light mb-5" data-delay="200">
            An occasion, a setting, a level of detail that speaks for itself.
          </p>
          <p className="reveal font-body text-base text-[#1a1a1a]/40 leading-[1.8] font-light" data-delay="300">
            Each one is designed once, for you. Nothing is repeated.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — SIGNATURE EXPERIENCES (alternating, flush)
      ═══════════════════════════════════════════ */}
      {heroExperiences.map((exp, i) => {
        const isEven = i % 2 === 1;
        return (
          <section key={exp.num}>
            <div className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} md:h-[520px]`}>
              {/* Image */}
              <div className="w-full md:w-1/2 h-[280px] md:h-full overflow-hidden group">
                <img
                  src={exp.photo}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-600 ease-out md:group-hover:scale-[1.02]"
                  style={{ objectPosition: exp.imgPosition }}
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#fcf7f1] px-6 py-10 md:px-14 lg:px-20 md:py-0">
                <div className="max-w-lg">
                  <div className="reveal flex items-center gap-4 mb-5">
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/30">{exp.num}</span>
                    <span className="font-body text-[11px] tracking-[0.15em] uppercase text-[#1a1a1a]/40">{exp.location}</span>
                  </div>
                  <h3 className="reveal font-body text-[22px] md:text-[28px] font-semibold text-[#2e5a88] leading-[1.2] mb-5" data-delay="100">
                    {exp.title}
                  </h3>
                  <div className="reveal font-body text-[15px] text-[#1a1a1a]/40 leading-[1.8] font-light whitespace-pre-line mb-7" data-delay="200">
                    {exp.desc}
                  </div>
                  <a
                    href="/contact"
                    className="reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors duration-300 door-cta"
                    data-delay="300"
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
          BLOC 4 — CITATION (breathing pause)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center py-16 md:py-24 px-8">
        <p className="reveal font-body text-[18px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-relaxed">
          You tell us the occasion. We take care of everything around it.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CONCIERGE INTRO (white background = visual break)
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20 px-8 md:px-16">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="reveal font-body text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            02 &middot; Concierge
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mb-6 mx-auto" data-delay="100" />
          <p className="reveal font-body text-[24px] md:text-[30px] text-[#2e5a88] leading-[1.3] font-light mb-4" data-delay="200">
            Beyond the experience
          </p>
          <p className="reveal font-body text-base text-[#1a1a1a]/40 leading-[1.8] font-light max-w-[550px] mx-auto" data-delay="300">
            The access, the tables, the details you don&apos;t have to think about.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5b — CONCIERGE CARDS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {conciergeCards.map((card, i) => (
            <div key={card.tag} className="reveal group bg-white overflow-hidden border-b border-[#1a1a1a]/[0.08]" data-delay={i * 150}>
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  src={card.photo}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 pb-10">
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-3 block">{card.tag}</span>
                <h3 className="font-body text-[20px] md:text-[22px] font-semibold text-[#2e5a88] leading-[1.2] mb-4">
                  {card.title}
                </h3>
                <p className="font-body text-[15px] text-[#1a1a1a]/40 leading-[1.8] font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — CTA FINAL (instant, no animation)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?auto=format&fit=crop&w=1920&q=80"
            alt="Athens evening view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-center px-8 max-w-3xl">
          <h2 className="font-heading text-[clamp(1.8rem,5vw,3.5rem)] leading-[0.9] text-white mb-5 uppercase">
            What will you<br />celebrate?
          </h2>
          <p className="font-body text-sm md:text-base text-white/80 font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us the occasion. We shape everything around it.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 door-cta"
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER (same as homepage V2)
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
