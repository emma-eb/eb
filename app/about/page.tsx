import Nav from "../components/Nav";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <Nav activePage="/about" />

      {/* Hero */}
      <section className="bg-white pt-32 md:pt-44 pb-0 border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-[1fr_auto] gap-0 items-end">
            <div className="pb-16 md:pb-24">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">About</p>
              <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-none text-[#1a1a1a]">
                Emma<br />Bonnefous
              </h1>
              <p className="font-body text-sm text-[#888] mt-6 leading-relaxed max-w-sm">
                Luxury destination consultant & producer.<br />Athens, Greece.
              </p>
            </div>
            {/* Portrait — place emma-portrait.jpg in /public */}
            <div className="hidden md:block w-72 lg:w-96 h-[420px] lg:h-[500px] overflow-hidden self-end">
              <img
                src="/emma-portrait.jpg"
                alt="Emma Bonnefous"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro — two columns */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div>
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">The background</p>
          </div>
          <div>
            <p className="font-body text-xl md:text-2xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
              Twelve years producing private experiences for luxury houses: Balmain, Van Cleef &amp; Arpels, Karl Lagerfeld, Jimmy Choo. Events, brand trips, and productions across 95 countries. The kind of work that requires knowing who to call at midnight, in any city, to make something extraordinary happen on time.
            </p>
            <p className="font-body text-sm text-[#888] mt-6 leading-relaxed max-w-xl">
              In 2020, I moved to Athens. Not to slow down. To go deeper. One country, one focus, one standard.
            </p>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-t border-b border-[#e8e4de] py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { n: "12+", label: "Years in luxury production" },
            { n: "95+", label: "Countries worked in" },
            { n: "300", label: "Days of sun per year" },
            { n: "1", label: "Country we work in" },
          ].map(({ n, label }) => (
            <div key={n}>
              <p className="font-heading text-5xl md:text-6xl text-[#1a1a1a] leading-none mb-3">{n}</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Greece */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div>
            <div className="h-px bg-[#a7d1c9] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Why Greece</p>
          </div>
          <div>
            <p className="font-body text-lg md:text-xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
              Greece is not a backdrop. It is a culture with 3,000 years of hospitality, a geography of extreme contrasts, and a network of people (chefs, fishermen, archaeologists, villa owners) who don&apos;t advertise what they offer.
            </p>
            <p className="font-body text-sm text-[#888] mt-6 leading-relaxed max-w-xl">
              Getting access to the Acropolis before dawn, anchoring in Kleftiko in August without a crowd, having dinner in a cave on Kimolos. None of this is bookable online. It requires years of presence, respect, and personal relationships. That is what eb. provides.
            </p>
            <p className="font-body text-sm text-[#888] mt-4 leading-relaxed max-w-xl">
              I bridge European production standards with the expectations of international luxury clients: from UHNW travelers to the most demanding luxury brands planning content in Greece.
            </p>
          </div>
        </div>
      </section>

      {/* What I produce — dark */}
      <section data-nav-dark className="bg-[#1a1a1a] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-16">What I produce</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Private Journeys",
                body: "Bespoke itineraries for discerning travelers: UHNW individuals and families who want Greece without compromise. Every transfer, every villa, every dinner arranged before departure.",
              },
              {
                title: "Influencer & Brand Production",
                body: "Brand trips, fam trips, content creation for luxury houses. Full production in Greece: scouting, logistics, photographers, stylists, local talent. Jimmy Fairly, Nina Ricci, Spoyl.",
              },
              {
                title: "Signature Celebrations",
                body: "Proposals, weddings, private dinners. Events where the scenery is as carefully produced as the experience itself. Clifftops, caves, Byzantine courtyards.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <div className="h-px bg-white/15 w-12 mb-6" />
                <h3 className="font-heading text-2xl text-white mb-4">{title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="bg-white py-24 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div>
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Past collaborations</p>
            <p className="font-body text-xs text-[#ccc] tracking-wider mt-1">Paris production</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-x-12 gap-y-5">
              {["Balmain", "Van Cleef & Arpels", "Karl Lagerfeld", "Jimmy Choo", "Coach", "Nina Ricci", "Boucheron"].map((brand) => (
                <span key={brand} className="font-body text-sm tracking-[0.15em] uppercase text-[#bbb]">{brand}</span>
              ))}
            </div>
            <div className="mt-10">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888] mb-5">Greece</p>
              <div className="flex flex-wrap gap-x-12 gap-y-5">
                {["Jimmy Fairly", "Nina Ricci", "Spoyl / Flipkart"].map((brand) => (
                  <span key={brand} className="font-body text-sm tracking-[0.15em] uppercase text-[#bbb]">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-28 md:py-36 px-8 md:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] mb-6 leading-tight">
            Let&apos;s talk about<br />what you have in mind.
          </h2>
          <p className="font-body text-sm text-[#888] mb-10 leading-relaxed">
            Whether you are planning a private journey, a brand trip, or a celebration. The first conversation is always a real one.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-10 py-4 hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Get in touch
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
