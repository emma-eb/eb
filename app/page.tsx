"use client";

import Nav from "./components/Nav";
import { villas, yacht } from "./data/catalogue";
import { useRef } from "react";

const islands = [
  "Santorini", "Mykonos", "Paros", "Naxos", "Milos", "Folegandros",
  "Sifnos", "Serifos", "Ios", "Koufonisia", "Amorgos", "Hydra",
  "Spetses", "Poros", "Lefkada", "Kefalonia", "Meganisi", "Ithaca",
  "Corfu", "Zakynthos", "Rhodes", "Patmos", "Symi", "Halki",
  "Skiathos", "Skopelos", "Alonissos", "Crete", "Chios", "Tinos",
  "Antiparos", "Sikinos", "Anafi", "Thirassia",
];

const collectionPreview = [
  {
    name: "Aegean Essence",
    location: "Agios Nikolaos, Crete",
    capacity: "6 bed \u00b7 11 guests",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mykonos Retreat",
    location: "Mykonos (Aleomandra)",
    capacity: "7 bed \u00b7 16 guests",
    tag: "Off-market",
    image: "https://images.unsplash.com/photo-1692445772695-5a5b88ecb786?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "White Serenity",
    location: "Porto Heli",
    capacity: "5 bed \u00b7 10 guests",
    tag: "Off-market",
    image: "https://images.unsplash.com/premium_photo-1675419760216-87c82c6c2223?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "BESTIA",
    location: "Athens \u2014 All Greek waters",
    capacity: "4 cabins \u00b7 8 guests",
    tag: "Yacht charter",
    image: "https://images.unsplash.com/photo-1695759546517-1321abd02b25?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const doorsRef = useRef<HTMLElement>(null);
  const ticker = [...islands, ...islands];

  const scrollToDoors = () => {
    doorsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ═══════════════════════════════════════════
          BLOC 01 — HERO
      ═══════════════════════════════════════════ */}
      <section
        data-nav-dark
        className="relative h-[100dvh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <img
          src="/hero-bateau.jpg"
          alt="Aegean Sea, Greece"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "72% center" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-8">
          <h1 className="font-heading text-[clamp(3rem,12vw,11rem)] leading-[0.85] text-white">
            Greece,<br />privately.
          </h1>
          <div className="mt-10">
            <button
              onClick={scrollToDoors}
              className="font-body text-xs tracking-[0.25em] uppercase border border-white/60 text-white px-8 py-3.5 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 cursor-pointer"
            >
              Discover your Greece
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 02 — WHAT EB. IS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-[15px] md:text-lg text-[#1a1a1a] leading-[1.9] font-light">
            eb. was born from twelve years of producing private experiences for the world&apos;s most demanding luxury houses. Today, eb. is a private travel studio dedicated to Greece.
          </p>
          <p className="font-body text-[15px] md:text-lg text-[#1a1a1a]/70 leading-[1.9] font-light mt-8">
            A sunrise sail through the Cyclades with no one else on the water. A clifftop villa where the infinity pool meets the Aegean. A private island dinner prepared by one of Athens&apos; most celebrated chefs.
          </p>
          <p className="font-body text-[15px] md:text-lg text-[#1a1a1a] leading-[1.9] font-light mt-8">
            eb. finds the Greece that fits you&nbsp;&mdash; and shapes every detail.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 03 — THREE DOORS
      ═══════════════════════════════════════════ */}
      <section ref={doorsRef} className="bg-white">
        {/* Desktop: 3 side by side / Mobile: stacked full screen */}
        <div className="flex flex-col md:flex-row md:h-[85vh]">
          {[
            {
              title: "Private Journeys",
              subtitle: "Multi-day itineraries designed from scratch",
              href: "/journeys",
              /* Navagio Zakynthos aerien — mer turquoise */
              image: "https://images.unsplash.com/photo-1629286521433-dfa4637fbe9a?auto=format&fit=crop&w=900&q=80",
            },
            {
              title: "Experiences",
              subtitle: "Singular moments, celebrations, private access",
              href: "/experiences",
              /* Ruelle blanche Mykonos table vue mer */
              image: "https://images.unsplash.com/photo-1653470348722-158d4b0c33ac?auto=format&fit=crop&w=900&q=80",
            },
            {
              title: "Collection",
              subtitle: "Villas, yacht, private properties",
              href: "/collection",
              /* Terrasse blanche Santorini vue caldera */
              image: "https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=900&q=80",
            },
          ].map((door) => (
            <a
              key={door.title}
              href={door.href}
              className="group relative h-[85vh] md:h-full md:flex-1 overflow-hidden"
            >
              <img
                src={door.image}
                alt={door.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h2 className="font-heading text-4xl md:text-3xl lg:text-4xl text-white leading-tight">
                  {door.title}
                </h2>
                <p className="font-body text-sm text-white/60 mt-2 leading-relaxed">
                  {door.subtitle}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                  Explore
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 04 — FEATURED JOURNEY
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[80vh] md:h-[85vh] flex items-end overflow-hidden">
        <img
          /* Village pecheurs Milos crique turquoise */
          src="https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1920&q=80"
          alt="Small Cyclades sailing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3">
            Featured journey
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-white leading-[0.9] mb-4">
            5 days through<br />the Small Cyclades
          </h2>
          <p className="font-body text-xs tracking-wider uppercase text-white/40 mb-4">
            Koufonisia &middot; Schinoussa &middot; Iraklia
          </p>
          <p className="font-body text-sm text-white/60 leading-relaxed max-w-md mb-8">
            Anchor in bays where you&apos;re the only boat. Dine at tavernas with no menu&nbsp;&mdash; just today&apos;s catch.
          </p>
          <a
            href="/journeys"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
          >
            Where will you go?
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 05 — FEATURED EXPERIENCE
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[80vh] md:h-[85vh] flex items-end overflow-hidden">
        <img
          /* Monastiraki Athenes vue aerienne soir */
          src="https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?auto=format&fit=crop&w=1920&q=80"
          alt="Athens evening"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3">
            Featured experience
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-white leading-[0.9] mb-4">
            Private Dinner<br />Facing the Acropolis
          </h2>
          <p className="font-body text-xs tracking-wider uppercase text-white/40 mb-4">
            Athens
          </p>
          <p className="font-body text-sm text-white/60 leading-relaxed max-w-md mb-8">
            A candlelit evening against the most iconic skyline in Europe.
          </p>
          <a
            href="/experiences"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
          >
            What will you celebrate?
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 06 — COLLECTION PREVIEW
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">
              The Collection
            </p>
          </div>

          {/* Desktop: grid / Mobile: horizontal scroll */}
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-8 px-8 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {collectionPreview.map((item) => (
              <a
                key={item.name}
                href="/collection"
                className="group flex-shrink-0 w-[75vw] md:w-auto snap-start"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e8e4de]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.tag && (
                    <span className="absolute top-3 left-3 font-body text-[9px] tracking-[0.15em] uppercase bg-white/90 backdrop-blur-sm text-[#1a1a1a] px-3 py-1.5">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="mt-3">
                  <h3 className="font-heading text-xl text-[#1a1a1a]">{item.name}</h3>
                  <p className="font-body text-xs text-[#999] mt-1 tracking-wide">
                    {item.location}
                  </p>
                  <p className="font-body text-xs text-[#bbb] mt-0.5">{item.capacity}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/collection"
              className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors duration-300"
            >
              Where will you stay?
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 07 — GREECE ONLY. ALWAYS.
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative py-32 md:py-44 flex items-center justify-center overflow-hidden">
        <img
          /* Santorini blanc escaliers mer bleue profonde */
          src="https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=1920&q=80"
          alt="Greece"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-8 max-w-3xl">
          <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white mb-4">
            Greece only.<br />Always.
          </h2>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-white/40 mb-10">
            One country. One obsession.
          </p>
          <p className="font-body text-[15px] md:text-base text-white/60 leading-[1.9] font-light max-w-xl mx-auto">
            A Michelin-starred kitchen that opens for six guests on a Monday. A skipper who knows where to anchor when the meltemi blows. A villa that never appears online. One country, one network, built over years.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 08 — TICKER D'ILES
      ═══════════════════════════════════════════ */}
      <div className="bg-[#1a1a1a] border-t border-white/10 py-4 overflow-hidden">
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {ticker.map((island, i) => (
            <span
              key={i}
              className="font-body text-xs tracking-[0.2em] uppercase text-white/30 px-5"
            >
              {island}
              <span className="ml-5 text-white/15">&middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BLOC 09 — CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] py-28 md:py-40 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] text-white mb-6">
            Ready to begin?
          </h2>
          <p className="font-body text-sm text-white/40 leading-relaxed mb-10">
            Tell us what you dream of. We take care of everything else.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white/40 text-white px-10 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 w-full md:w-auto"
          >
            Start the conversation
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer data-nav-dark className="bg-[#1a1a1a] border-t border-white/10 py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-60" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            &copy; 2026 Emma Bonnefous &middot; hello@emmabonnefous.com &middot; Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/about" className="hover:text-white/70 transition-colors">About</a>
            <a href="/influencer-production" className="hover:text-white/70 transition-colors">For Brands</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
