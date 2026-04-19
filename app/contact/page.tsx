"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import BackToExploring from "../components/BackToExploring";

type FormMode = "general" | "concierge" | "off-market" | "event";

const budgetOptions = [
  "Up to $10K",
  "$10\u2013$25K",
  "$25\u2013$50K",
  "$50K+",
  "Flexible",
];

const accommodationOptions = [
  "Private villa",
  "Boutique hotel",
  "Mix of both",
];

export default function ContactPage() {
  const [mode, setMode] = useState<FormMode>("general");

  const inputClass =
    "border-b border-[#e8e4de] bg-transparent py-3 font-body text-sm text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#1a1a1a] transition-colors w-full";

  const labelClass = "font-body text-xs tracking-[0.2em] uppercase text-[#888]";

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Nav activePage="/contact" />

      {/* ─── HERO ─── */}
      <section className="bg-white pt-28 md:pt-40 pb-12 md:pb-20 px-8 md:px-16 border-b border-[#e8e4de]">
        <div className="max-w-4xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#888] mb-6">Begin here</p>
          <h1 className="font-heading text-6xl md:text-8xl text-[#1a1a1a] leading-none mb-8">
            Tell us<br />what you<br />dream of.
          </h1>
          <p className="font-body text-lg text-[#888] max-w-xl leading-relaxed">
            Every journey starts with a conversation. Share your vision, we take care of everything else.
          </p>
        </div>
      </section>

      {/* ─── FORM MODE SELECTOR ─── */}
      <section className="bg-white pt-10 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          {([
            { id: "general" as FormMode, label: "General inquiry" },
            { id: "concierge" as FormMode, label: "eb. handles everything" },
            { id: "off-market" as FormMode, label: "Request villa access" },
            { id: "event" as FormMode, label: "Plan an event" },
          ]).map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors ${
                mode === m.id
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "border-[#e8e4de] text-[#888] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </section>

      {/* ─── FORMS ─── */}
      <section className="bg-white py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT — Form */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            {/* Common: Name + Email + Phone */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className={labelClass}>First name</label>
                <input type="text" className={inputClass} placeholder="First name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Last name</label>
                <input type="text" className={inputClass} placeholder="Last name" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Email</label>
              <input type="email" className={inputClass} placeholder="hello@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Phone / WhatsApp</label>
              <input type="tel" className={inputClass} placeholder="+33 6 00 00 00 00" />
            </div>

            {/* ── General inquiry fields ── */}
            {mode === "general" && (
              <>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>What are you looking for?</label>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {["Private Journey", "Villa Rental", "Yacht Charter", "Wedding / Celebration", "Brand Experience", "Other"].map((option) => (
                      <label key={option} className="cursor-pointer">
                        <input type="checkbox" className="hidden peer" />
                        <span className="font-body text-xs tracking-[0.15em] uppercase border border-[#e8e4de] text-[#888] px-4 py-2 peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all cursor-pointer inline-block">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Travel dates (approx.)</label>
                  <input type="text" className={inputClass} placeholder="June 2026, flexible" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Group size</label>
                  <input type="text" className={inputClass} placeholder="2 adults, 1 child" />
                </div>
              </>
            )}

            {/* ── Concierge "eb. handles everything" ── */}
            {mode === "concierge" && (
              <>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Journey of reference</label>
                  <input type="text" className={inputClass} placeholder="e.g. Sailing the Small Cyclades (optional)" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Arrival date</label>
                    <input type="date" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Departure date</label>
                    <input type="date" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Adults</label>
                    <input type="number" min={1} className={inputClass} placeholder="2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Children</label>
                    <input type="number" min={0} className={inputClass} placeholder="0" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Infants</label>
                    <input type="number" min={0} className={inputClass} placeholder="0" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Accommodation preference</label>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {accommodationOptions.map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="radio" name="accommodation" className="hidden peer" />
                        <span className="font-body text-xs tracking-[0.15em] uppercase border border-[#e8e4de] text-[#888] px-4 py-2 peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all cursor-pointer inline-block">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Budget range</label>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {budgetOptions.map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="radio" name="budget" className="hidden peer" />
                        <span className="font-body text-xs tracking-[0.15em] uppercase border border-[#e8e4de] text-[#888] px-4 py-2 peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all cursor-pointer inline-block">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ── Off-market villa request ── */}
            {mode === "off-market" && (
              <>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Villa of interest</label>
                  <input type="text" className={inputClass} placeholder="e.g. Mykonos Retreat" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Check-in</label>
                    <input type="date" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Check-out</label>
                    <input type="date" className={inputClass} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Number of guests</label>
                  <input type="number" min={1} className={inputClass} placeholder="8" />
                </div>
              </>
            )}

            {/* ── Event planning ── */}
            {mode === "event" && (
              <>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Type of event</label>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {["Wedding", "Corporate retreat", "Private celebration", "Bachelor / Bachelorette", "Other"].map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="checkbox" className="hidden peer" />
                        <span className="font-body text-xs tracking-[0.15em] uppercase border border-[#e8e4de] text-[#888] px-4 py-2 peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all cursor-pointer inline-block">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Event date</label>
                    <input type="date" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Number of guests</label>
                    <input type="number" min={1} className={inputClass} placeholder="50" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Preferred destination</label>
                  <input type="text" className={inputClass} placeholder="e.g. Santorini, Mykonos, Athens..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Budget range</label>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {budgetOptions.map((opt) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="radio" name="budget" className="hidden peer" />
                        <span className="font-body text-xs tracking-[0.15em] uppercase border border-[#e8e4de] text-[#888] px-4 py-2 peer-checked:bg-[#1a1a1a] peer-checked:text-white peer-checked:border-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all cursor-pointer inline-block">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Common: message + referral + submit */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>
                {mode === "concierge"
                  ? "What would you like to personalize?"
                  : "Tell us more"}
              </label>
              <textarea
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder={
                  mode === "concierge"
                    ? "Specific experiences, dietary needs, accessibility, anything that matters..."
                    : "Dream destinations, must-have experiences, or anything else..."
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={labelClass}>How did you hear about eb.? <span className="text-[#ccc]">(optional)</span></label>
              <input type="text" className={inputClass} placeholder="Instagram, referral, press..." />
            </div>

            {/* Concierge deposit note */}
            {mode === "concierge" && (
              <p className="font-body text-xs text-[#999] leading-relaxed">
                A planning fee of $500 is required to begin. Fully deductible from your final trip cost. Payment details follow after we confirm your request.
              </p>
            )}

            <button
              type="submit"
              className="mt-4 self-start font-body text-xs tracking-[0.25em] uppercase bg-[#1a1a1a] text-white px-10 py-4 hover:bg-[#333] transition-colors"
            >
              {mode === "concierge" ? "Submit request" : mode === "off-market" ? "Request access" : mode === "event" ? "Plan my event" : "Send inquiry"}
            </button>
          </form>

          {/* RIGHT — Info */}
          <div className="flex flex-col gap-12 pt-4">
            <div>
              <div className="h-px bg-[#e8e4de] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#1a1a1a] mb-4">What happens next</h2>
              <ol className="flex flex-col gap-4">
                {[
                  "We read every inquiry personally. No bots, no templates.",
                  "Within 24 hours, eb. responds with initial thoughts and questions.",
                  "A short call to understand exactly what you\u2019re looking for.",
                  "Your bespoke proposal arrives within 48 hours.",
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
                  Athens, Greece &middot; Available for international clients
                </p>
              </div>
            </div>

            <div>
              <div className="h-px bg-[#e8e4de] mb-6 w-12" />
              <h2 className="font-heading text-2xl text-[#1a1a1a] mb-3">Our promise</h2>
              <p className="font-body text-sm text-[#888] leading-relaxed">
                We only take on a limited number of clients each season. Not for lack of capacity, but for quality. Every journey receives our full attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <BackToExploring />

      <footer data-nav-dark className="mt-auto bg-[#1a1a1a] py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-60" /></a>
          <p className="font-body text-xs text-white/30 tracking-wider">
            &copy; 2026 Emma Bonnefous &middot; hello@emmabonnefous.com &middot; Athens, Greece
          </p>
          <div className="flex gap-6 font-body text-xs tracking-[0.15em] uppercase text-white/40">
            <a href="/about" className="hover:text-white/70 transition-colors">About</a>
            <a href="/journal" className="hover:text-white/70 transition-colors">Journal</a>
            <a href="/contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10">
          <p className="text-[10px] md:text-[11px] text-white/35 font-light leading-[1.5] max-w-[540px] mx-auto md:mx-0 text-center md:text-left">
            eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece.
          </p>
        </div>
      </footer>
    </main>
  );
}
