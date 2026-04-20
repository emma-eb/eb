"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FormOnePage, { Section } from "./FormOnePage";
import Confirmation from "./Confirmation";
import { Field, TextInput, TextArea, PillChoice, PillMulti, Counter, Checkbox, DateRange, Select } from "./fields";
import {
  villaBudgets,
  mustHaves as mustHavesData,
  howHeard,
  stayInterest,
  flexibilityOptions,
  countries,
} from "../_data/options";

interface Data {
  name: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  villa: string;
  startDate: string;
  endDate: string;
  flexibility: string;
  adults: number;
  kids: number;
  kidsAges: string;
  bedrooms: number;
  services: string[];
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
  interest: "",
  villa: "",
  startDate: "",
  endDate: "",
  flexibility: "",
  adults: 2,
  kids: 0,
  kidsAges: "",
  bedrooms: 2,
  services: [],
  vision: "",
  budget: "",
  howHeard: "",
  consent: false,
};

const STORAGE_KEY = "eb-contact-stay";
const VISION_MIN = 60;

export default function StayForm() {
  const searchParams = useSearchParams();
  const villaSlug = searchParams.get("villa");
  const [data, setData] = useState<Data>(() => ({
    ...EMPTY,
    villa: villaSlug || "",
    interest: villaSlug ? "Villa" : "",
  }));
  const [submitted, setSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData((d) => ({ ...d, ...JSON.parse(saved) }));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const update = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  const isYacht = data.interest === "Yacht";
  const showVillaBudget = data.interest === "Villa" || data.interest === "Both";
  const showYachtNote = data.interest === "Yacht" || data.interest === "Both";

  const missing: string[] = [];
  if (!data.name.trim()) missing.push("your name");
  if (!/\S+@\S+\.\S+/.test(data.email)) missing.push("a valid email");
  if (!data.interest) missing.push("villa or yacht");
  if (!data.startDate || !data.endDate) missing.push("travel dates");
  if (data.vision.trim().length < VISION_MIN) missing.push(`your vision (min ${VISION_MIN} characters)`);
  if (showVillaBudget && !data.budget) missing.push("a villa budget");
  if (!data.consent) missing.push("consent");
  const canSubmit = missing.length === 0;

  const buildSummary = () => {
    const lines = [
      `INQUIRY TYPE: Stay (${data.interest})${villaSlug ? ` \u2014 ${villaSlug}` : ""}`,
      `RECEIVED: ${new Date().toISOString()}`,
      "",
      "CLIENT",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      `Country of residence: ${data.country || "(not provided)"}`,
      "",
      "STAY",
      `Interest: ${data.interest}`,
    ];
    if (data.villa) lines.push(`Villa of interest: ${data.villa}`);
    lines.push(
      `Dates: ${data.startDate} to ${data.endDate}${data.flexibility ? ` (flex: ${data.flexibility})` : ""}`,
      `Party: ${data.adults} adults, ${data.kids} kids${data.kids > 0 && data.kidsAges ? ` (ages: ${data.kidsAges})` : ""}`,
    );
    if (!isYacht) lines.push(`Bedrooms min: ${data.bedrooms}`);
    lines.push(`Services must-have: ${data.services.join(", ") || "(none flagged)"}`);
    if (showVillaBudget) lines.push(`Villa budget per night: ${data.budget}`);
    if (showYachtNote) lines.push(`Yacht: on request (quoted individually)`);
    lines.push(
      "",
      "VISION",
      data.vision,
      "",
      `Source: ${data.howHeard || "(not specified)"}`,
      `RGPD consent: ${data.consent ? "accepted" : "not accepted"}`,
    );
    return lines.join("\n");
  };

  const handleSubmit = () => {
    const summary = buildSummary();
    setSubmittedSummary(summary);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    try {
      const subject = encodeURIComponent(`New Stay inquiry \u2014 ${data.name}`);
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
      typeLabel={`Villa or Yacht${villaSlug ? ` \u00b7 ${villaSlug}` : ""}`}
      title="A place to land."
      intro="Villas we know in person. Yacht on request. Tell us the feel, we propose the right address."
      onSubmit={handleSubmit}
      canSubmit={canSubmit}
      missing={missing}
    >
      <Section num="01" title="Who is staying.">
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

      <Section num="02" title="The stay.">
        <Field label="What are you looking for" required>
          <PillChoice options={stayInterest} value={data.interest} onChange={(v) => update("interest", v)} name="interest" />
        </Field>
        {villaSlug && (
          <Field label="Villa of interest" hint="Locked from your selection. Leave blank if you changed your mind.">
            <TextInput value={data.villa} onChange={(v) => update("villa", v)} placeholder="Villa slug" />
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
        {!isYacht && (
          <Field label="Bedrooms (minimum)">
            <Counter value={data.bedrooms} onChange={(v) => update("bedrooms", v)} min={1} max={15} />
          </Field>
        )}
        <Field label="Services must-have" hint="Optional. Tick what matters.">
          <PillMulti options={mustHavesData} values={data.services} onChange={(v) => update("services", v)} />
        </Field>
      </Section>

      <Section num="03" title="Your vision.">
        <Field label="In a few sentences" required hint={`The occasion, the atmosphere, what matters. (min ${VISION_MIN} characters)`}>
          <TextArea value={data.vision} onChange={(v) => update("vision", v)} placeholder="What you're looking for, who's coming, what would make it right..." rows={7} minLength={VISION_MIN} />
        </Field>
        {showVillaBudget && (
          <Field label="Villa budget per night" required hint="Indicative. Villas start at €1,000 per night.">
            <PillChoice options={villaBudgets} value={data.budget} onChange={(v) => update("budget", v)} name="budget" />
          </Field>
        )}
        {showYachtNote && (
          <div className="bg-white border border-[#e8e4de] p-5 md:p-6">
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a]/40 mb-2">
              Yacht
            </p>
            <p className="font-body text-[14px] md:text-[15px] text-[#1a1a1a]/70 leading-[1.7] font-light">
              Yacht charters are quoted individually. Share your party and dates, we come back with a proposal.
            </p>
          </div>
        )}
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
