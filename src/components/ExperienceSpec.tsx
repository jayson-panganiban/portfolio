import { resume } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";
import { TechTag } from "./TechTag";

export function ExperienceSpec() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="w-full border-b border-[var(--grid-line)] bg-[var(--bg-canvas)] py-12 md:py-18"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader number={3} label="PROFESSIONAL EXPERIENCE" />

        {/* Experience Ledger */}
        <div className="border border-[var(--grid-line)] divide-y divide-[var(--grid-line)] bg-[var(--bg-surface)]">
          {resume.workHistory.map((item, idx) => (
            <div
              key={`${item.company}-${item.period}`}
              className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start hover:bg-[var(--bg-surface-subtle)] transition-colors"
            >
              {/* Left 4 Cols: Company & Timeline */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--ink-tertiary)] mb-1">
                    ROLE 0{idx + 1} // {item.location}
                  </div>

                  <h3 className="text-lg md:text-xl font-medium tracking-tight text-[var(--ink-primary)]">
                    {item.company}
                  </h3>

                  <div className="font-mono text-xs text-[var(--ink-secondary)] tabular-nums">
                    {item.period}
                  </div>
                </div>

                {item.impactMetric && (
                  <div className="mt-3">
                    <span className="inline-block px-2 py-0.5 text-[11px] font-mono bg-[var(--signal-amber-dim)] text-[var(--signal-amber)] border border-[var(--signal-amber)]/30">
                      KEY IMPACT: {item.impactMetric}
                    </span>
                  </div>
                )}
              </div>

              {/* Right 8 Cols: Role, Highlights & Stack */}
              <div className="lg:col-span-8">
                <h4 className="text-base font-medium text-[var(--ink-primary)] mb-2.5">
                  {item.role}
                </h4>

                <ul className="space-y-2 text-sm text-[var(--ink-secondary)] pl-0 list-none mb-4">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span
                        className="font-mono text-[var(--signal)] shrink-0 select-none"
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-[var(--grid-subtle)]">
                  {item.stack.map((tech) => (
                    <TechTag key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
