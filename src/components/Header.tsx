"use client";

import { useEffect, useState } from "react";
import { resume } from "@/data/resume";
import { LiveClock } from "./LiveClock";
import { RawDossierModal } from "./RawDossierModal";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "01 // OVERVIEW", href: "#overview" },
  { label: "02 // PROJECTS", href: "#projects" },
  { label: "03 // EXPERIENCE", href: "#experience" },
  { label: "04 // CORE STACK", href: "#core-stack" },
  { label: "05 // CONTACT", href: "#contact" },
];

export function Header() {
  const [rawModalOpen, setRawModalOpen] = useState(false);
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const heroHeading = document.getElementById("overview-heading");
    if (!heroHeading) return;

    const observer = new IntersectionObserver(([entry]) => setShowFullName(!entry.isIntersecting), {
      rootMargin: "-128px 0px 0px 0px",
      threshold: 0,
    });

    observer.observe(heroHeading);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[var(--bg-canvas)]/95 backdrop-blur-sm border-b border-[var(--grid-line)] transition-colors duration-150">
        {/* Running Telemetry & Optical Rail */}
        <div className="w-full border-b border-[var(--grid-line)] text-[10px] font-mono uppercase tracking-widest text-[var(--ink-tertiary)] px-4 md:px-8 py-1.5 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3 select-none">
          {/* Left: Registration crosshair + Status + Location */}
          <div className="flex items-center gap-3">
            <span className="registration-target" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 inline-block" aria-hidden="true" />
              <span className="text-[var(--ink-secondary)]">STATUS: AVAILABLE FOR CONSULTING</span>
            </div>
            <span className="hidden sm:inline text-[var(--grid-line)]">|</span>
            <span className="hidden sm:inline">{resume.location.toUpperCase()}</span>
          </div>

          {/* Right: Dual Clocks + Print Density Strip + Tools */}
          <div className="flex items-center gap-2 sm:gap-4 flex-nowrap shrink-0">
            <LiveClock />

            {/* Print Density Calibration Strip */}
            <div
              className="hidden lg:inline-flex items-center h-2 gap-[1px] opacity-75"
              title="Print Density Calibration Strip"
              aria-hidden="true"
            >
              <div className="w-2 h-full bg-white border border-[var(--grid-line)]" />
              <div className="w-2 h-full bg-[#A3A8B5]" />
              <div className="w-2 h-full bg-[#5A606D]" />
              <div className="w-2 h-full bg-[#26282E]" />
              <div className="w-2 h-full bg-[var(--signal)]" />
              <div className="w-2 h-full bg-[var(--signal-amber)]" />
            </div>

            <button
              type="button"
              onClick={() => setRawModalOpen(true)}
              className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-[var(--bg-surface-elevated)] hover:bg-[var(--signal)] hover:text-[var(--on-signal)] text-[var(--signal)] border border-[var(--grid-line)] hover:border-[var(--signal)] transition-all whitespace-nowrap shrink-0"
              title="View serialized JSON specification"
            >
              [ RAW_JSON ]
            </button>

            <ThemeToggle />
            <span className="hidden sm:inline-block registration-target" aria-hidden="true" />
          </div>
        </div>

        {/* Main Masthead */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
          <a
            href="#overview"
            aria-label={`${showFullName ? resume.name.toUpperCase() : "JP / DOSSIER"} — back to overview`}
            className="group flex items-baseline gap-3 focus-visible:outline-none"
          >
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--ink-primary)] transition-colors group-hover:text-[var(--signal)]">
              {showFullName ? resume.name.toUpperCase() : "JP / DOSSIER"}
            </span>
          </a>

          {/* Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] tracking-wider text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:border-b hover:border-[var(--signal)] transition-all py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resume.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest uppercase px-2.5 py-1 bg-[var(--signal)] text-[var(--on-signal)] hover:bg-[var(--signal-hover)] transition-colors"
            >
              RESUME (PDF) ↗
            </a>
          </nav>

          {/* Mobile Fast Action */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={resume.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 bg-[var(--signal)] text-[var(--on-signal)]"
            >
              RESUME (PDF) ↗
            </a>
          </div>
        </div>
      </header>

      {/* Teletype Raw Dossier Modal */}
      <RawDossierModal isOpen={rawModalOpen} onClose={() => setRawModalOpen(false)} />
    </>
  );
}
