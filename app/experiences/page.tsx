"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";

const heroExperiences = [
  {
    num: "#1",
    location: "ATHENS",
    title: "Private Dinner Facing the Acropolis",
    desc: "A table set for your evening only. The Acropolis lit against the night sky, the city below, and nothing to arrange but showing up.\n\nWe work with a handful of Athens\u2019 finest kitchens and private venues. The format depends on you: a Michelin-starred terrace, a closed restaurant, a rooftop with a private chef. Every detail, from the wine list to the lighting, is shaped around your occasion.",
    cta: "Tell us your occasion",
    photo: "https://images.unsplash.com/photo-1750225152148-0d988222f14d",
  },
  {
    num: "#2",
    location: "ACROSS GREECE",
    title: "Wedding Proposal in Greece",
    desc: "The setting says everything. A terrace above the caldera at golden hour. A private beach on a lesser-known island. A candlelit garden in the Peloponnese.\n\nWe scout, we plan, we disappear. The photographer is already in place. The flowers were arranged that morning. All you have to do is ask the question.",
    cta: "Tell us your story",
    photo: "https://images.unsplash.com/photo-1571406761713-5133645a6e8d",
  },
  {
    num: "#3",
    location: "GREECE",
    title: "Boutique Wedding",
    desc: "For couples who want less noise and more meaning. A villa on a quiet island, an estate in the countryside, a private chapel by the sea.\n\nWe handle venue privatization, culinary direction, ceremony coordination and on-the-ground production. Small guest lists, considered details, a celebration that feels like yours.",
    cta: "Tell us your vision",
    photo: "https://images.unsplash.com/photo-1763604608266-6ee862e562da",
  },
  {
    num: "#4",
    location: "ATHENS",
    title: "Private Shopping with a Stylist",
    desc: "Kolonaki through the eyes of someone who knows every door. A private stylist leads you through Athens\u2019 most refined boutiques, Greek designers, and international houses.\n\nNo crowds, no rushing. A morning shaped around your taste, your wardrobe, and whatever catches your eye.",
    cta: "Book a session",
    photo: "https://images.unsplash.com/photo-1647412967394-ae696068b400",
  },
];

const conciergeCards = [
  {
    tag: "DINING",
    title: "Private Dining & Restaurant Reservations",
    desc: "The table you didn\u2019t know existed. Michelin-starred rooftops in Athens, caldera dining in Santorini, sunset tables on the Riviera. We know which tables to ask for, and who to call.",
    photo: "https://images.unsplash.com/photo-1761047726498-67eeb8b35d7c",
  },
  {
    tag: "GASTRONOMY",
    title: "Gastronomic Journeys",
    desc: "Beyond the restaurant. Market mornings with a local chef, wine tastings on a hillside, a cooking class in a village kitchen. Culinary journeys that go where guidebooks don\u2019t.",
    photo: "https://images.unsplash.com/photo-1550293750-dde2bed30d54",
  },
  {
    tag: "WINE",
    title: "Private Wine & Vineyard Visits",
    desc: "Santorini\u2019s volcanic vineyards. The quiet estates of the Peloponnese. A glass poured by the winemaker, in the cellar where it was made. Private visits, no groups, no rush.",
    photo: "https://images.unsplash.com/photo-1658754491350-e620df293b48",
  },
  {
    tag: "LIFESTYLE",
    title: "Lifestyle & Concierge",
    desc: "Everything else. A private museum opening at dawn, a last-minute transfer, villa staff, a boat for the afternoon. One number, any request, handled quietly.",
    photo: "https://images.unsplash.com/photo-1742218410508-500a3142663d",
  },
];

