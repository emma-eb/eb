import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-screen flex items-end pb-20 px-8 md:px-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1509360667180-04103d4fbf5e?auto=format&fit=crop&w=1920&q=80" alt="Greece" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2e5a88]/70" />
        <div className="relative z-20 max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a7d1c9] mb-6">
            Athens · Mykonos · Santorini · Porto Heli · Paros
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] leading-none text-[#fcf7f1] mb-8">
            Greece,<br />privately.
          </h1>
          <p className="font-body text-lg md:text-xl text-[#fcf7f1]/80 max-w-xl leading-relaxed mb-10">
            We open doors that don&apos;t exist on any map. Villas, experiences, and celebrations crafted for those who know the difference.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase bg-[#fcf7f1] text-[#2e5a88] px-8 py-4 hover:bg-[#a7d1c9] transition-colors"
          >
            Begin your journey
          </a>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-[#fcf7f1] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-16 text-center">
            What we do
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="h-px bg-[#2e5a88] mb-8 w-12" />
              <h2 className="font-heading text-3xl text-[#2e5a88] mb-4">Private<br />Journeys</h2>
              <p className="font-body text-sm text-[#2e5a88]/70 leading-relaxed">
                Bespoke itineraries crafted around you — not a template. Private dining, hidden islands, art collections, and moments money can rarely buy.
              </p>
              <a href="/journeys" className="inline-block mt-6 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88] pb-px hover:opacity-60 transition-opacity">
                Explore →
              </a>
            </div>
            <div>
              <div className="h-px bg-[#2e5a88] mb-8 w-12" />
              <h2 className="font-heading text-3xl text-[#2e5a88] mb-4">Villa &<br />Yacht</h2>
              <p className="font-body text-sm text-[#2e5a88]/70 leading-relaxed">
                A curated collection of the most extraordinary private properties in Greece — and BESTIA, our superyacht for those who want the sea to themselves.
              </p>
              <a href="/collection" className="inline-block mt-6 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88] pb-px hover:opacity-60 transition-opacity">
                View collection →
              </a>
            </div>
            <div>
              <div className="h-px bg-[#2e5a88] mb-8 w-12" />
              <h2 className="font-heading text-3xl text-[#2e5a88] mb-4">Signature<br />Celebrations</h2>
              <p className="font-body text-sm text-[#2e5a88]/70 leading-relaxed">
                Private dinners at the Acropolis. Proposals on a clifftop in Oia. Intimate weddings where perfection is not a goal — it is the only option.
              </p>
              <a href="/celebrations" className="inline-block mt-6 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88] pb-px hover:opacity-60 transition-opacity">
                Discover →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#2e5a88] py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-5xl md:text-7xl text-[#fcf7f1] mb-10">
            Greece only.<br />Always.
          </h2>
          <p className="font-body text-lg text-[#fcf7f1]/70 leading-relaxed max-w-2xl mx-auto">
            We don&apos;t do Paris. We don&apos;t do Maldives. Every villa owner, every chef, every fisherman on Meganisi — we know them personally. That&apos;s the difference between a booking and an experience.
          </p>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-[#fcf7f1] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-12 text-center">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40">
            {["Balmain", "Van Cleef & Arpels", "Jimmy Choo", "Karl Lagerfeld", "Nina Ricci", "Coach", "Boucheron"].map((brand) => (
              <span key={brand} className="font-body text-sm tracking-[0.15em] uppercase text-[#2e5a88]">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1590068560361-87d6b26e4017?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2e5a88]/75" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-[#fcf7f1] mb-6">
            Ready to begin?
          </h2>
          <p className="font-body text-base text-[#fcf7f1]/70 mb-10 max-w-xl mx-auto">
            Tell us what you dream of. We take care of everything else.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-[#fcf7f1] text-[#fcf7f1] px-10 py-4 hover:bg-[#fcf7f1] hover:text-[#2e5a88] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e5a88] py-10 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <img src="/logo-beige.svg" alt="eb." className="h-7 w-auto" />
          <p className="font-body text-xs text-[#fcf7f1]/40 tracking-wider">
            © 2026 Emma Bonnefous · hello@emmabonnefous.com · Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-[#fcf7f1]/60">
            <a href="/partners" className="hover:text-[#fcf7f1] transition-colors">Partners</a>
            <a href="/journal" className="hover:text-[#fcf7f1] transition-colors">Journal</a>
            <a href="/contact" className="hover:text-[#fcf7f1] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
