import Nav from "../components/Nav";

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      <Nav activePage="/contact" />

      {/* Header */}
      <section className="bg-white pt-28 md:pt-40 pb-12 md:pb-20 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">Begin here</p>
          <h1 className="font-heading text-6xl md:text-8xl text-[#1a1a1a] leading-none mb-8">
            Tell us<br />what you<br />dream of.
          </h1>
          <p className="font-body text-lg text-[#888] max-w-xl leading-relaxed">
            Every journey starts with a conversation. Share your vision: when, where, how many, what matters most. We take care of everything else.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">First name</label>
                <input
                  type="text"
                  className="border-b border-[#e8e4de] bg-transparent py-3 font-body text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  placeholder="Emma"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">Last name</label>
                <input
                  type="text"
                  className="border-b border-[#e8e4de] bg-transparent py-3 font-body text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  placeholder="Bonnefous"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">Email</label>
              <input
                type="email"
                className="border-b border-[#e8e4de] bg-transparent py-3 font-body text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                placeholder="hello@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">What are you looking for?</label>
              <div className="flex flex-wrap gap-3 pt-1">
                {["Private Journey", "Villa Rental", "Yacht Charter", "Wedding / Celebration", "Brand Experience", "Other"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="hidden peer" />
                    <span className="font-body text-xs tracking-[0.15em] uppercase border border-[#e8e4de] text-[#888] px-4 py-2 peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all cursor-pointer">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">Travel dates (approx.)</label>
              <input
                type="text"
                className="border-b border-[#e8e4de] bg-transparent py-3 font-body text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                placeholder="June 2026, flexible"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">Group size</label>
              <input
                type="text"
                className="border-b border-[#e8e4de] bg-transparent py-3 font-body text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                placeholder="2 adults, 1 child"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#888]">Tell us more</label>
              <textarea
                rows={4}
                className="border-b border-[#e8e4de] bg-transparent py-3 font-body text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                placeholder="Dream destinations, must-have experiences, dietary requirements, or anything else that matters to you..."
              />
            </div>

            <button
              type="submit"
              className="mt-4 self-start font-body text-xs tracking-[0.25em] uppercase bg-[#1a1a1a] text-white px-10 py-4 hover:bg-[#333] transition-colors"
            >
              Send inquiry
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col gap-12 pt-4">
            <div>
              <div className="h-px bg-[#e8e4de] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#1a1a1a] mb-4">What happens next</h2>
              <ol className="flex flex-col gap-4">
                {[
                  "We read every inquiry personally. No bots, no templates.",
                  "Within 24 hours, Emma responds with initial thoughts and questions.",
                  "A short call to understand exactly what you're looking for.",
                  "Your bespoke proposal arrives within 48 hours."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 font-body text-sm text-[#888] leading-relaxed">
                    <span className="font-heading text-[#ccc] shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="h-px bg-[#e8e4de] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#1a1a1a] mb-4">Direct contact</h2>
              <div className="flex flex-col gap-3 font-body text-sm text-[#888]">
                <a href="mailto:hello@emmabonnefous.com" className="hover:text-[#1a1a1a] transition-colors">
                  hello@emmabonnefous.com
                </a>
                <p className="text-xs tracking-wider text-[#ccc] mt-2">
                  Athens, Greece · Available for international clients
                </p>
              </div>
            </div>

            <div>
              <div className="h-px bg-[#e8e4de] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#1a1a1a] mb-3">Our promise</h2>
              <p className="font-body text-sm text-[#888] leading-relaxed">
                We only take on a limited number of clients each season. Not because of capacity, because of quality. Every journey receives our full attention.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer data-nav-dark className="mt-auto bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-60" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            © 2026 Emma Bonnefous · hello@emmabonnefous.com · Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/partners" className="hover:text-white/70 transition-colors">Partners</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
