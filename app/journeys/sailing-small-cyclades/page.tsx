import Nav from "../../components/Nav";

const highlights = [
  {
    title: "Koufonisia",
    description: "Crystal-clear waters, no crowds, tavernas where the menu is whatever the fisherman caught that morning.",
  },
  {
    title: "Schinoussa",
    description: "Sixteen beaches, most of them empty. The kind of island where you lose your phone and don\u2019t notice.",
  },
  {
    title: "Iraklia",
    description: "The quietest of the Small Cyclades. A cave chapel, wild herbs on every path, total silence at night.",
  },
];

const keypoints = [
  { label: "Duration", value: "5 days" },
  { label: "Route", value: "Koufonisia \u2192 Schinoussa \u2192 Iraklia" },
  { label: "Best season", value: "June \u2013 September" },
  { label: "Pace", value: "Slow, island-hopping" },
];

const includes = [
  "Private sailing vessel with skipper",
  "Hand-picked accommodation on each island",
  "Curated dining: tavernas, beach restaurants, private dinners",
  "Transfers between islands arranged",
  "Local insider contacts on each stop",
  "Detailed day-by-day route with timing & tips",
];

export default function SailingSmallCyclades() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ─── HERO ─── */}
      <section
        data-nav-dark
        className="relative h-[70vh] md:h-[85vh] flex items-end overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1920&q=80"
          alt="Small Cyclades sailing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 px-8 md:px-16 pb-12 md:pb-20 max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
            5-day route &middot; Odyssey &amp; Salt
          </p>
          <h1 className="font-heading text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] text-white mb-6">
            Sailing the<br />Small Cyclades
          </h1>
          <p className="font-body text-base md:text-lg text-white/60 max-w-lg leading-relaxed">
            Anchor in bays where you&apos;re the only boat. Dine at tavernas with no menu. Five days across the quietest islands in Greece.
          </p>
        </div>
      </section>

      {/* ─── KEY INFO BAR ─── */}
      <section className="bg-white border-b border-[#e8e4de]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {keypoints.map((kp) => (
            <div key={kp.label}>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#999] mb-1">{kp.label}</p>
              <p className="font-heading text-lg text-[#1a1a1a]">{kp.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">The route</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {highlights.map((h, i) => (
              <div key={h.title}>
                <span className="font-heading text-5xl text-[#e8e4de]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-3xl text-[#1a1a1a] mt-3 mb-4">{h.title}</h3>
                <p className="font-body text-sm text-[#888] leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMMERSIVE BREAK ─── */}
      <section data-nav-dark className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1700866125903-4188de1cd7e3?auto=format&fit=crop&w=1920&q=80"
          alt="Aegean sea"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-8 md:px-16 max-w-3xl">
          <p className="font-body text-base md:text-xl text-white/70 leading-relaxed font-light">
            &ldquo;The Small Cyclades are what the Cyclades were thirty years ago. No boutique hotels, no beach clubs. Just the sea, the light, and the kind of silence that stays with you.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888]">What the route includes</p>
          </div>

          <ul className="flex flex-col gap-4">
            {includes.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="text-[#2e5a88] mt-1 shrink-0">&bull;</span>
                <p className="font-body text-sm text-[#666] leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── PAYWALL CTA ─── */}
      <section className="bg-[#fcf7f1] py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Get the full route
          </h2>
          <p className="font-body text-sm text-[#888] leading-relaxed max-w-md mx-auto mb-10">
            Day-by-day itinerary, insider addresses, recommended stays, local contacts, and timing tips. Yours in a beautifully designed eb. Private Route.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block font-body text-xs tracking-[0.25em] uppercase bg-[#1a1a1a] text-white px-10 py-4 hover:bg-[#333] transition-colors"
            >
              Get the route · $100
            </a>
            <a
              href="/contact"
              className="inline-block font-body text-xs tracking-[0.25em] uppercase border border-[#1a1a1a] text-[#1a1a1a] px-10 py-4 hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              eb. handles everything
            </a>
          </div>

          <p className="font-body text-xs text-[#bbb] mt-6">
            Instant delivery &middot; PDF &middot; Designed by eb.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-60" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            &copy; 2026 Emma Bonnefous &middot; hello@emmabonnefous.com &middot; Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/about" className="hover:text-white/70 transition-colors">About</a>
            <a href="/experiences" className="hover:text-white/70 transition-colors">Experiences</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10">
          <p className="text-[10px] md:text-[11px] text-white/35 font-light leading-[1.5] max-w-[540px] mx-auto md:mx-0 text-center md:text-left">
            eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece.
          </p>
        </div>
      </footer>
    </main>
  );
}
