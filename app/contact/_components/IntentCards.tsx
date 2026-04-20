import Link from "next/link";

const portes = [
  {
    id: "journey",
    overline: "Private Journey",
    title: "A journey.",
    desc: "Designed from scratch, or built on one of ours.",
    href: "/contact?type=journey",
    img: "/paros_01.jpg",
    alt: "Paros coast, Greek islands",
  },
  {
    id: "occasion",
    overline: "Occasion",
    title: "A moment.",
    desc: "Wedding, proposal, anniversary, honeymoon. Marked quietly.",
    href: "/contact?type=occasion",
    img: "/yatch_page collection_2.png",
    alt: "Couple on yacht bow, Aegean coast",
  },
  {
    id: "stay",
    overline: "Villa or Yacht",
    title: "A place.",
    desc: "Villas rarely online. Yacht on request.",
    href: "/contact?type=stay",
    img: "/mykonos_maison.jpg",
    alt: "Private villa, Mykonos",
  },
];

export default function IntentCards() {
  return (
    <>
      <section className="bg-[#fcf7f1] py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-[10px] md:text-[11px] font-light tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-4">
              Three ways in
            </p>
            <h2 className="font-body text-[22px] md:text-[30px] text-[#2e5a88] leading-[1.3] font-normal max-w-[620px] mx-auto">
              Tell us what you&apos;re looking for, and we start from there.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {portes.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden eb-image-vignette"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7 z-[3]">
                  <span className="inline-block self-start px-3 py-1.5 bg-white/15 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] rounded-full font-body text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium text-white mb-4">
                    {p.overline}
                  </span>
                  <h3 className="font-anton font-normal uppercase text-white text-[32px] md:text-[40px] leading-[0.95] mb-3" style={{ letterSpacing: "0.01em", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                    {p.title}
                  </h3>
                  <p className="font-body text-[13px] md:text-[14px] text-white/85 leading-[1.6] font-light max-w-[280px]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 font-body text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-white font-medium">
                    Begin
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
