"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FormOnePage, { Section } from "./FormOnePage";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, Counter, Checkbox, Select } from "./fields";
import { occasionTypes, howHeard, styles, countries } from "../_data/options";

interface Data {
  name: string;
  email: string;
  phone: string;
  country: string;
  occasion: string;
  otherOccasion: string;
  date: string;
  guests: number;
  location: string;
  style: string;
  vision: string;
  budget: string;
  howHeard: string;
  consent: boolean;
}

const EMPTY: Data = {
  name: "",
  email: "",
  phone: "",
  country: "",
  occasion: "",
  otherOccasion: "",
  date: "",
  guests: 2,
  location: "",
  style: "",
  vision: "",
  budget: "",
  howHeard: "",
  consent: false,
};

const locations = [
  "Athens",
  "Athens Riviera",
  "Cyclades",
  "Dodecanese",
  "Peloponnese",
  "Ionian",
  "Open to suggestions",
];

const STORAGE_KEY = "eb-contact-occasion";
const VISION_MIN = 100;

export default function OccasionForm() {
  const [data, setData] = useState<Data>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData({ ...EMPTY, ...JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const update = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  const missing: string[] = [];
  if (!data.name.trim()) missing.push("your name");
  if (!/\S+@\S+\.\S+/.test(data.email)) missing.push("a valid email");
  if (!data.occasion) missing.push("the occasion type");
  if (!data.date) missing.push("a date");
  if (data.vision.trim().length < VISION_MIN) missing.push(`your vision (min ${VISION_MIN} characters)`);
  if (!data.budget.trim()) missing.push("an indicative budget");
  if (!data.consent) missing.push("consent");
  const canSubmit = missing.length === 0;

  const buildSummary = () => {
    const occasion = data.occasion === "Other" && data.otherOccasion ? data.otherOccasion : data.occasion;
    return [
      `INQUIRY TYPE: Occasion`,
      `RECEIVED: ${new Date().toISOString()}`,
      "",
      "CLIENT",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Country of residence: ${data.country || "(not provided)"}`,
      "",
      "OCCASION",
      `Type: ${occasion}`,
      `Date: ${data.date}`,
      `Guests: ${data.guests}`,
      `Location preference: ${data.location || "(not specified)"}`,
      `Style: ${data.style || "(not specified)"}`,
      `Budget: ${data.budget}`,
      "",
      "VISION",
      data.vision,
      "",
      `Source: ${data.howHeard || "(not specified)"}`,
      `RGPD consent: ${data.consent ? "accepted" : "not accepted"}`,
    ].join("\n");
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitError(null);
    setSubmitting(true);
    const summary = buildSummary();
    try {
      const res = await fetch("/api/contact-occasion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setSubmitError("We could not send your enquiry. Please try again or email hello@emmabonnefous.com.");
        return;
      }
      setSubmittedSummary(summary);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <Confirmation summary={submittedSummary} />;
  }

  return (
    <FormOnePage
      typeLabel="Occasion"
      title="A moment, marked."
      intro="Weddings, proposals, private experiences, celebrations. Tell us what the moment is, and we design the rest."
      onSubmit={handleSubmit}
      canSubmit={canSubmit}
      missing={missing}
      isSubmitting={submitting}
      currentType="occasion"
      submitError={submitError}
    >
      <Section num="01" title="Who is celebrating.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Full name" required>
            <TextInput value={data.name} onChange={(v) => update("name", v)} placeholder="Your name" autoComplete="name" />
          </Field>
          <Field label="Email" required>
            <TextInput value={data.email} onChange={(v) => update("email", v)} placeholder="you@domain.com" type="email" autoComplete="email" />
          </Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Phone" hint="Helpful for quick follow-up">
            <TextInput value={data.phone} onChange={(v) => update("phone", v)} placeholder="Your phone number" type="tel" autoComplete="tel" />
          </Field>
          <Field label="Country of residence">
            <Select value={data.country} onChange={(v) => update("country", v)} options={countries} placeholder="Select country" />
          </Field>
        </div>
      </Section>

      <Section num="02" title="The moment.">
        <Field label="Type of occasion" required>
          <PillChoice options={occasionTypes} value={data.occasion} onChange={(v) => update("occasion", v)} name="occasion" />
        </Field>
        {data.occasion === "Other" && (
          <Field label="Tell us more">
            <TextInput value={data.otherOccasion} onChange={(v) => update("otherOccasion", v)} placeholder="The nature of the moment" />
          </Field>
        )}
        <Field label="Date" required hint="Use the notes below if the date is still flexible.">
          <input
            type="date"
            value={data.date}
            onChange={(e) => update("date", e.target.value)}
            className="w-full border-b border-[#e8e4de] bg-transparent py-3 font-body text-[16px] md:text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
          />
        </Field>
        <Field label="Number of guests">
          <Counter value={data.guests} onChange={(v) => update("guests", v)} min={1} max={9999} />
        </Field>
        <Field label="Location preference">
          <PillChoice options={locations} value={data.location} onChange={(v) => update("location", v)} name="location" />
        </Field>
        <Field label="Style">
          <PillChoice options={styles} value={data.style} onChange={(v) => update("style", v)} name="style" />
        </Field>
      </Section>

      <Section num="03" title="Your vision.">
        <Field label="In a few sentences" required hint={`The occasion, the feel, anything that matters. (min ${VISION_MIN} characters)`}>
          <TextArea value={data.vision} onChange={(v) => update("vision", v)} placeholder="The feel of the moment, who it is for, what it should leave behind..." rows={7} minLength={VISION_MIN} />
        </Field>
        <Field label="Indicative budget" required hint="Total for the occasion. Write a figure or a range, in euros — it helps us propose the right scale.">
          <TextInput value={data.budget} onChange={(v) => update("budget", v)} placeholder="e.g. €5,000 / from €15,000 / €50,000+" />
        </Field>
        <Field label="How did you find us">
          <PillChoice options={howHeard} value={data.howHeard} onChange={(v) => update("howHeard", v)} name="howHeard" />
        </Field>
        <div className="pt-2">
          <Checkbox checked={data.consent} onChange={(v) => update("consent", v)}>
            I agree to be contacted by the eb. team about this inquiry. My details are governed by our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#2e5a88] transition-colors">
              privacy policy
            </Link>
            .
          </Checkbox>
        </div>
      </Section>
    </FormOnePage>
  );
}
