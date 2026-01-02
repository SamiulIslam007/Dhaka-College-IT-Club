"use client";

import { ArrowRight, ChevronDown, Code2, Cpu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/layout/Container";
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex flex-col justify-center lg:pt-16 pb-8 lg:pb-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34D399]/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="absolute top-1/4 left-[10%] hidden lg:block z-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-lg border border-[#7C3AED]/30 bg-card/50 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[#7C3AED]/10">
          <Code2 className="w-8 h-8 text-[#7C3AED]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[15%] hidden lg:block z-10"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-20 h-20 rounded-lg border border-[#34D399]/30 bg-card/50 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[#34D399]/10">
          <Cpu className="w-10 h-10 text-[#34D399]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-[15%] hidden lg:block z-10"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 rounded-lg border border-[#7C3AED]/30 bg-card/50 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[#7C3AED]/10">
          <Sparkles className="w-6 h-6 text-[#7C3AED]" />
        </div>
      </motion.div>

      <Container className="relative z-20">
        <div className="text-center py-10 lg:py-14 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border backdrop-blur-sm mb-8 shadow-sm hover:border-primary/50 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Dhaka College IT Club
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-foreground mb-2">Welcome to the</span>
              <TypeAnimation
                sequence={[
                  "Dhaka College\nIT Club.",
                  1500,
                  "Dhaka College\nInnovation Hub.",
                  1500,
                  "Dhaka College\nTech Community.",
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
                speed={50}
                deletionSpeed={70}
                className="block bg-gradient-to-r from-[#7C3AED] via-[#9D5CFF] to-[#34D399] bg-clip-text text-transparent whitespace-pre-line pb-2"
              />
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Empowering innovators, building tomorrow&apos;s technology leaders
              through collaboration, learning, and cutting-edge projects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full text-base h-12 px-8">
                  <span>Join DCITC</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/departments" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full text-base h-12 px-8"
                >
                  <span>Explore Departments</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <div className="flex flex-col items-center gap-2 group">
          <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-[#7C3AED] group-hover:text-primary transition-colors" />
        </div>
      </motion.div>
    </section>
  );
}
