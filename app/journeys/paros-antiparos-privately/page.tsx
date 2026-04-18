'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ParosAntiparosPage() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const d = parseInt(el.dataset.delay || '0', 10);
          setTimeout(() => {
            el.classList.add('visible');
            setTimeout(() => el.classList.add('done'), 800);
          }, d);
          revealObs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    return () => revealObs.disconnect();
  }, []);

  return (
    <main className="bg-white">
      {/* ============ ZONE 1 — HERO IMMERSIF ============ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image
          src="/images/journeys/paros-hero.jpg"
          alt="Paros + Antiparos"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/60" />

        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 right-6 md:right-12 text-white">
          <div className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase opacity-70 mb-3 reveal">
            Private Journey · 03
          </div>

          <h1 className="font-anton font-normal uppercase text-[42px] md:text-[64px] leading-[0.9] tracking-[0.02em] mb-4 max-w-[85%] md:max-w-[75%] reveal" data-delay="100">
            Paros + Antiparos,<br />Privately.
          </h1>

          <p className="text-[13px] md:text-[14px] opacity-90 max-w-[480px] leading-[1.5] mb-4 italic font-light reveal" data-delay="200">
            Held by the quiet. Found by no one.
          </p>

          <div className="flex gap-1.5 mb-4 reveal" data-delay="300">
            {['Slow', 'Chic', 'Discovery'].map((mood) => (
              <span
                key={mood}
                className="bg-white/12 border border-white/30 rounded-full px-2.5 py-1 text-[8px] md:text-[9px] tracking-[0.2em] uppercase"
              >
                {mood}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 pt-3 border-t border-white/25 max-w-[820px] reveal" data-delay="400">
            <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-85">7 nights</span>
            <span className="opacity-40">·</span>
            <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-85">May–October</span>
            <span className="opacity-40">·</span>
            <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-85">Couples · Friends · Families</span>
            <span className="opacity-40">·</span>
            <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-95 italic relative">
              From €6,500pp
              <button
                onMouseEnter={() => setTooltipOpen(true)}
                onMouseLeave={() => setTooltipOpen(false)}
                onClick={() => setTooltipOpen(!tooltipOpen)}
                className="inline-flex items-center justify-center w-3 h-3 rounded-full border border-white/50 ml-1 text-[7px] not-italic hover:bg-white/10 transition-all"
                aria-label="Price details"
              >
                i
              </button>
              {tooltipOpen && (
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[280px] bg-white text-black/75 text-[10px] tracking-normal normal-case p-3 rounded shadow-lg z-50 not-italic font-light leading-relaxed">
                  Includes hand-selected villa, transfers, daily concierge by the eb. studio. Yacht for the day, private chef and bespoke experiences on request. International flights excluded.
                </span>
              )}
              <span className="ml-1">excl. flights</span>
            </span>
          </div>

          <div className="text-[9px] opacity-60 mt-2 italic reveal" data-delay="500">
            Curated firsthand by the eb. studio, Athens.
          </div>
        </div>
      </section>

      {/* ============ ZONE 2 — MOSAÏQUE BANDE BASSE (5 thumbnails) ============ */}
      <section className="grid grid-cols-5 gap-[2px] h-[110px] md:h-[140px] bg-white">
        {[
          { src: '/images/journeys/paros-villa.jpg', label: 'The villa' },
          { src: '/images/journeys/paros-naoussa.jpg', label: 'Naoussa' },
          { src: '/images/journeys/paros-despotiko.jpg', label: 'Despotiko' },
          { src: '/images/journeys/paros-lefkes.jpg', label: 'Lefkes' },
          { src: '/images/journeys/paros-stou.jpg', label: 'Stou Beach' },
        ].map((img, i) => (
          <div
            key={i}
            className="relative cursor-pointer overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-2 left-2 text-white text-[7px] md:text-[9px] tracking-[0.15em] uppercase opacity-90">
              {img.label}
            </div>
          </div>
        ))}
      </section>

      {/* ============ ZONE 3 — THE PROMISE ============ */}
      <section className="px-8 md:px-10 py-9 bg-white text-center border-b border-black/5 reveal">
        <div className="max-w-[640px] mx-auto">
          <div className="text-[9px] tracking-[0.25em] uppercase text-black/40 mb-2.5 font-light">
            The Promise
          </div>
          <p className="text-[16px] md:text-[18px] leading-[1.4] text-[#2e5a88] font-light">
            The Greek island that works for everyone. Without ever feeling like everyone.
          </p>
        </div>
      </section>

      {/* ============ ZONE 4 — 3 CHAPITRES (Inter light, sentence case) ============ */}
      <section className="px-6 md:px-10 pt-11 pb-9 bg-white">
        <div className="max-w-[720px] mx-auto space-y-8">
          {[
            {
              title: 'A week on the south coast.',
              body: "Seven nights in a hand-selected villa where the bays stay calm and the chef arrives when you ask. Two evenings in Naoussa, one at the table the Athenian set keeps for itself.",
            },
            {
              title: 'A yacht for the day.',
              body: 'Twenty minutes across the channel to Antiparos. Then west to Despotiko, the uninhabited islet where ancient ruins sit directly in the sand. Lunch on board in a cove only the crew knows.',
            },
            {
              title: 'The inland, untouched.',
              body: 'One day for Lefkes, the old Byzantine capital tucked into the hills. Marble alleys, white chapels, lunch at a taverna no one writes about. Afternoon at Antiparos Chora, on the other side of the channel.',
            },
          ].map((chapter, i) => (
            <div key={i} className="reveal" data-delay={i * 150}>
              <h2 className="text-[20px] md:text-[22px] leading-[1.2] text-[#2e5a88] font-light mb-2.5">
                {chapter.title}
              </h2>
              <p className="text-[13px] leading-[1.7] text-black/65 font-light">
                {chapter.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ZONE 5 — WHAT YOU'LL REMEMBER (beige) ============ */}
      <section className="px-8 md:px-10 py-9 bg-[#fcf7f1] reveal">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="text-[9px] tracking-[0.25em] uppercase text-black/40 mb-3.5 font-light">
            What you&apos;ll remember
          </div>
          <div className="w-8 h-px bg-[#2e5a88] mx-auto mb-6" />
          <div className="flex flex-col gap-2.5">
            {[
              "The dinner in Naoussa, the night the Athenian set showed up unannounced.",
              "Despotiko at noon, when the ruins turned gold.",
              "The villa's pool at midnight, no one else awake.",
            ].map((memory, i) => (
              <p key={i} className="text-[13px] md:text-[14px] leading-[1.5] text-black/65 italic font-light">
                {memory}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ZONE 6 — A NOTE BEFORE YOU ASK ============ */}
      <section className="px-8 md:px-10 py-8 bg-white text-center border-t border-black/5 reveal">
        <div className="max-w-[580px] mx-auto">
          <div className="text-[9px] tracking-[0.25em] uppercase text-black/40 mb-2.5 font-light">
            A note before you ask
          </div>
          <p className="text-[13px] leading-[1.7] text-black/65 font-light">
            Thirty-five minutes from Athens.
          </p>
          <p className="text-[11px] text-black/40 mt-2 font-light">
            Best in June and September, when the island breathes.
          </p>
        </div>
      </section>

      {/* ============ ZONE 7 — CTA FINAL (beige, aligne home) ============ */}
      <section className="bg-[#fcf7f1] py-16 md:py-20 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="font-body text-[28px] md:text-[40px] font-light leading-[1.1] text-[#2e5a88] mb-6">
            Ready when you are.
          </h2>
          <p className="font-body text-sm text-[#1a1a1a]/50 leading-relaxed mb-10">
            Tell us when, with whom, and how you want to feel. We shape the rest.
          </p>
          <Link
            href="/contact?journey=paros-antiparos"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/30 pb-1 hover:border-[#2e5a88] transition-colors duration-300"
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </Link>
          <p className="font-body text-[11px] text-[#1a1a1a]/40 mt-8 font-light">
            Or reach us directly:{' '}
            <a href="mailto:hello@emmabonnefous.com" className="hover:text-[#2e5a88] transition-colors">
              hello@emmabonnefous.com
            </a>{' '}
            ·{' '}
            <a
              href="https://wa.me/33673550155"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2e5a88] transition-colors"
            >
              WhatsApp +33 6 73 55 01 55
            </a>
          </p>
        </div>
      </section>

      {/* ============ ZONE 8 — CROSS-SELL ITINÉRAIRES (3 cards) ============ */}
      <section className="px-6 md:px-10 py-10 bg-white reveal">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-6">
            <div className="text-[9px] tracking-[0.25em] uppercase text-black/40 font-light">
              You might also like
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                href: '/journeys/athens-slowly',
                img: '/images/journeys/athens-card.jpg',
                category: 'Cultural · Slow',
                title: 'Athens, Slowly',
                meta: '5 nights · Athens',
              },
              {
                href: '/journeys/mykonos-timed-right',
                img: '/images/journeys/mykonos-card.jpg',
                category: 'Festive · Social',
                title: 'Mykonos, Timed Right',
                meta: '5 nights · Mykonos',
              },
              {
                href: '/journeys/a-family-summer-greek-style',
                img: '/images/journeys/family-card.jpg',
                category: 'Family · Multi-gen',
                title: 'A Family Summer',
                meta: '10 nights · Porto Heli',
              },
            ].map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group block"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <div className="text-[8px] tracking-[0.2em] uppercase opacity-70 mb-1">
                    {card.category}
                  </div>
                  <div className="font-anton font-normal uppercase text-[16px] leading-[1] mb-1 transition-transform duration-500 group-hover:-translate-y-1">
                    {card.title}
                  </div>
                  <div className="text-[9px] opacity-85 tracking-[0.05em] font-light">
                    {card.meta} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ZONE 9 — CTA COLLECTION (mini-bande beige) ============ */}
      <section className="px-8 md:px-10 py-7 bg-[#fcf7f1] text-center">
        <div className="max-w-[600px] mx-auto flex flex-wrap justify-center items-center gap-3.5">
          <span className="text-[12px] text-black/65 italic font-light">
            Or simply rent a villa, charter a yacht?
          </span>
          <Link
            href="/collection"
            className="inline-block font-body text-[#2e5a88] text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-medium pb-1 border-b border-[#2e5a88] hover:opacity-70 transition-opacity"
          >
            Discover the Collection &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}
