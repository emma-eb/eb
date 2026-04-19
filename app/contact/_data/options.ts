export const villaBudgets = [
  "\u20AC1,500 to 3,000 / night",
  "\u20AC3,000 to 5,000 / night",
  "\u20AC5,000 to 10,000 / night",
  "\u20AC10,000+ / night",
  "Discuss privately",
];

export const journeyBudgets = [
  "\u20AC5,000 to 8,000 per person",
  "\u20AC8,000 to 15,000 per person",
  "\u20AC15,000 to 30,000 per person",
  "\u20AC30,000 to 50,000 per person",
  "\u20AC50,000+ per person",
  "Confidential / discuss privately",
];

import { moods as canonicalMoods } from "../../data/catalogue";

export const moods = canonicalMoods.map((m) => ({
  id: m.id,
  label: m.name,
  desc: m.subtitle,
}));

export const mustHaves = [
  "Private chef",
  "Driver / transfers",
  "Kids & childcare",
  "Security",
  "Accessibility",
  "Wellness / yoga",
  "Pre-stocked pantry",
  "Daily housekeeping",
  "Boat charter",
  "Helicopter transfers",
];

export const occasionBudgets = [
  "\u20AC3,000 to 10,000",
  "\u20AC10,000 to 30,000",
  "\u20AC30,000 to 80,000",
  "\u20AC80,000 to 200,000",
  "\u20AC200,000+",
  "Confidential / discuss privately",
];

export const occasionTypes = [
  "Wedding",
  "Proposal",
  "Honeymoon",
  "Anniversary",
  "Birthday",
  "Milestone celebration",
  "Corporate retreat",
  "Family reunion",
  "Press / editorial trip",
  "Other",
];

export const howHeard = [
  "Press / editorial",
  "Referral (guest or partner)",
  "Instagram",
  "LinkedIn",
  "Agency or travel designer",
  "Search",
  "Other",
];

export const accommodationStyles = [
  "Private villas only",
  "Boutique hotels",
  "Mix of both",
  "Yacht",
  "Open to suggestions",
];

export const paces = [
  "Slow & restorative",
  "Balanced",
  "Active & full",
];

export const lengths = [
  "3 to 5 days",
  "6 to 9 days",
  "10 to 14 days",
  "15+ days",
];

export const stayInterest = [
  "Villa",
  "Yacht",
  "Both",
];

export const styles = [
  "Intimate & private",
  "Grand & spectacular",
  "Editorial & discreet",
];
