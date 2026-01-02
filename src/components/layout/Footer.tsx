"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, ArrowRight } from "lucide-react";
import { navigation } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site.config";
import { departments } from "@/lib/data/departments";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Container } from "./Container";
import { Button } from "@/components/shared/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerDepartments = departments.slice(0, 5);

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <Container>
        <div className="pt-16 pb-8 lg:pt-20 lg:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group w-fit">
                <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
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
                  "Empowering the next generation of tech leaders at Dhaka College through innovation and mentorship."}
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">
                Quick Navigation
              </h3>
              <ul className="space-y-3">
                {navigation.footer.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">
                Departments
              </h3>
              <ul className="space-y-3">
                {footerDepartments.map((dept) => (
                  <li key={dept.id}>
                    <Link
                      href={`/departments/${dept.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm block"
                    >
                      {dept.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">
                  Stay Connected
                </h3>
                <SocialLinks links={siteConfig.links} className="mb-6 gap-4" />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground text-sm font-medium">
                  Subscribe to our newsletter
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 px-4 py-2 rounded-lg bg-secondary/30 border border-border text-sm focus:outline-none focus:border-primary/50 focus:bg-secondary/50 transition-all placeholder:text-muted-foreground/50"
                    required
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="px-3 shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-muted-foreground text-xs">
                  © {currentYear}{" "}
                  <span className="font-semibold text-foreground">
                    {siteConfig.name}
                  </span>
                  . All rights reserved.
                </p>

                <div className="flex items-center gap-6">
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

                <p className="text-muted-foreground text-xs hidden lg:block">
                  Developed by{" "}
                  <Link
                    href="/developer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Md.Samiul Islam
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
