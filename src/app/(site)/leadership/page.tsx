"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Linkedin,
  Github,
  Mail,
  Facebook,
  Instagram,
  Globe,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
// টাইপ ইমপোর্ট ফিক্স করা হয়েছে
import { Leadership } from "@/types";
import { getUniqueBatches, getMembersByBatch } from "@/lib/data/leadership";

export default function LeadershipPage() {
  const batches = getUniqueBatches();
  const [selectedBatch, setSelectedBatch] = useState(batches[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentMembers = getMembersByBatch(selectedBatch);
  const executives = currentMembers.filter((m) => m.tier === "executive");

  const chiefs = currentMembers.filter(
    (m) => m.tier === "chief" || m.tier === "joint"
  );

  // আইকন ম্যাপের টাইপ ঠিক করা হলো
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
    email: Mail,
    portfolio: Globe,
  };

  const getSocialLink = (platform: string, link: string) => {
    if (platform === "email") return `mailto:${link}`;
    return link;
  };

  // Variants টাইপ স্পষ্টভাবে বলে দেওয়া হয়েছে
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // ================= LeaderCard শুরু =================
  const LeaderCard = ({
    member,
    index,
    size = "normal",
  }: {
    member: Leadership;
    index: number;
    size?: "large" | "normal" | "small";
  }) => {
    const imageSize = {
      large: "w-48 h-48",
      normal: "w-40 h-40",
      small: "w-36 h-36",
    };

    const hasSocials = member.social && Object.keys(member.social).length > 0;

    return (
      <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={cardVariants}
        className="h-full w-full max-w-md"
      >
        {/* কার্ডের মেইন কন্টেইনার */}
        <div className="h-full group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-[#7C3AED]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7C3AED]/10">
          {/* ব্যাকগ্রাউন্ড গ্লো এফেক্ট */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-[#34D399]/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />

          <div className="relative flex flex-col h-full items-center text-center">
            {/* ইমেজের অংশ */}
            <div className={`relative ${imageSize[size]} mb-6 flex-shrink-0`}>
              {/* ইমেজের বর্ডার শেপ */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#EC4899] to-[#F97316] group-hover:scale-105 transition-transform duration-300 shadow-lg"
                style={{
                  clipPath:
                    "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
                }}
              />

              {/* মেইন ইমেজ */}
              <div
                className="absolute inset-[4px] overflow-hidden bg-background"
                style={{
                  clipPath:
                    "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <div className="flex-grow flex flex-col justify-between w-full">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-[#7C3AED] group-hover:to-[#34D399] transition-all duration-300">
                  {member.name}
                </h3>

                <div className="mb-4">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#F97316] rounded-full blur-sm opacity-50" />
                    <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#F97316] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {member.role}
                    </div>
                  </div>
                </div>

                {member.department && (
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {member.department}
                  </p>
                )}

                {member.bio && (
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 max-w-md mx-auto">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* সোশ্যাল আইকন */}
              {hasSocials && (
                <div className="flex items-center justify-center gap-3 pt-4 mt-auto">
                  {Object.entries(member.social!).map(([platform, link]) => {
                    const iconKey = platform as keyof typeof socialIcons;
                    const Icon = socialIcons[iconKey];

                    if (!Icon || !link) return null;

                    return (
                      <a
                        key={platform}
                        href={getSocialLink(platform, link)}
                        target={platform === "email" ? undefined : "_blank"}
                        rel={
                          platform === "email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="relative w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 transition-all duration-200 group/icon hover:scale-110"
                        aria-label={platform}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover/icon:text-[#7C3AED] transition-colors" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* কর্নারের ডেকোরেশন */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#7C3AED]/20 rounded-tl-lg group-hover:border-[#7C3AED]/60 transition-colors duration-300" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#34D399]/20 rounded-br-lg group-hover:border-[#34D399]/60 transition-colors duration-300" />
        </div>
      </motion.div>
    );
  };
  // ================= LeaderCard শেষ =================

  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#7C3AED]/30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#34D399]/30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EC4899]/20 blur-[128px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title="Our"
          highlight="Leadership"
          subtitle="Meet the team leading DCITC forward"
        />

        <div className="flex justify-center mb-16">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-card to-card/80 backdrop-blur-xl border border-border/50 rounded-2xl hover:border-[#7C3AED]/50 transition-all duration-300 min-w-[240px] justify-between shadow-lg hover:shadow-xl"
            >
              <span className="font-bold text-xl bg-gradient-to-r from-[#7C3AED] to-[#34D399] bg-clip-text text-transparent">
                {selectedBatch}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#7C3AED] transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-3 left-0 right-0 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden shadow-2xl z-50"
                >
                  {batches.map((batch, index) => (
                    <button
                      key={batch}
                      onClick={() => {
                        setSelectedBatch(batch);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-8 py-4 text-left hover:bg-gradient-to-r hover:from-[#7C3AED]/10 hover:to-[#34D399]/10 transition-all duration-300 ${
                        batch === selectedBatch
                          ? "bg-gradient-to-r from-[#7C3AED]/20 to-[#34D399]/20 font-bold"
                          : ""
                      } ${
                        index !== batches.length - 1
                          ? "border-b border-border/30"
                          : ""
                      }`}
                    >
                      <span className="text-lg">
                        {batch} {index === 0 && "(Current)"}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBatch}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {executives.length > 0 && (
              <div className="mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-6 mb-12"
                >
                  <div className="h-[2px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />
                  <h2 className="text-lg font-bold tracking-[0.3em] text-foreground uppercase">
                    Executive Board
                  </h2>
                  <div className="h-[2px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#34D399] to-transparent" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 auto-rows-fr justify-items-center">
                  {executives.map((member, index) => (
                    <LeaderCard
                      key={member.id}
                      member={member}
                      index={index}
                      size="large"
                    />
                  ))}
                </div>
              </div>
            )}

            {chiefs.length > 0 && (
              <div className="mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-6 mb-12"
                >
                  <div className="h-[2px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#EC4899]/70 to-transparent" />
                  <h2 className="text-lg font-bold tracking-[0.3em] text-foreground/90 uppercase">
                    Chief Executives
                  </h2>
                  <div className="h-[2px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#F97316]/70 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr justify-items-center">
                  {chiefs.map((member, index) => (
                    <LeaderCard
                      key={member.id}
                      member={member}
                      index={index + executives.length}
                      size="normal"
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
}
