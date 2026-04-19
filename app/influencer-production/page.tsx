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
          <p className="mt-6 max-w-[580px] text-white/85 text-[16px] md:text-[17px] leading-[1.6] font-light font-body mx-auto" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Production in Greece for luxury brands, fashion houses, and influencer campaigns. From the brief to the final frame.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            const target = document.getElementById("explore");
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-60 hover:opacity-100 animate-bounce transition-opacity cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          WHY GREECE (full-bleed image + text overlay)
      ═══════════════════════════════════════════ */}
      <section id="explore" data-nav-dark className="relative min-h-[60vh] md:min-h-[75vh] flex items-end overflow-hidden scroll-mt-20">
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
          <p className="reveal mt-8 max-w-[580px] text-white/85 text-[16px] md:text-[17px] leading-[1.6] font-light font-body" data-delay="240" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Greece has the locations. We have the network.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE PRODUCE — dark image cards (DA push)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a]">
        <div className="text-center pt-14 md:pt-20 pb-8 md:pb-12 px-6">
          <p className="reveal font-body text-[10px] md:text-[11px] font-light tracking-[0.3em] uppercase text-white/40">
            What we produce
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "Brand Trips",
              body: "Multi-day trips for press, influencers, and brand ambassadors. Every detail handled on the ground, so your team focuses on content.",
              details: ["Full logistics & concierge", "Villa & hotel sourcing", "Private dining & experiences"],
              img: "/julian-Z8T3xS4_vT0-unsplash.jpg",
              alt: "Mykonos windmills above the whitewashed town",
            },
            {
              title: "Fam Trips",
              body: "Familiarization trips for travel agents, journalists, and agency partners. Designed to showcase your positioning in Greece.",
              details: ["Route design", "Hosted experiences", "Press & media support"],
              img: "/vue aerienne bateau.jpg",
              alt: "Aerial view, turquoise cove and boats, Greece",
            },
            {
              title: "Content Creation",
              body: "Photo and video production across Greece. Scouting, permits, crew, styling. Built around your brief, delivered to spec.",
              details: ["Location scouting & permits", "Photographer & videographer", "Stylist & art direction"],
              img: "/laura-adai-RHG2wFlRxdw-unsplash.jpg",
              alt: "Whitewashed Cycladic hamlet above rocky coast",
            },
          ].map(({ title, body, details, img, alt }, i) => (
            <div
              key={title}
              className="reveal group relative min-h-[70vh] md:min-h-[80vh] overflow-hidden eb-image-vignette"
              data-delay={i * 100}
            >
              <img
                src={img}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-[3]">
                <h3 className="font-anton font-normal uppercase text-white text-[28px] md:text-[36px] leading-tight mb-4" style={{ letterSpacing: "0.02em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                  {title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/80 font-light leading-[1.6] mb-5 max-w-[340px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                  {body}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {details.map((d) => (
                    <li key={d} className="text-[12px] md:text-[13px] text-white/70 font-light leading-[1.5] flex gap-2">
                      <span className="text-white/45 shrink-0">&middot;</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PULL QUOTE — respiration discrete (remplace bandeau)
      ═══════════════════════════════════════════ */}
      <section className="bg-white flex flex-col items-center justify-center py-10 md:py-16 px-6 md:px-8">
        <p className="reveal font-body text-[18px] md:text-[22px] font-light text-[#1a1a1a]/40 text-center max-w-2xl leading-[1.6]">
          The set is already built. We just walk into it.
        </p>
        <div className="reveal w-10 h-[2px] bg-[#2e5a88] mt-6 md:mt-8 mx-auto" data-delay="100" />
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTION FORMATS — 3 thumbnails cote a cote
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] py-14 md:py-20 px-5 md:px-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="reveal font-body text-[10px] md:text-[11px] font-light tracking-[0.3em] uppercase text-white/40">
            Production formats
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[1200px] mx-auto">
          {[
            {
              num: "01",
              name: "Short",
              duration: "3 days",
              desc: "Athens and one island. Fast turnaround, tight brief. Built for social content or a single campaign moment.",
              img: "/angelina-and-antonis-s0HBi_tVs6s-unsplash.jpg",
              alt: "Editorial moment, bougainvillea terrace, Aegean",
            },
            {
              num: "02",
              name: "Extended",
              duration: "4 to 5 days",
              desc: "Athens and two islands. Room for storytelling across multiple environments and visual directions.",
              img: "/ben-koorengevel-G0G0qkE-r24-unsplash.jpg",
              alt: "Yacht from above, open Aegean sea",
            },
            {
              num: "03",
              name: "Bespoke",
              duration: "From 6 days",
              desc: "Fully custom. Your brief, your talent, your season. No template.",
              img: "/Bespokevilla.jpg",
              alt: "Private villa, pool and olive grove",
            },
          ].map(({ num, name, duration, desc, img, alt }, i) => (
            <div
              key={name}
              className="reveal relative aspect-[3/4] overflow-hidden group eb-image-vignette"
              data-delay={i * 80}
            >
              <img
                src={img}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
              <span className="absolute top-3 right-4 md:top-4 md:right-5 font-anton text-white/25 text-[72px] md:text-[110px] leading-none select-none pointer-events-none" style={{ letterSpacing: "-0.02em" }}>
                {num}
              </span>
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7 z-[3]">
                <span className="inline-block self-start px-2.5 py-1 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-medium text-white mb-3">
                  {duration}
                </span>
                <h3 className="font-anton font-normal uppercase text-white text-[30px] md:text-[42px] leading-[0.95] mb-3" style={{ letterSpacing: "0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                  {name}
                </h3>
                <p className="font-body text-[13px] md:text-[14px] text-white/80 leading-[1.6] font-light" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE BRING — mosaic grid of image tiles (press-kit feel)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="bg-[#1a1a1a] pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="text-center px-6 mb-10 md:mb-14">
          <p className="reveal font-body text-[10px] md:text-[11px] font-light tracking-[0.3em] uppercase text-white/40">
            What we bring to every production
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            /* TODO: Emma validate 8 photos below — mosaic press-kit feel */
            { label: "Scouting", img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=900&q=80", alt: "Aerial Greek coast scouting" },
            { label: "Permits", img: "/acropole_01.jpg", alt: "Parthenon columns, Acropolis, Athens" },
            { label: "Transfers", img: "/helicptere.jpg", alt: "Private helicopter transfer" },
            { label: "Villas", img: "/134_terrace_privatebeach.jpg", alt: "Villa terrace, private beach" },
            { label: "Talent", img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80", alt: "Editorial talent shoot" },
            { label: "Styling", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80", alt: "Wardrobe and styling" },
            { label: "Photography", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80", alt: "Photo production setup" },
            { label: "Post", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80", alt: "Editorial post-production" },
          ].map(({ label, img, alt }, i) => (
            <div
              key={label}
              className="reveal relative aspect-[4/5] overflow-hidden group"
              data-delay={i * 60}
            >
              <img
                src={img}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <span className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white font-medium" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL — B2B brief (separate route from /contact)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden eb-image-vignette">
        <img
          src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1920&q=80"
          alt="Greek alley bougainvillea"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-[3] text-center px-6 max-w-[640px]">
          <div className="reveal inline-block bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-[10px] tracking-[0.35em] uppercase text-white font-light mb-6">
            For Brands &amp; Agencies
          </div>
          <h2
            className="reveal font-anton font-normal uppercase text-white text-[36px] md:text-[56px] leading-tight mb-6"
            data-delay="80"
            style={{ letterSpacing: "0.02em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Send us your brief.
          </h2>
          <p
            className="reveal font-body text-white/80 text-base md:text-lg font-light leading-relaxed max-w-[480px] mx-auto mb-10"
            data-delay="150"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Brand, dates, team size, objectives. We reply within 48 hours.
          </p>
          <a
            href="/for-brands/brief"
            className="reveal eb-cta-link font-body text-sm tracking-[0.2em] uppercase text-white"
            data-delay="220"
          >
            Start a brief
            <span className="eb-cta-arrow">&rarr;</span>
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
