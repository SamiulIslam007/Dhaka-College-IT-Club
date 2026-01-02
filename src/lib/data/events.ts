import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    slug: "tech-fest-2026",
    title: "Annual Tech Fest 2026",
    description:
      "The biggest technology festival featuring competitions and workshops.",
    date: "2026-03-15T10:00:00Z",
    location: "Main Auditorium",
    image: "/images/events/tech-fest.jpg",
    registrationLink: "https://example.com/register",
    isUpcoming: true,
  },
];

export function getAllEvents(): Event[] {
  return events;
}

export function getUpcomingEvents(): Event[] {
  return events.filter((event) => event.isUpcoming);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}
