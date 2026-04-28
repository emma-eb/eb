"use client";

import { use, useEffect, useState, useCallback } from "react";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import NewsletterBanner from "../../components/NewsletterBanner";
import { villaDetails } from "../../data/villa-details";

export default function VillaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const villa = villaDetails[slug];
  if (!villa) notFound();

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  /* Reveal + image-settle + fade-up animations — aligned with journey fiches */
  useEffect(() => {
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
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) {
        el.classList.add("visible", "done");
      } else {
        revealObs.observe(el);
      }
    });

    const settleEls = document.querySelectorAll<HTMLElement>(".eb-image-settle, .eb-fade-up, .eb-fade-in");
    const settleObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("eb-visible");
          settleObs.unobserve(e.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    settleEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) {
        el.classList.add("eb-visible");
      } else {
        settleObs.observe(el);
      }
    });

    return () => {
      revealObs.disconnect();
      settleObs.disconnect();
    };
  }, []);

  /* Lightbox keyboard + body scroll lock */
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevLightbox = useCallback(
    () =>
      setLightboxIdx((i) =>
        i === null ? null : (i - 1 + villa.gallery.length) % villa.gallery.length
      ),
    [villa.gallery.length]
  );
  const nextLightbox = useCallback(
    () =>
      setLightboxIdx((i) => (i === null ? null : (i + 1) % villa.gallery.length)),
    [villa.gallery.length]
  );

  useEffect(() => {
    if (lightboxIdx === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevLightbox();
      else if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIdx, closeLightbox, prevLightbox, nextLightbox]);

  const isYacht = villa.kind === "yacht";
  const inquireHref = isYacht
    ? "/contact?type=stay&stay=yacht"
    : `/contact?type=stay&villa=${villa.slug}`;
  const labels = {
    heroPill: isYacht ? "Private Yacht Charter" : "The Collection",
    heroCta: isYacht ? `Charter ${villa.name}` : "Enquire about this villa",
    architecture: isYacht ? "The Yacht" : "The Villa",
    amenities: isYacht ? "Onboard" : "The Estate",
    indoors: isYacht ? "Cabins" : "Indoors",
    outdoors: isYacht ? "Decks" : "Outdoors",
    location: isYacht ? "Cruising Grounds" : "The Location",
    services: isYacht ? "Onboard" : "Services",
    ctaFinalH2: isYacht ? "Set sail?" : "Stay here?",
    ctaFinalLabel: isYacht ? `Charter ${villa.name}` : `Enquire about ${villa.name}`,
    availabilityNote: isYacht
      ? "Charters typically booked for 7 days minimum. APA and VAT not included, paid separately."
      : "Stays from 3 to 5 nights. Dates and rates confirmed at inquiry.",
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/collection" />

      {/* ═══════════════════════════════════════════
          HERO — with key facts on the image
      ═══════════════════════════════════════════ */}
      <section data-nav-dark className={`relative h-[100dvh] min-h-[600px] w-full overflow-hidden ${isYacht ? "bg-[#1a1a1a]" : ""}`}>
        <img
          src={villa.cover}
          alt={villa.name}
          className={`eb-image-settle absolute inset-0 w-full h-full object-center ${isYacht ? "object-contain md:object-cover" : "object-cover"}`}
          sizes="100vw"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-32 md:pb-40 pointer-events-none">
          {villa.badge && (
            <span className="reveal mb-3 inline-block px-3 py-1.5 bg-[#2e5a88] rounded-full text-white text-[10px] uppercase tracking-[0.2em] font-medium font-body">
              {villa.badge}
            </span>
          )}
          <span className="reveal mb-6 inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full text-white text-[10px] uppercase tracking-[0.15em] font-medium font-body">
            {labels.heroPill}
          </span>
          <h1
            className="reveal font-heading text-[34px] sm:text-[52px] md:text-[88px] leading-[1.05] sm:leading-[0.92] text-white uppercase text-balance px-2"
            data-delay="100"
            style={{ letterSpacing: "-0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            {villa.name}
          </h1>
          <p
            className="reveal mt-5 md:mt-6 text-white text-[13px] md:text-[15px] uppercase tracking-[0.2em] font-medium font-body text-balance"
            data-delay="200"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7), 0 0 12px rgba(0,0,0,0.5)" }}
          >
            {villa.location}
          </p>
          <a
            href={inquireHref}
            className="reveal eb-cta-link mt-8 md:mt-10 font-body text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-white min-h-[44px] py-3 pointer-events-auto"
            data-delay="280"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            {labels.heroCta} <span className="eb-cta-arrow">&rarr;</span>
          </a>
        </div>

        {/* Key facts strip — bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-black/25 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)]">
          <div className={`max-w-[1200px] mx-auto grid grid-cols-2 ${isYacht ? "md:grid-cols-5 [&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:col-span-1" : "md:grid-cols-4"} gap-y-3 md:gap-y-5 px-4 md:px-6 py-3 md:py-6`}>
            {isYacht ? (
              <>
                {villa.keyFacts.length && <HeroFact label="Length" value={villa.keyFacts.length} />}
                {villa.keyFacts.cabins && <HeroFact label="Cabins" value={villa.keyFacts.cabins} />}
                <HeroFact label="Guests" value={villa.keyFacts.guests} />
                {villa.keyFacts.crew && <HeroFact label="Crew" value={villa.keyFacts.crew} />}
                {villa.keyFacts.cruise && <HeroFact label="Cruising" value={villa.keyFacts.cruise} />}
              </>
            ) : (
              <>
                {villa.keyFacts.size && <HeroFact label="Size" value={villa.keyFacts.size} />}
                {villa.keyFacts.bedrooms && <HeroFact label="Bedrooms" value={villa.keyFacts.bedrooms} />}
                {villa.keyFacts.bathrooms && <HeroFact label="Bathrooms" value={villa.keyFacts.bathrooms} />}
                <HeroFact label="Guests" value={villa.keyFacts.guests} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTRO — editorial tagline H2 + pill + trait + body
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-6 pt-20 md:pt-28 pb-14 md:pb-20">
        <div className="max-w-[720px] mx-auto text-center">
          {villa.tagline && (
            <h2
              className="reveal font-body text-[22px] md:text-[32px] leading-[1.3] md:leading-[1.25] text-[#2e5a88] font-normal mb-8 md:mb-14 text-balance"
              data-delay="0"
            >
              {villa.tagline}
            </h2>
          )}
          <p className="reveal font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium">
            {villa.introLabel ?? villa.region}
          </p>
          <div className="reveal mt-4 w-10 h-[2px] bg-[#2e5a88] mx-auto" data-delay="50" />
          <p
            className="reveal mt-8 md:mt-10 text-[15px] md:text-[17px] leading-[1.75] md:leading-[1.8] text-[#1a1a1a]/70 font-light font-body max-w-[640px] mx-auto"
            data-delay="120"
          >
            {villa.intro}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VIDEO (optional, yacht — between intro and gallery)
      ═══════════════════════════════════════════ */}
      {villa.videoYoutubeId && (
        <section className="bg-[#fcf7f1] px-4 md:px-8 pb-16 md:pb-24">
          <div className="max-w-[1100px] mx-auto">
            <p className="reveal text-center font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium mb-10">
              In motion
            </p>
            <div className="reveal relative w-full aspect-video overflow-hidden bg-black/5">
              <iframe
                src={`https://www.youtube.com/embed/${villa.videoYoutubeId}?rel=0&modestbranding=1`}
                title={`${villa.name} in motion`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <p className="reveal text-center font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium mb-10">
            Gallery
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 [&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:col-span-1">
            {villa.gallery.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIdx(i)}
                className="group relative overflow-hidden bg-black/5 aspect-[3/2]"
                aria-label={`Open photo ${i + 1} of ${villa.gallery.length}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="eb-image-settle absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOUSE — V1 pattern (pill + trait + centered body)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-6 pb-16 md:pb-20">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium">
            {labels.architecture}
          </p>
          <div className="reveal mt-4 w-10 h-[2px] bg-[#2e5a88] mx-auto" data-delay="50" />
          <p
            className="reveal mt-10 text-[15px] md:text-[16px] leading-[1.8] text-[#1a1a1a]/70 font-light font-body"
            data-delay="120"
          >
            {villa.theHouse}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AMENITIES — 2 columns centered as block, text left-aligned within
      ═══════════════════════════════════════════ */}
      {villa.amenities && (
        <section className="bg-[#fcf7f1] px-6 pb-16 md:pb-20">
          <div className="max-w-[960px] mx-auto">
            <p className="reveal text-center font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium">
              {labels.amenities}
            </p>
            <div className="reveal mt-4 mx-auto w-10 h-[2px] bg-[#2e5a88]" data-delay="50" />

            <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 border-y border-[#1a1a1a]/10 py-10 md:py-14 max-w-[720px] mx-auto text-center" data-delay="120">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#2e5a88] font-medium">
                  {labels.indoors}
                </p>
                <ul className="mt-6 space-y-3 text-[14px] md:text-[15px] text-[#1a1a1a]/70 font-light font-body">
                  {villa.amenities.residence.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#2e5a88] font-medium">
                  {labels.outdoors}
                </p>
                <ul className="mt-6 space-y-3 text-[14px] md:text-[15px] text-[#1a1a1a]/70 font-light font-body">
                  {villa.amenities.outdoor.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          LOCATION — V1 pattern (pill + trait + centered body)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-6 pb-16 md:pb-20">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium">
            {labels.location}
          </p>
          <div className="reveal mt-4 w-10 h-[2px] bg-[#2e5a88] mx-auto" data-delay="50" />
          <p
            className="reveal mt-10 text-[15px] md:text-[16px] leading-[1.8] text-[#1a1a1a]/70 font-light font-body"
            data-delay="120"
          >
            {villa.theLocation}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — V1 pattern (pill + centered prose, dot-separated)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-6 pb-16 md:pb-20">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="reveal font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium">
            {labels.services}
          </p>
          <p
            className="reveal mt-8 text-[13px] md:text-[14px] leading-[2] text-[#1a1a1a]/65 font-light font-body"
            data-delay="100"
          >
            {villa.services.join(" · ")}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICE + AVAILABILITY NOTE — above CTA final
          (elegant variant when price is on request)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] py-10 md:py-12 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <p className={
            /on request/i.test(villa.keyFacts.priceFrom)
              ? "font-body text-[13px] md:text-[14px] text-[#1a1a1a]/55 italic font-light tracking-wide"
              : "font-body text-[13px] md:text-[15px] text-[#1a1a1a]/55 font-light tracking-[0.05em]"
          }>
            {villa.keyFacts.priceFrom}
          </p>
          <p className="mt-2 md:mt-3 text-[11px] md:text-[12px] leading-[1.6] text-[#1a1a1a]/40 italic font-light font-body">
            {labels.availabilityNote}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section
        data-nav-dark
        className={`relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden eb-image-vignette ${isYacht ? "bg-[#1a1a1a]" : ""}`}
      >
        <img
          src={villa.cover}
          alt=""
          aria-hidden="true"
          className={`eb-image-settle absolute inset-0 w-full h-full ${isYacht ? "object-contain md:object-cover" : "object-cover"} object-center md:object-[center_35%]`}
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-[3] text-center px-6 md:px-10 max-w-[640px]">
          <h2
            className="reveal font-heading font-normal uppercase text-white text-[38px] md:text-[64px] leading-[0.95] mb-6"
            style={{ letterSpacing: "0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            {labels.ctaFinalH2}
          </h2>
          <p
            className="reveal font-body text-white/80 text-[14px] md:text-[16px] font-light leading-relaxed max-w-[480px] mx-auto mb-10"
            data-delay="120"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            {villa.card.tagline}
          </p>
          <a
            href={inquireHref}
            className="reveal eb-cta-link font-body text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-white min-h-[44px] py-3"
            data-delay="220"
          >
            {labels.ctaFinalLabel} <span className="eb-cta-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ADJACENT VILLA — cross-sell after the CTA (optional)
      ═══════════════════════════════════════════ */}
      {villa.adjacent && (
        <section className="bg-[#fcf7f1] px-6 pt-16 md:pt-20 pb-12 md:pb-16">
          <div className="max-w-[640px] mx-auto text-center">
            <p className="reveal font-body text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]/45 font-medium">
              Adjacent villa
            </p>
            <p
              className="reveal mt-6 text-[15px] md:text-[16px] leading-[1.75] text-[#1a1a1a]/65 font-light font-body"
              data-delay="100"
            >
              {villa.adjacent.line}
            </p>
            <a
              href={`/collection/${villa.adjacent.slug}`}
              className="reveal eb-cta-link mt-6 text-[12px] md:text-[13px] uppercase tracking-[0.12em] font-medium text-[#2e5a88] font-body"
              data-delay="180"
            >
              View {villa.adjacent.name} <span className="eb-cta-arrow">&rarr;</span>
            </a>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          BACK TO COLLECTION — instead of NextChapter silos
      ═══════════════════════════════════════════ */}
      <section className="bg-[#fcf7f1] px-6 py-12 md:py-16 border-t border-[#1a1a1a]/08">
        <div className="max-w-[720px] mx-auto text-center">
          <a
            href={`/collection#villa-${villa.slug}`}
            className="eb-cta-link font-body text-[12px] md:text-[13px] uppercase tracking-[0.12em] font-medium text-[#2e5a88]"
          >
            <span className="eb-cta-arrow rotate-180 inline-block mr-1">&rarr;</span> Back to the Collection
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
            <a href="/journeys" className="hover:text-[#fcf7f1] transition-colors py-2">Journeys</a>
            <a href="/experiences" className="hover:text-[#fcf7f1] transition-colors py-2">Experiences</a>
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

      {/* ═══════════════════════════════════════════
          LIGHTBOX
      ═══════════════════════════════════════════ */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${villa.name} gallery`}
        >
          <img
            src={villa.gallery[lightboxIdx].src}
            alt={villa.gallery[lightboxIdx].alt}
            className="max-w-[92vw] max-h-[86vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-8 text-white/80 hover:text-white transition-colors p-3"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            aria-label="Previous photo"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            aria-label="Next photo"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/55 text-[11px] uppercase tracking-[0.2em] font-body">
            {lightboxIdx + 1} / {villa.gallery.length}
          </p>
        </div>
      )}
    </main>
  );
}

function HeroFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center px-2 min-w-0">
      <p className="font-body text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/55 font-medium">
        {label}
      </p>
      <p className="mt-1 md:mt-1.5 text-[12px] md:text-[14px] text-white font-light font-body leading-tight break-words">
        {value}
      </p>
    </div>
  );
}
