/* ─── eb. Data Types ─── */

export type MoodId =
  | "azure"
  | "stone"
  | "vine"
  | "pulse"
  | "soft"
  | "wild"
  | "culture"
  | "wellness";

export type ContentType =
  | "journey"
  | "experience"
  | "collection"
  | "event";

export type VillaVisibility = "public" | "off-market";

export interface Mood {
  id: MoodId;
  name: string;
  subtitle: string;
  universe: string;
  image: string;
}

export interface CatalogueItem {
  id: string;
  type: ContentType;
  moods: MoodId[];
  title: string;
  subtitle: string;
  description: string;
  duration?: string;
  route?: string;
  image: string;
  cta: {
    label: string;
    href: string;
  };
  tags?: string[];
  /** Only journeys with hasPaywall can sell the $100 route */
  hasPaywall?: boolean;
}

export interface Villa {
  id: string;
  name: string;
  beds: number;
  guests: number;
  location: string;
  region: string;
  visibility: VillaVisibility;
  highlight: string;
  description: string;
  moods: MoodId[];
  image: string;
  features?: string[];
}

export interface YachtInfo {
  name: string;
  model: string;
  length: string;
  cabins: number;
  guests: number;
  crew: number;
  year: number;
  base: string;
  description: string;
  moods: MoodId[];
  image: string;
  features: string[];
}
