"use client";

import Nav from "../components/Nav";
import NewsletterBanner from "../components/NewsletterBanner";

const collabs = [
  { house: "Balmain", venue: "Silencio, Paris" },
  { house: "Van Cleef & Arpels", venue: "Peninsula, Paris" },
  { house: "Karl Lagerfeld", venue: "Monnaie de Paris" },
  { house: "Jimmy Choo", venue: "Sea Containers, London" },
  { house: "Coach", venue: "The High Line, NY" },
  { house: "Lanvin", venue: "Grand Palais, Paris" },
  { house: "Boucheron", venue: "Arc de Triomphe, Paris" },
  { house: "Repetto", venue: "Royal Monceau, Paris" },
];

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/about" />

      {/* ═══════════════════════════════════════════
          BLOC 1 — HERO ASYMETRIQUE (gauche-bas)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[100dvh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1920&q=80"
          alt="Athens at golden hour, the city Emma Bonnefous calls home"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />

        <div className="relative z-10 h-full w-full flex flex-col justify-end items-start px-6 md:px-[5%] pb-[12%] md:pb-[6%]">
          <span className="inline-block mb-6 md:mb-8 px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium font-body">
            About
          </span>
          <h1
            className="font-heading text-white uppercase text-[44px] md:text-[80px] lg:text-[100px] leading-[0.92] mb-5 md:mb-6 max-w-5xl"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            From Paris.<br />
            <span className="text-white/65">For Greece.</span>
          </h1>
          <p className="text-white/85 text-[14px] md:text-[16px] font-light tracking-wide max-w-2xl font-body" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Emma Bonnefous, founder of eb. Athens.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const target = document.getElementById("story-origins");
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          aria-label="Scroll to content"
          className="absolute bottom-8 right-[5%] z-10 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 2 — STORY 01 : ORIGINS
      ═══════════════════════════════════════════ */}
      <section id="story-origins" className="bg-[#fcf7f1] py-24 md:py-32 px-6 md:px-[5%] scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline gap-4 mb-16 md:mb-20">
            <span className="font-heading text-[#2e5a88] text-[64px] md:text-[96px] leading-[0.85]" style={{ letterSpacing: "-0.01em" }}>
              01
            </span>
            <div className="flex-1 border-b border-black/15 pb-2">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black/45 font-medium font-body">
                Origins
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16 items-start">
            <div className="md:-ml-[5%]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/Emma_About_1.jpg"
                  alt="Emma Bonnefous, founder of eb."
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:pt-12">
              <h2
                className="font-heading text-[#2e5a88] uppercase text-[32px] md:text-[44px] lg:text-[52px] leading-[1.02] mb-8 md:mb-10"
                style={{ letterSpacing: "-0.01em" }}
              >
                Twelve years for the houses.<br />
                <span className="text-[#2e5a88]/45">Then one country.</span>
              </h2>
              <div className="space-y-5">
                <p className="text-black/65 text-[15px] md:text-[16px] font-light leading-relaxed font-body">
                  Launches and press events for Balmain, Van Cleef &amp; Arpels, Karl Lagerfeld, Jimmy Choo, Coach. Over eighty productions across Paris, London, Amsterdam, Copenhagen.
                </p>
                <p className="text-black/65 text-[15px] md:text-[16px] font-light leading-relaxed font-body">
                  Before eb., I designed private journeys for high-net-worth travelers across Tanzania, Botswana, Morocco. Ninety-five countries. One that kept calling me back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 3 — STORY 02 : METHOD (sans photo)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-20 md:py-28 px-6 md:px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline gap-4 mb-16 md:mb-20">
            <span className="font-heading text-[#2e5a88] text-[64px] md:text-[96px] leading-[0.85]" style={{ letterSpacing: "-0.01em" }}>
              02
            </span>
            <div className="flex-1 border-b border-black/15 pb-2">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black/45 font-medium font-body">
                Method
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-8 md:gap-16">
            <div>
              <h2
                className="font-heading text-[#2e5a88] uppercase text-[32px] md:text-[44px] lg:text-[52px] leading-[1.02] mb-8 md:mb-10"
                style={{ letterSpacing: "-0.01em" }}
              >
                The same standards.<br />
                <span className="text-[#2e5a88]/45">Applied to a holiday.</span>
              </h2>
              <div className="space-y-5">
                <p className="text-black/65 text-[15px] md:text-[16px] font-light leading-relaxed font-body">
                  eb. is a private travel studio dedicated to one country, for clients anywhere in the world. Production for the houses taught me one thing: the difference between fine and unforgettable is in details no one else sees.
                </p>
                <p className="text-black/65 text-[15px] md:text-[16px] font-light leading-relaxed font-body">
                  That is what we apply to your week in Greece.
                </p>
              </div>
              <p className="mt-10 text-[#2e5a88] text-[13px] font-medium tracking-wide font-body">
                Emma Bonnefous, Athens
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 4 — IN NUMBERS (grille editoriale)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-6 md:px-[5%] border-t border-black/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black/45 font-medium font-body">
              In numbers
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black/15">
            <div className="p-8 md:p-10 border-r border-b border-black/15">
              <div className="font-heading text-[#2e5a88] text-[56px] md:text-[80px] leading-[0.85] mb-3" style={{ letterSpacing: "-0.01em" }}>
                12
              </div>
              <div className="text-black/55 text-[11px] md:text-[12px] font-light leading-snug tracking-wide font-body">
                Years producing for luxury houses.
              </div>
            </div>
            <div className="p-8 md:p-10 md:border-r border-b border-black/15">
              <div className="font-heading text-[#2e5a88] text-[56px] md:text-[80px] leading-[0.85] mb-3" style={{ letterSpacing: "-0.01em" }}>
                80<span className="text-[36px] md:text-[48px]">+</span>
              </div>
              <div className="text-black/55 text-[11px] md:text-[12px] font-light leading-snug tracking-wide font-body">
                Productions delivered, none alike.
              </div>
            </div>
            <div className="p-8 md:p-10 border-r border-b border-black/15">
              <div className="font-heading text-[#2e5a88] text-[56px] md:text-[80px] leading-[0.85] mb-3" style={{ letterSpacing: "-0.01em" }}>
                95
              </div>
              <div className="text-black/55 text-[11px] md:text-[12px] font-light leading-snug tracking-wide font-body">
                Countries visited before choosing one.
              </div>
            </div>
            <div className="p-8 md:p-10 border-b border-black/15">
              <div className="font-heading text-[#2e5a88] text-[56px] md:text-[80px] leading-[0.85] mb-3" style={{ letterSpacing: "-0.01em" }}>
                35<span className="text-[36px] md:text-[48px]">+</span>
              </div>
              <div className="text-black/55 text-[11px] md:text-[12px] font-light leading-snug tracking-wide font-body">
                Greek islands known firsthand.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 5 — WHY GREECE (21/9 cinema)
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full bg-[#1a1a1a] overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "500px" }}>
        <img
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1920&q=80"
          alt="Greece, beyond the postcard"
          className="absolute inset-0 w-full h-full object-cover opacity-65"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 h-full flex items-center px-6 md:px-[5%]">
          <div className="max-w-[600px]">
            <span className="inline-block mb-5 md:mb-6 px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium font-body">
              Belief
            </span>
            <h2
              className="font-heading text-white uppercase text-[36px] md:text-[56px] lg:text-[68px] leading-[0.95] mb-6 md:mb-8"
              style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              Why Greece.
            </h2>
            <p className="text-white/85 text-[14px] md:text-[15px] font-light leading-relaxed mb-4 font-body" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
              Greece is not a backdrop. It is a geography of extreme contrasts, a tradition of hospitality that predates most nations, and a network of people who don{'\u2019'}t put what they offer online.
            </p>
            <p className="text-white/85 text-[14px] md:text-[15px] font-light leading-relaxed mb-6 font-body" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
              A private visit before the crowds arrive. A dinner where the chef closes for your table only. A villa that never appears online. None of this is bookable. It takes the right network, and knowing exactly who to call.
            </p>
            <p className="text-white text-[15px] md:text-[16px] font-medium mt-8 font-body" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
              That is what eb. provides.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 6 — COLLABORATIONS (credits roll)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-24 md:py-32 px-6 md:px-[5%]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black/45 font-medium block mb-3 font-body">
              Selected collaborations
            </span>
            <div className="w-8 h-[1px] bg-[#2e5a88] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {collabs.map((c) => (
              <div key={c.house} className="flex justify-between items-baseline py-4 md:py-5 border-b border-black/10">
                <span className="font-heading text-[#2e5a88] text-[18px] md:text-[20px] uppercase tracking-wide">
                  {c.house}
                </span>
                <span className="text-black/50 text-[12px] md:text-[13px] font-light font-body">
                  {c.venue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 7 — CITATION DIPTYQUE
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              src="/Emma_About_2.jpg"
              alt="Emma Bonnefous on her Athens terrace"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p
                className="font-heading text-[#2e5a88] uppercase text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1]"
                style={{ letterSpacing: "-0.01em" }}
              >
                I had traveled through ninety-five countries.
              </p>
              <p
                className="font-heading text-black/40 uppercase text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] mt-4 md:mt-6"
                style={{ letterSpacing: "-0.01em" }}
              >
                I kept coming back to one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC 8 — CTA FINAL
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "500px" }}>
        <img
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80"
          alt="Cyclades view, white architecture, blue sea"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="inline-block mb-5 md:mb-6 px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium font-body">
            Inquire
          </span>
          <h2
            className="font-heading text-white uppercase text-[36px] md:text-[56px] lg:text-[68px] leading-[0.95] mb-4 md:mb-5 max-w-3xl"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Let{'\u2019'}s start with<br />a conversation.
          </h2>
          <p className="text-white/85 text-[14px] md:text-[16px] font-light max-w-xl mb-8 md:mb-10 font-body" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Whether you are planning a private journey or a celebration in Greece.
          </p>
          <a
            href="/contact"
            className="inline-block text-white text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium pb-1.5 border-b border-white hover:opacity-80 transition-opacity door-cta"
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
