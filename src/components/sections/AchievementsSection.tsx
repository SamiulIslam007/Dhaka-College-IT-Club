"use client";

import { Trophy, Award, Medal, Star } from "lucide-react";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data/achievements";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";
import type { LucideIcon } from "lucide-react";

const getIconByCategory = (category: string): LucideIcon => {
  const cat = category.toLowerCase();
  if (cat.includes("competition") || cat.includes("hackathon")) return Trophy;
  if (cat.includes("award") || cat.includes("recognition")) return Medal;
  if (cat.includes("fest") || cat.includes("event")) return Star;
  return Award;
};

export function AchievementsSection() {
  // filtering data
  const featuredAchievements = achievements
    .filter((a) => a.featured)
    .slice(0, 4);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#34D399]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <Container>
        <SectionHeader
          title="Our"
          highlight="Achievements"
          subtitle="Celebrating our journey of excellence and innovation"
        />

        <div className="relative mt-16">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] via-[#34D399] to-[#7C3AED] transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-16">
            {featuredAchievements.map((achievement, index) => {
              const Icon = getIconByCategory(achievement.category);
              const isLeft = index % 2 === 0;
              const year = new Date(achievement.date).getFullYear();

              const iconColor = isLeft ? "text-[#7C3AED]" : "text-[#34D399]";
              const glowColor = isLeft
                ? "from-[#7C3AED]/20"
                : "from-[#34D399]/20";
              const centerDotColor = isLeft ? "bg-[#7C3AED]" : "bg-[#34D399]";

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  <div
                    className={`w-full lg:w-[calc(50%-2rem)] ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <Card className="p-8 relative overflow-hidden group border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div
                        className={`relative z-10 flex ${
                          isLeft ? "lg:flex-row-reverse" : "lg:flex-row"
                        } flex-col gap-6 items-start lg:items-center`}
                      >
                        <div className="flex-shrink-0">
                          <div
                            className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}
                          >
                            <Icon className={`w-7 h-7 ${iconColor}`} />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div
                            className={`flex flex-col ${
                              isLeft ? "lg:items-end" : "lg:items-start"
                            }`}
                          >
                            <Badge
                              variant="secondary"
                              className="mb-3 text-[10px] uppercase tracking-wider"
                            >
                              {year}
                            </Badge>
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                              {achievement.title}
                            </h3>
                            <div
                              className={`text-xs font-semibold uppercase tracking-wider mb-3 ${iconColor}`}
                            >
                              {achievement.category}
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Center Dot (Desktop Only) */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-border z-10 items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full ${centerDotColor}`}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
