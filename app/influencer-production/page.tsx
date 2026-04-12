import Nav from "../components/Nav";

export default function InfluencerProduction() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <Nav activePage="/influencer-production" />

      {/* Hero — dark */}
      <section
        data-nav-dark
        className="relative h-[100dvh] flex flex-col overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1920&q=80"
          alt="Greece"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex-1 min-h-[5rem]" />

        <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-6">For Brands & Agencies</p>
          <h1 className="font-heading text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-white mb-8">
            Greece,<br />produced.
          </h1>
          <p className="font-body text-base text-white/60 max-w-xl leading-relaxed">
            Full-service production in Greece for luxury brands, fashion houses, and influencer campaigns. From the brief to the final frame.
          </p>
        </div>
      </section>

      {/* Why Greece for brands */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div className="pt-1">
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Why Greece</p>
          </div>
          <div>
            <p className="font-body text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
              300 days of guaranteed sun. Whitewashed architecture that photographs in any direction. Turquoise water you can swim in from September to October. And the kind of access — private villas, archaeological sites, fishing villages — that no stock library can replicate.
            </p>
            <p className="font-body text-sm text-[#888] mt-6 leading-relaxed max-w-xl">
              Greece is the most photogenic backdrop in Europe. The problem is that most brands arrive without the right network. They end up in the same tourist spots, with the same light, in the same season. We solve that.
            </p>
          </div>
        </div>
      </section>

      {/* What we produce */}
      <section className="bg-white py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-16">What we produce</p>
          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4de]">
            {[
              {
                title: "Brand Trips",
                body: "Immersive multi-day trips for press, influencers, and brand ambassadors. We handle everything from flight coordination to the last dinner — so your team focuses on content, not logistics.",
                details: ["Full logistics & concierge", "Villa & hotel buyouts", "Private dining & experiences", "Media coordination"],
              },
              {
                title: "Fam Trips",
                body: "Familiarisation trips for travel agents, journalists, and agency partners. Structured to showcase your brand's positioning in Greece — not just the country.",
                details: ["Curated route design", "Hosted experiences", "Press & media support", "Itinerary documentation"],
              },
              {
                title: "Content Creation",
                body: "Photo and video production in Greece. Scouting, permits, local talent, stylists — a complete crew assembled around your visual brief. Delivered to spec.",
                details: ["Location scouting & permits", "Photographer & videographer", "Stylist & art direction", "Post-production coordination"],
              },
            ].map(({ title, body, details }) => (
              <div key={title} className="bg-white p-10 flex flex-col gap-5">
                <h2 className="font-heading text-3xl text-[#1a1a1a] leading-tight">{title}</h2>
                <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">{body}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {details.map((d) => (
                    <li key={d} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                      <span className="text-[#ccc] shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-[#fcf7f1] py-24 px-8 md:px-16 border-t border-[#e8e4de]">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-16">Production formats</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Short",
                duration: "3 days",
                desc: "Athens + one island. Tight brief, fast turnaround. Ideal for social content or a single campaign moment.",
                includes: ["2–3 locations", "Up to 10 people", "Full logistics", "1 photographer"],
              },
              {
                name: "Extended",
                duration: "4–5 days",
                desc: "Athens + two islands. Space for storytelling — multiple environments, moods, and visual universes.",
                includes: ["4–6 locations", "Up to 20 people", "Full production crew", "Photo & video"],
              },
              {
                name: "Bespoke",
                duration: "From 6 days",
                desc: "Fully custom. Built around your brief, your talent, your season. No template, no limit.",
                includes: ["Any destination in Greece", "Any group size", "Full press & PR support", "Dedicated producer"],
              },
            ].map(({ name, duration, desc, includes }) => (
              <div key={name} className="bg-white p-10 flex flex-col gap-5">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-heading text-4xl text-[#1a1a1a]">{name}</h3>
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9]">{duration}</span>
                </div>
                <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">{desc}</p>
                <ul className="flex flex-col gap-2">
                  {includes.map((item) => (
                    <li key={item} className="font-body text-xs text-[#aaa] tracking-wider flex gap-3">
                      <span className="text-[#ccc] shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white py-24 px-8 md:px-16 border-t border-[#e8e4de]">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-16">Past productions</p>
          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4de]">
            {[
              {
                brand: "Jimmy Fairly",
                type: "Brand Trip",
                location: "Athens · Milos",
                desc: "Immersive brand trip combining Athens culture and Milos coastline. Full logistics, private villa, content production over 4 days.",
              },
              {
                brand: "Nina Ricci",
                type: "Influencer Production",
                location: "Santorini · Paros",
                desc: "Influencer campaign with international talent. Location scouting, styling, photo and video crew, full itinerary production.",
              },
              {
                brand: "Spoyl / Flipkart",
                type: "Brand Trip",
                location: "Athens · Mykonos",
                desc: "Inaugural Greek production for Flipkart's fashion platform. End-to-end production for international press and content creators.",
              },
            ].map(({ brand, type, location, desc }) => (
              <div key={brand} className="bg-white p-10 flex flex-col gap-4">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9]">{type}</span>
                <h3 className="font-heading text-3xl text-[#1a1a1a]">{brand}</h3>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-[#aaa]">{location}</p>
                <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">{desc}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#ccc] mt-6 tracking-wider">
            Further case studies available on request.
          </p>
        </div>
      </section>

      {/* Team on the ground — dark */}
      <section data-nav-dark className="bg-[#1a1a1a] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-16">What we bring to every production</p>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                cat: "Production",
                items: ["Dedicated producer on location", "Location scouting & permit management", "Full logistics (flights, transfers, accommodation)", "Budget management & reporting"],
              },
              {
                cat: "Creative",
                items: ["Photographers & videographers", "Stylists & art directors", "Hair & make-up", "Post-production coordination"],
              },
              {
                cat: "Talent & PR",
                items: ["Influencer & talent briefing", "Press coordination", "Brand ambassador management", "Media documentation"],
              },
              {
                cat: "On the ground",
                items: ["Private chef & catering", "Private transfers & yacht", "24/7 availability", "Medical support if required"],
              },
            ].map(({ cat, items }) => (
              <div key={cat}>
                <div className="h-px bg-white/15 w-12 mb-6" />
                <h3 className="font-heading text-2xl text-white mb-5">{cat}</h3>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="font-body text-sm text-white/50 leading-relaxed flex gap-3">
                      <span className="text-white/25 shrink-0">—</span>
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
      <section data-nav-dark className="relative py-36 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-6 leading-tight">
            Planning a trip<br />to Greece?
          </h2>
          <p className="font-body text-base text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Send us your brief — dates, brand, number of people, objectives. We come back within 48 hours with a first proposal.
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white/10 transition-colors">
            Send a brief
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
