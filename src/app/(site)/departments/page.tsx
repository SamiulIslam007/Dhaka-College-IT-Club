"use client";

import {
  ArrowRight,
  Brain,
  Code,
  Zap,
  Cpu,
  Palette,
  Shield,
  Smartphone,
  Globe,
  PenTool,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { departments } from "@/lib/data/departments";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  code: Code,
  zap: Zap,
  cpu: Cpu,
  palette: Palette,
  shield: Shield,
  smartphone: Smartphone,
  globe: Globe,
  "pen-tool": PenTool,
};

export default function DepartmentsPage() {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute top-[20%] left-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-0 w-64 h-64 bg-[#34D399]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <Container>
        <SectionHeader
          title="Our"
          highlight="Departments"
          subtitle="Explore our specialized departments and find your passion"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {departments.map((dept, index) => {
            const Icon = iconMap[dept.icon] || Code;

            const isViolet = index % 2 === 0;
            const iconColor = isViolet ? "text-[#7C3AED]" : "text-[#34D399]";
            const glowColor = isViolet
              ? "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
              : "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]";

            const technologies = dept.techStack || [];

            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                <Link
                  href={`/departments/${dept.slug}`}
                  className="block h-full"
                >
                  <Card
                    hover
                    className={`h-full p-8 transition-all duration-500 ${glowColor} flex flex-col`}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-card to-secondary border border-border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className={`w-8 h-8 ${iconColor}`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {dept.name}
                    </h3>

                    <p className="text-muted-foreground mb-6 flex-grow">
                      {dept.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {technologies.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[10px] uppercase tracking-wider"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div
                      className={`inline-flex items-center gap-2 text-sm font-medium ${iconColor} group-hover:gap-3 transition-all duration-300 mt-auto`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div
                        className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                          isViolet ? "bg-[#7C3AED]" : "bg-[#34D399]"
                        } animate-pulse`}
                      ></div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
