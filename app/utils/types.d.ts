export type ProjectCategory =
  | "client"
  | "ai"
  | "open-source"
  | "personal"
  | "experiment";

export interface ProjectCaseStudy {
  role: string;
  year?: string;
  problem: string;
  solution: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  name: string;
  icon: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  screenshot?: string;
  screenshotAlt?: string;
  category: ProjectCategory;
  featured: boolean;
  caseStudy?: ProjectCaseStudy;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  type: "contract" | "internship" | "full-time";
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface OpenSourceProject {
  name: string;
  badge: string;
  githubUrl: string;
  liveUrl?: string;
  description: string;
  tags: string[];
  ctaIcon: string;
  ctaTitle: string;
  ctaDescription: string;
}

export interface Planet {
  top: string;
  left: string;
  fact: string;
  cracked: boolean;
}

export interface Asteroid {
  id: number;
  x: number;
  y: number;
  delay: string;
}

export interface FactReveal {
  id: number;
  x: number;
  y: number;
  fact: string;
}

export interface SmashText {
  id: number;
  x: number;
  y: number;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
}

export interface Ripple {
  id: number;
  x: number;
  y: number;
}
export interface CursorTrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  shape: CursorTrailParticleShape;
}

export type CursorTrailParticleShape =
  | "circle"
  | "star"
  | "triangle"
  | "square"
  | "heart"
  | "sparkle";
