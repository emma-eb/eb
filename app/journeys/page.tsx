"use client";

import Nav from "../components/Nav";
import DiscoveryFlow from "../components/DiscoveryFlow";

export default function JourneysPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/journeys" />

      {/* ─── HERO ─── */}
      <section className="pt-32 md:pt-40 pb-6 md:pb-10 px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-[#1a1a1a]">
            How do you<br />dream Greece?
          </h1>
          <p className="font-body text-sm text-[#888] mt-6 max-w-md mx-auto leading-relaxed">
            Choose what draws you. We shape the journey.
          </p>
        </div>
      </section>

      {/* ─── DISCOVERY FLOW ─── */}
      <section className="bg-white py-10 md:py-16 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <DiscoveryFlow />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section data-nav-dark className="relative py-32 md:py-44 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(2rem,6vw,5rem)] leading-[0.9] text-white mb-6">
            Every journey starts<br />from scratch.
          </h2>
          <p className="font-body text-sm text-white/60 mb-10 max-w-sm mx-auto leading-relaxed">
            Tell us what you have in mind. We design the rest.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            Inquire
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
            <a href="/experiences" className="hover:text-white/70 transition-colors">Experiences</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
