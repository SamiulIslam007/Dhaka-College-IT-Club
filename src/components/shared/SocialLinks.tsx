"use client";

import React from "react";
import {
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Globe,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { themeConfig } from "@/config/theme.config";
import { cn } from "@/lib/utils/cn";
import { LeadershipSocials } from "@/types";

const socialConfig: Record<string, { icon: LucideIcon; color: string }> = {
  facebook: { icon: Facebook, color: themeConfig.colors.social.facebook },
  linkedin: { icon: Linkedin, color: themeConfig.colors.social.linkedin },
  github: { icon: Github, color: themeConfig.colors.social.github },
  instagram: { icon: Instagram, color: themeConfig.colors.social.instagram },
  twitter: { icon: Twitter, color: themeConfig.colors.social.twitter },
  portfolio: { icon: Globe, color: "#10B981" },
  email: { icon: Mail, color: "#EA4335" },
};

interface SocialLinksProps {
  links?: LeadershipSocials;
  className?: string;
  iconSize?: number;
}

export function SocialLinks({
  links,
  className,
  iconSize = 20,
}: SocialLinksProps) {
  const activeLinks = Object.entries(links || {}).filter(
    ([, value]) => !!value
  );

  if (activeLinks.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {activeLinks.map(([platform, url]) => {
        const config = socialConfig[platform];
        if (!config) return null;

        const Icon = config.icon;
        const brandColor = config.color;

        return (
          <a
            key={platform}
            href={platform === "email" ? `mailto:${url}` : url}
            target={platform === "email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
            aria-label={`Visit ${platform}`}
          >
            <div
              className="absolute inset-0 scale-0 rounded-full transition-transform duration-300 group-hover:scale-110 opacity-10"
              style={{ backgroundColor: brandColor }}
            />

            <Icon
              size={iconSize}
              className="z-10 transition-colors duration-300 text-muted-foreground group-hover:text-[var(--hover-color)]"
              style={{ "--hover-color": brandColor } as React.CSSProperties}
            />
          </a>
        );
      })}
    </div>
  );
}
