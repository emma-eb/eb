"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FormOnePage, { Section } from "./FormOnePage";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, PillMulti, Counter, Checkbox, DateRange, Select } from "./fields";
import Link from "next/link";
import {
  journeyBudgets,
  journeyMustHaves,
  journeyTitles,
  accommodationStyles,
  paces,
  lengths,
  howHeard,
  flexibilityOptions,
  countries,
} from "../_data/options";

interface Data {
  name: string;
  email: string;
  phone: string;
  country: string;
  startDate: string;
  endDate: string;
  flexibility: string;
  adults: number;
  kids: number;
  kidsAges: string;
  length: string;
  pace: string;
  accommodation: string;
  mustHaves: string[];
  personalization: string;
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
  startDate: "",
  endDate: "",
  flexibility: "",
  adults: 2,
  kids: 0,
  kidsAges: "",
  length: "",
  pace: "",
  accommodation: "",
  mustHaves: [],
  personalization: "",
  vision: "",
  budget: "",
  howHeard: "",
  consent: false,
};

const STORAGE_KEY = "eb-contact-journey";

export default function JourneyForm() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get("journey");
  const isScratch = !journeySlug;
  const journeyTitle = journeySlug ? journeyTitles[journeySlug] : undefined;
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
  if (!data.startDate || !data.endDate) missing.push("travel dates");
  if (isScratch && !data.length) missing.push("length");
  if (isScratch && !data.accommodation) missing.push("accommodation style");
  if (!data.budget) missing.push("a budget band");
  if (!data.consent) missing.push("consent");
  const canSubmit = missing.length === 0;

  const buildSummary = () => {
    const lines = [
      `INQUIRY TYPE: Private Journey${isScratch ? " - From scratch" : ` - ${journeyTitle ?? journeySlug}`}`,
      `RECEIVED: ${new Date().toISOString()}`,
      "",
      "CLIENT",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Country of residence: ${data.country || "(not provided)"}`,
      "",
      "JOURNEY",
      `Dates: ${data.startDate} to ${data.endDate}${data.flexibility ? ` (flex: ${data.flexibility})` : ""}`,
      `Party: ${data.adults} adults, ${data.kids} kids${data.kids > 0 && data.kidsAges ? ` (ages: ${data.kidsAges})` : ""}`,
    ];
    if (isScratch) {
      lines.push(
        `Length: ${data.length}`,
        `Pace: ${data.pace || "(not specified)"}`,
        `Accommodation: ${data.accommodation}`,
        `Must-haves: ${data.mustHaves.join(", ") || "(none flagged)"}`,
      );
    } else {
      lines.push(`Personalization: ${data.personalization || "(none)"}`);
    }
    lines.push(
      "",
      `Budget band: ${data.budget}`,
      "",
      "VISION",
      data.vision,
      "",
      `Source: ${data.howHeard || "(not specified)"}`,
      `RGPD consent: ${data.consent ? "accepted" : "not accepted"}`,
    );
    return lines.join("\n");
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitError(null);
    setSubmitting(true);
    const summary = buildSummary();
    try {
      const res = await fetch("/api/contact-journey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          journeySlug,
          journeyTitle,
        }),
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
      typeLabel={isScratch ? "Private Journey \u00b7 From scratch" : `Private Journey \u00b7 ${journeyTitle ?? journeySlug}`}
      title={isScratch ? "A journey, shaped for you." : "Personalise this journey."}
      intro={isScratch ? "Tell us who you are, when you travel, and what matters. We shape the rest." : "The journey is set. A few notes to make it yours."}
      onSubmit={handleSubmit}
      canSubmit={canSubmit}
      missing={missing}
      isSubmitting={submitting}
      currentType="journey"
      submitError={submitError}
    >
      <Section num="01" title="Who is traveling.">
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

      <Section num="02" title="The journey.">
        {journeyTitle && (
          <Field label="Journey of interest">
            <div className="bg-white border border-[#e8e4de] px-4 py-3 md:px-5 md:py-4">
              <p className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/80">
                {journeyTitle}
              </p>
              <p className="mt-1.5 font-body text-[12px] md:text-[13px] text-[#1a1a1a]/55 leading-[1.5] font-light">
                The published route is the starting point. Use the personalisation field below to adjust extensions, substitutions, or specific wishes.
              </p>
            </div>
          </Field>
        )}
        <Field label="Travel dates" required>
          <DateRange start={data.startDate} end={data.endDate} onChange={(s, e) => { update("startDate", s); update("endDate", e); }} />
        </Field>
        <Field label="Flexibility">
          <PillChoice options={flexibilityOptions} value={data.flexibility} onChange={(v) => update("flexibility", v)} name="flexibility" />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Adults">
            <Counter value={data.adults} onChange={(v) => update("adults", v)} min={1} max={30} />
          </Field>
          <Field label="Kids">
            <Counter value={data.kids} onChange={(v) => update("kids", v)} min={0} max={15} />
          </Field>
        </div>
        {data.kids > 0 && (
          <Field label="Kids' ages">
            <TextInput value={data.kidsAges} onChange={(v) => update("kidsAges", v)} placeholder="e.g. 4, 7, 11" />
          </Field>
        )}
        {isScratch && (
          <>
            <Field label="Length" required>
              <PillChoice options={lengths} value={data.length} onChange={(v) => update("length", v)} name="length" />
            </Field>
            <Field label="Pace">
              <PillChoice options={paces} value={data.pace} onChange={(v) => update("pace", v)} name="pace" />
            </Field>
            <Field label="Accommodation style" required>
              <PillChoice options={accommodationStyles} value={data.accommodation} onChange={(v) => update("accommodation", v)} name="accommodation" />
            </Field>
          </>
        )}
        <Field label="Must-haves" hint="Optional. Tick what matters.">
          <PillMulti options={journeyMustHaves} values={data.mustHaves} onChange={(v) => update("mustHaves", v)} />
        </Field>
        {!isScratch && (
          <Field label="Personalization requests" hint="Anything you want to adjust from the published route.">
            <TextArea value={data.personalization} onChange={(v) => update("personalization", v)} placeholder="Extensions, substitutions, specific wishes..." rows={5} />
          </Field>
        )}
      </Section>

      <Section num="03" title="Your vision.">
        <Field label="In a few sentences" hint="Who is this journey for, what matters, what you dream of. Optional, helps us prepare.">
          <TextArea value={data.vision} onChange={(v) => update("vision", v)} placeholder="The occasion, the feel, anything we should know..." rows={7} />
        </Field>
        <Field label="Budget per person" required hint="For the full journey, per traveller. An indicative range helps us propose the right scale.">
          <PillChoice options={journeyBudgets} value={data.budget} onChange={(v) => update("budget", v)} name="budget" />
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
