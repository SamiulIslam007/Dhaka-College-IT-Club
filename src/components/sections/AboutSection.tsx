"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const features = [
  "Technology Workshops & Seminars",
  "Programming Contests",
  "Tech Talks & Networking",
  "Open Source Contributions",
];

export function AboutSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#34D399]/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          title="About"
          highlight="Us"
          subtitle="Bridging the gap between a historic legacy and a digital future, empowering the tech leaders of tomorrow."
          className="text-center mb-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Empowering the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#34D399]">
                Next Generation
              </span>
            </h3>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Dhaka College IT Club is the premier technology community for
              students. We bridge the gap between academic learning and industry
              demands through hands-on workshops, mentorship, and real-world
              projects.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#34D399]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#7C3AED] to-[#7C3AED] hover:to-[#9D5CFF] text-white border-0 cursor-pointer"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm p-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
                  alt="Students working together"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs overflow-hidden"
                      >
                        <Image
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                          alt="Member"
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">Join 500+ Members</p>
                    <p className="text-muted-foreground text-xs">
                      Start your journey today
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
