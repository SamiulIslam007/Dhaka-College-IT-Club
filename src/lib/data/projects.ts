import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Club Website",
    description: "Official website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/club/website",
    liveUrl: "https://club.com",
    thumbnail: "/images/projects/site.jpg",
    author: "Web Team",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === slug
  );
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}
