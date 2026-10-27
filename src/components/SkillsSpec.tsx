import { resume } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function SkillsSpec() {
  return (
    <section
      id="core-stack"
      aria-label="Core Technology Stack and Capabilities"
      className="w-full border-b border-[var(--grid-line)] bg-[var(--bg-canvas)] py-12 md:py-18"
    >
      {/* Anchor backward compatibility */}
      <div id="skills" className="sr-only" />
      <div id="capabilities" className="sr-only" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader number={4} label="CORE STACK" />

        <div className="divide-y divide-[var(--grid-line)] border border-[var(--grid-line)] bg-[var(--bg-surface)]">
          {resume.skillGroups.map((group, index) => (
            <div key={group.title} className="grid gap-5 p-5 md:p-6 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-[var(--signal-cyan)] tabular-nums">
                  {String(index + 1).padStart(2, "0")} / Capability
                </div>
                <h3 className="text-lg font-medium tracking-tight text-[var(--ink-primary)]">
                  {group.title}
                </h3>
              </div>

              <ul className="flex flex-wrap content-start gap-x-2.5 gap-y-2 text-sm leading-relaxed text-[var(--ink-secondary)] lg:col-span-9">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skill} className="flex items-baseline gap-2.5">
                    <span>{skill}</span>
                    {skillIndex < group.skills.length - 1 && (
                      <span aria-hidden="true" className="text-[var(--ink-dim)]">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
