import Nav from "./components/Nav";

const islands = [
  "Santorini", "Mykonos", "Paros", "Naxos", "Milos", "Folegandros",
  "Sifnos", "Serifos", "Ios", "Koufonisia", "Amorgos", "Hydra",
  "Spetses", "Poros", "Lefkada", "Kefalonia", "Meganisi", "Ithaca",
  "Corfu", "Zakynthos", "Rhodes", "Patmos", "Symi", "Halki",
  "Skiathos", "Skopelos", "Alonissos", "Crete", "Chios", "Tinos",
  "Antiparos", "Sikinos", "Anafi", "Thirassia",
];

export default function Home() {
  const ticker = [...islands, ...islands]; // double pour boucle seamless

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
          style={{ objectPosition: "right center" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Titre — centré verticalement, ancré à gauche */}
        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 pt-16 md:pt-20">
          <div>
            <h1 className="font-heading text-[clamp(2.8rem,11vw,10rem)] leading-[0.9] text-white">
              Greece,<br />privately.
            </h1>
            <div className="flex items-center gap-5 mt-8">
              <a
                href="/contact"
                className="font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-7 py-3 hover:bg-white/10 transition-colors"
              >
                Begin your journey
              </a>
              <a
                href="/journeys"
                className="font-body text-xs tracking-[0.25em] uppercase text-white/70 border-b border-white/30 pb-px hover:text-white hover:border-white transition-colors"
              >
                Explore
              </a>
            </div>
          </div>
        </div>

        {/* Quick nav — visible sur mobile aussi */}
        <div className="relative z-10 px-8 md:px-16 pb-6 hidden md:flex items-center gap-8">
          {[
            { href: "/journeys", label: "Private Journeys" },
            { href: "/collection", label: "Villa & Yacht" },
            { href: "/experiences", label: "Experiences" },
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

        {/* Marquee des îles */}
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
                <span className="ml-5 text-white/20">·</span>
              </span>
            ))}
          </div>
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
            <p className="font-body text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
              We don't sell destinations. We know people — the chef who opens his kitchen at midnight, the villa owner who never advertises, the archaeologist who has a key to the Acropolis before dawn.
            </p>
            <p className="font-body text-sm text-[#888] mt-6 leading-relaxed max-w-xl">
              Twelve years of relationships in Greece, built one extraordinary experience at a time.
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
                description: "Itineraries built around who you are — not a template. Islands, villas, art collections, and moments that take years of relationships to arrange.",
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
                description: "Private dinners at dusk. Proposals on clifftops. Weddings where perfection is the only option.",
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
              <span key={brand} className="font-body text-sm tracking-[0.15em] uppercase text-[#ccc]">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — photo sunset/plage ─── */}
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

      {/* ─── FOOTER ─── */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-60" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            © 2026 Emma Bonnefous · hello@emmabonnefous.com · Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/partners" className="hover:text-white/70 transition-colors">Partners</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
