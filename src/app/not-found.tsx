import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--bg-canvas)] text-[var(--ink-primary)]">
      <div className="max-w-md w-full border border-[var(--grid-line)] p-8 bg-[var(--bg-surface)] font-mono text-center">
        <div className="flex items-center justify-between text-[10px] text-[var(--ink-tertiary)] uppercase tracking-widest border-b border-[var(--grid-subtle)] pb-3 mb-6">
          <span>ERROR CODE: HTTP_404</span>
          <span className="text-[var(--signal)]">FAULT: NOT_FOUND</span>
        </div>

        <h1 className="text-5xl font-medium tracking-tightest mb-2 text-[var(--ink-primary)]">
          404
        </h1>
        <p className="text-sm text-[var(--ink-secondary)] mb-6">
          The requested specification coordinate does not exist in this deployment cluster.
        </p>

        <div className="pt-4 border-t border-[var(--grid-subtle)]">
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-[var(--signal)] text-[var(--on-signal)] text-xs uppercase tracking-widest hover:bg-[var(--signal-hover)] transition-colors duration-150"
          >
            RETURN TO ROOT DOSSIER ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
