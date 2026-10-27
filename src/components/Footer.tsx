import { resume } from "@/data/resume";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--bg-canvas)] border-t border-[var(--grid-line)] py-6 text-[var(--ink-secondary)] select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 font-mono text-[11px] uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3 text-[var(--ink-tertiary)]">
        <div className="flex items-center gap-3">
          <span className="registration-target" aria-hidden="true" />
          <span>
            © {new Date().getFullYear()} {resume.name.toUpperCase()} // PRINCIPAL CONSULTANT //
            PRODUCT ENGINEERING
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#overview"
            className="text-[var(--signal)] hover:underline inline-flex items-center gap-1 font-medium"
          >
            <span>BACK TO TOP</span>
            <span aria-hidden="true">↑</span>
          </a>
          <span className="registration-target" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
