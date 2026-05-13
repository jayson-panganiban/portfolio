import type { Project } from '@/data/projects'

type ProjectCardProps = {
	project: Project
	featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
	return (
		<article
			className={`group interactive-panel flex h-full flex-col overflow-hidden ${
				featured ? 'md:grid md:grid-cols-[0.62fr_1fr]' : ''
			}`}
		>
			<div
				className={`panel-band flex flex-col justify-between border-b-[1.5px] p-5 ${
					featured ? 'min-h-44 md:min-h-72 md:border-b-0 md:border-r-[1.5px]' : 'min-h-36'
				}`}
			>
				<div>
					<div className='mb-4 flex items-center gap-3'>
						<p className='font-mono text-[10px] uppercase tracking-[0.08em] text-muted'>
							{project.stack}
						</p>
					</div>
				</div>

				<h3
					className={`max-w-[15ch] font-display leading-[0.96] tracking-[-0.01em] text-heading ${
						featured ? 'text-5xl sm:text-6xl' : 'text-[2rem]'
					}`}
				>
					{project.title}
				</h3>
			</div>

			<div className={`flex flex-1 flex-col p-5 ${featured ? 'sm:p-7' : ''}`}>
				<p className='copy-sm flex-1'>
					{project.summary}
				</p>

				<p className='mt-5 border-l-[1.5px] border-primary/50 pl-4 text-[13px] leading-6 text-copy'>
					{project.outcome}
				</p>

				<a
					href={project.href}
					target='_blank'
					rel='noopener noreferrer'
					className='focus-ring mt-6 inline-flex items-center justify-between border-t border-border-subtle pt-3 font-mono text-[11px] text-muted transition-colors group-hover:text-primary dark:group-hover:text-primary-light'
				>
					View project
					<span className='transition-transform group-hover:translate-x-1' aria-hidden='true'>
						-&gt;
					</span>
				</a>
			</div>
		</article>
	)
}
