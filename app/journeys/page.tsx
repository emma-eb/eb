export default function Journeys() {
  const journeys = [
    {
      tag: "Island Hopping",
      title: "The Cyclades,\nyour way.",
      duration: "10–14 days",
      destinations: "Mykonos · Paros · Naxos · Santorini",
      description: "Private ferry transfers, handpicked villas on each island, curated dining — from the fisherman's table to the chef's counter. No crowds, no compromises.",
    },
    {
      tag: "Cultural Immersion",
      title: "Athens &\nbeyond.",
      duration: "5–7 days",
      destinations: "Athens · Delphi · Cape Sounion",
      description: "Private access to the Acropolis at dawn. A personal archaeologist. Dinner in a Byzantine courtyard. Athens as very few ever experience it.",
    },
    {
      tag: "Off the Map",
      title: "The hidden\nIonian.",
      duration: "7–10 days",
      destinations: "Meganisi · Lefkada · Kefalonia",
      description: "Islands where fishermen still know every bay by name. We know them personally. Anchoring in coves that don't appear on any itinerary.",
    },
    {
      tag: "Ultimate Greece",
      title: "The full\nexperience.",
      duration: "14–21 days",
      destinations: "Athens · Cyclades · Peloponnese · Ionian",
      description: "A grand journey across Greece — art, sea, mountains, and history woven together. Everything private. Everything intentional. Nothing left to chance.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#fcf7f1]/95 backdrop-blur-sm">
        <a href="/" className="font-heading text-2xl tracking-widest text-[#2e5a88]">eb.</a>
        <div className="hidden md:flex items-center gap-10 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">
          <a href="/journeys" className="opacity-100 border-b border-[#2e5a88] pb-px">Private Journeys</a>
          <a href="/collection" className="hover:opacity-60 transition-opacity">Collection</a>
          <a href="/experiences" className="hover:opacity-60 transition-opacity">Experiences</a>
          <a href="/journal" className="hover:opacity-60 transition-opacity">Journal</a>
        </div>
        <a href="/contact" className="text-xs tracking-[0.2em] uppercase border border-[#2e5a88] text-[#2e5a88] px-5 py-2.5 hover:bg-[#2e5a88] hover:text-[#fcf7f1] transition-colors">
          Inquire
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-[#2e5a88] pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a7d1c9] mb-6">
            Private Journeys
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#fcf7f1] mb-8">
            Greece,<br />written<br />for you.
          </h1>
          <p className="font-body text-lg text-[#fcf7f1]/70 max-w-xl leading-relaxed">
            Not a tour. Not a package. A journey conceived around who you are, what you love, and what you&apos;ve never dared to ask for — until now.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#fcf7f1] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-16">
            How it works
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "01", title: "A conversation", body: "Tell us your vision — or let us ask the right questions. There is no form that captures a dream." },
              { n: "02", title: "Your proposal", body: "Within 48 hours, a bespoke itinerary built specifically for you. Not adapted. Built." },
              { n: "03", title: "We handle everything", body: "Villas, transfers, reservations, surprises. Every detail confirmed before you board your flight." },
              { n: "04", title: "You arrive", body: "To a Greece most people never find. We are available throughout — quietly, in the background." },
            ].map(({ n, title, body }) => (
              <div key={n}>
                <p className="font-heading text-5xl text-[#a7d1c9] mb-4">{n}</p>
                <h3 className="font-heading text-xl text-[#2e5a88] mb-3">{title}</h3>
                <p className="font-body text-sm text-[#2e5a88]/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey types */}
      <section className="bg-[#fcf7f1] pb-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-16">
            Journey archetypes
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-[#2e5a88]/10">
            {journeys.map((j) => (
              <div key={j.tag} className="bg-[#fcf7f1] p-10 flex flex-col gap-4">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#a7d1c9]">{j.tag}</span>
                <h2 className="font-heading text-4xl text-[#2e5a88] leading-tight whitespace-pre-line">{j.title}</h2>
                <div className="flex gap-6 font-body text-xs text-[#2e5a88]/50 tracking-wider">
                  <span>{j.duration}</span>
                  <span>{j.destinations}</span>
                </div>
                <p className="font-body text-sm text-[#2e5a88]/70 leading-relaxed">{j.description}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#2e5a88]/40 mt-6 tracking-wider">
            These are starting points, not templates. Every journey is built from scratch.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#2e5a88] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a7d1c9] mb-16">
            What we arrange
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                cat: "Stays",
                items: ["Private villas with full staff", "Boutique hotels — entire floors", "Superyacht accommodation", "Island cave houses"],
              },
              {
                cat: "Experiences",
                items: ["Private museum & site access", "Dinners with local producers", "Sailing & diving with experts", "Helicopter transfers"],
              },
              {
                cat: "On the ground",
                items: ["Dedicated private driver", "Personal eb. concierge", "24/7 availability", "Medical & security if required"],
              },
            ].map(({ cat, items }) => (
              <div key={cat}>
                <div className="h-px bg-[#a7d1c9] mb-6 w-12" />
                <h3 className="font-heading text-2xl text-[#fcf7f1] mb-6">{cat}</h3>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="font-body text-sm text-[#fcf7f1]/60 leading-relaxed flex gap-3">
                      <span className="text-[#a7d1c9] shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#a7d1c9] py-24 px-8 md:px-16 text-center">
        <h2 className="font-heading text-5xl md:text-6xl text-[#2e5a88] mb-6">
          Where do you<br />want to go?
        </h2>
        <p className="font-body text-base text-[#2e5a88]/80 mb-10 max-w-xl mx-auto">
          There is no destination too remote, no request too specific. Tell us — we&apos;ll tell you if it&apos;s possible. (It usually is.)
        </p>
        <a
          href="/contact"
          className="inline-block font-body text-xs tracking-[0.25em] uppercase bg-[#2e5a88] text-[#fcf7f1] px-10 py-4 hover:bg-[#1a3a5c] transition-colors"
        >
          Plan my journey
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e5a88] py-10 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <a href="/" className="font-heading text-xl tracking-widest text-[#fcf7f1]">eb.</a>
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
