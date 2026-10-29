import { ContactSpec } from "@/components/ContactSpec";
import { ExperienceSpec } from "@/components/ExperienceSpec";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ProjectsSpec } from "@/components/ProjectsSpec";
import { SkillsSpec } from "@/components/SkillsSpec";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--ink-primary)]">
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--signal)] text-[var(--on-signal)] font-mono text-xs uppercase tracking-widest outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      {/* Top Masthead */}
      <Header />

      {/* Main Body */}
      <main id="main-content" className="flex-1">
        <Hero />
        <MetricsGrid />
        <ExperienceSpec />
        <SkillsSpec />
        <ProjectsSpec />
        <ContactSpec />
      </main>

      {/* Colophon Footer */}
      <Footer />
    </div>
  );
}
