import Nav from "../components/Nav";

export default function Journeys() {
  const journeys = [
    {
      tag: "Island Hopping",
      title: "The Cyclades,\nyour way.",
      duration: "10–14 days",
      destinations: "Mykonos · Paros · Naxos · Santorini",
      description: "Private ferry transfers, handpicked villas on each island, curated dining: from the fisherman's table to the chef's counter. No crowds, no compromises.",
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
      description: "A grand journey across Greece: art, sea, mountains, and history woven together. Everything private. Everything intentional. Nothing left to chance.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">

      <Nav activePage="/journeys" />

      {/* Hero */}
      <section className="bg-white pt-28 md:pt-40 pb-16 md:pb-24 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">Private Journeys</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#1a1a1a] mb-8">
            Greece,<br />written<br />for you.
          </h1>
          <p className="font-body text-lg text-[#888] max-w-xl leading-relaxed">
            Not a tour. Not a package. A journey conceived around who you are, what you love, and what you&apos;ve never dared to ask for.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-16">How it works</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "01", title: "A conversation", body: "Tell us your vision, or let us ask the right questions. There is no form that captures a dream." },
              { n: "02", title: "Your proposal", body: "Within 48 hours, a bespoke itinerary built specifically for you. Not adapted. Built." },
              { n: "03", title: "We handle everything", body: "Villas, transfers, reservations, surprises. Every detail confirmed before you board your flight." },
              { n: "04", title: "You arrive", body: "To a Greece most people never find. We are available throughout, quietly, in the background." },
            ].map(({ n, title, body }) => (
              <div key={n}>
                <p className="font-heading text-5xl text-[#e8e4de] mb-4">{n}</p>
                <h3 className="font-heading text-xl text-[#1a1a1a] mb-3">{title}</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey archetypes */}
      <section className="bg-white pb-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-16">Journey archetypes</p>
          <div className="grid md:grid-cols-2 gap-px bg-[#e8e4de]">
            {journeys.map((j) => (
              <div key={j.tag} className="bg-white p-10 flex flex-col gap-4">
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#a7d1c9]">{j.tag}</span>
                <h2 className="font-heading text-4xl text-[#1a1a1a] leading-tight whitespace-pre-line">{j.title}</h2>
                <div className="flex flex-wrap gap-4 font-body text-xs text-[#aaa] tracking-wider">
                  <span>{j.duration}</span>
                  <span>·</span>
                  <span>{j.destinations}</span>
                </div>
                <p className="font-body text-sm text-[#888] leading-relaxed">{j.description}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#ccc] mt-6 tracking-wider">
            These are starting points, not templates. Every journey is built from scratch.
          </p>
        </div>
      </section>

      {/* Sample journey — Odyssey Greece */}
      <section className="bg-[#fcf7f1] py-20 md:py-28 px-8 md:px-16 border-t border-[#e8e4de]">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-12">A journey we curated</p>
          <div className="grid md:grid-cols-[1fr_1px_1fr] gap-0 bg-[#e8e4de]">
            <div className="bg-[#fcf7f1] p-10 md:p-14 flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                {["Athens", "Milos", "Kimolos"].map((d) => (
                  <span key={d} className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9]">{d}</span>
                ))}
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] leading-none">Odyssey<br />Greece</h2>
              <p className="font-body text-sm text-[#888] leading-relaxed max-w-sm">
                5 nights, 4 Hero Experiences, 3 destinations. From rooftop dinner under the Parthenon to kayaking along a lunar coastline. A journey shaped by light, sea and time.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["5 Nights", "4 Hero Experiences", "Private group of 5"].map((b) => (
                  <span key={b} className="font-body text-xs tracking-[0.15em] uppercase border border-[#e8e4de] text-[#aaa] px-3 py-1.5">{b}</span>
                ))}
              </div>
              <a
                href="/journeys/odyssey-greece"
                className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px self-start hover:border-[#2e5a88] transition-colors mt-2"
              >
                Explore this journey →
              </a>
            </div>
            <div className="bg-[#e8e4de]" />
            <div className="bg-[#fcf7f1] p-10 md:p-14 flex flex-col gap-6">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-2">4 Hero Experiences</p>
              {[
                { n: "#1", title: "Dinner Under the Parthenon", day: "Day 1 · Athens" },
                { n: "#2", title: "The Aegean Odyssey", day: "Day 3 · Kleftiko caves" },
                { n: "#3", title: "Kimolos, the Secret Island", day: "Day 4 · Kimolos" },
                { n: "#4", title: "Moonwalk", day: "Day 5 · Sarakiniko kayak" },
              ].map((exp) => (
                <div key={exp.n} className="flex items-start gap-5 border-b border-[#e8e4de] pb-5 last:border-0 last:pb-0">
                  <span className="font-heading text-2xl text-[#e8e4de] leading-none shrink-0">{exp.n}</span>
                  <div>
                    <p className="font-body text-sm font-medium text-[#1a1a1a] leading-snug">{exp.title}</p>
                    <p className="font-body text-xs text-[#888] tracking-wider mt-0.5">{exp.day}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="font-body text-xs text-[#ccc] mt-5 tracking-wider">
            This is a real journey we designed. Yours will be built entirely from scratch.
          </p>
        </div>
      </section>

      {/* What we arrange — dark */}
      <section data-nav-dark className="bg-[#1a1a1a] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-16">What we arrange</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                cat: "Stays",
                items: ["Private villas with full staff", "Boutique hotels, entire floors", "Superyacht accommodation", "Island cave houses"],
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
                <div className="h-px bg-white/15 mb-6 w-12" />
                <h3 className="font-heading text-2xl text-white mb-6">{cat}</h3>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="font-body text-sm text-white/50 leading-relaxed flex gap-3">
                      <span className="text-white/25 shrink-0">·</span>
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
      <section data-nav-dark className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
            Where do you<br />want to go?
          </h2>
          <p className="font-body text-base text-white/60 mb-10 max-w-xl mx-auto">
            There is no destination too remote, no request too specific. Tell us what you have in mind. (It&apos;s usually possible.)
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white/10 transition-colors">
            Plan my journey
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
            <a href="/partners" className="hover:text-white/70 transition-colors">Partners</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
