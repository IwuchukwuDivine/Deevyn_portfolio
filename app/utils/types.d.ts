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
