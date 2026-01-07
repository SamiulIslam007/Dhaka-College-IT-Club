export type SocialPlatform =
  | "facebook"
  | "linkedin"
  | "github"
  | "website"
  | "instagram"
  | "twitter";

export interface LeadershipSocials {
  facebook?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  portfolio?: string;
  instagram?: string;
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
  department: string;
  bio?: string;
  image: string;
  tier: "executive" | "chief" | "joint";
  batch: string;
  social: LeadershipSocials;
  priority?: number;
  status?: "current" | "alumni";
}
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorAvatar: string;
  category: string;
  readTime: string;
  image?: string;
}
export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: string;
  status: "upcoming" | "ongoing" | "completed";
  image?: string;
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
  category: string;
  featured?: boolean;
}

export interface User {
  id: string | number;
  name: string;
  email?: string;
  role?: "admin" | "editor" | "user";
}
