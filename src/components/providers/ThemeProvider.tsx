"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.classList.toggle(
          "dark",
          storedTheme === "dark"
        );
      } else if (systemPrefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }

      setMounted(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
