"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/config/navigation";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/shared/Button";
import { Container } from "./Container";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="DCITC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <div className="font-bold text-xl tracking-tight leading-none">
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#34D399] bg-clip-text text-transparent">
                  DCITC
                </span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                Know Thyself
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200 relative group py-1",
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#34D399] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <ThemeToggle />
            <Link href="/join" className="hidden sm:block">
              <Button size="sm" className="font-semibold cursor-pointer">
                Join DCITC
              </Button>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border shadow-2xl overflow-hidden"
          >
            <Container className="py-8">
              <div className="flex flex-col gap-4">
                {navigation.main.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-3 px-4 rounded-xl text-lg font-medium transition-all",
                          isActive
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-foreground/80 hover:bg-card hover:pl-6"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link
                  href="/join"
                  className="mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full py-6 text-lg rounded-xl cursor-pointer">
                    Join DCITC
                  </Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
