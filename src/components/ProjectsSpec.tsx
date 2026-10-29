import { projectsData } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";
import { TechTag } from "./TechTag";

export function ProjectsSpec() {
  return (
    <section
      id="projects"
      aria-label="Side Builds"
      className="w-full border-b border-[var(--grid-line)] bg-[var(--bg-canvas)] py-12 md:py-18"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader number={4} label="SIDE BUILDS" />

        {/* 2-Column Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => {
            return (
              <article
                key={project.id}
                className="border border-[var(--grid-line)] bg-[var(--bg-surface)] p-5 md:p-6 flex flex-col justify-between transition-colors hover:border-[var(--ink-tertiary)]"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-[var(--grid-subtle)] pb-3 mb-4 text-[10px] font-mono uppercase tracking-widest text-[var(--ink-tertiary)]">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--ink-primary)] font-semibold">
                        PRJ-0{idx + 1}
                      </span>
                      <span>//</span>
                      <span>{project.category}</span>
                    </div>
                    <span className="text-[var(--signal-cyan)] font-medium">{project.stat}</span>
                  </div>

                  {/* Title & External Link */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-medium tracking-tight text-[var(--ink-primary)]">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[var(--signal)]"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-[var(--grid-line)] text-[var(--ink-secondary)] hover:bg-[var(--signal)] hover:text-[var(--on-signal)] hover:border-[var(--signal)] transition-colors shrink-0"
                    >
                      <span className="font-mono text-sm leading-none" aria-hidden="true">
                        ↗
                      </span>
                      <span className="sr-only">{`Open ${project.title}`}</span>
                    </a>
                  </div>

                  <p className="text-sm text-[var(--ink-secondary)] mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack & Action */}
                <div>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-[var(--grid-subtle)]">
                    {project.stack.map((tech) => (
                      <TechTag key={tech} label={tech} />
                    ))}
                  </div>

                  <div className="mt-3 pt-2 border-t border-[var(--grid-subtle)] text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider">
                    <span>{project.infrastructure}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
