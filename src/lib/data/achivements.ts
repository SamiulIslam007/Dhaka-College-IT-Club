import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "National Hackathon 2024 Champions",
    date: "2024-03-15",
    description:
      "Secured 1st place in the National High School Hackathon organized by ICT Division. Our team built an innovative AI-based solution for traffic management.",
    category: "competition",
    image: "/images/achievements/hackathon-winner.jpg",
  },
  {
    id: "2",
    title: "Best IT Club Award 2023",
    date: "2023-12-20",
    description:
      "Recognized as the most active and impactful college-level IT club in the Dhaka metropolitan area.",
    category: "recognition",
    image: "/images/achievements/best-club-award.jpg",
  },
  {
    id: "3",
    title: "Tech Fest 2023 Success",
    date: "2023-10-10",
    description:
      "Successfully organized the biggest inter-college tech festival with over 500+ participants from 20 different colleges.",
    category: "other",
  },
  {
    id: "4",
    title: "Inter-College Programming Contest Runner-up",
    date: "2023-06-05",
    description:
      "Our competitive programming team secured the 2nd position in the NDC Programming Contest.",
    category: "competition",
  },
];

export function getAllAchievements(): Achievement[] {
  return achievements;
}

export function getFeaturedAchievements(limit: number = 3): Achievement[] {
  return achievements.slice(0, limit);
}
