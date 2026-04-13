"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import { villas, yacht } from "../data/catalogue";

const regions = ["All", ...Array.from(new Set(villas.map((v) => v.region)))];

export default function CollectionPage() {
  const [region, setRegion] = useState("All");

  const filtered = region === "All" ? villas : villas.filter((v) => v.region === region);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/collection" />

      {/* ─── HERO ─── */}
      <section className="bg-white pt-28 md:pt-40 pb-12 md:pb-20 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">
            Villa &amp; Yacht Collection
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[8rem] leading-none text-[#1a1a1a] mb-8">
            The most<br />private addresses<br />in Greece.
          </h1>
          <p className="font-body text-lg text-[#888] max-w-xl leading-relaxed">
            Every property in our collection is personally vetted. Some are published here. The most sought-after are shared only upon inquiry.
          </p>
        </div>
      </section>

      {/* ─── REGION FILTER ─── */}
      <section className="bg-white pb-8 pt-6 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`font-body text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-colors ${
                region === r
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "border-[#e8e4de] text-[#888] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </section>

      {/* ─── VILLA GRID ─── */}
      <section className="bg-white py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((v) => {
            const isOffMarket = v.visibility === "off-market";

            return (
              <div key={v.id} className="group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e8e4de]">
                  <img
                    src={v.image}
                    alt={isOffMarket ? "Private property" : v.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                      isOffMarket ? "blur-[2px] scale-105" : ""
                    }`}
                    loading="lazy"
                  />

                  {/* Off-market overlay */}
                  {isOffMarket && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase bg-white/90 text-[#1a1a1a] px-4 py-2">
                        Off-market &middot; Private access only
                      </span>
                    </div>
                  )}

                  {/* Region tag */}
                  {!isOffMarket && (
                    <span className="absolute top-3 left-3 font-body text-[10px] tracking-[0.15em] uppercase bg-white/90 text-[#1a1a1a] px-3 py-1">
                      {v.location}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="mt-4">
                  <h2 className="font-heading text-2xl text-[#1a1a1a]">{v.name}</h2>
                  <div className="flex gap-4 font-body text-xs text-[#aaa] tracking-wider mt-1">
                    <span>{v.guests} guests</span>
                    <span>&middot;</span>
                    <span>{v.beds} bedrooms</span>
                  </div>
                  <p className="font-body text-xs tracking-wider text-[#2e5a88] uppercase mt-2">{v.highlight}</p>
                  <p className="font-body text-sm text-[#888] leading-relaxed mt-2 line-clamp-2">{v.description}</p>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="inline-block mt-3 font-body text-xs tracking-[0.15em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px hover:border-[#2e5a88] transition-colors"
                  >
                    {isOffMarket ? "Request access" : "Inquire"} &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-body text-xs text-[#ccc] mt-10 tracking-wider max-w-6xl mx-auto text-center">
          Our full collection is not published online. The most sought-after properties are shared exclusively upon inquiry.
        </p>
      </section>

      {/* ─── BESTIA YACHT ─── */}
      <section data-nav-dark className="bg-[#1a1a1a] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-6">Our yacht</p>
            <h2 className="font-heading text-6xl md:text-7xl text-white leading-none mb-4">BESTIA.</h2>
            <p className="font-body text-sm text-white/40 mb-8">{yacht.model} &middot; {yacht.length} &middot; {yacht.year}</p>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-10">
              {yacht.description}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Cabins", value: `${yacht.cabins} cabins` },
                { label: "Guests", value: `${yacht.guests} guests` },
                { label: "Crew", value: `${yacht.crew} crew` },
                { label: "Base", value: yacht.base },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-1">{label}</p>
                  <p className="font-heading text-lg text-white">{value}</p>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Request availability
            </a>
          </div>

          {/* Yacht image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={yacht.image}
              alt="BESTIA yacht"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─── REAL ESTATE ENCART ─── */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-16 border-t border-[#e8e4de]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-px bg-[#2e5a88] w-8 mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Thinking of owning<br />your own corner<br />of Greece?
          </h2>
          <p className="font-body text-sm text-[#888] leading-relaxed max-w-lg mx-auto mb-8">
            eb. works with a trusted partner specializing in exceptional Greek properties. From coastal estates to island retreats, we connect you with opportunities that never reach the open market.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Enquire
          </a>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section data-nav-dark className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
            Not finding<br />what you need?
          </h2>
          <p className="font-body text-base text-white/60 mb-10 max-w-xl mx-auto">
            Our most sought-after properties are never listed publicly. Tell us what you are looking for.
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white/10 transition-colors">
            Make a private inquiry
          </a>
        </div>
      </section>

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
