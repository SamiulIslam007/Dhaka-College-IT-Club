import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config/site.config";
import { cn } from "@/lib/utils/cn";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  const socials = [
    {
      icon: Facebook,
      href: siteConfig.links.facebook,
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: siteConfig.links.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: siteConfig.links.github,
      label: "GitHub",
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.links.email}`,
      label: "Email",
    },
  ];

  return (
    <div className={cn("flex gap-3", className)}>
      {socials.map((social) => {
        const Icon = social.icon;

        const isViolet =
          social.label === "Facebook" || social.label === "GitHub";

        const hoverStyles = isViolet
          ? "hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 hover:text-[#7C3AED] hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]"
          : "hover:border-[#34D399] hover:bg-[#34D399]/10 hover:text-[#34D399] hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]";

        return (
          <Link
            key={social.label}
            href={social.href || "#"}
            target={social.label === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={cn(
              "group w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center transition-all duration-300",
              "text-muted-foreground",
              hoverStyles
            )}
            aria-label={social.label}
          >
            <Icon className="w-5 h-5 transition-colors duration-300" />
          </Link>
        );
      })}
    </div>
  );
}
