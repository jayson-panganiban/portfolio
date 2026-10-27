"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";
import { projectsData } from "@/data/projects";
import { resume } from "@/data/resume";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface RawDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RawDossierModal({ isOpen, onClose }: RawDossierModalProps) {
  const { copied, copy } = useCopyToClipboard();

  const dossierPayload = {
    dossier_id: SITE_CONFIG.dossierId,
    classification: "PUBLIC_TECHNICAL_SPECIFICATION",
    standard: SITE_CONFIG.standard,
    exported_at: new Date().toISOString(),
    personnel: {
      name: resume.name,
      designation: resume.title,
      location: `${resume.location}, ${resume.country}`,
      timezone: SITE_CONFIG.baseTimezoneLabel,
      summary: resume.bio,
      benchmarks: resume.metrics,
    },
    competency_schematic: resume.skillGroups.map((g) => ({
      domain: g.title,
      capabilities: g.skills,
    })),
    operational_ledger: resume.workHistory,
    production_artifacts: projectsData,
    connectivity: resume.socialLinks,
  };

  const jsonString = JSON.stringify(dossierPayload, null, 2);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "jayson_panganiban_technical_dossier.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Serialized Technical Dossier"
    >
      {/* Full-bleed clickable backdrop: a real button, so keyboard users get
          Enter/Space natively in addition to the Escape-key handler. */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close dossier"
        tabIndex={-1}
        className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-4xl max-h-[88vh] flex flex-col bg-[var(--bg-surface)] border border-[var(--grid-line)] shadow-2xl font-mono text-xs text-[var(--ink-primary)]">
        {/* Modal Masthead */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--grid-line)] bg-[var(--bg-canvas)]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[var(--signal)]" aria-hidden="true" />
            <div>
              <div className="text-[10px] text-[var(--signal)] uppercase tracking-wider">
                SYSTEM_OUTPUT // TELETYPE_EXPORT
              </div>
              <div className="text-xs font-semibold tracking-tight text-[var(--ink-primary)]">
                SERIALIZED_DOSSIER_DATA
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-[11px] text-[var(--ink-secondary)] hover:text-[var(--signal)] border border-[var(--grid-line)] hover:border-[var(--signal)] transition-colors"
          >
            [ESC / CLOSE]
          </button>
        </div>

        {/* Code Viewer */}
        <div className="flex-1 overflow-y-auto p-4 bg-[var(--bg-surface-subtle)] text-[11px] leading-relaxed">
          <pre className="font-mono text-[var(--ink-primary)] selection:bg-[var(--signal)] selection:text-[var(--on-signal)] whitespace-pre-wrap">
            {jsonString}
          </pre>
        </div>

        {/* Modal Action Bar */}
        <div className="p-3 sm:p-4 border-t border-[var(--grid-line)] bg-[var(--bg-canvas)] flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <span className="text-[10px] text-[var(--ink-tertiary)] uppercase tracking-widest">
            FORMAT: APPLICATION/JSON (RFC-8259)
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void copy(jsonString)}
              className="px-3 py-1.5 border border-[var(--grid-line)] bg-[var(--bg-surface)] text-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--on-signal)] transition-colors uppercase tracking-wider font-medium"
            >
              {copied ? "COPIED TO BUFFER ✓" : "COPY_BUFFER"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="px-3 py-1.5 bg-[var(--signal)] text-[var(--on-signal)] hover:bg-[var(--signal-hover)] transition-colors uppercase tracking-wider font-medium"
            >
              DOWNLOAD_JSON ⤓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
