import { resume } from "@/data/resume";

export function MetricsGrid() {
  return (
    <section
      aria-label="Verified Core Metrics"
      className="w-full border-b border-[var(--grid-line)] bg-[var(--bg-canvas)] py-10 md:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-3 flex items-center font-mono text-[10px] uppercase tracking-widest text-[var(--ink-tertiary)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--signal)] inline-block" aria-hidden="true" />
            <span>SECTION 01.1 // KEY METRICS</span>
          </div>
        </div>

        {/* 3-Column Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[var(--grid-line)] divide-y md:divide-y-0 md:divide-x divide-[var(--grid-line)] bg-[var(--bg-surface)]">
          {resume.metrics.map((metric, idx) => (
            <div key={metric.label} className="p-5 md:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono tracking-widest uppercase text-[var(--ink-tertiary)]">
                  <span>METRIC 0{idx + 1}</span>
                  <span className="text-[var(--signal)] font-medium">{metric.tag}</span>
                </div>

                <div className="text-3xl md:text-4xl font-medium tracking-tightest text-[var(--ink-primary)] mb-1.5 tabular-nums">
                  {metric.value}
                </div>

                <h2 className="text-sm font-medium text-[var(--ink-primary)]">{metric.label}</h2>
              </div>

              <p className="text-sm text-[var(--ink-secondary)] pt-3 border-t border-[var(--grid-subtle)] mt-3">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
