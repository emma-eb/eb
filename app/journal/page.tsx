const featured = {
  tag: "In the press",
  title: "Greece is the new Dubai for India's HNIs.",
  subtitle: "LinkedIn · 2025",
  description:
    "India's ultra-high-net-worth travellers are increasingly choosing Greece over the Gulf. Authentic luxury, historic depth, and a beauty that no amount of engineering can replicate. This is the shift eb. was built for.",
  href: "https://www.linkedin.com/news/story/greece-is-the-new-dubai-for-indias-hnis-7165964/",
};

const articles = [
  {
    tag: "Destination",
    title: "Why Meganisi is the name everyone in the know is saying",
    date: "April 2026",
    description:
      "The Ionian's most underrated island — no airport, no cruise ships, no shortcuts. Just the sea, the tavernas, and a silence that money still can't ruin.",
    href: null,
  },
  {
    tag: "Culture",
    title: "The private art collections of Athens",
    date: "March 2026",
    description:
      "Some of the most significant contemporary Greek art is held in homes, not museums. A guide to the collectors who occasionally open their doors.",
    href: null,
  },
  {
    tag: "Travel",
    title: "Greece's finest tables in 2026 — the ones no algorithm finds",
    date: "March 2026",
    description:
      "Not a ranking. A personal list of the restaurants, tavernas, and private kitchens that made us feel lucky to know Greece as well as we do.",
    href: null,
  },
  {
    tag: "In the press",
    title: "Porto Heli: the Peloponnese destination redefining Greek luxury",
    date: "February 2026",
    description:
      "Quietly, the Argolic Gulf has become the address of choice for those who find the Cyclades too crowded. We've known this for years.",
    href: "https://www.instagram.com/p/DVucDi0D1Al/",
  },
  {
    tag: "Travel",
    title: "The Cyclades in May: why shoulder season is the only season",
    date: "February 2026",
    description:
      "Before the crowds. After the cold. May in the Cyclades is Greece at its most honest — and most beautiful.",
    href: "https://www.instagram.com/p/DWVP_z9k23o/",
  },
  {
    tag: "In the press",
    title: "Greece's most anticipated openings of the 2026 summer season",
    date: "January 2026",
    description:
      "New villas, new restaurants, a new superyacht marina in the Ionian. The season shaping up to be Greece's most remarkable yet.",
    href: "https://www.instagram.com/p/DWoynUsDeKW/",
  },
];

const realEstate = {
  tag: "Real Estate",
  title: "The Height — a new landmark near Athens",
  location: "Attica · Greece",
  description:
    "An extraordinary residential project taking shape on the Attic coast — designed by one of Europe's most celebrated architects. For clients exploring investment or primary residences in Greece, this is the conversation to have.",
  note: "eb. works with a select number of clients as a trusted introduction to this project.",
  href: "https://theheight.estate/el/",
};

import Nav from "../components/Nav";

export default function Journal() {
  return (
    <main className="flex flex-col min-h-screen">

      <Nav activePage="/journal" />

      {/* Hero */}
      <section className="bg-[#fcf7f1] pt-28 md:pt-40 pb-10 md:pb-16 px-8 md:px-16 border-b border-[#2e5a88]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-4">Journal</p>
            <h1 className="font-heading text-6xl md:text-8xl text-[#2e5a88] leading-none">
              Greece,<br />closely.
            </h1>
          </div>
          <p className="font-body text-sm text-[#2e5a88]/50 max-w-xs leading-relaxed pb-2">
            News, destinations, culture, and the conversations shaping how the world sees Greece right now.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="bg-[#2e5a88] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a7d1c9] mb-8">Featured</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mb-4 inline-block">{featured.tag}</span>
              <h2 className="font-heading text-4xl md:text-5xl text-[#fcf7f1] leading-tight mb-4">
                {featured.title}
              </h2>
              <p className="font-body text-xs text-[#fcf7f1]/40 tracking-wider mb-6">{featured.subtitle}</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-body text-base text-[#fcf7f1]/70 leading-relaxed">{featured.description}</p>
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] border-b border-[#a7d1c9]/40 pb-px hover:border-[#a7d1c9] transition-colors"
              >
                Read on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-[#fcf7f1] py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-12">Latest</p>
          <div className="grid md:grid-cols-3 gap-px bg-[#2e5a88]/10">
            {articles.map((a) => (
              <div key={a.title} className="bg-[#fcf7f1] p-8 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9]">{a.tag}</span>
                  <span className="font-body text-xs text-[#2e5a88]/30 tracking-wider">{a.date}</span>
                </div>
                <h3 className="font-heading text-xl text-[#2e5a88] leading-tight">{a.title}</h3>
                <p className="font-body text-sm text-[#2e5a88]/60 leading-relaxed flex-grow">{a.description}</p>
                {a.href ? (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 self-start font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px hover:border-[#2e5a88] transition-colors"
                  >
                    Read →
                  </a>
                ) : (
                  <span className="mt-2 self-start font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]/30">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate */}
      <section className="bg-[#fcf7f1] pb-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto border-t border-[#2e5a88]/10 pt-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-12">Real Estate</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mb-4 inline-block">{realEstate.tag}</span>
              <h2 className="font-heading text-4xl text-[#2e5a88] leading-tight mb-3">{realEstate.title}</h2>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]/40">{realEstate.location}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-body text-base text-[#2e5a88]/70 leading-relaxed">{realEstate.description}</p>
              <p className="font-body text-sm text-[#2e5a88]/50 leading-relaxed italic">{realEstate.note}</p>
              <div className="flex gap-4">
                <a
                  href={realEstate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px hover:border-[#2e5a88] transition-colors"
                >
                  View project →
                </a>
                <a
                  href="/contact"
                  className="self-start font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px hover:border-[#2e5a88] transition-colors"
                >
                  Request an introduction →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a3a5c]/80" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-[#fcf7f1] mb-6">
            Stay close<br />to Greece.
          </h2>
          <p className="font-body text-base text-[#fcf7f1]/70 mb-10 max-w-xl mx-auto">
            Destinations, openings, and news — curated by someone who lives it. No noise, no algorithm.
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-[#fcf7f1] text-[#fcf7f1] px-10 py-4 hover:bg-[#fcf7f1] hover:text-[#2e5a88] transition-colors">
            Get in touch
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
