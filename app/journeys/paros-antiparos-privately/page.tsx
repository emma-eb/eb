"use client";

import { useEffect, useRef } from "react";
import Nav from "../../components/Nav";
import NewsletterBanner from "../../components/NewsletterBanner";

const chapters = [
  {
    num: "01",
    tag: "A VILLA ON THE SOUTH COAST",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
    body: "A short flight from Athens, and you arrive at a hand-selected villa on the southern coast of Paros, the quiet side of the island where the bays are calmer, the wind is softer, and the architecture is older. Private pool, terrace, sea views, a setting that works equally for couples looking to do nothing, friends who want to host long lunches, and families travelling with very young children. Your driver is on call. The chef arrives when you ask. The first afternoon begins from your own pool.",
    left: true,
  },
  {
    num: "02",
    tag: "NAOUSSA, AT THE TABLE",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
    body: "Two evenings in Naoussa, the small fishing port that became the most elegant address in the Cyclades without ever quite admitting it. One night, a fish taverna on the quay where the boats unload at sunset and the waiter tells you what came in that morning. Another, dinner at Mario, the Italian kitchen that quietly defines the evenings of the Athenian crowd who summer here. After dinner, the Chora behind the port holds a few more bars and one or two galleries worth opening, depending on the night.",
    left: false,
  },
  {
    num: "03",
    tag: "THE YACHT TO ANTIPAROS AND DESPOTIKO",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85",
    body: "A private yacht for the day, leaving the bay of Paros mid-morning. Twenty minutes across the channel you reach Antiparos, the smaller, quieter island where the Italian set has been building quietly for two decades. Continue further west to Despotiko, the uninhabited islet where ancient ruins sit directly in the sand and the water is the colour of a photograph that\u2019s been retouched. Lunch on board in a cove only the crew knows. An afternoon at Stou Beach in Antiparos for the later meal. Back to Paros by sunset.",
    left: true,
  },
  {
    num: "04",
    tag: "THE INLAND OF PAROS",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
    body: "One day belongs to the inland of Paros. A driver takes you to Lefkes, the old Byzantine capital tucked into the hills, the village that stayed untouched when the coast opened up. White chapels, narrow alleys cut from marble, a single kafeneio where the older men have been playing the same game for decades. Lunch at a taverna no one writes about. Afternoon at Antiparos Chora, on the other side of the channel, where the village streets are chalked with bougainvillea and the only traffic is bicycles. Back to the villa for a long evening swim.",
    left: false,
  },
  {
    num: "05",
    tag: "THE DAYS THAT DON\u2019T NEED A PLAN",
    image: "https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=1400&q=85",
    body: "Three of the seven days are reserved for nothing in particular. The pool. The chef on demand. A driver to a different bay each morning, because the southern coast of Paros has six or seven small beaches that work depending on the wind, and Drios and Aliki are the calmest for young children. A spa team on call at the villa for the parents. Sailing lessons with a skipper for older children, when there are any. Dinner sometimes at the villa, sometimes back in Naoussa, sometimes at the taverna by the bay where the family has been cooking the same fish for forty years.",
    left: true,
  },
];

const included = [
  "Seven nights in a hand-selected private villa on the southern coast of Paros, with sea views and pool",
  "Private chauffeured transfers from Paros airport, return",
  "Private driver and car on call throughout the stay",
  "One full-day private yacht charter to Antiparos and Despotiko, lunch on board",
  "Hand-selected restaurant reservations in Naoussa for the evenings that matter, including a table at Mario",
  "One private afternoon at Stou Beach, Antiparos",
  "Private inland day with driver and guide, including Lefkes and Antiparos Chora",
  "Private chef at the villa for selected dinners, market sourcing arranged",
  "In-villa spa team for treatments on demand",
  "Sailing lessons with a local skipper, available for older children if travelling with family",
  "Hand-selected restaurant and taverna reservations across Paros and Antiparos",
  "24/7 reachable concierge throughout the journey",
  "A pre-trip briefing call with the eb. studio to shape the week around you",
];

