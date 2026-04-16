"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";

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
        className="relative h-[100dvh] flex flex-col overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"
          alt="Dinner by the sea, sunset, Greece"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-8">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
            For Brands &amp; Agencies
          </span>
          <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-white mb-6 uppercase" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece.<br />Produced.
          </h1>
          <p className="font-body text-[16px] md:text-[17px] text-white/90 max-w-xl mx-auto leading-relaxed" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Production in Greece for luxury brands, fashion houses, and influencer campaigns. From the brief to the final frame.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY GREECE (full-bleed image + text overlay)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative min-h-[60vh] md:min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/MILOS_02.jpg"
            alt="Milos, Sarakiniko, white rocks and turquoise sea"
            className="img-settle w-full h-full object-cover object-[center_60%]"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 p-6 md:p-12 max-w-2xl">
          <span className="reveal inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium text-white">
            Why Greece
          </span>
          <h2 className="reveal font-heading text-[44px] md:text-[72px] text-white leading-[0.95] uppercase mt-6" data-delay="120" style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece as a set.
          </h2>
          <p className="reveal font-body text-[15px] md:text-[17px] text-white/85 leading-[1.7] mt-6" data-delay="160" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            300 days of sun. Architecture that photographs in any direction. Water you can swim in through October. And the kind of access no stock library can replicate: private villas, archaeological sites, fishing villages that haven&apos;t changed in decades.
          </p>
          <p className="reveal font-body text-[18px] md:text-[20px] text-white mt-8 font-medium leading-[1.4]" data-delay="240" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece has the locations. We have the network.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE PRODUCE
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-16 border-t border-[#e8e4de]">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-12 md:mb-16">What we produce</p>
          <div className="grid md:grid-cols-3 gap-px bg-[#e8e4de]">
            {[
              {
                title: "Brand Trips",
                body: "Multi-day trips for press, influencers, and brand ambassadors. Every detail handled on the ground, so your team focuses on content.",
                details: ["Full logistics & concierge", "Villa & hotel sourcing", "Private dining & experiences", "Media coordination"],
              },
              {
                title: "Fam Trips",
                body: "Familiarization trips for travel agents, journalists, and agency partners. Designed to showcase your positioning in Greece, not just the destination.",
                details: ["Route design", "Hosted experiences", "Press & media support", "Itinerary documentation"],
              },
              {
                title: "Content Creation",
                body: "Photo and video production across Greece. Scouting, permits, crew, styling. Built around your brief, delivered to spec.",
                details: ["Location scouting & permits", "Photographer & videographer", "Stylist & art direction", "Post-production coordination"],
              },
            ].map(({ title, body, details }, i) => (
              <div key={title} className="reveal bg-white p-8 md:p-10 flex flex-col gap-5" data-delay={i * 100}>
                <h2 className="text-[22px] md:text-[28px] text-[#2e5a88] leading-tight font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{title}</h2>
                <p className="font-body text-[15px] md:text-[16px] text-[#1a1a1a]/70 leading-[1.6] flex-grow">{body}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {details.map((d) => (
                    <li key={d} className="font-body text-[15px] text-[#1a1a1a]/70 leading-[1.7] flex gap-3">
                      <span className="text-[#1a1a1a]/40 shrink-0">&middot;</span>
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
          BANDEAU IMAGE (respiration visuelle)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/despina-galani-x_DmjHZGB7M-unsplash.jpg"
          alt="Greece production scene"
          className="w-full h-[35vh] md:h-[60vh] object-cover object-center"
          loading="lazy"
        />
        <span className="absolute bottom-3 right-3 md:bottom-6 md:right-6 font-body text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white z-10 bg-black/35 backdrop-blur-[4px] [-webkit-backdrop-filter:blur(4px)] px-2.5 py-1 rounded-sm">
          Cyclades, Greece
        </span>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTION FORMATS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-12 md:mb-16">Production formats</p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Short",
                duration: "3 days",
                desc: "Athens and one island. Fast turnaround, tight brief. Built for social content or a single campaign moment.",
              },
              {
                name: "Extended",
                duration: "4\u20135 days",
                desc: "Athens and two islands. Room for storytelling across multiple environments and visual directions.",
              },
              {
                name: "Bespoke",
                duration: "From 6 days",
                desc: "Fully custom. Your brief, your talent, your season. No template.",
              },
            ].map(({ name, duration, desc }, i) => (
              <div key={name} className="reveal bg-white p-8 md:p-10 flex flex-col" data-delay={i * 100}>
                <div className="flex items-baseline gap-4">
                  <h3 className="text-[22px] md:text-[28px] text-[#2e5a88] font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{name}</h3>
                  <span className="font-body text-[13px] tracking-[0.2em] uppercase text-[#1a1a1a]/40">{duration}</span>
                </div>
                <p className="font-body text-[15px] md:text-[16px] text-[#1a1a1a]/70 leading-[1.6] mt-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE BRING — dark
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] pt-12 md:pt-16 pb-16 md:pb-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-body text-[11px] tracking-[0.2em] uppercase text-white/70 mb-12 md:mb-16">What we bring to every production</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                cat: "Production",
                items: ["Dedicated producer on location", "Location scouting & permit management", "Full logistics (transfers, accommodation)"],
              },
              {
                cat: "Creative",
                items: ["Photographers & videographers", "Stylists & art directors", "Hair & make-up"],
              },
              {
                cat: "Talent & Coordination",
                items: ["Influencer coordination on-site", "Agency & talent liaison", "Brand ambassador management"],
              },
            ].map(({ cat, items }, i) => (
              <div key={cat} className="reveal" data-delay={i * 100}>
                <div className="h-px bg-white/30 w-10 mb-6" />
                <h3 className="text-[22px] md:text-[28px] text-white mb-5 font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{cat}</h3>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="font-body text-[15px] text-white/85 leading-[1.7] flex gap-3">
                      <span className="text-white/60 shrink-0">&middot;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Case studies line inside dark section */}
          <div className="reveal w-[40px] h-px bg-white/20 mx-auto mt-16" data-delay="150" />
          <p className="reveal font-body text-[14px] italic text-white/60 text-center mt-6" data-delay="200">
            Selected case studies available on request.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative py-28 md:py-36 px-8 md:px-16 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1920&q=80"
          alt="Greek alley bougainvillea"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[40px] md:text-[60px] text-white mb-6 leading-tight uppercase" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Planning a production<br />in Greece?
          </h2>
          <p className="font-body text-[16px] md:text-[17px] text-white/90 max-w-xl mx-auto leading-relaxed mt-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Send us your brief. Dates, brand, team size, objectives.
          </p>
          <a href="/contact" className="inline-block font-body text-[13px] md:text-[14px] font-medium tracking-[0.1em] uppercase text-white border-b border-white pb-1 hover:opacity-70 transition-opacity duration-300 mt-8 py-3 door-cta">
            Send a brief &rarr;
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