export default function Experiences() {
  /* Scroll reveal + featured image settle */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const els = document.querySelectorAll<HTMLElement>(".reveal, .featured-img");
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
          BLOC 1 — HERO
      ═══════════════════════════════════════════ */}
      <section
        data-nav-dark
        className="relative h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?auto=format&fit=crop&w=1920&q=80"
            alt="Greece golden hour"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-8">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
            Experiences
          </span>
          <h1 className="font-heading text-[clamp(2.2rem,8vw,5.5rem)] leading-[0.9] text-white uppercase mb-5">
            Moments you can&apos;t<br />book online.
          </h1>
          <p className="font-body text-sm md:text-base text-white/80 font-light max-w-[600px] mx-auto leading-relaxed">
            Private experiences across Athens, the Riviera and the Greek islands.
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
            Four experiences we return to, season after season. Each one shaped from scratch, around who you are and what you are celebrating.
          </p>
          <p className="reveal font-body text-base text-[#1a1a1a]/40 leading-[1.8] font-light" data-delay="300">
            These are not packages. There is no menu, no fixed format. A starting point, a conversation, and then we build.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — HERO EXPERIENCES (alternating)
      ═══════════════════════════════════════════ */}
      {heroExperiences.map((exp, i) => {
        const isEven = i % 2 === 1;
        return (
          <section key={exp.num} className="bg-white">
            <div className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
              {/* Image */}
              <div className="w-full md:w-1/2 overflow-hidden">
                <img
                  src={exp.photo + "?auto=format&fit=crop&w=960&q=85"}
                  alt={exp.title}
                  className="featured-img w-full h-[50vh] md:h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 flex items-center bg-[#fcf7f1]">
                <div className="px-8 md:px-14 lg:px-20 py-14 md:py-20 max-w-lg">
                  <div className="reveal flex items-center gap-4 mb-6">
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/30">{exp.num}</span>
                    <span className="font-body text-[11px] tracking-[0.15em] uppercase text-[#1a1a1a]/40">{exp.location}</span>
                  </div>
                  <h3 className="reveal font-body text-[24px] md:text-[28px] font-medium text-[#2e5a88] leading-[1.2] mb-6" data-delay="100">
                    {exp.title}
                  </h3>
                  <div className="reveal font-body text-[15px] text-[#1a1a1a]/40 leading-[1.8] font-light whitespace-pre-line mb-8" data-delay="200">
                    {exp.desc}
                  </div>
                  <a
                    href="/contact"
                    className="reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors duration-300"
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
          BLOC 4 — CITATION
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] flex items-center justify-center py-14 md:py-20 px-8">
        <p className="reveal font-body text-[18px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-relaxed">
          You tell us the occasion. We take care of everything around it.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CONCIERGE
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] pb-16 md:pb-24 px-8 md:px-16">
        <div className="max-w-[700px] mx-auto text-center mb-14 md:mb-20">
          <p className="reveal font-body text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-4">
            02 &middot; Concierge
          </p>
          <div className="reveal w-[40px] h-[2px] bg-[#2e5a88] mb-6 mx-auto" data-delay="100" />
          <p className="reveal font-body text-[24px] md:text-[30px] text-[#2e5a88] leading-[1.3] font-light mb-4" data-delay="200">
            Beyond the experience
          </p>
          <p className="reveal font-body text-base text-[#1a1a1a]/40 leading-[1.8] font-light max-w-[600px] mx-auto" data-delay="300">
            Privileged access to exceptional dining, curated journeys and lifestyle services across Greece.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
          {conciergeCards.map((card, i) => (
            <div key={card.tag} className="reveal group bg-white overflow-hidden" data-delay={i * 100}>
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  src={card.photo + "?auto=format&fit=crop&w=900&q=85"}
                  alt={card.title}
                  className="featured-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-3 block">{card.tag}</span>
                <h3 className="font-body text-[20px] md:text-[22px] font-medium text-[#2e5a88] leading-[1.2] mb-4">
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
          BLOC 6 — CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="parallax-wrap absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?auto=format&fit=crop&w=1920&q=80"
            alt="Greece evening"
            className="featured-img absolute inset-0 w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-8 max-w-3xl">
          <h2 className="reveal font-heading text-[clamp(1.8rem,5vw,3.5rem)] leading-[0.9] text-white mb-5 uppercase">
            What would you like<br />to experience?
          </h2>
          <p className="reveal font-body text-sm md:text-base text-white/80 font-light mb-8 max-w-xl mx-auto leading-relaxed" data-delay="150">
            Tell us your occasion. We shape everything around it.
          </p>
          <a
            href="/contact"
            className="reveal inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
            data-delay="300"
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
