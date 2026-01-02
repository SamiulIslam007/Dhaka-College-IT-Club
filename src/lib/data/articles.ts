import { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "getting-started-with-cp",
    title: "Getting Started with CP",
    excerpt: "Tips for beginners in Competitive Programming.",
    content: "Full content here...",
    date: "2025-12-01",
    author: "Admin",
    image: "/images/blog/cp.jpg",
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
