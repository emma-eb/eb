"use client";

import { useEffect, useRef } from "react";
import Nav from "../../components/Nav";
import NewsletterBanner from "../../components/NewsletterBanner";

const chapters = [
  {
    num: "01",
    tag: "ATHENS, AS A WAY IN",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1400&q=85",
    body: "Three nights in Athens before the island, in a small hotel with the Acropolis from the rooftop. The eb. studio designs the city around what you actually want, no group tours, no ticketed lines. A late dinner at a place that does not take walk-ins. A morning at a private collection that opens for ten people at a time. Then a midday flight east, forty minutes over the Aegean, and the second half of the week begins.",
    left: true,
  },
  {
    num: "02",
    tag: "ARRIVAL ON ASTYPALEA",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
    body: "The plane lands at the western tip of the island. A driver takes you to your hotel in Chora, the white village that climbs to the Venetian castle on the highest point of the island. You arrive in time for the kind of slow afternoon Astypalea was made for. Walk up to the castle. Watch the sun set over the harbour from the rooftop of the only bar that opens for it. The week begins from there.",
    left: false,
  },
  {
    num: "03",
    tag: "A DAY BY BOAT",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85",
    body: "A private boat for the day, just for you. The captain takes you east, to the small islets the locals visit on weekends and the rest of Greece does not know exist. Anchor at Koutsomitis, where the beach is sand on both sides of the boat. Lunch on the water. A stop at the cave of Negrou on the way back, swimming in light that comes from below. Return to Chora before sunset.",
    left: true,
  },
  {
    num: "04",
    tag: "THE INSIDE OF THE ISLAND",
    image: "https://images.unsplash.com/photo-1518558997970-ba7e3ad1b13b?auto=format&fit=crop&w=1400&q=85",
    body: "The eb. studio arranges a private electric vehicle and driver for the day, the same fleet the island has rolled out as part of its smart-island programme with Volkswagen. The driver knows where the small monasteries are, where the goats outnumber the people, and where the single taverna at the back of the island serves lunch when you ask the morning before. The afternoon ends back at a quiet bay no road reaches.",
    left: false,
  },
  {
    num: "05",
    tag: "THE LAST EVENING",
    image: "https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1400&q=85",
    body: "The last night, dinner is on the rooftop facing the castle, at the table the family who runs the place keeps for the eb. studio\u2019s clients. Slow-cooked goat, the local cheese, a wine no one outside the island knows. Below, the lights of Chora come on, one by one. You leave the next morning, before the heat. Most clients are already planning when to come back.",
    left: true,
  },
];

const included = [
  "Three nights in a hand-selected boutique hotel in Athens, with Acropolis views",
  "Four nights in a hand-selected boutique hotel in Chora, Astypalea",
  "Private chauffeured transfers in Athens, return airport",
  "One-way flight Athens to Astypalea (return scheduled)",
  "Private chauffeured transfers on Astypalea, including arrival and departure",
  "Private electric vehicle and driver for one full inland day",
  "Private boat charter for one full day, lunch on board",
  "Hand-selected restaurant and taverna reservations on both legs",
  "One private dinner on the rooftop facing the castle, the last evening",
  "24/7 reachable concierge throughout the journey",
  "A pre-trip briefing call with the eb. studio to shape the week around you",
];

