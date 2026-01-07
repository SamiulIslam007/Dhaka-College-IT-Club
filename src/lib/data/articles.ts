import { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "future-of-ai-2026",
    title: "The Future of AI: What to Expect in 2026",
    excerpt:
      "Exploring the next generation of large language models and their impact on software development.",
    content: "Full content here...",
    date: "2025-12-28",
    author: "Saifur Rahman",
    authorAvatar: "SR",
    category: "Technology",
    readTime: "5 min read",
    image: "/images/blog/ai-future.jpg",
  },
  {
    id: "2",
    slug: "web-development-roadmap",
    title: "Complete Web Development Roadmap",
    excerpt:
      "A step-by-step guide to becoming a full-stack developer with the latest tech stack.",
    content: "Full content here...",
    date: "2025-12-15",
    author: "Tanvir Ahmed",
    authorAvatar: "TA",
    category: "Tutorial",
    readTime: "8 min read",
    image: "/images/blog/web-dev.jpg",
  },
  {
    id: "3",
    slug: "cybersecurity-essentials",
    title: "Cybersecurity Essentials for Students",
    excerpt:
      "Learn how to protect your digital identity and start your journey in ethical hacking.",
    content: "Full content here...",
    date: "2025-11-30",
    author: "Rahim Uddin",
    authorAvatar: "RU",
    category: "Security",
    readTime: "6 min read",
    image: "/images/blog/security.jpg",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getRecentArticles(limit = 3) {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
