"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import JourneyQuiz from "./components/JourneyQuiz";
import { moods, catalogue } from "./data/catalogue";

const islands = [
  "Santorini", "Mykonos", "Paros", "Naxos", "Milos", "Folegandros",
  "Sifnos", "Serifos", "Ios", "Koufonisia", "Amorgos", "Hydra",
  "Spetses", "Poros", "Lefkada", "Kefalonia", "Meganisi", "Ithaca",
  "Corfu", "Zakynthos", "Rhodes", "Patmos", "Symi", "Halki",
  "Skiathos", "Skopelos", "Alonissos", "Crete", "Chios", "Tinos",
  "Antiparos", "Sikinos", "Anafi", "Thirassia",
];

const featured = catalogue.filter((c) => c.hasPaywall).slice(0, 4);

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const ticker = [...islands, ...islands];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ─── HERO ─── */}
      <section
        data-nav-dark
        className="relative h-[100dvh] flex flex-col justify-between overflow-hidden"
      >
        <img
          src="/hero-bateau.jpg"
          alt="Aegean Sea, Greece"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "72% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 pt-16 md:pt-20">
          <div>
            <h1 className="font-heading text-[clamp(2.8rem,11vw,10rem)] leading-[0.9] text-white">
              Greece,<br />privately.
            </h1>
            <div className="flex items-center gap-5 mt-8">
              <a
                href="/experiences"
                className="font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-7 py-3 hover:bg-white/10 transition-colors"
              >
                Discover your Greece
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-6 hidden md:flex items-center gap-8">
          {[
            { href: "/experiences", label: "Experiences" },
            { href: "/journeys", label: "Private Journeys" },
            { href: "/collection", label: "Collection" },
            { href: "/journal", label: "Journal" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="relative z-10 border-t border-white/15 py-3 overflow-hidden">
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{ animation: "marquee 25s linear infinite" }}
          >
            {ticker.map((island, i) => (
              <span
                key={i}
                className="font-body text-xs tracking-[0.2em] uppercase text-white/40 px-5"
              >
                {island}
                <span className="ml-5 text-white/20">&middot;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOOD CARDS — Entry to discovery ─── */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888] mb-4">
              How do you dream Greece?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a]">
              Start with a mood
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {moods.map((mood) => (
              <a
                key={mood.id}
                href={`/experiences?mood=${mood.id}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm"
              >
                <img
                  src={mood.image}
                  alt={mood.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left">
                  <h3 className="font-heading text-lg md:text-xl text-white leading-tight">
                    {mood.name}
                  </h3>
                  <p className="font-body text-[10px] text-white/50 mt-1 tracking-wide">
                    {mood.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/experiences"
              className="font-body text-xs tracking-[0.15em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px hover:border-[#2e5a88] transition-colors"
            >
              Explore all experiences &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ─── FEATURED JOURNEYS ─── */}
      <section className="bg-white pb-20 md:pb-28 px-8 md:px-16 border-t border-[#e8e4de] pt-20 md:pt-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px bg-[#e8e4de] flex-1" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Featured routes</p>
            <div className="h-px bg-[#e8e4de] flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <a key={item.id} href={item.cta.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#e8e4de]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {item.tags?.[0] && (
                    <span className="absolute top-3 left-3 font-body text-[10px] tracking-[0.15em] uppercase bg-white/90 text-[#1a1a1a] px-3 py-1">
                      {item.tags[0]}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <h3 className="font-heading text-xl text-white leading-tight">{item.title}</h3>
                    <p className="font-body text-[10px] text-white/60 mt-1 tracking-wide">{item.subtitle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="bg-white py-24 md:py-36 px-8 md:px-16 border-t border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div className="pt-1">
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888] leading-relaxed">
              What eb. is
            </p>
          </div>
          <div>
            <p className="font-body text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
              eb. was born from twelve years of producing private experiences for the world&apos;s most demanding luxury houses. That same precision now shapes every journey across Greece.
            </p>
            <p className="font-body text-sm text-[#888] mt-6 leading-relaxed max-w-xl">
              A private travel studio that knows every island, every villa owner, every chef willing to open a kitchen at midnight. With the precision of a luxury house.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section data-nav-dark className="relative h-[70vh] md:h-[90vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1920&q=80"
          alt="Greece"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-8 md:px-16 max-w-4xl">
          <h2 className="font-heading text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] text-white mb-8">
            Greece only.<br />Always.
          </h2>
          <p className="font-body text-base text-white/60 max-w-md leading-relaxed">
            One country. One obsession. Every villa owner, every chef, every fisherman on Meganisi. We know them personally.
          </p>
        </div>
      </section>

      {/* ─── PAST COLLABORATIONS ─── */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888] mb-2 text-center">
            Past collaborations
          </p>
          <p className="font-body text-xs text-[#ccc] tracking-wider mb-12 text-center">
            luxury production &middot; Paris &amp; Athens
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Balmain", "Van Cleef & Arpels", "Jimmy Choo", "Karl Lagerfeld", "Nina Ricci", "Coach", "Boucheron"].map((brand) => (
              <span key={brand} className="font-body text-sm tracking-[0.15em] uppercase text-[#ccc]">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section data-nav-dark className="relative py-40 md:py-56 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.9] text-white mb-8">
            Ready to begin?
          </h2>
          <p className="font-body text-sm text-white/60 mb-10 max-w-sm mx-auto leading-relaxed">
            Tell us what you dream of. We take care of everything else.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {showQuiz && <JourneyQuiz onClose={() => setShowQuiz(false)} />}

      {/* ─── FOOTER ─── */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
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
