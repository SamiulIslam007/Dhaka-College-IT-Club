"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "./MotionPresets";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
