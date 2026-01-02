import type { Department } from "@/types";
export const departments: Department[] = [
  {
    id: "1",
    name: "Web Development",
    slug: "web-development",
    description:
      "Building modern web applications using the latest technologies. We focus on full-stack development, UI/UX implementation, and scalable architecture.",
    icon: "globe",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
    ],
  },
  {
    id: "2",
    name: "Competitive Programming",
    slug: "competitive-programming",
    description:
      "Solving algorithmic challenges and mastering data structures. We participate in national and international contests like ICPC, NCPC, and IOI.",
    icon: "code",
    techStack: [
      "C++",
      "Python",
      "Algorithms",
      "Data Structures",
      "Problem Solving",
    ],
  },
  {
    id: "3",
    name: "App Development",
    slug: "app-development",
    description:
      "Creating native and cross-platform mobile applications for Android and iOS devices.",
    icon: "smartphone",
    techStack: ["Flutter", "Dart", "Kotlin", "Firebase"],
  },
  {
    id: "4",
    name: "Graphics & UI/UX Design",
    slug: "graphics-design",
    description:
      "Designing visually stunning user interfaces and creative content for the club and events.",
    icon: "pen-tool",
    techStack: ["Figma", "Adobe Illustrator", "Photoshop", "Canva"],
  },
  {
    id: "5",
    name: "Cyber Security",
    slug: "cyber-security",
    description:
      "Exploring the world of ethical hacking, network security, and digital forensics.",
    icon: "shield",
    techStack: ["Linux", "Networking", "Python", "Ethical Hacking"],
  },
];

export function getAllDepartments(): Department[] {
  return departments;
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((dept) => dept.slug === slug);
}
