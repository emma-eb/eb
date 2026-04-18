'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import NewsletterBanner from '../../components/NewsletterBanner';

export default function ParosAntiparosPage() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('eb-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.eb-fade-up, .eb-fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const days = [
    {
      day: '01',
      title: 'Athens → Paros',
      body: 'Private transfer from your Athens hotel to the airport. 40-minute flight to Paros (or 4-hour high-speed ferry, your choice). Arrival at the villa on the south coast, welcome dinner on the terrace.',
    },
    {
      day: '02',
      title: 'Paros, The South Coast',
      body: 'Slow morning at the villa. Afternoon swim in the quiet bays of the south coast. First evening in Naoussa, at the table the Athenian set keeps for itself.',
    },
    {
      day: '03',
      title: 'Antiparos + Despotiko (Yacht Day)',
      body: 'Morning departure by private boat. Twenty minutes across the channel to Antiparos. Onward west to Despotiko, the uninhabited islet where ancient ruins sit in the sand. Lunch on board. Swim stops. Return at sunset.',
    },
    {
      day: '04',
      title: 'Lefkes, The Old Capital',
      body: 'Inland morning in Lefkes, the Byzantine capital tucked into the hills. Marble alleys, white chapels, lunch at a taverna no one writes about. Afternoon at the villa.',
    },
    {
      day: '05',
      title: 'Antiparos Chora',
      body: 'Half-day in Antiparos Chora, the quieter side of the channel. Boutiques, coffee, a slow lunch by the water. Return to the villa for a private chef dinner on request.',
    },
    {
      day: '06',
      title: 'A Day for You',
      body: 'Nothing scheduled. The pool, the sea, a book. A final afternoon yacht ride on request.',
    },
    {
      day: '07',
      title: 'Paros → Athens → Home',
      body: 'Late morning departure. Private transfer to the airport or port. Assisted transit back to Athens.',
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/journeys" />

      {/* ============ ZONE 0 — BREADCRUMB ============ */}
      <div className="absolute top-[80px] md:top-[90px] left-6 md:left-12 z-40">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/75 font-light">
          <Link
            href="/journeys"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span className="text-[12px] leading-none">←</span>
            <span>Private Journeys</span>
          </Link>
          <span className="opacity-40">/</span>
          <span className="opacity-70">Paros + Antiparos</span>
        </nav>
      </div>

      {/* ============ ZONE 1 — HERO IMMERSIF ============ */}
      <section data-nav-dark className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image
          src="/images/journeys/paros-hero.jpg"
          alt="Paros + Antiparos"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/65" />

        <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 right-6 md:right-12 text-white">
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-light inline-block mb-5 eb-fade-up">
            Private Journey &middot; 04
          </div>

          <h1 className="font-anton font-normal uppercase text-[44px] md:text-[68px] leading-[0.92] tracking-[0.02em] mb-5 max-w-[88%] md:max-w-[75%] eb-fade-up eb-delay-100">
            Paros + Antiparos,<br />Privately.
          </h1>

          <p className="text-[14px] md:text-[15px] opacity-90 max-w-[480px] leading-[1.5] mb-5 font-light eb-fade-up eb-delay-200">
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

          <div className="text-[11px] opacity-65 mt-3 font-light eb-fade-up eb-delay-400">
            Curated firsthand by the eb. studio, Athens. Best in June and September, when the island breathes.
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 eb-scroll-chevron">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/60">
            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ============ ZONE 2 — THE INVITATION ============ */}
      <section className="px-8 md:px-10 py-14 md:py-20 bg-white text-center eb-fade-up">
        <div className="max-w-[720px] mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-5 font-light">
            The Invitation
          </div>
          <div className="w-10 h-px bg-[#2e5a88] mx-auto mb-7" />
          <p className="text-[20px] md:text-[26px] leading-[1.4] text-[#2e5a88] font-light mb-5">
            Seven nights in Paros and Antiparos.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.65] text-black/65 font-light">
            A villa on the south coast, a yacht for a day, and the tables the Athenian set keeps for itself. One island you&apos;ve heard of, one island you haven&apos;t. Designed firsthand by the eb. studio.
          </p>
        </div>
      </section>

      {/* ============ ZONE 3 — AT A GLANCE (bandeau fin beige) ============ */}
      <section className="bg-[#fcf7f1] py-8 md:py-10 px-6 md:px-12 eb-fade-up">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {[
              { label: 'Duration', value: '7 nights' },
              { label: 'Destination', value: 'Paros + Antiparos' },
              { label: 'Season', value: 'May – October' },
              { label: 'Best for', value: 'Couples, Friends, Families' },
              { label: 'From', value: '€6,500pp', sub: 'excl. flights' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-[9px] tracking-[0.25em] uppercase text-black/40 font-light mb-1.5">
                  {item.label}
                </div>
                <div className="text-[13px] md:text-[14px] text-[#2e5a88] font-light leading-tight">
                  {item.value}
                </div>
                {item.sub && (
                  <div className="text-[10px] text-black/40 font-light mt-0.5">
                    {item.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ZONE 4 — THE ROUTE (timeline SVG horizontale) ============ */}
      <section className="px-6 md:px-12 py-14 md:py-20 bg-white eb-fade-up">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              The Route
            </div>
            <div className="w-10 h-px bg-[#2e5a88] mx-auto" />
          </div>

          {/* Timeline SVG */}
          <div className="relative">
            {/* Desktop : horizontal */}
            <div className="hidden md:block">
              <div className="flex items-start justify-between relative">
                {/* Ligne de fond */}
                <div className="absolute top-[14px] left-[7%] right-[7%] h-px bg-[#2e5a88]/30" />

                {/* Étape 1 : Athens */}
                <div className="flex flex-col items-center text-center w-[14%] relative z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#2e5a88] mb-4" />
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#2e5a88] font-medium mb-1">Athens</div>
                  <div className="text-[10px] text-black/50 font-light">Arrival</div>
                </div>

                {/* Étape 2 : Paros (central, plus gros) */}
                <div className="flex flex-col items-center text-center w-[40%] relative z-10">
                  <div className="w-5 h-5 rounded-full bg-[#2e5a88] border-4 border-white shadow-md mb-4" />
                  <div className="text-[13px] tracking-[0.2em] uppercase text-[#2e5a88] font-medium mb-1">Paros</div>
                  <div className="text-[11px] text-black/60 font-light mb-3">6 nights &middot; Villa on south coast</div>
                  <div className="text-[10px] text-black/40 font-light space-y-0.5">
                    <div>Day trip &middot; Antiparos + Despotiko</div>
                    <div>Day trip &middot; Lefkes</div>
                    <div>Day trip &middot; Antiparos Chora</div>
                  </div>
                </div>

                {/* Étape 3 : Athens (retour) */}
                <div className="flex flex-col items-center text-center w-[14%] relative z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#2e5a88] mb-4" />
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#2e5a88] font-medium mb-1">Athens</div>
                  <div className="text-[10px] text-black/50 font-light">Departure</div>
                </div>
              </div>
            </div>

            {/* Mobile : vertical */}
            <div className="md:hidden flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-3 h-3 rounded-full bg-[#2e5a88] mb-3" />
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#2e5a88] font-medium mb-1">Athens</div>
                <div className="text-[10px] text-black/50 font-light">Arrival</div>
              </div>

              <div className="w-px h-8 bg-[#2e5a88]/30" />

              <div className="flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-[#2e5a88] border-4 border-white shadow-md mb-3" />
                <div className="text-[13px] tracking-[0.2em] uppercase text-[#2e5a88] font-medium mb-1">Paros</div>
                <div className="text-[11px] text-black/60 font-light mb-2">6 nights &middot; Villa on south coast</div>
                <div className="text-[10px] text-black/40 font-light space-y-0.5">
                  <div>Day trip &middot; Antiparos + Despotiko</div>
                  <div>Day trip &middot; Lefkes</div>
                  <div>Day trip &middot; Antiparos Chora</div>
                </div>
              </div>

              <div className="w-px h-8 bg-[#2e5a88]/30" />

              <div className="flex flex-col items-center text-center">
                <div className="w-3 h-3 rounded-full bg-[#2e5a88] mb-3" />
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#2e5a88] font-medium mb-1">Athens</div>
                <div className="text-[10px] text-black/50 font-light">Departure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ZONE 5 — DAY BY DAY (accordéon) ============ */}
      <section className="bg-[#fcf7f1] py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10 md:mb-14 eb-fade-up">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              Day by Day
            </div>
            <div className="w-10 h-px bg-[#2e5a88] mx-auto" />
          </div>

          <div className="border-t border-black/10">
            {days.map((day, i) => {
              const isOpen = openDay === i;
              return (
                <div key={i} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenDay(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 md:py-6 text-left group transition-colors hover:bg-black/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0">
                      <div className="text-[11px] tracking-[0.2em] uppercase text-[#2e5a88] font-medium shrink-0 w-[60px]">
                        Day {day.day}
                      </div>
                      <div className="text-[14px] md:text-[16px] text-[#2e5a88] font-light truncate">
                        {day.title}
                      </div>
                    </div>
                    <div className="shrink-0 ml-4">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className={`text-[#2e5a88] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      >
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>

                  {/* Contenu */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6 md:pb-8 pl-0 md:pl-[130px] pr-4">
                      <p className="text-[13px] md:text-[14px] leading-[1.7] text-black/65 font-light max-w-[640px]">
                        {day.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ZONE 6 — HIGHLIGHTS (3 vignettes texte sur image) ============ */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10 md:mb-14 eb-fade-up">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              Highlights
            </div>
            <div className="w-10 h-px bg-[#2e5a88] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                tag: 'The Coast',
                img: '/images/journeys/paros-naoussa.jpg',
                title: 'Seven nights on the south coast.',
                body: 'Hand-selected villa, quiet bays, evenings in Naoussa.',
              },
              {
                tag: 'The Sea',
                img: '/images/journeys/paros-despotiko.jpg',
                title: 'A yacht for the day.',
                body: 'Antiparos, Despotiko, ancient ruins in the sand.',
              },
              {
                tag: 'The Inland',
                img: '/images/journeys/paros-lefkes.jpg',
                title: 'Lefkes, untouched.',
                body: 'Byzantine capital, marble alleys, hidden taverna.',
              },
            ].map((highlight, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] overflow-hidden group eb-fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Image
                  src={highlight.img}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white font-light">
                    {highlight.tag}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-anton font-normal uppercase text-[22px] md:text-[26px] leading-[1] mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] opacity-85 leading-[1.5] font-light">
                    {highlight.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ZONE 7 — WHERE YOU STAY ============ */}
      <section data-nav-dark className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/journeys/paros-villa.jpg"
          alt="Your villa on the south coast"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-10 md:bottom-16 left-6 md:left-12 right-6 md:right-12 max-w-[600px] text-white eb-fade-up">
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-light inline-block mb-5">
            Where You Stay
          </div>
          <h2 className="font-anton font-normal uppercase text-[34px] md:text-[48px] leading-[1] tracking-[0.02em] mb-5">
            A villa on the<br />south coast.
          </h2>
          <p className="text-[13px] md:text-[15px] leading-[1.65] opacity-90 font-light">
            Hand-selected by the eb. studio. Private pool, direct beach access, six bedrooms. Known to our clients only. The villa shown may vary by availability and party size.
          </p>
        </div>
      </section>

      {/* ============ ZONE 8 — WHAT'S INCLUDED (compact 2 colonnes) ============ */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-12 eb-fade-up">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              What&apos;s Included
            </div>
            <div className="w-10 h-px bg-[#2e5a88] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Colonne INCLUDED */}
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-[#2e5a88] font-medium mb-5">
                Included
              </div>
              <ul className="space-y-3">
                {[
                  'Six nights in a hand-selected villa',
                  'Private airport and port transfers',
                  'Daily concierge by the eb. studio',
                  'Yacht for the day (Antiparos + Despotiko)',
                  'Access to our Athenian network of tables',
                  '24/7 on-the-ground support',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] md:text-[14px] text-black/70 font-light leading-[1.5]">
                    <span className="text-[#2e5a88] mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne NOT INCLUDED */}
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-black/50 font-medium mb-5">
                Not Included
              </div>
              <ul className="space-y-3">
                {[
                  'International flights',
                  'Private chef (on request)',
                  'Bespoke experiences (on request)',
                  'Personal shopping and spa',
                  'Travel insurance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] md:text-[14px] text-black/50 font-light leading-[1.5]">
                    <span className="text-black/30 mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10 text-[11px] text-black/40 font-light">
            All pricing in EUR. Based on double occupancy. Flights and insurance not included.
          </div>
        </div>
      </section>

      {/* ============ ZONE 9 — CTA FINAL (image plein cadre sombre, épuré) ============ */}
      <section data-nav-dark className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/hero-bateau.jpg"
          alt="Ready when you are"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-10">
          <div className="text-center max-w-[640px] eb-fade-in">
            <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white font-light inline-block mb-5">
              Yours to shape
            </div>
            <h2 className="font-anton font-normal uppercase text-[44px] md:text-[64px] leading-[0.95] tracking-[0.02em] text-white mb-5">
              Ready when<br />you are.
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/85 max-w-[440px] mx-auto mb-8 leading-[1.6] font-light">
              Tell us when, with whom, and how you want to feel. We shape the rest.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact?journey=paros-antiparos"
                className="bg-white text-[#2e5a88] px-8 py-3.5 rounded-full text-[10px] font-medium tracking-[0.25em] uppercase transition-all hover:scale-[1.03] hover:shadow-xl"
              >
                Inquire →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ZONE 10 — CROSS-SELL ============ */}
      <section className="px-6 md:px-10 py-14 md:py-20 bg-white eb-fade-up">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-light">
              You might also like
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
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
                className="relative aspect-[3/4] overflow-hidden cursor-pointer group block"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[9px] tracking-[0.2em] uppercase text-white font-light">
                    {card.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-anton font-normal uppercase text-[28px] md:text-[32px] leading-[0.95] mb-2">
                    {card.title}
                  </h3>
                  <div className="text-[11px] opacity-85 tracking-[0.1em] font-light">
                    {card.meta}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
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
