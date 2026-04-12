import Nav from "../components/Nav";

export default function Experiences() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <Nav activePage="/experiences" />

      {/* Hero */}
      <section className="bg-white pt-28 md:pt-40 pb-16 md:pb-24 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">Signature & Concierge</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#1a1a1a] mb-8">
            Moments<br />you can&apos;t<br />book online.
          </h1>
          <p className="font-body text-lg text-[#888] max-w-xl leading-relaxed">
            Across Athens, the Athenian Riviera and the Greek Islands. Private, bespoke, and designed around who you are — not a catalogue of options.
          </p>
        </div>
      </section>

      {/* ─── HERO EXPERIENCES ─── */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px bg-[#e8e4de] flex-1" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Hero Experiences</p>
            <div className="h-px bg-[#e8e4de] flex-1" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#e8e4de]">

            {/* #1 — Private Dinner Facing the Acropolis */}
            <div className="bg-white p-10 md:p-14 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <span className="font-heading text-5xl text-[#e8e4de] leading-none">#1</span>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mt-2">Athens</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
                Private Dinner<br />Facing the<br />Acropolis
              </h2>
              <p className="font-body text-sm text-[#888] leading-relaxed">
                A candlelit evening set against one of the most iconic views in Europe. Each dinner is designed around the guest&apos;s preferred level of privacy — from a Michelin-starred restaurant with panoramic views to a fully privatized setting: an exclusive terrace, a private venue, or a luxury hotel suite.
              </p>
              <p className="font-body text-xs text-[#aaa] italic leading-relaxed">
                The Acropolis — 5th century BC. A timeless symbol of classical prestige and heritage.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Michelin-starred or fully private format",
                  "Luxury hotel suite or exclusive venue option",
                  "Private chef available",
                  "Optional music, floral styling or photography",
                ].map((item) => (
                  <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                    <span className="text-[#ccc] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-[#ccc] mt-2">
                Romantic celebrations · Proposals · Private VIP moments · Milestone occasions
              </p>
            </div>

            {/* #2 — Wedding Proposal */}
            <div className="bg-white p-10 md:p-14 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <span className="font-heading text-5xl text-[#e8e4de] leading-none">#2</span>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mt-2">Across Greece</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
                Wedding<br />Proposal<br />in Greece
              </h2>
              <p className="font-body text-sm text-[#888] leading-relaxed">
                A once-in-a-lifetime moment set against Greece&apos;s most breathtaking landscapes. From the dramatic cliffs of Santorini to hidden terraces overlooking the Aegean — each proposal is privately curated according to the couple&apos;s story, preferred setting and desired level of privacy. Every detail crafted with discretion, elegance and perfect timing.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Iconic proposal settings across Greece",
                  "Elegant floral styling and romantic staging",
                  "Photographer or videographer to capture the moment",
                  "Optional live music or private celebration",
                  "Seamless and discreet planning",
                ].map((item) => (
                  <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                    <span className="text-[#ccc] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* #3 — Boutique Wedding */}
            <div className="bg-white p-10 md:p-14 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <span className="font-heading text-5xl text-[#e8e4de] leading-none">#3</span>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mt-2">Greece</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
                Boutique<br />Wedding
              </h2>
              <p className="font-body text-sm text-[#888] leading-relaxed">
                A refined selection of distinctive venues and private properties across Greece — designed for couples seeking a more personal and meaningful celebration. From secluded island villas to elegant countryside estates, each wedding is imagined as a truly private experience. A slower rhythm, a carefully curated guest list, and a refined attention to detail.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Exclusive venue privatization for fully tailored celebrations",
                  "Bespoke culinary experiences, including dedicated Indian chefs",
                  "Seamless coordination of cultural and religious ceremonies",
                  "Close collaboration with Indian & international wedding planners",
                  "Discreet, high-level on-ground production",
                ].map((item) => (
                  <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                    <span className="text-[#ccc] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* #4 — Personal Shopping with a Stylist */}
            <div className="bg-white p-10 md:p-14 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <span className="font-heading text-5xl text-[#e8e4de] leading-none">#4</span>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mt-2">Athens</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
                Private Shopping<br />with a<br />Stylist
              </h2>
              <p className="font-body text-sm text-[#888] leading-relaxed">
                A curated fashion and lifestyle journey through Athens&apos; most refined boutiques. Guided by a private fashion expert through Kolonaki — home to international luxury maisons and carefully selected Greek designers. Personalized to your wardrobe, your style, and your time.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Private fashion expert or stylist",
                  "Access to selected luxury boutiques and designers",
                  "Personalized styling advice",
                  "Tailor-made shopping itinerary",
                ].map((item) => (
                  <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                    <span className="text-[#ccc] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <p className="font-body text-xs text-[#ccc] mt-6 tracking-wider">
            Each experience is fully customized. These are starting points — not templates.
          </p>
        </div>
      </section>

      {/* ─── CONCIERGE SERVICES ─── */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-8 md:px-16 border-t border-[#e8e4de]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start mb-20">
            <div>
              <div className="h-px bg-[#2e5a88] w-8 mb-5" />
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Insider Access</p>
            </div>
            <div>
              <p className="font-body text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
                Beyond the signature experiences, we provide privileged access to exceptional dining, curated food experiences and lifestyle services — across Athens, the Riviera and the islands.
              </p>
            </div>
          </div>

          {/* Restaurant Reservations */}
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px bg-[#e8e4de] w-8" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888]">Private Dining & Restaurant Reservations</p>
            </div>
            <p className="font-body text-sm text-[#888] leading-relaxed max-w-2xl mb-10">
              Through trusted relationships with leading restaurants and hospitality teams, guests benefit from priority access to some of the most requested dining venues across Greece.
            </p>
            <div className="grid md:grid-cols-4 gap-px bg-[#e8e4de]">
              {[
                {
                  city: "Athens",
                  items: ["Michelin-starred dining", "Iconic rooftop tables with Acropolis views", "Authentic Greek flavors"],
                },
                {
                  city: "Athenian Riviera",
                  items: ["Four Seasons Astir Palace", "Chic seaside restaurants", "Sunset dining overlooking the Aegean"],
                },
                {
                  city: "Mykonos",
                  items: ["Chef-driven gastronomy", "Iconic seaside dining", "Beach clubs & nightlife venues"],
                },
                {
                  city: "Santorini",
                  items: ["Caldera view dining", "Local flavors & volcanic terroir", "Romantic cliffside tables"],
                },
              ].map(({ city, items }) => (
                <div key={city} className="bg-[#fcf7f1] p-8 flex flex-col gap-4">
                  <p className="font-heading text-xl text-[#1a1a1a]">{city}</p>
                  <ul className="flex flex-col gap-2">
                    {items.map((item) => (
                      <li key={item} className="font-body text-xs text-[#888] leading-relaxed flex gap-3">
                        <span className="text-[#ccc] shrink-0">—</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Other concierge services */}
          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4de]">

            <div className="bg-[#fcf7f1] p-10 flex flex-col gap-4">
              <div className="h-px bg-[#a7d1c9] w-8" />
              <h3 className="font-heading text-2xl text-[#1a1a1a] leading-tight">Gastronomic<br />Journeys</h3>
              <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">
                Tailor-made journeys combining refined restaurants, authentic local tavernas and exceptional regional products. Private food tours with expert guides, market visits, wine tastings and curated dining reservations across Greece.
              </p>
              <ul className="flex flex-col gap-2">
                {["Private food tours with expert guides", "Market visits & tastings", "Curated regional dining reservations"].map((item) => (
                  <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                    <span className="text-[#ccc] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fcf7f1] p-10 flex flex-col gap-4">
              <div className="h-px bg-[#a7d1c9] w-8" />
              <h3 className="font-heading text-2xl text-[#1a1a1a] leading-tight">Private Wine &<br />Vineyard Visits</h3>
              <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">
                Greece&apos;s most distinctive wine regions through exclusive vineyard experiences. Private tastings and refined gastronomic pairings — in Santorini&apos;s volcanic vineyards or the renowned estates of the Peloponnese. Intimate encounters with the winemakers themselves.
              </p>
              <ul className="flex flex-col gap-2">
                {["Santorini volcanic vineyards", "Peloponnese wine estates", "Private tastings with winemakers"].map((item) => (
                  <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                    <span className="text-[#ccc] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fcf7f1] p-10 flex flex-col gap-4">
              <div className="h-px bg-[#a7d1c9] w-8" />
              <h3 className="font-heading text-2xl text-[#1a1a1a] leading-tight">Lifestyle &<br />Concierge</h3>
              <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">
                Every detail of your stay — reservations, transfers, surprises, private access. From securing the impossible table to arranging a private museum visit at dawn. Available throughout your journey, quietly, in the background.
              </p>
              <ul className="flex flex-col gap-2">
                {["Priority reservations at any venue", "Private cultural & museum access", "Transfers, drivers, logistics", "24/7 on-ground support"].map((item) => (
                  <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                    <span className="text-[#ccc] shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-nav-dark className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-6 leading-tight">
            What would you<br />like to experience?
          </h2>
          <p className="font-body text-base text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Each experience is designed with flexibility, discretion and exceptional attention to detail. Tell us your occasion — we take care of everything.
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white/10 transition-colors">
            Start the conversation
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
            <a href="/about" className="hover:text-white/70 transition-colors">About</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
