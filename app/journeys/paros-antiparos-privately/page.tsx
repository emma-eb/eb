'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ParosAntiparosPage() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('eb-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.eb-fade-up, .eb-fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/65" />

        <div className="absolute bottom-10 md:bottom-14 left-6 md:left-12 right-6 md:right-12 text-white">
          <div className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase opacity-75 mb-4 eb-fade-up">
            Private Journey · 03
          </div>

          <h1 className="font-anton font-normal uppercase text-[44px] md:text-[68px] leading-[0.92] tracking-[0.02em] mb-5 max-w-[88%] md:max-w-[75%] eb-fade-up eb-delay-100">
            Paros + Antiparos,<br />Privately.
          </h1>

          <p className="text-[14px] md:text-[15px] opacity-90 max-w-[480px] leading-[1.5] mb-5 italic font-light eb-fade-up eb-delay-200">
            Held by the quiet. Found by no one.
          </p>

          <div className="flex gap-1.5 mb-5 eb-fade-up eb-delay-300">
            {['Slow', 'Chic', 'Discovery'].map((mood) => (
              <span
                key={mood}
                className="bg-white/12 border border-white/30 rounded-full px-3 py-1 text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-light"
              >
                {mood}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 md:gap-x-5 gap-y-2 pt-4 border-t border-white/25 max-w-[920px] eb-fade-up eb-delay-400">
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-85">7 nights</span>
            <span className="opacity-40">·</span>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-85">May–October</span>
            <span className="opacity-40">·</span>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-85">35 min from Athens</span>
            <span className="opacity-40">·</span>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-85">Couples · Friends · Families</span>
            <span className="opacity-40">·</span>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-95 italic relative">
              From €6,500pp
              <button
                onMouseEnter={() => setTooltipOpen(true)}
                onMouseLeave={() => setTooltipOpen(false)}
                onClick={() => setTooltipOpen(!tooltipOpen)}
                className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white/50 ml-1.5 text-[7px] not-italic hover:bg-white/15 transition-all"
                aria-label="Price details"
              >
                i
              </button>
              {tooltipOpen && (
                <span className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[280px] bg-white text-black/75 text-[10px] tracking-normal normal-case p-3 rounded shadow-xl z-50 not-italic font-light leading-relaxed">
                  Includes hand-selected villa, transfers, daily concierge by the eb. studio. Yacht for the day, private chef and bespoke experiences on request. International flights excluded.
                </span>
              )}
              <span className="ml-1">excl. flights</span>
            </span>
          </div>

          <div className="text-[10px] opacity-65 mt-3 italic font-light eb-fade-up eb-delay-500">
            Curated firsthand by the eb. studio, Athens. Best in June and September, when the island breathes.
          </div>
        </div>
      </section>

      {/* ============ ZONE 2 — THE PROMISE (intro courte) ============ */}
      <section className="px-8 md:px-10 py-14 md:py-20 bg-white text-center eb-fade-up">
        <div className="max-w-[680px] mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-5 font-light">
            The Promise
          </div>
          <div className="w-10 h-px bg-[#2e5a88] mx-auto mb-7" />
          <p className="text-[20px] md:text-[26px] leading-[1.35] text-[#2e5a88] font-light">
            The Greek island that works for everyone.<br className="hidden md:block" />
            Without ever feeling like everyone.
          </p>
        </div>
      </section>

      {/* ============ ZONE 3 — KEY VISUAL #1 (la villa) ============ */}
      <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/journeys/paros-villa.jpg"
          alt="The villa"
          fill
          className="object-cover"
        />
      </section>

      {/* ============ ZONE 4 — CHAPITRE 1 ============ */}
      <section className="px-6 md:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-[680px] mx-auto eb-fade-up">
          <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-3 font-light">
            Chapter one
          </div>
          <h2 className="text-[24px] md:text-[30px] leading-[1.2] text-[#2e5a88] font-light mb-5">
            A week on the south coast.
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-black/65 font-light">
            Seven nights in a hand-selected villa where the bays stay calm and the chef arrives when you ask. Two evenings in Naoussa, one at the table the Athenian set keeps for itself.
          </p>
        </div>
      </section>

      {/* ============ ZONE 5 — KEY VISUAL #2 (yacht/Despotiko) ============ */}
      <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/journeys/paros-despotiko.jpg"
          alt="Despotiko by sea"
          fill
          className="object-cover"
        />
      </section>

      {/* ============ ZONE 6 — CHAPITRE 2 ============ */}
      <section className="px-6 md:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-[680px] mx-auto eb-fade-up">
          <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-3 font-light">
            Chapter two
          </div>
          <h2 className="text-[24px] md:text-[30px] leading-[1.2] text-[#2e5a88] font-light mb-5">
            A yacht for the day.
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-black/65 font-light">
            Twenty minutes across the channel to Antiparos. Then west to Despotiko, the uninhabited islet where ancient ruins sit directly in the sand. Lunch on board in a cove only the crew knows.
          </p>
        </div>
      </section>

      {/* ============ ZONE 7 — KEY VISUAL #3 (Lefkes/Antiparos) ============ */}
      <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/journeys/paros-lefkes.jpg"
          alt="Lefkes inland"
          fill
          className="object-cover"
        />
      </section>

      {/* ============ ZONE 8 — CHAPITRE 3 + WHAT YOU'LL REMEMBER ============ */}
      <section className="px-6 md:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-[680px] mx-auto">

          <div className="eb-fade-up">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-3 font-light">
              Chapter three
            </div>
            <h2 className="text-[24px] md:text-[30px] leading-[1.2] text-[#2e5a88] font-light mb-5">
              The inland, untouched.
            </h2>
            <p className="text-[14px] md:text-[15px] leading-[1.75] text-black/65 font-light">
              One day for Lefkes, the old Byzantine capital tucked into the hills. Marble alleys, white chapels, lunch at a taverna no one writes about. Afternoon at Antiparos Chora, on the other side of the channel.
            </p>
          </div>

          {/* Séparateur fin */}
          <div className="w-10 h-px bg-[#2e5a88]/30 mx-auto my-12 md:my-16" />

          {/* What you'll remember intégré */}
          <div className="text-center eb-fade-up">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-5 font-light">
              What you&apos;ll remember
            </div>
            <div className="flex flex-col gap-3">
              {[
                'The dinner in Naoussa, the night the Athenian set showed up unannounced.',
                'Despotiko at noon, when the ruins turned gold.',
                "The villa's pool at midnight, no one else awake.",
              ].map((memory, i) => (
                <p key={i} className="text-[14px] md:text-[15px] leading-[1.6] text-black/60 italic font-light">
                  {memory}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============ ZONE 9 — CTA FINAL (image plein cadre sombre) ============ */}
      <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        {/* TODO: remplacer par vraie photo Emma (paros-cta.jpg crépuscule atmosphérique) */}
        <Image
          src="/images/journeys/paros-naoussa.jpg"
          alt="Ready when you are"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-10">
          <div className="text-center max-w-[640px] eb-fade-in">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-5 font-light">
              Yours, from scratch
            </div>
            <h2 className="font-anton font-normal uppercase text-[44px] md:text-[64px] leading-[0.95] tracking-[0.02em] text-white mb-5">
              Ready when<br />you are.
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/85 max-w-[440px] mx-auto mb-8 leading-[1.6] font-light">
              Tell us when, with whom, and how you want to feel. We shape the rest.
            </p>
            <div className="flex justify-center mb-5">
              <Link
                href="/contact?journey=paros-antiparos"
                className="bg-white text-[#2e5a88] px-7 py-3 rounded-full text-[10px] font-medium tracking-[0.25em] uppercase transition-all hover:scale-[1.03] hover:shadow-lg"
              >
                Inquire →
              </Link>
            </div>
            <p className="text-[10px] text-white/60 font-light">
              Or reach us directly:{' '}
              <a href="mailto:hello@emmabonnefous.com" className="hover:text-white transition-colors">
                hello@emmabonnefous.com
              </a>{' '}
              ·{' '}
              <a
                href="https://wa.me/33673550155"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp +33 6 73 55 01 55
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============ ZONE 10 — CROSS-SELL + MINI-BANDE COLLECTION ============ */}
      <section className="px-6 md:px-10 py-14 md:py-20 bg-white eb-fade-up">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-9">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-[8px] tracking-[0.25em] uppercase opacity-75 mb-1.5 font-light">
                    {card.category}
                  </div>
                  <div className="font-anton font-normal uppercase text-[18px] leading-[1] mb-1.5 transition-transform duration-500 group-hover:-translate-y-1">
                    {card.title}
                  </div>
                  <div className="text-[10px] opacity-85 tracking-[0.05em] font-light">
                    {card.meta} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mini-bande Collection */}
        <div className="max-w-[700px] mx-auto mt-10 pt-8 border-t border-black/10 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="text-[13px] text-black/65 italic font-light">
              Or simply rent a villa, charter a yacht?
            </span>
            <Link
              href="/collection"
              className="text-[#2e5a88] text-[11px] tracking-[0.2em] uppercase underline decoration-[#2e5a88]/40 hover:decoration-[#2e5a88] transition-all font-light"
            >
              Discover the Collection →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
