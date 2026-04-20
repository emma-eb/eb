"use client";

import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import NewsletterBanner from "../../components/NewsletterBanner";

const projectTypes = [
  "Brand trip",
  "Fam trip",
  "Photo shoot",
  "Film / video",
  "Press trip",
  "Influencer campaign",
  "Other",
];

const teamSizes = [
  "1 to 3",
  "4 to 8",
  "9 to 15",
  "16+",
];

const budgetBands = [
  "Up to \u20AC25K",
  "\u20AC25 to 75K",
  "\u20AC75 to 150K",
  "\u20AC150K+",
  "Confidential",
];

export default function BrandBriefPage() {
  const [submitted, setSubmitted] = useState(false);

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
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  const inputClass =
    "border-b border-[#e8e4de] bg-transparent py-3 font-body text-[16px] md:text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors w-full";
  const labelClass = "font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#888]";

  if (submitted) {
    return (
      <main className="flex flex-col min-h-screen bg-white">
        <Nav activePage="/influencer-production" />

        <section className="bg-[#fcf7f1] min-h-[calc(100dvh-80px)] flex items-center justify-center px-6 py-20 md:py-28">
          <div className="max-w-[620px] mx-auto text-center">
            <div className="w-10 h-[2px] bg-[#2e5a88] mx-auto mb-8" />
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-5">
              Received with thanks
            </p>
            <h1 className="font-body text-[28px] md:text-[42px] text-[#2e5a88] leading-[1.1] font-normal mb-8">
              Thank you.
            </h1>
            <p className="font-body text-[15px] md:text-[17px] text-[#1a1a1a]/65 leading-[1.7] font-light max-w-[480px] mx-auto">
              Your brief is with the production team. We will be in touch shortly.
            </p>
            <p className="font-body text-[13px] md:text-[14px] text-[#1a1a1a]/60 mt-10 italic font-light">
              &mdash; eb.
            </p>
            <div className="mt-12 md:mt-16">
              <a
                href="/influencer-production"
                className="group inline-flex items-center gap-2 font-body text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors"
              >
                <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1">&larr;</span>
                Back to For Brands
              </a>
            </div>
          </div>
        </section>

        <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16 mt-auto">
          <NewsletterBanner />
          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-white/30" />
          </div>
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 mt-8">
            <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-80" /></a>
            <p className="font-body text-xs text-[#fcf7f1]/50 tracking-wider text-center">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/influencer-production" />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"
          alt="Production set, Greek coast at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)" }} />
        <div className="relative z-10 p-6 md:p-16 max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white mb-6">
            The Brief
          </span>
          <h1 className="font-heading text-[48px] md:text-[84px] text-white leading-[0.95] uppercase mb-5" style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            Tell us what<br />you&apos;re shooting.
          </h1>
          <p className="font-body text-[15px] md:text-[17px] text-white/85 leading-[1.7] font-light max-w-[520px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            A few lines is enough. The more we know, the faster we come back with a tailored proposal.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FORM
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-[980px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          {/* LEFT — intro */}
          <div className="reveal">
            <p className="font-body text-[10px] md:text-[11px] font-light tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-5">
              How we work
            </p>
            <h2 className="font-body text-[#2e5a88] text-[28px] md:text-[40px] leading-[1.1] font-normal mb-6">
              From brief<br />to final frame.
            </h2>
            <p className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/70 leading-[1.8] font-light mb-6">
              We will be in touch shortly with a first read of the brief, a suggested route, and indicative production scope.
            </p>
            <p className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/70 leading-[1.8] font-light">
              All exchanges remain strictly confidential. For active NDAs or existing agency frameworks, mention it in the message field.
            </p>
            <div className="w-10 h-px bg-[#2e5a88] my-8" />
            <p className="font-body text-[13px] text-[#1a1a1a]/60 leading-[1.7] font-light">
              Prefer email? Write to{" "}
              <a href="mailto:brands@emmabonnefous.com" className="text-[#2e5a88] border-b border-[#2e5a88]/30 hover:border-[#2e5a88]">
                brands@emmabonnefous.com
              </a>
            </p>
          </div>

          {/* RIGHT — form */}
          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Brand / Agency</label>
                    <input type="text" required className={inputClass} placeholder="Company name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Contact person</label>
                    <input type="text" required className={inputClass} placeholder="Full name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Email</label>
                    <input type="email" required className={inputClass} placeholder="name@brand.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Role</label>
                    <input type="text" className={inputClass} placeholder="Producer, PR, Marketing..." />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className={labelClass}>Project type</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((t) => (
                      <label key={t} className="inline-flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="project" value={t} className="peer sr-only" />
                        <span className="font-body text-[12px] tracking-[0.1em] uppercase px-3.5 py-2 border border-[#e8e4de] text-[#888] peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] group-hover:border-[#1a1a1a] group-hover:text-[#1a1a1a] transition-colors">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Shoot dates</label>
                    <input type="text" className={inputClass} placeholder="Month / window / exact dates" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Team size</label>
                    <select className={inputClass + " appearance-none"}>
                      <option value="">Select</option>
                      {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Budget range</label>
                  <select className={inputClass + " appearance-none"}>
                    <option value="">Select</option>
                    {budgetBands.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Brief</label>
                  <textarea
                    required
                    rows={6}
                    className={inputClass + " resize-none"}
                    placeholder="Objectives, deliverables, references, any existing NDA or framework..."
                  />
                </div>

                <button
                  type="submit"
                  className="self-start mt-2 inline-flex items-center gap-3 font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white bg-[#1a1a1a] px-8 py-4 hover:bg-[#2e5a88] transition-colors duration-300"
                >
                  Send brief
                  <span>&rarr;</span>
                </button>
                <p className="font-body text-[11px] text-[#1a1a1a]/40 leading-[1.6] font-light mt-2">
                  By sending this brief you agree to be contacted by the eb. team. Details shared here remain private and are never passed to third parties.
                </p>
            </>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16 mt-auto">
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
            <a href="mailto:brands@emmabonnefous.com" className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors">
              brands@emmabonnefous.com
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
            <a href="mailto:brands@emmabonnefous.com" className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors py-2">
              brands@emmabonnefous.com
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
