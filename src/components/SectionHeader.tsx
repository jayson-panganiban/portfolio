interface SectionHeaderProps {
  /** Zero-padded section number, e.g. 2 renders "SECTION 02". */
  number: number;
  label: string;
}

export function SectionHeader({ number, label }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-[var(--grid-line)] pb-4">
      <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--ink-tertiary)]">
        <span className="inline-block h-1.5 w-1.5 bg-[var(--signal)]" aria-hidden="true" />
        <span>{`SECTION 0${number} // ${label}`}</span>
      </h2>
    </div>
  );
}
