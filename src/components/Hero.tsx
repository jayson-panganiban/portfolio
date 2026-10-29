"use client";

import Image from "next/image";
import { resume } from "@/data/resume";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

export function Hero() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="w-full border-b border-[var(--grid-line)] pt-10 md:pt-16 pb-12 md:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Full-Width Overview Card with Draftsman Corner Ticks */}
        <div className="border border-[var(--grid-line)] p-5 md:p-8 bg-[var(--bg-surface)] relative">
          {/* Corner Registration Ticks */}
          <div
            className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-[var(--ink-secondary)] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div
            className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-[var(--ink-secondary)] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-[var(--ink-secondary)] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-[var(--ink-secondary)] pointer-events-none select-none"
            aria-hidden="true"
          />
          {/* Section Indicator Bar */}
          <div className="border-b border-[var(--grid-subtle)] pb-3 mb-6 text-[10px] font-mono uppercase tracking-widest text-[var(--ink-tertiary)]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--signal)] inline-block" aria-hidden="true" />
              <span>SECTION 01 // OVERVIEW &amp; PROFILE</span>
            </div>
          </div>

          <figure className="hidden md:block absolute top-8 right-8 w-40 border border-[var(--grid-line)] bg-[var(--bg-surface-subtle)] p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
            <Image
              src="/profile.jpg"
              alt="Portrait of Jayson Panganiban"
              width={400}
              height={400}
              priority
              className="aspect-[4/5] w-full border border-black/10 object-cover grayscale dark:border-white/10"
            />
            <figcaption className="flex items-center justify-between px-0.5 pb-0.5 pt-2 font-mono text-[10px] uppercase tracking-wider text-[var(--ink-tertiary)]">
              <span>Portrait</span>
              <span>JP / 01</span>
            </figcaption>
          </figure>

          {/* Single Full-Width Content Container */}
          <div className="w-full md:pr-52">
            <h1
              id="overview-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tightest text-[var(--ink-primary)] mb-3"
            >
              {resume.name}
            </h1>

            <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--signal)] mb-5">
              {resume.title}
            </p>

            <p className="text-base lg:text-lg text-[var(--ink-secondary)] leading-relaxed mb-8 max-w-3xl">
              {resume.bio}
            </p>

            {/* Action Buttons: Primary + Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 print:hidden">
              <a
                href="#experience"
                className="px-4 py-2 bg-[var(--signal)] text-[var(--on-signal)] font-mono text-[11px] uppercase tracking-widest hover:bg-[var(--signal-hover)] transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none"
              >
                <span>VIEW EXPERIENCE</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href={`mailto:${resume.email}`}
                className="px-4 py-2 border border-[var(--grid-line)] bg-[var(--bg-surface)] text-[var(--ink-primary)] font-mono text-[11px] uppercase tracking-widest hover:border-[var(--ink-primary)] transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none"
              >
                <span>SEND EMAIL</span>
                <span aria-hidden="true">✉</span>
              </a>

              <button
                type="button"
                onClick={() => copy(resume.email)}
                className="px-3.5 py-2 border border-[var(--grid-line)] bg-[var(--bg-canvas)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] font-mono text-[11px] uppercase tracking-widest transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none"
              >
                <span>{copied ? "COPIED ✓" : "COPY EMAIL"}</span>
                {!copied && <span aria-hidden="true">⧉</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
