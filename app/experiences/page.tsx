"use client";

import { useState } from "react";
import Nav from "../components/Nav";

const heroExperiences = [
  {
    num: "#1",
    location: "Athens",
    title: "Private Dinner\nFacing the Acropolis",
    desc: "A candlelit evening set against one of the most iconic views in Europe. Each dinner is designed around the guest's preferred level of privacy — from a Michelin-starred restaurant with panoramic views to a fully privatized setting: an exclusive terrace, a private venue, or a luxury hotel suite.",
    note: "The Acropolis — 5th century BC. A timeless symbol of classical prestige and heritage.",
    occasions: "Romantic celebrations · Proposals · Private VIP moments · Milestone occasions",
    bullets: [
      "Michelin-starred or fully private format",
      "Luxury hotel suite or exclusive venue option",
      "Private chef available",
      "Optional music, floral styling or photography",
    ],
    photo: "https://images.unsplash.com/photo-1750225152148-0d988222f14d",
  },
  {
    num: "#2",
    location: "Across Greece",
    title: "Wedding Proposal\nin Greece",
    desc: "A once-in-a-lifetime moment set against Greece's most breathtaking landscapes. From the dramatic cliffs of Santorini to hidden terraces overlooking the Aegean — each proposal is privately curated according to the couple's story, preferred setting and desired level of privacy.",
    note: null,
    occasions: null,
    bullets: [
      "Iconic proposal settings across Greece",
      "Elegant floral styling and romantic staging",
      "Photographer or videographer to capture the moment",
      "Optional live music or private celebration",
      "Seamless and discreet planning",
    ],
    photo: "https://images.unsplash.com/photo-1571406761713-5133645a6e8d",
  },
  {
    num: "#3",
    location: "Greece",
    title: "Boutique Wedding",
    desc: "A refined selection of distinctive venues and private properties across Greece — designed for couples seeking a more personal and meaningful celebration. From secluded island villas to elegant countryside estates. A slower rhythm, a carefully curated guest list, a refined attention to detail.",
    note: null,
    occasions: null,
    bullets: [
      "Exclusive venue privatization",
      "Bespoke culinary experiences, including dedicated Indian chefs",
      "Cultural and religious ceremony coordination",
      "Collaboration with Indian & international wedding planners",
      "Discreet, high-level on-ground production",
    ],
    photo: "https://images.unsplash.com/photo-1763604608266-6ee862e562da",
  },
  {
    num: "#4",
    location: "Athens",
    title: "Private Shopping\nwith a Stylist",
    desc: "A curated fashion and lifestyle journey through Athens' most refined boutiques. Guided by a private fashion expert through Kolonaki — home to international luxury maisons and carefully selected Greek designers. Personalized to your wardrobe, your style, and your time.",
    note: null,
    occasions: null,
    bullets: [
      "Private fashion expert or stylist",
      "Access to selected luxury boutiques and designers",
      "Personalized styling advice",
      "Tailor-made shopping itinerary",
    ],
    photo: "https://images.unsplash.com/photo-1647412967394-ae696068b400",
  },
];

const conciergeCards = [
  {
    tag: "Dining",
    title: "Private Dining &\nRestaurant Reservations",
    desc: "Priority access to Greece's most sought-after tables — Michelin-starred rooftops in Athens, caldera dining in Santorini, sunset tables on the Athenian Riviera, beach clubs in Mykonos. Curated recommendations and reservations handled for you.",
    bullets: [
      "Michelin-starred restaurants across Greece",
      "Iconic rooftop & caldera view tables",
      "Athenian Riviera & island beach clubs",
      "Exclusive private dining experiences",
    ],
    photo: "https://images.unsplash.com/photo-1761047726498-67eeb8b35d7c",
  },
  {
    tag: "Gastronomy",
    title: "Gastronomic\nJourneys",
    desc: "Tailor-made culinary journeys combining refined restaurants, authentic local tavernas and exceptional regional products. Private food tours with expert guides, market visits, wine tastings and curated dining reservations across Greece.",
    bullets: [
      "Private food tours with expert guides",
      "Market visits & produce tastings",
      "Curated regional dining reservations",
      "Cooking experiences with local producers",
    ],
    photo: "https://images.unsplash.com/photo-1550293750-dde2bed30d54",
  },
  {
    tag: "Wine",
    title: "Private Wine &\nVineyard Visits",
    desc: "Greece's most distinctive wine regions through exclusive vineyard experiences — Santorini's volcanic vineyards overlooking the caldera, or the renowned estates of the Peloponnese. Intimate encounters with the winemakers themselves.",
    bullets: [
      "Santorini volcanic vineyards",
      "Peloponnese wine estates",
      "Private tastings with winemakers",
      "Food & wine pairing experiences",
    ],
    photo: "https://images.unsplash.com/photo-1658754491350-e620df293b48",
  },
  {
    tag: "Lifestyle",
    title: "Lifestyle &\nConcierge",
    desc: "Every detail of your stay arranged with discretion. From the impossible restaurant table to a private museum visit at dawn, private transfers, villa staff, and 24/7 on-ground support throughout your journey.",
    bullets: [
      "Priority reservations at any venue",
      "Private cultural & museum access",
      "Transfers, drivers, villa logistics",
      "24/7 on-ground support",
    ],
    photo: "https://images.unsplash.com/photo-1742218410508-500a3142663d",
  },
];

