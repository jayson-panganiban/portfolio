"use client";

import { resume } from "@/data/resume";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { SectionHeader } from "./SectionHeader";

const siteEmail = resume.email;
const githubUrl = resume.socialLinks.find((link) => link.name === "GitHub")?.url;
const linkedinUrl = resume.socialLinks.find((link) => link.name === "LinkedIn")?.url;

const secondaryChannels = [
  {
    label: "GitHub",
    value: "@jayson-panganiban",
    href: githubUrl,
  },
  {
    label: "LinkedIn",
    value: "in/jayson-panganiban",
    href: linkedinUrl,
  },
  {
    label: "Curriculum vitae",
    value: "PDF document",
    href: resume.resumeUrl,
  },
];

export function ContactSpec() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section
      id="contact"
      aria-label="Contact and Direct Channels"
      className="w-full border-b border-[var(--grid-line)] bg-[var(--bg-canvas)] py-12 md:py-18"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader number={5} label="CONTACT & CHANNELS" />

        <div className="grid border border-[var(--grid-line)] bg-[var(--bg-surface)] lg:grid-cols-12">
          <div className="flex flex-col justify-between p-5 md:p-8 lg:col-span-7">
            <div>
              <div className="mb-8 flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-[var(--ink-tertiary)]">
                <span>Channel 01 / Direct correspondence</span>
                <span className="text-[var(--signal)]">Primary</span>
              </div>
              <h3 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-[var(--ink-tertiary)]">
                Email address
              </h3>
              <a
                href={`mailto:${siteEmail}`}
                className="block break-all text-xl font-medium tracking-tight text-[var(--ink-primary)] underline decoration-[var(--grid-line)] underline-offset-8 transition-colors hover:text-[var(--signal)] sm:text-2xl"
              >
                {siteEmail}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5 border-t border-[var(--grid-subtle)] pt-5">
              <a
                href={`mailto:${siteEmail}`}
                className="bg-[var(--signal)] px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--on-signal)] transition-colors hover:bg-[var(--signal-hover)]"
              >
                Send email ↗
              </a>
              <button
                type="button"
                onClick={() => copy(siteEmail)}
                className="border border-[var(--grid-line)] px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--ink-secondary)] transition-colors hover:border-[var(--ink-tertiary)] hover:text-[var(--ink-primary)]"
              >
                {copied ? "Copied ✓" : "Copy email ⧉"}
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--grid-line)] lg:col-span-5 lg:border-l lg:border-t-0">
            <div className="border-b border-[var(--grid-subtle)] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-tertiary)] md:px-6">
              Reference index / 03
            </div>
            <div className="divide-y divide-[var(--grid-subtle)]">
              {secondaryChannels.map((channel, index) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 px-5 py-5 transition-colors hover:bg-[var(--bg-surface-subtle)] md:px-6"
                >
                  <span className="font-mono text-[11px] tabular-nums text-[var(--ink-tertiary)]">
                    0{index + 2}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-[var(--ink-primary)]">
                      {channel.label}
                    </span>
                    <span className="mt-1 block truncate font-mono text-[11px] text-[var(--ink-secondary)]">
                      {channel.value}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-[var(--ink-tertiary)] transition-colors group-hover:text-[var(--signal)]"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
