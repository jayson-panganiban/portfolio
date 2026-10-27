export function TechTag({ label }: { label: string }) {
  return (
    <span className="px-1.5 py-0.5 font-mono text-[11px] bg-[var(--bg-canvas)] border border-[var(--grid-line)] text-[var(--ink-secondary)] select-none">
      {label}
    </span>
  );
}
