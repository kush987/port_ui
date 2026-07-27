export enum SkillCategory {
  Languages = "Languages",
  Datastores = "Datastores",
  Messaging = "Messaging",
  Cloud = "Cloud",
  Observability = "Observability",
  Practices = "Practices",
}

export enum SystemScale {
  Service = "service",
  Platform = "platform",
  Pipeline = "pipeline",
  Infrastructure = "infrastructure",
}

export enum SocialPlatform {
  GitHub = "GitHub",
  LinkedIn = "LinkedIn",
  X = "X",
  Blog = "Blog",
  Email = "Email",
  Phone = "Phone",
}

export enum NavSectionId {
  About = "about",
  Experience = "experience",
  Systems = "systems",
  Skills = "skills",
  Contact = "contact",
}

export interface NavItem {
  id: NavSectionId;
  label: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  avatarUrl: string;
  resumeUrl: string;
  focusAreas: FocusArea[];
  socials: SocialLink[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface SystemMetric {
  label: string;
  value: string;
}

export interface SystemProject {
  id: string;
  name: string;
  scale: SystemScale;
  description: string;
  problem: string;
  outcome: string;
  stack: string[];
  metrics: SystemMetric[];
  links: SocialLink[];
}

export interface SkillGroup {
  category: SkillCategory;
  items: string[];
}

export interface ContactContent {
  heading: string;
  description: string;
  ctaLabel: string;
}

export interface PortfolioContent {
  profile: Profile;
  nav: NavItem[];
  experience: ExperienceItem[];
  systems: SystemProject[];
  skills: SkillGroup[];
  contact: ContactContent;
}
