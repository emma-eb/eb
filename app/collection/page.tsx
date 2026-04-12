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
    <main className="flex flex-col min-h-screen">

      <Nav theme="light" activePage="/collection" />

      {/* Hero */}
      <section className="bg-[#fcf7f1] pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-6">
            Villa & Yacht Collection
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#2e5a88] mb-8">
            The most<br />extraordinary<br />addresses<br />in Greece.
          </h1>
          <p className="font-body text-lg text-[#2e5a88]/60 max-w-xl leading-relaxed">
            Every property in our collection is personally vetted by Emma. No exceptions. No compromises. A villa earns its place here — or it doesn&apos;t appear.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-[#fcf7f1] pb-8 px-8 md:px-16 border-b border-[#2e5a88]/10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          {["All", "Cyclades", "Ionian", "Peloponnese", "Athens Riviera", "Yacht"].map((f) => (
            <span
              key={f}
              className={`font-body text-xs tracking-[0.2em] uppercase px-5 py-2 border cursor-pointer transition-colors ${
                f === "All"
                  ? "bg-[#2e5a88] text-[#fcf7f1] border-[#2e5a88]"
                  : "border-[#2e5a88]/20 text-[#2e5a88]/60 hover:border-[#2e5a88] hover:text-[#2e5a88]"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Villa grid */}
      <section className="bg-[#fcf7f1] py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2e5a88]/10">
          {villas.map((v) => (
            <div key={v.name} className="bg-[#fcf7f1] p-8 flex flex-col gap-4 group">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#a7d1c9]">{v.tag}</span>
              <h2 className="font-heading text-3xl text-[#2e5a88]">{v.name}</h2>
              <div className="flex gap-4 font-body text-xs text-[#2e5a88]/40 tracking-wider">
                <span>{v.guests}</span>
                <span>·</span>
                <span>{v.bedrooms}</span>
              </div>
              <p className="font-body text-xs tracking-wider text-[#7da7c4] uppercase">{v.highlight}</p>
              <p className="font-body text-sm text-[#2e5a88]/60 leading-relaxed">{v.description}</p>
              <a
                href="/contact"
                className="mt-2 self-start font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-px hover:border-[#2e5a88] transition-colors"
              >
                Inquire →
              </a>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-[#2e5a88]/30 mt-6 tracking-wider max-w-6xl mx-auto">
          Our full collection is not published online. The most exceptional properties are shared exclusively upon inquiry.
        </p>
      </section>

      {/* BESTIA — Superyacht */}
      <section className="bg-[#2e5a88] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a7d1c9] mb-6">
              Our yacht
            </p>
            <h2 className="font-heading text-6xl md:text-7xl text-[#fcf7f1] leading-none mb-8">
              BESTIA.
            </h2>
            <p className="font-body text-lg text-[#fcf7f1]/70 leading-relaxed mb-10">
              For those who want the sea entirely to themselves. BESTIA is our superyacht — available for charter through eb., with a crew that knows Greek waters like no one else.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Length", value: "42 metres" },
                { label: "Guests", value: "10 + 2 crew cabins" },
                { label: "Range", value: "All Greek waters" },
                { label: "Available", value: "May – October" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9] mb-1">{label}</p>
                  <p className="font-heading text-lg text-[#fcf7f1]">{value}</p>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-block font-body text-xs tracking-[0.25em] uppercase bg-[#fcf7f1] text-[#2e5a88] px-8 py-4 hover:bg-[#a7d1c9] transition-colors"
            >
              Charter BESTIA
            </a>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: "Island itineraries", body: "From the Cyclades to the Ionian — we design the route around wind, season, and your wishes." },
              { title: "Full crew", body: "Captain, chef, hostess, and first mate. All selected by us. All fluent in discretion." },
              { title: "Private dining", body: "Each anchorage is an opportunity. Fresh catch, local wine, a table set on deck as the sun sets." },
              { title: "Combines with a villa", body: "Start at a villa in Mykonos. Sail to Paros, Naxos, Folegandros. Return by seaplane." },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-6">
                <div className="h-px bg-[#a7d1c9] mt-3 w-8 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg text-[#fcf7f1] mb-2">{title}</h3>
                  <p className="font-body text-sm text-[#fcf7f1]/60 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#a7d1c9] py-24 px-8 md:px-16 text-center">
        <h2 className="font-heading text-5xl md:text-6xl text-[#2e5a88] mb-6">
          Not finding<br />what you need?
        </h2>
        <p className="font-body text-base text-[#2e5a88]/80 mb-10 max-w-xl mx-auto">
          Our most exceptional properties are never listed publicly. Tell us what you&apos;re looking for — we will find it.
        </p>
        <a
          href="/contact"
          className="inline-block font-body text-xs tracking-[0.25em] uppercase bg-[#2e5a88] text-[#fcf7f1] px-10 py-4 hover:bg-[#1a3a5c] transition-colors"
        >
          Make a private inquiry
        </a>
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
