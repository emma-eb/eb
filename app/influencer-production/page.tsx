"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";

export default function InfluencerProduction() {
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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    return () => revealObs.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* ═══════════════════════════════════════════
          HERO — instant
      ═══════════════════════════════════════════ */}
      <section
        data-nav-dark
        className="relative h-[50vh] md:h-[100dvh] flex flex-col overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1920&q=80"
          alt="Greece production"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex-1 min-h-[5rem]" />

        <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-6">For Brands &amp; Agencies</p>
          <h1 className="font-heading text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-white mb-8 uppercase">
            Greece,<br />produced.
          </h1>
          <p className="font-body text-base text-white/60 max-w-xl leading-relaxed">
            Production in Greece for luxury brands, fashion houses, and influencer campaigns. From the brief to the final frame.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY GREECE
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <div className="pt-1">
            <div className="reveal h-px bg-[#2e5a88] w-8 mb-5" />
            <p className="reveal font-body text-xs tracking-[0.25em] uppercase text-[#1a1a1a]/40" data-delay="80">Why Greece</p>
          </div>
          <div>
            <p className="reveal font-body text-xl md:text-2xl text-[#1a1a1a]/80 leading-relaxed font-light max-w-2xl" data-delay="160">
              300 days of sun. Architecture that photographs in any direction. Water you can swim in through October. And the kind of access no stock library can replicate: private villas, archaeological sites, fishing villages that haven&apos;t changed in decades.
            </p>
            <p className="reveal font-body text-lg md:text-xl text-[#2e5a88] mt-8 font-light" data-delay="240">
              Greece has the locations. We have the network.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE PRODUCE
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-16 border-t border-[#e8e4de]">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-body text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-12 md:mb-16">What we produce</p>
          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4de]">
            {[
              {
                title: "Brand Trips",
                body: "Multi-day trips for press, influencers, and brand ambassadors. Every detail handled on the ground, so your team focuses on content.",
                details: ["Full logistics & concierge", "Villa & hotel buyouts", "Private dining & experiences", "Media coordination"],
              },
              {
                title: "Fam Trips",
                body: "Familiarisation trips for travel agents, journalists, and agency partners. Designed to showcase your positioning in Greece, not just the destination.",
                details: ["Route design", "Hosted experiences", "Press & media support", "Itinerary documentation"],
              },
              {
                title: "Content Creation",
                body: "Photo and video production across Greece. Scouting, permits, crew, styling. Built around your brief, delivered to spec.",
                details: ["Location scouting & permits", "Photographer & videographer", "Stylist & art direction", "Post-production coordination"],
              },
            ].map(({ title, body, details }, i) => (
              <div key={title} className="reveal bg-white p-8 md:p-10 flex flex-col gap-5" data-delay={i * 100}>
                <h2 className="font-body text-2xl md:text-3xl text-[#2e5a88] leading-tight font-light">{title}</h2>
                <p className="font-body text-sm text-[#1a1a1a]/40 leading-relaxed flex-grow">{body}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {details.map((d) => (
                    <li key={d} className="font-body text-xs text-[#1a1a1a]/30 tracking-wider flex gap-3">
                      <span className="text-[#1a1a1a]/20 shrink-0">&middot;</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTION FORMATS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-body text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-12 md:mb-16">Production formats</p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Short",
                duration: "3 days",
                desc: "Athens and one island. Fast turnaround, tight brief. Built for social content or a single campaign moment.",
                includes: ["2\u20133 locations", "Up to 10 people", "Full logistics", "1 photographer"],
              },
              {
                name: "Extended",
                duration: "4\u20135 days",
                desc: "Athens and two islands. Room for storytelling across multiple environments and visual directions.",
                includes: ["4\u20136 locations", "Up to 20 people", "Full production crew", "Photo & video"],
              },
              {
                name: "Bespoke",
                duration: "From 6 days",
                desc: "Fully custom. Your brief, your talent, your season. No template.",
                includes: ["Any destination in Greece", "Any group size", "Full press & PR support", "Dedicated producer"],
              },
            ].map(({ name, duration, desc, includes }, i) => (
              <div key={name} className="reveal bg-white p-8 md:p-10 flex flex-col gap-5" data-delay={i * 100}>
                <div className="flex items-baseline gap-4">
                  <h3 className="font-body text-3xl md:text-4xl text-[#2e5a88] font-light">{name}</h3>
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]/50">{duration}</span>
                </div>
                <p className="font-body text-sm text-[#1a1a1a]/40 leading-relaxed flex-grow">{desc}</p>
                <ul className="flex flex-col gap-2">
                  {includes.map((item) => (
                    <li key={item} className="font-body text-xs text-[#1a1a1a]/30 tracking-wider flex gap-3">
                      <span className="text-[#1a1a1a]/20 shrink-0">&middot;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CASE STUDIES LINE (replaces past productions)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] pb-12 md:pb-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="reveal font-body text-[15px] md:text-[16px] text-[#1a1a1a]/40 font-light">
            Selected case studies available on request.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE BRING — dark
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-body text-xs tracking-[0.3em] uppercase text-white/30 mb-12 md:mb-16">What we bring to every production</p>
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
                items: ["Private chef & catering", "Private transfers & yacht", "24/7 availability", "Emergency support if required"],
              },
            ].map(({ cat, items }, i) => (
              <div key={cat} className="reveal" data-delay={i * 100}>
                <div className="h-px bg-white/15 w-12 mb-6" />
                <h3 className="font-body text-xl md:text-2xl text-white mb-5 font-light">{cat}</h3>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="font-body text-sm text-white/50 leading-relaxed flex gap-3">
                      <span className="text-white/25 shrink-0">&middot;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative py-28 md:py-36 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"
          alt="Greece coast"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight uppercase" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Planning a production<br />in Greece?
          </h2>
          <p className="font-body text-[15px] md:text-base text-white/60 mb-10 max-w-xl mx-auto leading-relaxed" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Send us your brief. Dates, brand, team size, objectives. First proposal within 48 hours.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 font-body text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-4 hover:bg-white/10 transition-colors min-h-[44px] door-cta">
            Send a brief
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-8">
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