export default function Experiences() {
  const [activeHero, setActiveHero] = useState(0);

  return (
    <main className="flex flex-col min-h-screen bg-white">

      <Nav activePage="/experiences" />

      {/* Page hero */}
      <section className="bg-white pt-28 md:pt-40 pb-16 md:pb-24 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">Experiences</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#1a1a1a] mb-8">
            Moments<br />you can&apos;t<br />book online.
          </h1>
          <p className="font-body text-lg text-[#888] max-w-xl leading-relaxed">
            Across Athens, the Athenian Riviera and the Greek Islands. Private, bespoke, and designed around who you are — not a catalogue of options.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 01 — HERO EXPERIENCES
      ══════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#e8e4de]">
        <div className="px-8 md:px-16 pt-16 pb-10 flex items-end justify-between gap-8 border-b border-[#e8e4de]">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-3">01</p>
            <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-none text-[#1a1a1a]">
              Hero Experiences
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm text-[#aaa] leading-relaxed max-w-xs text-right">
            Signature moments designed to be unrepeatable. Each one produced from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px]">

          {/* Left — stacked cards */}
          <div className="divide-y divide-[#e8e4de] border-r border-[#e8e4de]">
            {heroExperiences.map((exp, i) => (
              <div
                key={exp.num}
                className={`px-8 md:px-14 py-12 cursor-default transition-colors duration-300 ${
                  activeHero === i ? "bg-[#fafaf8]" : "bg-white hover:bg-[#fafaf8]/60"
                }`}
                onMouseEnter={() => setActiveHero(i)}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="font-heading text-5xl text-[#e8e4de] leading-none">{exp.num}</span>
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mt-1">{exp.location}</span>
                </div>
                <h3 className="font-heading text-4xl text-[#1a1a1a] leading-tight whitespace-pre-line mb-5">
                  {exp.title}
                </h3>
                <p className="font-body text-sm text-[#888] leading-relaxed mb-5 max-w-lg">
                  {exp.desc}
                </p>
                {exp.note && (
                  <p className="font-body text-xs text-[#aaa] italic leading-relaxed mb-4">{exp.note}</p>
                )}
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                      <span className="text-[#ccc] shrink-0">—</span>{b}
                    </li>
                  ))}
                </ul>
                {exp.occasions && (
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-[#ccc] mt-5">{exp.occasions}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right — sticky photo panel */}
          <div className="hidden lg:block">
            <div className="sticky top-20 overflow-hidden" style={{ height: "calc(100vh - 5rem)" }}>
              {heroExperiences.map((exp, i) => (
                <img
                  key={exp.num}
                  src={exp.photo + "?auto=format&fit=crop&w=840&q=85"}
                  alt={exp.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeHero === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        <p className="font-body text-xs text-[#ccc] tracking-wider px-8 md:px-16 py-5 border-t border-[#e8e4de]">
          Each experience is fully customized. These are starting points — not templates.
        </p>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 02 — CONCIERGE
      ══════════════════════════════════════════ */}

      {/* Dark header — announces the section */}
      <section data-nav-dark className="bg-[#1a1a1a] px-8 md:px-16 pt-16 pb-14">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-3">02</p>
        <div className="flex items-end justify-between gap-8">
          <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-none text-white">
            Concierge
          </h2>
          <p className="hidden md:block font-body text-sm text-white/40 leading-relaxed max-w-xs text-right">
            Privileged access to exceptional dining, curated food experiences and lifestyle services across Greece.
          </p>
        </div>
      </section>

      {/* Moodboard — 2×2 photo cards */}
      <section className="bg-white">
        <div className="grid md:grid-cols-2 gap-px bg-[#e8e4de]">
          {conciergeCards.map((card) => (
            <div key={card.tag} className="bg-white flex flex-col">
              {/* Photo */}
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={card.photo + "?auto=format&fit=crop&w=900&q=85"}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              {/* Text */}
              <div className="p-10 flex flex-col gap-4 flex-grow">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9]">{card.tag}</span>
                <h3 className="font-heading text-3xl text-[#1a1a1a] leading-tight whitespace-pre-line">{card.title}</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">{card.desc}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {card.bullets.map((b) => (
                    <li key={b} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                      <span className="text-[#ccc] shrink-0">—</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section data-nav-dark className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-6 leading-tight">
            What would you<br />like to experience?
          </h2>
          <p className="font-body text-base text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Each experience is designed with flexibility, discretion and exceptional attention to detail. Tell us your occasion — we take care of everything.
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white/10 transition-colors">
            Start the conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-60" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            © 2026 Emma Bonnefous · hello@emmabonnefous.com · Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/about" className="hover:text-white/70 transition-colors">About</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
