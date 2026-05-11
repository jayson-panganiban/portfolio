import type { Project } from '@/data/projects'

type ProjectCardProps = {
	project: Project
	featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
	return (
		<article
			className={`group flex h-full flex-col overflow-hidden rounded-[14px] border-[1.5px] border-[#D1CFC5] bg-white transition duration-150 hover:-translate-y-0.5 hover:border-[#141413] hover:shadow-[0_10px_30px_rgba(20,20,19,0.08)] dark:border-white/10 dark:bg-stone-900 dark:hover:border-primary-light/40 ${
				featured ? 'md:grid md:grid-cols-[0.62fr_1fr]' : ''
			}`}
		>
			<div
				className={`flex flex-col justify-between border-b-[1.5px] border-[#E6E3DA] bg-[#F0EEE6] p-5 transition-colors group-hover:bg-[#E3DACC] dark:border-white/10 dark:bg-stone-950 dark:group-hover:bg-stone-800 ${
					featured ? 'min-h-72 md:border-b-0 md:border-r-[1.5px]' : 'min-h-44'
				}`}
			>
				<div>
					<div className='mb-4 flex items-center gap-3'>
						<p className='font-mono text-[10px] uppercase tracking-[0.08em] text-[#87867F] dark:text-stone-500'>
							{project.stack}
						</p>
					</div>
				</div>

				<h3
					className={`max-w-[15ch] font-display leading-[0.96] tracking-[-0.01em] text-[#141413] dark:text-stone-100 ${
						featured ? 'text-5xl sm:text-6xl' : 'text-[2rem]'
					}`}
				>
					{project.title}
				</h3>
			</div>

			<div className={`flex flex-1 flex-col p-5 ${featured ? 'sm:p-7' : ''}`}>
				<p className='flex-1 text-[13.5px] leading-6 text-[#3D3D3A] dark:text-stone-300'>
					{project.summary}
				</p>

				<p className='mt-5 border-l-[1.5px] border-primary/50 pl-4 text-[13px] leading-6 text-[#3D3D3A] dark:text-stone-400'>
					{project.outcome}
				</p>

				<a
					href={project.href}
					target='_blank'
					rel='noopener noreferrer'
					className='mt-6 inline-flex items-center justify-between border-t border-[#F0EEE6] pt-3 font-mono text-[11px] text-[#87867F] transition-colors group-hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-light dark:border-white/10 dark:text-stone-500 dark:group-hover:text-primary-light dark:focus-visible:ring-offset-background-dark'
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
