import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    title: "Tech Carnival 2026",
    slug: "tech-carnival-2026",
    description:
      "The biggest tech festival of Dhaka College featuring programming contests, gaming, and workshops.",
    date: "2026-03-15",
    time: "10:00 AM",
    location: "Dhaka College Campus",
    type: "Flagship",
    attendees: "500+",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Intra-College Programming Contest",
    slug: "intra-programming-2026",
    description:
      "Test your algorithmic skills in our seasonal competitive programming battle.",
    date: "2026-02-10",
    time: "09:00 AM",
    location: "IT Lab, Dhaka College",
    type: "Contest",
    attendees: "100+",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Cyber Security Workshop",
    slug: "cyber-security-workshop",
    description:
      "Learn the basics of ethical hacking and network security from industry experts.",
    date: "2026-01-25",
    time: "03:00 PM",
    location: "Seminar Hall",
    type: "Workshop",
    attendees: "200+",
    status: "upcoming",
  },
];

export function getUpcomingEvents(limit: number) {
  return events.filter((event) => event.status === "upcoming").slice(0, limit);
}
