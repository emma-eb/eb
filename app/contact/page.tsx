export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#fcf7f1]/95 backdrop-blur-sm">
        <a href="/" className="font-heading text-2xl tracking-widest text-[#2e5a88]">eb.</a>
        <div className="hidden md:flex items-center gap-10 font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">
          <a href="/journeys" className="hover:opacity-60 transition-opacity">Private Journeys</a>
          <a href="/collection" className="hover:opacity-60 transition-opacity">Collection</a>
          <a href="/experiences" className="hover:opacity-60 transition-opacity">Experiences</a>
          <a href="/journal" className="hover:opacity-60 transition-opacity">Journal</a>
        </div>
        <a
          href="/contact"
          className="text-xs tracking-[0.2em] uppercase border border-[#2e5a88] text-[#2e5a88] px-5 py-2.5 bg-[#2e5a88] text-[#fcf7f1] transition-colors"
        >
          Inquire
        </a>
      </nav>

      {/* Header */}
      <section className="bg-[#fcf7f1] pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#7da7c4] mb-6">
            Begin here
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-[#2e5a88] leading-none mb-8">
            Tell us<br />what you<br />dream of.
          </h1>
          <p className="font-body text-lg text-[#2e5a88]/60 max-w-xl leading-relaxed">
            Every journey starts with a conversation. Share your vision — when, where, how many, what matters most — and we take care of everything else.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[#fcf7f1] pb-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">First name</label>
                <input
                  type="text"
                  className="border-b border-[#2e5a88]/30 bg-transparent py-3 font-body text-sm text-[#2e5a88] placeholder:text-[#2e5a88]/30 focus:outline-none focus:border-[#2e5a88] transition-colors"
                  placeholder="Emma"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">Last name</label>
                <input
                  type="text"
                  className="border-b border-[#2e5a88]/30 bg-transparent py-3 font-body text-sm text-[#2e5a88] placeholder:text-[#2e5a88]/30 focus:outline-none focus:border-[#2e5a88] transition-colors"
                  placeholder="Bonnefous"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">Email</label>
              <input
                type="email"
                className="border-b border-[#2e5a88]/30 bg-transparent py-3 font-body text-sm text-[#2e5a88] placeholder:text-[#2e5a88]/30 focus:outline-none focus:border-[#2e5a88] transition-colors"
                placeholder="hello@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">What are you looking for?</label>
              <div className="flex flex-wrap gap-3 pt-1">
                {["Private Journey", "Villa Rental", "Yacht Charter", "Wedding / Celebration", "Brand Experience", "Other"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="hidden peer" />
                    <span className="font-body text-xs tracking-[0.15em] uppercase border border-[#2e5a88]/30 text-[#2e5a88]/60 px-4 py-2 peer-checked:bg-[#2e5a88] peer-checked:text-[#fcf7f1] peer-checked:border-[#2e5a88] hover:border-[#2e5a88] hover:text-[#2e5a88] transition-all cursor-pointer">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">Travel dates (approx.)</label>
              <input
                type="text"
                className="border-b border-[#2e5a88]/30 bg-transparent py-3 font-body text-sm text-[#2e5a88] placeholder:text-[#2e5a88]/30 focus:outline-none focus:border-[#2e5a88] transition-colors"
                placeholder="June 2025, flexible"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">Group size</label>
              <input
                type="text"
                className="border-b border-[#2e5a88]/30 bg-transparent py-3 font-body text-sm text-[#2e5a88] placeholder:text-[#2e5a88]/30 focus:outline-none focus:border-[#2e5a88] transition-colors"
                placeholder="2 adults, 1 child"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-[#2e5a88]">Tell us more</label>
              <textarea
                rows={4}
                className="border-b border-[#2e5a88]/30 bg-transparent py-3 font-body text-sm text-[#2e5a88] placeholder:text-[#2e5a88]/30 focus:outline-none focus:border-[#2e5a88] transition-colors resize-none"
                placeholder="Dream destinations, must-have experiences, dietary requirements, or anything else that matters to you..."
              />
            </div>

            <button
              type="submit"
              className="mt-4 self-start font-body text-xs tracking-[0.25em] uppercase bg-[#2e5a88] text-[#fcf7f1] px-10 py-4 hover:bg-[#1a3a5c] transition-colors"
            >
              Send inquiry
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col gap-12 pt-4">
            <div>
              <div className="h-px bg-[#2e5a88] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#2e5a88] mb-4">What happens next</h2>
              <ol className="flex flex-col gap-4">
                {[
                  "We read every inquiry personally — no bots, no templates.",
                  "Within 24 hours, Emma responds with initial thoughts and questions.",
                  "A short call to understand exactly what you're looking for.",
                  "Your bespoke proposal arrives within 48 hours."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 font-body text-sm text-[#2e5a88]/70 leading-relaxed">
                    <span className="font-heading text-[#a7d1c9] shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="h-px bg-[#2e5a88] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#2e5a88] mb-4">Direct contact</h2>
              <div className="flex flex-col gap-3 font-body text-sm text-[#2e5a88]/70">
                <a href="mailto:hello@emmabonnefous.com" className="hover:text-[#2e5a88] transition-colors">
                  hello@emmabonnefous.com
                </a>
                <p className="text-xs tracking-wider text-[#2e5a88]/40 mt-2">
                  Athens, Greece · Available for international clients
                </p>
              </div>
            </div>

            <div>
              <div className="h-px bg-[#2e5a88] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#2e5a88] mb-3">Our promise</h2>
              <p className="font-body text-sm text-[#2e5a88]/70 leading-relaxed">
                We only take on a limited number of clients each season. Not because of capacity — because of quality. Every journey receives our full attention.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#2e5a88] py-10 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <a href="/" className="font-heading text-xl tracking-widest text-[#fcf7f1]">eb.</a>
          <p className="font-body text-xs text-[#fcf7f1]/40 tracking-wider">
            © 2026 Emma Bonnefous · hello@emmabonnefous.com · Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-[#fcf7f1]/60">
            <a href="/partners" className="hover:text-[#fcf7f1] transition-colors">Partners</a>
            <a href="/journal" className="hover:text-[#fcf7f1] transition-colors">Journal</a>
            <a href="/contact" className="hover:text-[#fcf7f1] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
