export type SocialLink = {
  platform: "facebook" | "linkedin" | "github" | "website";
  url: string;
};

export type Image = {
  src: string;
  alt: string;
};

export interface Leadership {
  id: string;
  name: string;
  role: string;
  batch: string;
  image: string;
  bio?: string;
  socials: SocialLink[];
  priority: number;
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
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
  author: string | string[];
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category: "competition" | "recognition" | "other";
}

export interface Department {
  id: string;
  name: string;
  description: string;
  headOfDepartment?: string;
  icon?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website?: string;
  tier: "platinum" | "gold" | "silver" | "partner";
}
