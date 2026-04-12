const experiences = [
  {
    category: "Culture & History",
    items: [
      {
        title: "The Acropolis at dawn",
        location: "Athens",
        description:
          "Before the gates open. Before anyone else arrives. A private archaeologist, the rising sun, and 2,500 years of silence.",
      },
      {
        title: "Private museum access",
        location: "Athens · Heraklion · Delphi",
        description:
          "The National Archaeological Museum after hours. The Minoan collections without crowds. We arrange what others consider impossible.",
      },
      {
        title: "Ancient Delphi, privately",
        location: "Delphi",
        description:
          "The navel of the ancient world, with a scholar who has spent twenty years excavating it. A perspective money rarely buys.",
      },
    ],
  },
  {
    category: "Table & Terroir",
    items: [
      {
        title: "Dinner at the edge of the caldera",
        location: "Santorini · Oia",
        description:
          "A private terrace, a chef from one of Greece's most celebrated restaurants, and the sunset that needs no introduction.",
      },
      {
        title: "With the fisherman",
        location: "Meganisi · Ionian",
        description:
          "Out at 5am, back by noon. Lunch is whatever was caught — grilled on the boat, eaten with your hands. Nothing is more honest.",
      },
      {
        title: "The winemaker's table",
        location: "Santorini · Nemea · Crete",
        description:
          "Greece has some of the world's oldest grape varieties and most underrated wines. We take you to the people who make them.",
      },
    ],
  },
  {
    category: "Sea & Exploration",
    items: [
      {
        title: "The coves that don't appear on maps",
        location: "Ionian · Cyclades",
        description:
          "Every island has one. The bay that locals swim to by boat, that no charter company knows. We do.",
      },
      {
        title: "Freediving with a champion",
        location: "Cyclades · Dodecanese",
        description:
          "Greece produces world-class freedivers. One of them will take you into waters where the only sound is your heartbeat.",
      },
      {
        title: "Overnight on the water",
        location: "Any Greek sea",
        description:
          "Anchor in a cove at dusk. Sleep to the sound of the water. Wake up to a bay that belongs entirely to you.",
      },
    ],
  },
  {
    category: "Rare & Unrepeatable",
    items: [
      {
        title: "A private art collection",
        location: "Athens",
        description:
          "Some of the finest contemporary Greek art is held in private hands. We arrange access — and often a conversation with the collector.",
      },
      {
        title: "Proposals & celebrations",
        location: "Anywhere in Greece",
        description:
          "A clifftop in Oia at sunset. A private island. A table for two at the edge of the sea. We design the moment, you live it.",
      },
      {
        title: "The truffle hunt, the olive harvest",
        location: "Pelion · Peloponnese",
        description:
          "Greece's agricultural heritage, made participatory. Harvest season, hands in the earth, lunch at a table that existed long before tourism.",
      },
    ],
  },
];

import Nav from "../components/Nav";

export default function Experiences() {
  return (
    <main className="flex flex-col min-h-screen">

      <Nav activePage="/experiences" />

      {/* Hero */}
      <section className="bg-[#2e5a88] pt-28 md:pt-40 pb-16 md:pb-24 px-8 md:px-16">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a7d1c9] mb-6">
            Signature Experiences
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#fcf7f1] mb-8">
            Moments<br />that don&apos;t<br />exist yet.
          </h1>
          <p className="font-body text-lg text-[#fcf7f1]/70 max-w-xl leading-relaxed">
            Not excursions. Not activities. Experiences that require the right relationships, the right timing, and an intimate knowledge of Greece that takes years to build.
          </p>
        </div>
      </section>

      {/* Experiences by category */}
      {experiences.map((cat, ci) => (
        <section
          key={cat.category}
          className={`py-20 px-8 md:px-16 ${ci % 2 === 0 ? "bg-[#fcf7f1]" : "bg-[#fcf7f1]"}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px bg-[#2e5a88] w-12" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4]">
                {cat.category}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {cat.items.map((exp) => (
                <div key={exp.title} className="flex flex-col gap-3">
                  <h2 className="font-heading text-2xl text-[#2e5a88] leading-tight">{exp.title}</h2>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9]">{exp.location}</p>
                  <p className="font-body text-sm text-[#2e5a88]/60 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Divider */}
      <div className="bg-[#fcf7f1] pb-8 px-8 md:px-16">
        <div className="max-w-6xl mx-auto border-t border-[#2e5a88]/10" />
      </div>

      {/* The eb. difference */}
      <section className="bg-[#fcf7f1] pb-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-16">
            Why this is different
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <h2 className="font-heading text-5xl md:text-6xl text-[#2e5a88] leading-tight">
              Access is not<br />something we<br />arrange.<br />It&apos;s who we are.
            </h2>
            <div className="flex flex-col gap-8 pt-2">
              {[
                {
                  title: "12 years of relationships",
                  body: "Every chef, archaeologist, fisherman, and winemaker in our network is a personal contact — not a vendor found online.",
                },
                {
                  title: "Greece only",
                  body: "We don't try to do everything. We try to do Greece better than anyone alive. That focus is the product.",
                },
                {
                  title: "No templates",
                  body: "These are not excursions from a list. They are starting points. Tell us what moves you — we build from there.",
                },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="font-heading text-xl text-[#2e5a88] mb-2">{title}</h3>
                  <p className="font-body text-sm text-[#2e5a88]/60 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1571406252241-db0280bd36cd?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a3a5c]/80" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-[#fcf7f1] mb-6">
            What would you<br />add to this list?
          </h2>
          <p className="font-body text-base text-[#fcf7f1]/70 mb-10 max-w-xl mx-auto">
            The best experiences are the ones that don&apos;t exist yet. Tell us what you&apos;re looking for.
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-[#fcf7f1] text-[#fcf7f1] px-10 py-4 hover:bg-[#fcf7f1] hover:text-[#2e5a88] transition-colors">
            Start the conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e5a88] py-10 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto" /></a>
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
