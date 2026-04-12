import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ─── HERO — plein écran, photo, titre en bas à gauche ─── */}
      <section
        data-nav-dark
        className="relative h-screen flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80"
          alt="Greece"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl w-full">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-white/60 mb-4">
            Athens · Mykonos · Santorini · Porto Heli · Paros
          </p>
          <h1 className="font-heading text-[clamp(4rem,12vw,11rem)] leading-[0.9] text-white mb-8">
            Greece,<br />privately.
          </h1>
          <div className="flex items-center gap-6">
            <div className="h-px bg-white/30 w-12" />
            <a
              href="/contact"
              className="font-body text-xs tracking-[0.25em] uppercase text-white/80 hover:text-white transition-colors"
            >
              Begin your journey →
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white" />
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white rotate-90 origin-center mt-2">Scroll</span>
        </div>
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="bg-white py-24 md:py-36 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div className="pt-1">
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888] leading-relaxed">
              What eb. is
            </p>
          </div>
          <div>
            <p className="font-body text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
              We don't sell destinations. We know people — the chef who opens his kitchen at midnight, the villa owner who never advertises, the archaeologist who has a key to the Acropolis before dawn.
            </p>
            <p className="font-body text-base text-[#888] mt-6 leading-relaxed max-w-xl">
              Twelve years of relationships in Greece, built one extraordinary experience at a time. This is what we offer.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLARS ─── */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px bg-[#e8e4de] flex-1" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">What we do</p>
            <div className="h-px bg-[#e8e4de] flex-1" />
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4de]">
            {[
              {
                n: "01",
                title: "Private\nJourneys",
                description: "Itineraries built around who you are — not a template. Villas, islands, art collections, and moments that take years of relationships to arrange.",
                href: "/journeys",
                cta: "Explore",
              },
              {
                n: "02",
                title: "Villa &\nYacht",
                description: "A curated collection of the most extraordinary private properties in Greece — and BESTIA, our superyacht for those who want the sea to themselves.",
                href: "/collection",
                cta: "View collection",
              },
              {
                n: "03",
                title: "Signature\nCelebrations",
                description: "Private dinners on clifftops. Proposals at dawn. Weddings where perfection is the only option. We design the moment — you live it.",
                href: "/experiences",
                cta: "Discover",
              },
            ].map((p) => (
              <div key={p.n} className="bg-white p-10 md:p-12 flex flex-col gap-5">
                <span className="font-heading text-4xl text-[#e8e4de]">{p.n}</span>
                <h2 className="font-heading text-3xl md:text-4xl text-[#1a1a1a] leading-tight whitespace-pre-line">{p.title}</h2>
                <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">{p.description}</p>
                <a href={p.href} className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px self-start hover:border-[#2e5a88] transition-colors">
                  {p.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO — photo plein cadre ─── */}
      <section data-nav-dark className="relative h-[70vh] md:h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1920&q=80"
          alt="Greece"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-8 md:px-16 max-w-4xl">
          <h2 className="font-heading text-[clamp(3rem,8vw,8rem)] leading-[0.9] text-white mb-8">
            Greece only.<br />Always.
          </h2>
          <p className="font-body text-base md:text-lg text-white/60 max-w-lg leading-relaxed">
            We don't do Paris. We don't do Maldives. Every villa owner, every chef, every fisherman on Meganisi — we know them personally.
          </p>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-16 border-t border-[#e8e4de] border-b">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888] mb-12 text-center">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Balmain", "Van Cleef & Arpels", "Jimmy Choo", "Karl Lagerfeld", "Nina Ricci", "Coach", "Boucheron"].map((brand) => (
              <span key={brand} className="font-body text-sm tracking-[0.15em] uppercase text-[#bbb]">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — photo plein cadre ─── */}
      <section data-nav-dark className="relative py-40 md:py-56 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590068560361-87d6b26e4017?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white mb-8">
            Ready to begin?
          </h2>
          <p className="font-body text-base text-white/60 mb-10 max-w-sm mx-auto leading-relaxed">
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

      {/* ─── FOOTER ─── */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-70" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            © 2026 Emma Bonnefous · hello@emmabonnefous.com · Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/partners" className="hover:text-white/80 transition-colors">Partners</a>
            <a href="/journal" className="hover:text-white/80 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/80 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
