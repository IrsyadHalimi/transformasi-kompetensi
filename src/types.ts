export type ThemeConcept = 'corporate';

export interface ConceptDetails {
  id: ThemeConcept;
  name: string;
  tagline: string;
  description: string;
  primaryColor: string;
  fontHeading: string;
  fontBody: string;
  vibe: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  metrics?: { label: string; value: string };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  badge: string;
}

export interface LegalKBLI {
  code: string;
  title: string;
  description: string;
  scope: string;
}

export interface PartnerItem {
  name: string;
  industry: string;
  logoType: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote?: string;
  bgGrad?: string;
}

export interface DocumentedActivity {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  location: string;
}
