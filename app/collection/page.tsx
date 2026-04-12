const villas = [
  {
    tag: "Santorini · Oia",
    name: "Villa Petra",
    guests: "8 guests",
    bedrooms: "4 bedrooms",
    highlight: "Caldera views · Private infinity pool · Full staff",
    description:
      "Carved into the caldera cliff, Petra is the villa people think doesn't exist. It does. Exclusively through eb.",
  },
  {
    tag: "Mykonos · Aleomandra",
    name: "Villa Thalassa",
    guests: "12 guests",
    bedrooms: "6 bedrooms",
    highlight: "Direct sea access · Chef · Helipad",
    description:
      "A compound of whitewashed volumes above a private cove. Where Mykonos glamour meets genuine seclusion.",
  },
  {
    tag: "Porto Heli · Peloponnese",
    name: "Villa Kambos",
    guests: "16 guests",
    bedrooms: "8 bedrooms",
    highlight: "Private beach · Tennis court · Olive grove",
    description:
      "Greece's answer to a private estate. 4 hectares of Mediterranean gardens, a 200-metre beach, and total privacy.",
  },
  {
    tag: "Paros · Naoussa",
    name: "Villa Ageri",
    guests: "6 guests",
    bedrooms: "3 bedrooms",
    highlight: "Village setting · Rooftop pool · Butler",
    description:
      "Hidden inside a 19th-century captain's house, restored for those who find the obvious too obvious.",
  },
  {
    tag: "Lefkada · Meganisi",
    name: "Villa Ormos",
    guests: "10 guests",
    bedrooms: "5 bedrooms",
    highlight: "Private harbour · Sailing yacht included · Chef",
    description:
      "The Ionian's best-kept secret. Arrives with a 15-metre sailing yacht and a crew that knows every anchorage.",
  },
  {
    tag: "Athens · Vouliagmeni",
    name: "Villa Lykavitos",
    guests: "8 guests",
    bedrooms: "4 bedrooms",
    highlight: "Riviera location · Private pool · City proximity",
    description:
      "The Athens Riviera, privately. 20 minutes from the Acropolis. A world away from anything else.",
  },
];

import Nav from "../components/Nav";

export default function Collection() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <Nav activePage="/collection" />

      {/* Hero */}
      <section className="bg-white pt-28 md:pt-40 pb-12 md:pb-20 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">
            Villa & Yacht Collection
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#1a1a1a] mb-8">
            The most<br />extraordinary<br />addresses<br />in Greece.
          </h1>
          <p className="font-body text-lg text-[#888] max-w-xl leading-relaxed">
            Every property in our collection is personally vetted by Emma. No exceptions. No compromises. A villa earns its place here, or it doesn&apos;t appear.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white pb-8 pt-6 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          {["All", "Cyclades", "Ionian", "Peloponnese", "Athens Riviera", "Yacht"].map((f) => (
            <span
              key={f}
              className={`font-body text-xs tracking-[0.2em] uppercase px-5 py-2 border cursor-pointer transition-colors ${
                f === "All"
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "border-[#e8e4de] text-[#888] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Villa grid */}
      <section className="bg-white py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e4de]">
          {villas.map((v) => (
            <div key={v.name} className="bg-white p-8 flex flex-col gap-4">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#a7d1c9]">{v.tag}</span>
              <h2 className="font-heading text-3xl text-[#1a1a1a]">{v.name}</h2>
              <div className="flex gap-4 font-body text-xs text-[#aaa] tracking-wider">
                <span>{v.guests}</span>
                <span>·</span>
                <span>{v.bedrooms}</span>
              </div>
              <p className="font-body text-xs tracking-wider text-[#888] uppercase">{v.highlight}</p>
              <p className="font-body text-sm text-[#888] leading-relaxed flex-grow">{v.description}</p>
              <a
                href="/contact"
                className="mt-2 self-start font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px hover:border-[#2e5a88] transition-colors"
              >
                Inquire →
              </a>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-[#ccc] mt-6 tracking-wider max-w-6xl mx-auto">
          Our full collection is not published online. The most exceptional properties are shared exclusively upon inquiry.
        </p>
      </section>

      {/* BESTIA — dark */}
      <section data-nav-dark className="bg-[#1a1a1a] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-6">Our yacht</p>
            <h2 className="font-heading text-6xl md:text-7xl text-white leading-none mb-8">BESTIA.</h2>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-10">
              For those who want the sea entirely to themselves. BESTIA is our superyacht, available for charter through eb., with a crew that knows Greek waters like no one else.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Length", value: "42 metres" },
                { label: "Guests", value: "10 + 2 crew cabins" },
                { label: "Range", value: "All Greek waters" },
                { label: "Available", value: "May – October" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-1">{label}</p>
                  <p className="font-heading text-lg text-white">{value}</p>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Charter BESTIA
            </a>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: "Island itineraries", body: "From the Cyclades to the Ionian, we design the route around wind, season, and your wishes." },
              { title: "Full crew", body: "Captain, chef, hostess, and first mate. All selected by us. All fluent in discretion." },
              { title: "Private dining", body: "Each anchorage is an opportunity. Fresh catch, local wine, a table set on deck as the sun sets." },
              { title: "Combines with a villa", body: "Start at a villa in Mykonos. Sail to Paros, Naxos, Folegandros. Return by seaplane." },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-6">
                <div className="h-px bg-white/15 mt-3 w-8 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg text-white mb-2">{title}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-nav-dark className="relative py-32 px-8 md:px-16 text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
            Not finding<br />what you need?
          </h2>
          <p className="font-body text-base text-white/60 mb-10 max-w-xl mx-auto">
            Our most exceptional properties are never listed publicly. Tell us what you&apos;re looking for. We will find it.
          </p>
          <a href="/contact" className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white/10 transition-colors">
            Make a private inquiry
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
