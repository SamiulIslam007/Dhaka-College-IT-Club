export type SocialPlatform =
  | "facebook"
  | "linkedin"
  | "github"
  | "website"
  | "instagram"
  | "twitter";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface ImageMeta {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  techStack?: string[];
  headOfDepartment?: string;
}

export interface Leadership {
  id: string;
  name: string;
  role: string;
  batch: string;
  image: string;
  bio?: string;
  socials: SocialLink[];
  priority: number;
  status?: "current" | "alumni";
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  registrationLink?: string;
  isUpcoming: boolean;
  organizer?: string;
}

export interface Project {
  id: string;
  title: string;
  slug?: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
  author: string | string[];
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category: "competition" | "recognition" | "hackathon" | "other";
  teamMembers?: string[];
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website?: string;
  tier: "platinum" | "gold" | "silver" | "partner";
}

export interface User {
  id: string | number;
  name: string;
  email?: string;
  role?: "admin" | "editor" | "user";
}
