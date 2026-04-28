'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import Nav from '../../components/Nav';
import NewsletterBanner from '../../components/NewsletterBanner';

export default function AstypaleaPage() {
  const [openDay, setOpenDay] = useState<number | null>(null);


  const days = [
    { day: '01', title: 'Arrival. Athens, quietly.', body: 'Private transfer from the airport to a boutique hotel with the Acropolis from the rooftop. A late dinner at a place that does not take walk-ins.' },
    { day: '02', title: 'The city, privately.', body: 'A morning at a private collection that opens for ten people at a time. A slow lunch in Thissio, afternoon at the hotel, a rooftop cocktail as the Parthenon lights come on.' },
    { day: '03', title: 'Athens, the other side.', body: 'Markets in Monastiraki in the morning, a long lunch in Psyrri where the city keeps its pulse. Afternoon at a museum the guides do not make. Dinner on the Athens Riviera.' },
    { day: '04', title: 'Flight east. The first sunset.', body: 'Late morning flight to Astypalea, forty minutes over the Aegean. The plane lands at the western tip of the island. A driver takes you to Chora, the white village that climbs to the Venetian castle. Sunset from the rooftop.' },
    { day: '05', title: 'By private boat, the islets.', body: 'A private boat for the day. The captain takes you east, to the small islets the locals visit on weekends. Anchor at Koutsomitis, where the beach is sand on both sides. Lunch on the water. A stop at the cave of Negrou on the way back.' },
    { day: '06', title: 'The back of the island.', body: 'A private electric vehicle and driver for the day. The small monasteries, the quiet roads, the single taverna at the back of the island that serves lunch when you ask the morning before. The afternoon ends back at a quiet bay no road reaches.' },
    { day: '07', title: 'The farewell dinner.', body: 'A slow day at the hotel, a swim, a walk up to the castle. Dinner on the rooftop facing the castle, at the table the family who runs the place keeps for our clients. Slow-cooked goat, the local cheese, a wine no one outside the island knows.' },
    { day: '08', title: 'The slow return.', body: 'A morning flight back to Athens, before the heat. Assisted transit onward.' },
  ];

  const includedItems = [
    'Three nights in a hand-selected boutique hotel in Athens',
    'Four nights in a hand-selected hotel in Chora, Astypalea',
    'Private ground and port transfers',
    'Daily concierge by the eb. studio',
    'Private boat for the day (islets and caves)',
    'Access to our private network of tables',
  ];

  const onRequestItems = ['Private chef', 'Signature experiences', 'Wellness and in-room treatments'];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/journeys" />

      <div className="absolute top-[88px] md:top-[96px] left-6 md:left-12 z-40">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/75 font-light">
          <Link href="/journeys" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-[12px] leading-none">&larr;</span><span>Private Journeys</span></Link>
          <span className="opacity-40">/</span>
          <span className="opacity-70">Astypalea, Before Everyone Else</span>
        </nav>
      </div>

      <section data-nav-dark className="relative w-full h-[75vh] md:h-screen md:min-h-[600px] overflow-hidden eb-image-vignette">
        <Image src="/astypalea.jpg" alt="Astypalea Chora and the Venetian castle at sunset" fill priority sizes="100vw" className="object-cover object-center reveal" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/65" />
        <div className="absolute bottom-14 md:bottom-20 left-6 md:left-12 right-6 md:right-12 text-white">
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-light inline-block mb-6 reveal">Private Journey &middot; 01</div>
          <h1 className="font-anton font-normal uppercase text-[38px] sm:text-[52px] md:text-[68px] leading-[0.95] sm:leading-[0.92] tracking-[0.02em] mb-6 max-w-[92%] md:max-w-[75%] reveal" data-delay="100">
            Astypalea,<br /> Before Everyone Else.
          </h1>
          <p className="text-[14px] md:text-[16px] opacity-90 max-w-[480px] leading-[1.55] font-light reveal text-balance" data-delay="200">The Cycladic island travel writers are quietly putting at the top of their lists.</p>
        </div>
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 eb-scroll-chevron"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/60"><path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
      </section>

      <section className="eb-bg-beige-gradient py-10 md:py-12 px-6 md:px-12 reveal border-t border-[#2e5a88]/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { label: 'Duration', value: '7 nights', sub: '8 days' },
              { label: 'Destination', value: 'Athens + Astypalea' },
              { label: 'Season', value: 'June to September' },
              { label: 'Best for', value: 'Couples, Slow travelers' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col min-w-0">
                <div className="text-[9px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light mb-2 whitespace-nowrap">{item.label}</div>
                <div className="text-[13px] md:text-[17px] text-[#2e5a88] font-light leading-[1.3]">{item.value}</div>
                {item.sub && <div className="text-[10px] text-[#1a1a1a]/35 font-light mt-1 whitespace-nowrap">{item.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-14 md:py-20 bg-white reveal">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10 md:mb-14"><div className="text-[10px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 font-light">The Route</div></div>
          <div className="relative">
            <div className="hidden md:block">
              <div className="flex items-start justify-between relative">
                <div className="absolute top-[14px] left-[7%] right-[7%] h-px bg-[#2e5a88]/30" />
                <div className="flex flex-col items-center text-center w-[26%] relative z-10"><div className="w-5 h-5 rounded-full bg-[#2e5a88] border-4 border-white shadow-md mb-6" /><div className="text-[15px] md:text-[17px] tracking-[0.25em] uppercase text-[#2e5a88] font-light mb-2">Athens</div><div className="text-[12px] text-[#1a1a1a]/50 font-light">3 nights &middot; Boutique hotel</div></div>
                <div className="flex flex-col items-center text-center w-[40%] relative z-10"><div className="w-5 h-5 rounded-full bg-[#2e5a88] border-4 border-white shadow-md mb-6" /><div className="text-[15px] md:text-[17px] tracking-[0.25em] uppercase text-[#2e5a88] font-light mb-2">Astypalea</div><div className="text-[12px] text-[#1a1a1a]/50 font-light">4 nights &middot; Hotel in Chora</div><div className="text-[10px] tracking-[0.15em] uppercase text-[#1a1a1a]/35 font-light mt-2 italic">+ Islets by private boat</div></div>
                <div className="flex flex-col items-center text-center w-[14%] relative z-10"><div className="w-3.5 h-3.5 rounded-full bg-[#2e5a88] mb-6" /><div className="text-[11px] tracking-[0.25em] uppercase text-[#2e5a88] font-light mb-1">Athens</div><div className="text-[10px] text-[#1a1a1a]/50 font-light">Departure</div></div>
              </div>
            </div>
            <div className="md:hidden flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center text-center"><div className="w-4 h-4 rounded-full bg-[#2e5a88] border-4 border-white shadow-md mb-3" /><div className="text-[15px] tracking-[0.25em] uppercase text-[#2e5a88] font-light mb-2">Athens</div><div className="text-[11px] text-[#1a1a1a]/50 font-light">3 nights</div></div>
              <div className="w-px h-8 bg-[#2e5a88]/30" />
              <div className="flex flex-col items-center text-center"><div className="w-4 h-4 rounded-full bg-[#2e5a88] border-4 border-white shadow-md mb-3" /><div className="text-[15px] tracking-[0.25em] uppercase text-[#2e5a88] font-light mb-2">Astypalea</div><div className="text-[11px] text-[#1a1a1a]/50 font-light">4 nights &middot; Chora</div><div className="text-[10px] tracking-[0.15em] uppercase text-[#1a1a1a]/35 font-light mt-2 italic">+ Islets by private boat</div></div>
              <div className="w-px h-8 bg-[#2e5a88]/30" />
              <div className="flex flex-col items-center text-center"><div className="w-3 h-3 rounded-full bg-[#2e5a88] mb-3" /><div className="text-[11px] tracking-[0.25em] uppercase text-[#2e5a88] font-light mb-1">Athens</div><div className="text-[10px] text-[#1a1a1a]/50 font-light">Departure</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16 reveal"><div className="text-[10px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 font-light">Highlights</div></div>
          <div className="relative h-[60vh] min-h-[400px] md:h-auto md:min-h-0 md:aspect-[21/9] overflow-hidden group reveal eb-image-vignette md:max-w-[1200px] md:mx-auto -mx-6 md:mx-auto">
            <Image src="/astypalea_01.jpg" alt="Astypalea butterfly-shaped island seen from above, Aegean" fill sizes="100vw" className="object-cover object-center reveal transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            <div className="absolute top-24 left-6 md:top-8 md:left-8 z-[3]"><span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white font-light">The Island</span></div>
            <div className="absolute bottom-16 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white z-[3] max-w-[600px]">
              <h3 className="font-anton font-normal uppercase text-[36px] md:text-[40px] leading-[1] mb-4">Four nights on the island.</h3>
              <p className="text-[15px] md:text-[15px] opacity-90 leading-[1.55] font-light">A hotel in Chora, the Venetian castle above, islets no one else reaches.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="eb-bg-beige-gradient py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16 reveal"><div className="text-[10px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 font-light">Day by Day</div></div>
          <div className="border-t border-black/10">
            {days.map((day, i) => {
              const isOpen = openDay === i;
              return (
                <div key={i} className="border-b border-black/10">
                  <button onClick={() => setOpenDay(isOpen ? null : i)} className="w-full flex items-center justify-between py-7 md:py-10 text-left group transition-colors hover:bg-black/[0.02]" aria-expanded={isOpen}>
                    <div className="flex items-baseline gap-4 md:gap-10 flex-1 min-w-0 relative"><div className="eb-day-number shrink-0 w-[60px] md:w-[110px]">{day.day}</div><div className="text-[15px] md:text-[22px] text-[#2e5a88] font-light leading-tight min-w-0">{day.title}</div></div>
                    <div className="shrink-0 ml-4"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`text-[#2e5a88] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}><path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg></div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pb-8 md:pb-10 pl-0 md:pl-[140px] pr-2 md:pr-4"><p className="text-[14px] md:text-[15px] leading-[1.75] text-[#1a1a1a]/65 font-light max-w-[640px]">{day.body}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section data-nav-dark className="relative w-full h-[55vh] min-h-[400px] md:h-[80vh] md:min-h-[500px] overflow-hidden eb-image-vignette">
        <Image src="/astypalea_02.jpg" alt="Astypalea white village and castle" fill className="object-cover reveal" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-12 md:bottom-20 left-6 md:left-16 right-6 md:right-16 max-w-[620px] text-white reveal z-[3]">
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-light inline-block mb-6">Where You Stay</div>
          <h2 className="font-anton font-normal uppercase text-[32px] md:text-[56px] leading-[1] md:leading-[0.98] tracking-[0.02em] mb-6">A hotel<br />in the white village.</h2>
          <p className="text-[14px] md:text-[17px] leading-[1.7] md:leading-[1.75] opacity-90 font-light">A hand-selected boutique hotel in Chora, under the Venetian castle. Small, quiet, with the kind of rooftop the island is worth waking up to.</p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 reveal">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="text-center mb-8 md:mb-10">
            <div className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 font-light">Astypalea at a glimpse</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-3">
            <div className="relative aspect-[3/4] overflow-hidden eb-image-vignette group"><Image src="/astypalea_06.JPG" alt="Astypalea coast, quiet cove" fill className="object-cover reveal" /></div>
            <div className="relative aspect-[3/4] overflow-hidden eb-image-vignette group"><Image src="/atypalea_05.jpg" alt="Astypalea beach" fill className="object-cover reveal" /></div>
            <div className="relative aspect-[3/4] overflow-hidden eb-image-vignette group"><Image src="/astypalea_03.jpg" alt="Street in Astypalea Chora" fill className="object-cover reveal" /></div>
          </div>
        </div>
      </section>

      <section className="eb-inner-frame reveal">
        <div className="eb-inner-content">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12 md:mb-16"><div className="text-[10px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 font-light">What&apos;s Included</div></div>
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-20">
              <div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-[#2e5a88] font-medium mb-6">Included</div>
                <ul className="space-y-4">{includedItems.map((item, i) => (<li key={i} className="flex items-start gap-4 text-[14px] md:text-[15px] text-[#1a1a1a]/75 font-light leading-[1.65]"><span className="inline-block w-[6px] h-[6px] bg-[#2e5a88] mt-[9px] shrink-0" /><span>{item}</span></li>))}</ul>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/50 font-light mb-6">On Request</div>
                <ul className="space-y-4">{onRequestItems.map((item, i) => (<li key={i} className="flex items-start gap-4 text-[13px] md:text-[14px] text-[#1a1a1a]/60 font-light leading-[1.6]"><span className="inline-block w-[5px] h-[5px] border border-[#1a1a1a]/25 mt-[8px] shrink-0" /><span>{item}</span></li>))}</ul>
                <p className="mt-8 text-[12px] md:text-[13px] text-[#1a1a1a]/45 italic font-light leading-[1.6]">Flights and travel insurance arranged separately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA — shape this journey */}
      <section className="bg-white py-14 md:py-16 px-6 md:px-8 reveal">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="w-8 h-px bg-[#2e5a88]/30 mx-auto mb-6" />
          <p className="font-body text-[15px] md:text-[17px] text-[#1a1a1a]/65 font-light mb-6 leading-[1.6]">
            Ready to shape this one?
          </p>
          <Link
            href="/contact?type=journey&journey=astypalea-before-everyone-else"
            className="inline-flex items-center gap-2 font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-[#2e5a88] border-b border-[#2e5a88]/40 pb-1 hover:border-[#2e5a88] transition-colors min-h-[44px]"
          >
            Inquire <span>&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-20 bg-white reveal">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10"><div className="text-[10px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 font-light">You might also like</div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { href: '/journeys/paros-antiparos-privately', img: '/images/journeys/paros-hero.jpg', category: 'Slow \u00b7 Discovery', title: 'Paros + Antiparos, Privately', meta: '6 nights \u00b7 Paros' },
              { href: '/journeys/athens-slowly', img: '/acropole_01.jpg', category: 'Cultural \u00b7 Slow', title: 'Athens, Slowly', meta: '5 nights \u00b7 Athens' },
              { href: '/journeys/a-week-in-the-cyclades-by-sea', img: '/yatch_page%20collection_2.png', category: 'By Sea \u00b7 Private Yacht', title: 'A Week in the Cyclades, by Sea', meta: '7 nights \u00b7 Cyclades' },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="relative aspect-[3/4] overflow-hidden cursor-pointer group block eb-image-vignette">
                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 z-[3]"><span className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[9px] tracking-[0.2em] uppercase text-white font-light">{card.category}</span></div>
                <div className="absolute bottom-6 left-6 right-6 text-white transition-transform duration-500 group-hover:-translate-y-2 z-[3]"><h3 className="font-anton font-normal uppercase text-[22px] md:text-[28px] leading-[1.05] mb-2">{card.title}</h3><div className="text-[11px] opacity-85 tracking-[0.1em] font-light">{card.meta}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-dark className="relative w-full h-[70vh] min-h-[480px] overflow-hidden eb-image-vignette">
        <Image src="/hero-bateau.jpg" alt="Ready when you are" fill className="object-cover reveal" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/60" />
        <div className="relative z-[3] h-full flex items-center justify-center px-6 md:px-10">
          <div className="text-center max-w-[640px] reveal">
            <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white font-light inline-block mb-5">Yours to shape</div>
            <h2 className="font-anton font-normal uppercase text-[38px] md:text-[64px] leading-[0.95] tracking-[0.02em] text-white mb-5">Ready when<br />you are.</h2>
            <p className="text-[14px] md:text-[15px] text-white/85 max-w-[440px] mx-auto mb-8 leading-[1.6] font-light">Tell us when, with whom, and how you want to feel. We shape the rest.</p>
            <div className="flex justify-center"><Link href="/contact?type=journey&journey=astypalea-before-everyone-else" className="eb-cta-link font-body text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white min-h-[44px] py-3">Start the conversation <span className="eb-cta-arrow">&rarr;</span></Link></div>
          </div>
        </div>
      </section>

      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <NewsletterBanner />
        <div className="max-w-6xl mx-auto px-6"><div className="border-t border-white/30" /></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-8 mt-8">
          <div className="flex flex-col items-center md:items-start gap-4 order-1"><a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-80" /></a><p className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider text-left">&copy; 2026 Emma Bonnefous &middot; Athens, Greece</p><a href="mailto:hello@emmabonnefous.com" className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors">hello@emmabonnefous.com</a></div>
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-6 gap-y-2 font-body text-xs tracking-[0.15em] uppercase text-[#fcf7f1]/80 text-center md:text-right md:justify-end order-2 md:order-3"><a href="/influencer-production" className="hover:text-[#fcf7f1] transition-colors py-2">For Brands</a><a href="/journal" className="hover:text-[#fcf7f1] transition-colors py-2">Journal</a><a href="/about" className="hover:text-[#fcf7f1] transition-colors py-2">About</a><a href="/contact" className="hover:text-[#fcf7f1] transition-colors py-2">Contact</a></div>
          <div className="flex flex-col items-center gap-4 order-3 md:order-2"><div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/60 tracking-wider"><a href="https://www.instagram.com/emma_bonnefous_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">Instagram</a><span className="py-2">&middot;</span><a href="https://www.linkedin.com/in/emmabonnefous/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">LinkedIn</a></div><div className="hidden md:flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider"><a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a><span className="py-2">&middot;</span><a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a></div></div>
          <div className="flex md:hidden flex-col items-center gap-3 order-4"><a href="mailto:hello@emmabonnefous.com" className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors py-2">hello@emmabonnefous.com</a><div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider"><a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a><span className="py-2">&middot;</span><a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a></div><p className="font-body text-xs text-[#fcf7f1]/50 tracking-wider text-center">&copy; 2026 Emma Bonnefous &middot; Athens, Greece</p></div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10"><p className="text-[10px] md:text-[11px] text-white/35 font-light leading-[1.5] max-w-[540px] mx-auto md:mx-0 text-center md:text-left">eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece.</p></div>
      </footer>
    </main>
  );
}
