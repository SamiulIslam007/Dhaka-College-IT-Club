"use client";

import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/data/events";
import { formatDate } from "@/lib/utils/formatDate";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import Image from "next/image";

export function Events() {
  const upcomingEvents = getUpcomingEvents(3);

  return (
    <section className="relative py-16 lg:py-24">
      <Container>
        <SectionHeader
          title="Upcoming"
          highlight="Events"
          subtitle="Join us for workshops, competitions, and learning experiences"
        />

        <div className="space-y-6 lg:space-y-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Card hover className="overflow-hidden p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="relative lg:w-80 h-64 lg:h-auto shrink-0 overflow-hidden">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#7C3AED]/10 to-[#34D399]/10 flex items-center justify-center">
                        <div className="text-6xl opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500">
                          📅
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-border z-10 shadow-sm">
                      <span className="text-xs font-bold uppercase">
                        {formatDate(event.date)}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10"></div>
                  </div>

                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 mt-auto">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <Calendar className="w-4 h-4 text-[#7C3AED]" />
                        </div>
                        <span className="text-sm font-medium">
                          {formatDate(event.date)} • {event.time}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-[#34D399]" />
                        </div>
                        <span className="text-sm font-medium">
                          {event.location}
                        </span>
                      </div>

                      {event.attendees && (
                        <div className="flex items-center gap-3 text-muted-foreground sm:col-span-2">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">
                            {event.attendees} attendees expected
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-border/50">
                      <Link href={`/events/${event.slug}`} className="block">
                        <Button className="w-full sm:w-auto group/btn cursor-pointer">
                          <span>Register Now</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors duration-300 cursor-pointer">
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
