import Nav from "../../components/Nav";

export default function OdysseyGreece() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ─── HERO ─── */}
      <section
        data-nav-dark
        className="relative h-[100dvh] flex flex-col justify-end overflow-hidden"
      >
        <img
          src="/hero-bateau.jpg"
          alt="Odyssey Greece — Athens, Milos, Kimolos"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "right center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

        <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-white/45 mb-5">
            A curated journey · Summer 2026
          </p>
          <h1 className="font-heading text-[clamp(3.5rem,13vw,12rem)] leading-[0.85] text-white mb-5">
            Odyssey<br />Greece
          </h1>
          <p className="font-body text-sm md:text-base text-white/55 mb-10 max-w-md leading-relaxed">
            A journey shaped by light, sea and time.<br />
            Athens · Milos · Kimolos
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {["5 Nights", "4 Hero Experiences", "3 Destinations", "Private Group"].map((b) => (
              <span key={b} className="font-body text-xs tracking-[0.2em] uppercase border border-white/25 text-white/50 px-4 py-2">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-8 flex items-center gap-3">
          <div className="w-px h-8 bg-white/25" />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-white/25">Scroll to explore</span>
        </div>
      </section>

      {/* ─── THE CONCEPT ─── */}
      <section className="bg-white py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20 items-start">
            <div className="pt-1">
              <div className="h-px bg-[#2e5a88] w-8 mb-5" />
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">The Concept</p>
            </div>
            <div>
              <p className="font-body text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed font-light max-w-2xl">
                The kind of journey your friends will talk about for years to come.
              </p>
              <p className="font-body text-base text-[#888] mt-6 leading-relaxed max-w-xl">
                A journey designed to immerse you in the essence of Greece. From Athens to the Cyclades, a seamless rhythm of sea, light and slow moments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4de]">
            {[
              {
                label: "Adventure",
                description: "Sail to the legendary caves of Kleftiko, kayak along Sarakiniko's lunar coastline and discover hidden beaches accessible only by sea.",
              },
              {
                label: "Gastronomy",
                description: "Dine beneath the illuminated Parthenon, discover authentic Greek tavernas, and experience the Mediterranean through every meal.",
              },
              {
                label: "Culture",
                description: "Discover Kimolos, a preserved Cycladic island just off Milos. Wander through colourful fishing villages and experience authentic island life.",
              },
            ].map((p) => (
              <div key={p.label} className="bg-white p-8 md:p-12">
                <div className="h-px bg-[#2e5a88]/30 w-6 mb-6" />
                <h3 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4">{p.label}</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROUTE ─── */}
      <section data-nav-dark className="bg-[#1a1a1a] py-14 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-10">Your route</p>
          <div className="flex items-start gap-0 overflow-x-auto pb-2">
            {[
              { city: "Athens", days: "Days 1–2", info: "2 nights" },
              { city: "Milos", days: "Days 2–5", info: "3 nights" },
              { city: "Kimolos", days: "Day 4", info: "Day trip" },
              { city: "Athens", days: "Days 5–6", info: "1 night" },
            ].map((stop, i) => (
              <div key={i} className="flex items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a7d1c9] mb-3 shrink-0" />
                  <p className="font-heading text-xl md:text-3xl text-white whitespace-nowrap">{stop.city}</p>
                  <p className="font-body text-xs text-white/35 mt-1.5 tracking-wider whitespace-nowrap">{stop.days}</p>
                  <p className="font-body text-xs text-[#a7d1c9]/50 tracking-wider whitespace-nowrap">{stop.info}</p>
                </div>
                {i < 3 && (
                  <div className="flex items-center mx-5 md:mx-10 mt-2">
                    <div className="w-8 md:w-20 border-t border-dashed border-white/15" />
                    <span className="text-white/20 ml-2 text-sm">›</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DAY 1 ─── */}
      <section className="bg-white border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-heading text-[5rem] text-[#e8e4de] leading-none">01</span>
                <div>
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Athens</p>
                  <h2 className="font-heading text-2xl text-[#1a1a1a] leading-tight">The Arrival<br />of Heroes</h2>
                </div>
              </div>

              <div className="border-l-2 border-[#e8e4de] pl-6 mb-7">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#aaa] mb-2">Afternoon</p>
                <h3 className="font-body text-sm font-semibold text-[#1a1a1a] mb-2">Arrival in Athens</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed">
                  Settle into Athens at your own pace. A first introduction through the elegant streets of Plaka beneath the Acropolis. An optional visit may be arranged subject to timing.
                </p>
              </div>

              <div className="border-l-2 border-[#2e5a88] pl-6 mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-body text-xs tracking-[0.15em] uppercase bg-[#2e5a88]/10 text-[#2e5a88] px-3 py-1">Hero Experience #1</span>
                </div>
                <h3 className="font-body text-sm font-semibold text-[#1a1a1a] mb-2">Dinner Under the Parthenon</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed">
                  An unforgettable welcome dinner at a refined rooftop facing the illuminated Acropolis. Mediterranean flavours, fine Greek wines, and the magic of Athens by night.
                </p>
              </div>

              <div className="border-l-2 border-[#e8e4de] pl-6 mb-10">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#aaa] mb-2">Night</p>
                <h3 className="font-body text-sm font-semibold text-[#1a1a1a] mb-2">Monastiraki Night Walk</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed">
                  A relaxed stroll through the lively streets of Monastiraki — artisanal shops, local flavours, and traditional loukoumades by night.
                </p>
              </div>

              <div className="border-t border-[#e8e4de] pt-5">
                <p className="font-body text-xs tracking-[0.12em] uppercase text-[#aaa]">
                  Stay · 4★ Boutique Hotel · Plaka, Koukaki or Kolonaki · Acropolis views · 1 night
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80"
                  alt="Athens and the Acropolis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-32" />
              <div className="absolute bottom-5 left-5">
                <p className="font-body text-xs tracking-[0.15em] uppercase text-white/70">Athens, Greece</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DAY 2 ─── */}
      <section className="bg-[#fcf7f1] border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-20">
          <div className="flex items-center gap-5 mb-10">
            <span className="font-heading text-[4rem] text-[#e8e4de] leading-none">02</span>
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Athens → Milos</p>
              <h2 className="font-heading text-2xl text-[#1a1a1a]">Setting sail for the islands</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
            {[
              { time: "Morning", title: "Breakfast & departure", detail: "Private transfer to Piraeus port. Morning ferry to Milos — the Aegean opens up." },
              { time: "Afternoon", title: "Arrival in Milos", detail: "Check-in at a boutique seafront hotel in Adamas. Time to explore the island's first hidden corners or simply rest by the sea." },
              { time: "Evening", title: "Sunset in Plaka", detail: "The Cyclades reveal themselves at golden hour from the hilltop of Plaka village. Dinner at leisure." },
            ].map((m) => (
              <div key={m.time} className="bg-white p-7 border border-[#e8e4de]">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-3">{m.time}</p>
                <h3 className="font-body text-sm font-semibold text-[#1a1a1a] mb-2">{m.title}</h3>
                <p className="font-body text-xs text-[#888] leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-[#e8e4de]">
            <p className="font-body text-xs tracking-[0.12em] uppercase text-[#aaa]">
              Stay · Boutique Hotel in Adamas · Seafront location · 3 nights
            </p>
          </div>
        </div>
      </section>

      {/* ─── DAY 3 — HERO #2 full-width dark ─── */}
      <section
        data-nav-dark
        className="relative min-h-[75vh] flex items-end overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1571406252241-db0280bd36cd?auto=format&fit=crop&w=1920&q=80"
          alt="Sailing to Kleftiko, Milos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-body text-xs tracking-[0.2em] uppercase border border-white/30 text-white/60 px-3 py-1.5">Hero Experience #2</span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="font-heading text-[4rem] text-white/15 leading-none">03</span>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-white/40">Milos</p>
              </div>
              <h2 className="font-heading text-[clamp(2.5rem,9vw,8rem)] leading-[0.88] text-white mb-5">
                The Aegean<br />Odyssey
              </h2>
              <p className="font-body text-base text-white/55 max-w-lg leading-relaxed">
                A full day at sea. Sail along Milos' most spectacular coastline to the legendary caves of Kleftiko. Swim in crystal-clear waters, snorkel through hidden coves, and share a relaxed lunch on board as the boat rocks gently in the sun.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-right shrink-0">
              {["All-day private sailing", "Lunch & drinks on board", "Snorkeling included", "Hidden beaches by sea only"].map((d) => (
                <p key={d} className="font-body text-xs tracking-[0.12em] uppercase text-white/35">{d}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DAY 4 — HERO #3 ─── */}
      <section className="bg-white border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-start">
            <div className="relative">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590068560361-87d6b26e4017?auto=format&fit=crop&w=900&q=80"
                  alt="Kimolos, the secret island"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-5 left-5">
                <span className="font-body text-xs tracking-[0.15em] uppercase bg-[#2e5a88] text-white px-4 py-2">
                  Hero Experience #3
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-heading text-[5rem] text-[#e8e4de] leading-none">04</span>
                <div>
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Milos → Kimolos</p>
                  <h2 className="font-heading text-2xl text-[#1a1a1a] leading-tight">Kimolos,<br />the Secret Island</h2>
                </div>
              </div>

              <div className="border-l-2 border-[#2e5a88] pl-6 mb-8">
                <h3 className="font-body text-sm font-semibold text-[#1a1a1a] mb-2">A discreet escape beyond Milos</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed">
                  Reach Kimolos by a short local ferry crossing from Pollonia. A preserved Cycladic island that few visitors ever discover. A slow day at the island's own pace — quiet chora, secluded beaches, untouched landscapes. Return to Milos in the afternoon.
                </p>
              </div>

              <div className="bg-[#fcf7f1] p-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-4">What makes it rare</p>
                {[
                  "15-minute ferry from Pollonia, Milos",
                  "No luxury tourism infrastructure",
                  "Local fishing village life intact",
                  "Cycladic architecture unspoiled",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2.5 border-b border-[#e8e4de] last:border-0">
                    <div className="w-1 h-1 rounded-full bg-[#2e5a88] shrink-0" />
                    <p className="font-body text-xs text-[#888]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DAY 5 — HERO #4 full-width dark ─── */}
      <section
        data-nav-dark
        className="relative min-h-[75vh] flex items-end overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1684246151046-6cd0bc29f827?auto=format&fit=crop&w=1920&q=80"
          alt="Sarakiniko, Milos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-body text-xs tracking-[0.2em] uppercase border border-white/30 text-white/60 px-3 py-1.5">Hero Experience #4</span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="font-heading text-[4rem] text-white/15 leading-none">05</span>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-white/40">Milos → Athens</p>
              </div>
              <h2 className="font-heading text-[clamp(3rem,10vw,9rem)] leading-[0.88] text-white mb-5">
                Moonwalk
              </h2>
              <p className="font-body text-base text-white/55 max-w-lg leading-relaxed">
                A morning kayak experience along Sarakiniko's lunar coastline. Navigate through volcanic formations and sea caves accessible only from the water. A last afternoon in Milos — then the evening ferry back to Athens.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-right shrink-0">
              {["Guided kayak experience", "Volcanic formations", "Sea caves by water only", "Evening ferry to Athens"].map((d) => (
                <p key={d} className="font-body text-xs tracking-[0.12em] uppercase text-white/35">{d}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DAY 6 ─── */}
      <section className="bg-[#fcf7f1] border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-20">
          <div className="flex items-center gap-5 mb-8">
            <span className="font-heading text-[4rem] text-[#e8e4de] leading-none">06</span>
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">Athens · Departure</p>
              <h2 className="font-heading text-2xl text-[#1a1a1a]">A slow farewell</h2>
            </div>
          </div>
          <div className="max-w-xl">
            <p className="font-body text-base text-[#888] leading-relaxed mb-8">
              A final morning to wander through Athens at your own pace. A coffee in Plaka, a last stroll beneath the Acropolis, a few moments to hold on to before private transfer to the airport.
            </p>
            <p className="font-body text-sm text-[#2e5a88] italic leading-relaxed">
              "The kind of journey your friends will talk about for years to come."
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4 HERO EXPERIENCES ─── */}
      <section data-nav-dark className="bg-[#1a1a1a] py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px bg-white/10 flex-1" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/30">4 Hero Experiences</p>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {[
              {
                n: "#1",
                day: "Day 1 · Athens",
                title: "Dinner Under\nthe Parthenon",
                description: "A rooftop dinner facing the illuminated Acropolis. Mediterranean flavours, fine Greek wines, and the magic of Athens at night. Your first Hero Experience sets the tone for everything ahead.",
              },
              {
                n: "#2",
                day: "Day 3 · Milos",
                title: "The Aegean\nOdyssey",
                description: "Full-day sailing to the legendary caves of Kleftiko along Milos' most spectacular coastline. Crystal-clear waters, hidden coves, snorkeling and lunch on board.",
              },
              {
                n: "#3",
                day: "Day 4 · Kimolos",
                title: "Kimolos,\nthe Secret Island",
                description: "A preserved Cycladic island that few ever discover. Quiet chora, secluded beaches, untouched landscapes — reached by a 15-minute local ferry from Milos.",
              },
              {
                n: "#4",
                day: "Day 5 · Sarakiniko",
                title: "Moonwalk",
                description: "A guided kayak experience along the lunar coastline of Sarakiniko. Volcanic white rock formations and sea caves accessible only from the water.",
              },
            ].map((exp) => (
              <div key={exp.n} className="bg-[#1a1a1a] p-10 md:p-14 flex flex-col gap-4">
                <span className="font-heading text-6xl text-white/8 leading-none">{exp.n}</span>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#a7d1c9]/50">{exp.day}</p>
                <h3 className="font-heading text-3xl md:text-4xl text-white leading-[0.9] whitespace-pre-line">{exp.title}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a]">What&apos;s included</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#e8e4de] mb-8">
            {[
              {
                label: "Accommodation",
                detail: "4★ boutique hotels in central Athens (2 nights) + seafront hotel in Adamas, Milos (3 nights). 5 rooms. Breakfast included from Day 2.",
              },
              {
                label: "Transport",
                detail: "Private airport & port transfers. All island transfers including local taxis to and from every experience.",
              },
              {
                label: "Ferries",
                detail: "All ferry tickets: Athens ↔ Milos (return) and Milos ↔ Kimolos (return).",
              },
              {
                label: "4 Hero Experiences",
                detail: "Dinner Under the Parthenon · The Aegean Odyssey (sailing + lunch) · Kimolos Secret Island · Moonwalk kayak at Sarakiniko.",
              },
              {
                label: "Services",
                detail: "Dedicated eb. concierge throughout the journey. Curated restaurant guide. Full on-ground coordination.",
              },
              {
                label: "Group",
                detail: "Designed for a private group of 5 guests. All services private — nothing shared with other travellers.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8 md:p-10">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] mb-3">{item.label}</p>
                <p className="font-body text-sm text-[#888] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#fcf7f1] border border-[#e8e4de] p-8 md:p-10">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-4">Not included</p>
            <p className="font-body text-sm text-[#aaa] leading-relaxed">
              International flights · Lunches (except Day 3 sailing) · Dinners (except Day 1 welcome dinner) · Beverages · Travel insurance · Personal expenses & gratuities · Local accommodation taxes payable on site
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section data-nav-dark className="bg-[#1a1a1a] py-32 md:py-44 px-8 md:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="h-px bg-white/10 w-12 mx-auto mb-14" />
          <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white mb-8">
            Your journey<br />starts here.
          </h2>
          <p className="font-body text-sm text-white/40 mb-12 leading-relaxed max-w-sm mx-auto">
            This journey was curated for a private group of 5. Yours begins with a conversation — tell us who you are and what you dream of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              Begin your journey
            </a>
            <a
              href="/journeys"
              className="font-body text-xs tracking-[0.25em] uppercase text-white/35 border border-white/15 px-10 py-4 hover:text-white/70 hover:border-white/40 transition-colors"
            >
              Explore other journeys
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer data-nav-dark className="bg-[#1a1a1a] border-t border-white/8 py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-60" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            © 2026 Emma Bonnefous · hello@emmabonnefous.com · Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/journeys" className="hover:text-white/70 transition-colors">Journeys</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
