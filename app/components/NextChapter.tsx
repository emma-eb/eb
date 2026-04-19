import Link from 'next/link';

export interface NextChapterItem {
  href: string;
  label: string;
  desc: string;
}

export default function NextChapter({ items }: { items: NextChapterItem[] }) {
  return (
    <section className="bg-[#fcf7f1] py-14 md:py-16 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[10px] tracking-[0.35em] uppercase text-black/40 font-light">
            Next Chapter
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block text-center"
            >
              <div className="text-[11px] tracking-[0.3em] uppercase text-[#2e5a88] font-light mb-3 transition-opacity group-hover:opacity-70">
                {item.label}
                <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
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
