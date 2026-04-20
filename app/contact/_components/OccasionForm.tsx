"use client";

import { useEffect, useState } from "react";
import FormOnePage, { Section } from "./FormOnePage";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, Counter, Checkbox, Select } from "./fields";
import { occasionTypes, occasionBudgets, howHeard, styles, countries } from "../_data/options";

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
const VISION_MIN = 60;

export default function OccasionForm() {
  const [data, setData] = useState<Data>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState("");

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
  if (!data.budget) missing.push("a budget band");
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

  const handleSubmit = () => {
    const summary = buildSummary();
    setSubmittedSummary(summary);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    try {
      const subject = encodeURIComponent(`New Occasion inquiry \u2014 ${data.name}`);
      const body = encodeURIComponent(summary);
      const link = document.createElement("a");
      link.href = `mailto:hello@emmabonnefous.com?subject=${subject}&body=${body}`;
      link.click();
    } catch {}
    setSubmitted(true);
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
            <TextInput value={data.phone} onChange={(v) => update("phone", v)} placeholder="+33 6 12 34 56 78" type="tel" autoComplete="tel" />
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
          <Counter value={data.guests} onChange={(v) => update("guests", v)} min={1} max={200} />
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
        <Field label="Budget band" required hint="Total for the occasion. An indicative range helps us propose the right scale.">
          <PillChoice options={occasionBudgets} value={data.budget} onChange={(v) => update("budget", v)} name="budget" />
        </Field>
        <Field label="How did you find us">
          <PillChoice options={howHeard} value={data.howHeard} onChange={(v) => update("howHeard", v)} name="howHeard" />
        </Field>
        <div className="pt-2">
          <Checkbox checked={data.consent} onChange={(v) => update("consent", v)}>
            I agree to be contacted by the eb. team about this inquiry. My details remain private and are never shared with third parties without my consent.
          </Checkbox>
        </div>
      </Section>
    </FormOnePage>
  );
}