export default function ParosJourney() {
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
          BLOC 1 — HERO
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=85"
          alt="Paros and Antiparos, privately, by eb."
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 pointer-events-none" />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center pointer-events-none">
          <span className="inline-block px-5 py-2 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[11px] uppercase tracking-[0.15em] font-medium font-body">
            Private Journey &middot; 07
          </span>
          <p
            className="font-body text-[11px] uppercase tracking-[0.2em] text-white/70 mt-4"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            7 Nights &middot; Private Villa + Yacht &middot; May&ndash;October
          </p>
          <h1
            className="font-heading text-white leading-[0.95] mt-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 9vw, 140px)",
              letterSpacing: "-0.01em",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Paros + Antiparos, Privately.
          </h1>
          <p
            className="max-w-[680px] text-white/85 text-[16px] md:text-[18px] leading-[1.6] font-light font-body mt-6"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            The chicest of the central Cyclades, without ever crossing a crowd. A villa on the quiet south coast, a yacht for the day, a week to settle in.
          </p>
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
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium mb-6">
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
            Some islands stayed quiet on purpose.
            <br />
            <span className="text-[#2e5a88]/45">These are two of them.</span>
          </h2>

          <div className="max-w-[700px] mx-auto mt-12 space-y-6">
            <p className="reveal font-body text-black/65 text-[15px] md:text-[16px] leading-relaxed font-light" data-delay="200">
              Seven nights in a hand-selected villa on the southern coast of Paros, where the bays are calm, the light stays golden, and the scale is human. A private yacht for the day takes you across the channel to Antiparos and to Despotiko, the uninhabited islet where ancient ruins sit in the sand. Naoussa for dinner. The southern beaches for the afternoons. A villa for the rest of the week.
            </p>
            <p className="reveal font-body text-black/65 text-[15px] md:text-[16px] leading-relaxed font-light" data-delay="260">
              Designed for couples, small groups of friends, and young families who want the Cyclades without the volume. The Italian set has been spending its summers here for twenty years for a reason.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — KEY FACTS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium mb-4">
              The Facts
            </p>
            <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto" data-delay="80" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x md:divide-black/10">
            {[
              { label: "Duration", value: "From 7 nights" },
              { label: "Base", value: "Villa, south coast Paros" },
              { label: "Best Season", value: "May to October" },
              { label: "Tailored for", value: "Couples, friends, families" },
            ].map((f, i) => (
              <div key={f.label} className="reveal text-center px-4" data-delay={i * 80}>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-black/45 font-medium mb-4">
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
          BLOC 4 — THE WEEK (5 chapitres)
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium mb-4">
              The Week
            </p>
            <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto" data-delay="80" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {chapters.map((c) => (
              <div key={c.num} className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
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

                <div className={`reveal relative z-10 ${c.left ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6"}`} data-delay="100">
                  <p className="font-body text-[11px] uppercase tracking-[0.2em] text-[#2e5a88] font-medium mb-4">
                    {c.tag}
                  </p>
                  <p className="font-body text-black/65 text-[15px] md:text-[16px] leading-relaxed font-light max-w-[540px]">
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
            The loudest islands sell themselves.
            <br />
            <span className="text-[#2e5a88]/45">The quietest ones are kept by the people who know.</span>
          </h2>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — WHAT'S INCLUDED
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium mb-4">
              What{'\u2019'}s Included
            </p>
            <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto" data-delay="80" />
          </div>

          <ul className="space-y-0">
            {included.map((item, i) => (
              <li
                key={i}
                className="reveal font-body text-black/70 text-[15px] leading-loose py-3 border-b border-black/[0.06] pl-2"
                data-delay={Math.min(i * 30, 200)}
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="reveal font-body italic text-black/45 text-[13px] text-center mt-12" data-delay="200">
            Each journey is shaped around you. The above is a starting point, not a script.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 7 — A NOTE FROM eb.
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium mb-4">
            A Note
          </p>
          <div className="reveal w-12 h-px bg-[#2e5a88] mx-auto mb-12" data-delay="80" />

          <div className="space-y-6">
            <p className="reveal font-body text-black/65 text-[15px] md:text-[16px] leading-relaxed font-light" data-delay="120">
              Paros sits between Mykonos and Santorini geographically, and almost nowhere near them in spirit. The eb. studio sends clients here when they have already done the loud islands and want what comes after. Naoussa at sunset, with the boats unloading and the Athenian crowd that knows the difference. Antiparos a yacht ride away, where the Italian set has been buying quietly for twenty years. Despotiko an hour further west, with ruins that sit untouched in the sand.
            </p>
            <p className="reveal font-body text-black/65 text-[15px] md:text-[16px] leading-relaxed font-light" data-delay="180">
              The south coast of Paros is the quiet side of a quiet island, which is why it works equally for couples without children, friends in their thirties, and families travelling with very young ones. If Mykonos is a calendar, Paros is a season. The two of them are designed for entirely different versions of the same client.
            </p>
          </div>
          <p className="reveal font-body italic text-[#2e5a88] text-[14px] mt-8" data-delay="220">
            eb. Athens.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 8 — CTA FINAL
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.2em] text-black/55 font-medium mb-6">
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
          <p className="reveal font-body text-[15px] md:text-[16px] text-black/65 font-light leading-relaxed mb-8 max-w-[500px] mx-auto" data-delay="150">
            Tell us when, with whom, and how you want to feel. We{'\u2019'}ll shape the week.
          </p>
          <a
            href="/contact?ref=paros-antiparos"
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
      </footer>
    </main>
  );
}
