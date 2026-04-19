import Link from 'next/link';

interface NavPage {
  href: string;
  label: string;
  desc: string;
}

const NAV_ORDER: NavPage[] = [
  { href: '/journeys', label: 'Private Journeys', desc: 'Multi-day itineraries, privately.' },
  { href: '/experiences', label: 'Experiences', desc: 'Moments, celebrations, \u00e0 la carte.' },
  { href: '/collection', label: 'The Collection', desc: 'Villas and yachts, hand-selected.' },
  { href: '/journal', label: 'Journal', desc: 'Notes from the ground.' },
  { href: '/about', label: 'About eb.', desc: 'The studio, first-hand.' },
];

export default function NextChapter({
  currentHref,
  items,
}: {
  currentHref?: string;
  items?: NavPage[];
}) {
  let finalItems: NavPage[];
  if (items) {
    finalItems = items;
  } else {
    const startIdx = NAV_ORDER.findIndex((p) => p.href === currentHref);
    const base = startIdx === -1 ? 0 : startIdx + 1;
    finalItems = [0, 1, 2].map((i) => NAV_ORDER[(base + i) % NAV_ORDER.length]);
  }

  return (
    <section className="bg-[#fcf7f1] py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <div className="text-[10px] tracking-[0.35em] uppercase text-black/40 font-light">
            Next Chapter
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-black/10">
          {finalItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block text-center py-10 md:py-4 md:px-6 first:pt-0 md:first:pt-4 last:pb-0 md:last:pb-4"
            >
              <div className="inline-block relative pb-1.5 mb-4">
                <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-[#2e5a88] font-light inline-flex items-center gap-2">
                  {item.label}
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-[#2e5a88] transition-all duration-500 ease-out group-hover:w-full" />
              </div>
              <p className="text-[13px] md:text-[14px] text-black/55 font-light leading-relaxed max-w-[280px] mx-auto">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
