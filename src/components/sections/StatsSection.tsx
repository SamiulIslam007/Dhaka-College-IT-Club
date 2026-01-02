"use client";

import { Users, Layers, Calendar, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/shared/Card";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Total Members",
    gradient: "from-[#7C3AED] to-[#9D5CFF]",
  },
  {
    icon: Layers,
    number: "6",
    label: "Departments",
    gradient: "from-[#34D399] to-[#10B981]",
  },
  {
    icon: Calendar,
    number: "50+",
    label: "Events Hosted",
    gradient: "from-[#7C3AED] to-[#34D399]",
  },
  {
    icon: Trophy,
    number: "25+",
    label: "Achievements Won",
    gradient: "from-[#34D399] to-[#7C3AED]",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#34D399]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Card hover className="relative h-full p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-card to-secondary border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#7C3AED] group-hover:text-[#34D399] transition-colors duration-300" />
                    </div>
                  </div>

                  <div
                    className={`text-4xl lg:text-5xl mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-bold`}
                  >
                    {stat.number}
                  </div>

                  <div className="text-muted-foreground">{stat.label}</div>

                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
