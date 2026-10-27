"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase border border-[var(--grid-line)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors duration-150 whitespace-nowrap shrink-0"
      >
        [ THEME: -- ]
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase border border-[var(--grid-line)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:border-[var(--signal)] transition-colors duration-150 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--signal)] whitespace-nowrap shrink-0"
      aria-label={`${theme === "dark" ? "Dark" : "Light"} theme — switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="w-1.5 h-1.5 rounded-none bg-[var(--signal)]" aria-hidden="true" />
      <span>{theme === "dark" ? "DARK" : "LIGHT"}</span>
    </button>
  );
}
