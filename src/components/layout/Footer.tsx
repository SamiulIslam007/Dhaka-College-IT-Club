"use client";

import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import { navigation } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site.config";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Container } from "./Container";
import { Button } from "@/components/shared/Button";
import { LeadershipSocials } from "@/types";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-70"></div>

      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/logo.png"
                    alt="DCITC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-xl tracking-tight leading-none">
                    <span className="bg-gradient-to-r from-[#7C3AED] to-[#34D399] bg-clip-text text-transparent">
                      DCITC
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    Know Thyself
                  </p>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {siteConfig.description ||
                  "Empowering the next generation of tech leaders at Dhaka College."}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">
                Quick Navigation
              </h3>
              <ul className="space-y-4">
                {navigation.footer.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments Section - Dynamic from Config */}
            <div>
              <h3 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">
                Departments
              </h3>
              <ul className="space-y-4">
                {/* আপনি চাইলে এই ডাটাগুলোও navigation config এ রাখতে পারেন */}
                {[
                  "AI & Machine Learning",
                  "Web & App Dev",
                  "Competitive Programming",
                  "Robotics",
                ].map((dept) => (
                  <li key={dept}>
                    <Link
                      href={`/departments#${dept
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {dept}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Socials */}
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">
                  Stay Connected
                </h3>
                <SocialLinks
                  links={siteConfig.links as LeadershipSocials}
                  className="mb-6"
                />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground text-sm font-medium">
                  Join our newsletter for updates.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:border-primary transition-all"
                    required
                  />
                  <Button type="submit" size="sm" className="px-3">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-muted-foreground text-xs">
                © {currentYear} {siteConfig.name}. Developed with ❤️ by DCITC
                Dev Team.
              </p>

              <div className="flex items-center gap-8">
                {navigation.footer.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-xs transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