export default function AstypaleaJourney() {
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const d = parseInt(el.dataset.delay || "0", 10);
          setTimeout(() => {
            el.classList.add("visible");
            setTimeout(() => el.classList.add("done"), 800);
          }, d);
          revealObs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    return () => revealObs.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/journeys" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO 100dvh
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="/astypalea.jpg"
          alt="Astypalea, the Greek island before everyone else"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex items-end">
          <div className="p-8 md:p-16 max-w-[720px]">
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium font-body mb-4">
              Private Journey &middot; 01
            </span>
            <p
              className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/70 mb-4"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              7 Nights &middot; Athens + Astypalea &middot; May&ndash;September
            </p>
            <h1
              className="font-heading text-white uppercase leading-[0.95] mb-5 tracking-wide"
              style={{
                fontSize: "clamp(48px, 7vw, 110px)",
                letterSpacing: "-0.01em",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Astypalea, Before<br />Everyone Else.
            </h1>
            <p
              className="max-w-[550px] text-white/85 text-[15px] md:text-[16px] leading-[1.6] font-light font-body mb-5"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              Athens, then the Greek island the Guardian named the world{'\u2019'}s #1 destination of 2026. While there{'\u2019'}s still no one there.
            </p>
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white/90 text-[10px] uppercase tracking-[0.15em] font-medium font-body">
              Featured #1 by The Guardian, 2026
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => journeyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
          aria-label="Scroll to journey"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 animate-bounce transition-opacity cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — INTRODUCTION
      ═══════════════════════════════════════════ */}
      <section ref={journeyRef} id="the-journey" className="bg-white py-24 md:py-32 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/55 font-medium mb-6">
            The Journey
          </p>
          <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto mb-16" data-delay="80" />

          <h2
            className="reveal font-heading text-[#2e5a88] leading-[1.05]"
            data-delay="120"
            style={{
              fontSize: "clamp(36px, 5vw, 80px)",
              letterSpacing: "-0.01em",
            }}
          >
            Three nights in Athens.
            <br />
            <span className="text-[#2e5a88]/45">Four on an island most travellers cannot place on a map.</span>
          </h2>

          <p className="reveal font-body text-[#1a1a1a]/65 text-[15px] md:text-[16px] leading-relaxed font-light max-w-[700px] mx-auto mt-12" data-delay="200">
            Astypalea sits at the eastern edge of the Cyclades, far enough from the standard ferry routes that it has stayed quiet through twenty years of Greek tourism. In 2026, the Guardian named it the world{'\u2019'}s most desirable destination. The eb. studio has been designing weeks here for clients who already knew. This is the journey for those who want to arrive before the rest.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — KEY FACTS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/55 font-medium mb-4">
              The Facts
            </p>
            <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto" data-delay="80" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x md:divide-black/10">
            {[
              { label: "Duration", value: "From 7 nights" },
              { label: "Route", value: "Athens \u2192 Astypalea" },
              { label: "Season", value: "May to September" },
              { label: "Tailored for", value: "Couples" },
            ].map((f, i) => (
              <div key={f.label} className="reveal text-center px-4" data-delay={i * 80}>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/45 font-medium mb-4">
                  {f.label}
                </p>
                <p
                  className="font-heading text-[#2e5a88] leading-tight"
                  style={{ fontSize: "clamp(18px, 2vw, 28px)", letterSpacing: "-0.01em" }}
                >
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — THE ROUTE (5 chapitres)
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/55 font-medium mb-4">
              The Route
            </p>
            <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto" data-delay="80" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {chapters.map((c) => (
              <div key={c.num} className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Numero watermark */}
                <span
                  className="hidden md:block absolute top-0 font-heading text-[#2e5a88]/[0.08] pointer-events-none select-none"
                  style={{
                    fontSize: "clamp(120px, 15vw, 200px)",
                    lineHeight: 0.8,
                    [c.left ? "right" : "left"]: "0",
                  }}
                >
                  {c.num}
                </span>

                {/* Photo */}
                <div className={`reveal relative ${c.left ? "md:order-1 md:-ml-[5%]" : "md:order-2 md:-mr-[5%]"}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.tag}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`reveal relative z-10 ${c.left ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6"}`} data-delay="100">
                  <h3
                    className="font-heading text-[#2e5a88] uppercase leading-[1] tracking-wide mb-6"
                    style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.01em" }}
                  >
                    {c.tag}
                  </h3>
                  <p className="font-body text-[#1a1a1a]/65 text-[15px] md:text-[16px] leading-relaxed font-light max-w-[540px]">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — CITATION
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="reveal font-heading text-[#2e5a88] leading-[1.1]"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              letterSpacing: "-0.01em",
            }}
          >
            Some islands you visit.
            <br />
            <span className="text-[#2e5a88]/45">This one, you have to choose.</span>
          </h2>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — WHAT'S INCLUDED
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/55 font-medium mb-4">
              What{'\u2019'}s Included
            </p>
            <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto" data-delay="80" />
          </div>

          <ul className="space-y-0">
            {included.map((item, i) => (
              <li
                key={i}
                className="reveal font-body text-[#1a1a1a]/70 text-[15px] leading-loose py-3 border-b border-black/[0.06] pl-2"
                data-delay={Math.min(i * 40, 200)}
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="reveal font-body italic text-[#1a1a1a]/45 text-[13px] text-center mt-12" data-delay="200">
            Each journey is shaped around you. The above is a starting point, not a script.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 7 — A NOTE FROM eb.
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/55 font-medium mb-4">
            A Note
          </p>
          <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto mb-12" data-delay="80" />

          <p className="reveal font-body text-[#1a1a1a]/65 text-[15px] md:text-[16px] leading-relaxed font-light" data-delay="120">
            The eb. studio has been to Astypalea more than once. The first visits were research, looking for what had been written, the smart island, the electric vehicles, the Guardian list. What stayed with us was none of that. It was the quiet. The way the same family runs the rooftop bar where you watch the castle, and the boat that takes you to islands without names. That kind of intimacy doesn{'\u2019'}t scale. Which is exactly why we want a small number of clients to experience it now, before it changes.
          </p>
          <p className="reveal font-body italic text-[#2e5a88] text-[14px] mt-8" data-delay="180">
            eb. Athens.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 8 — CTA FINAL compact
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/55 font-medium mb-6">
            Inquire
          </p>
          <h2
            className="reveal font-heading text-[#2e5a88] leading-[1.05] mb-6"
            data-delay="80"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.01em",
            }}
          >
            Designed around you.
          </h2>
          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/65 font-light leading-relaxed mb-8 max-w-[500px] mx-auto" data-delay="150">
            Tell us when, with whom, and how you want to feel. We{'\u2019'}ll shape the rest.
          </p>
          <a
            href="/contact?ref=astypalea"
            className="reveal inline-block font-body text-[#2e5a88] text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#2e5a88] hover:opacity-70 transition-opacity door-cta"
            data-delay="220"
          >
            Start the conversation &rarr;
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <NewsletterBanner />
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-t border-white/30" />
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-8 mt-8">
          <div className="flex flex-col items-center md:items-start gap-4 order-1">
            <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-80" /></a>
            <p className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider text-left">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
            <a href="mailto:hello@emmabonnefous.com" className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors">
              hello@emmabonnefous.com
            </a>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-6 gap-y-2 font-body text-xs tracking-[0.15em] uppercase text-[#fcf7f1]/80 text-center md:text-right md:justify-end order-2 md:order-3">
            <a href="/influencer-production" className="hover:text-[#fcf7f1] transition-colors py-2">For Brands</a>
            <a href="/journal" className="hover:text-[#fcf7f1] transition-colors py-2">Journal</a>
            <a href="/about" className="hover:text-[#fcf7f1] transition-colors py-2">About</a>
            <a href="/contact" className="hover:text-[#fcf7f1] transition-colors py-2">Contact</a>
          </div>
          <div className="flex flex-col items-center gap-4 order-3 md:order-2">
            <div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/60 tracking-wider">
              <a href="https://www.instagram.com/emma_bonnefous_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">Instagram</a>
              <span className="py-2">&middot;</span>
              <a href="https://www.linkedin.com/in/emmabonnefous/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">LinkedIn</a>
            </div>
            <div className="hidden md:flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider">
              <a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a>
              <span className="py-2">&middot;</span>
              <a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a>
            </div>
          </div>
          <div className="flex md:hidden flex-col items-center gap-3 order-4">
            <a href="mailto:hello@emmabonnefous.com" className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors py-2">
              hello@emmabonnefous.com
            </a>
            <div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider">
              <a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a>
              <span className="py-2">&middot;</span>
              <a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a>
            </div>
            <p className="font-body text-xs text-[#fcf7f1]/50 tracking-wider text-center">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
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
