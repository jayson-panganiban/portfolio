import { resume } from '@/data/resume'

export function Hero() {
	return (
		<section
			id='top'
			className='flex scroll-mt-[var(--header-height)] items-start border-b-[1.5px] border-border pt-14 pb-10 sm:min-h-[calc(100svh_-_var(--header-height))] sm:items-end sm:pt-16 sm:pb-20 md:py-24'
		>
			<div className='w-full'>
				<p className='mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted before:h-[1.5px] before:w-6 before:bg-primary'>
					AUTOMATION · PERFORMANCE · DEVELOPMENT
				</p>

				<h1 className='max-w-[13ch] font-display text-[clamp(3.4rem,10vw,8rem)] leading-[0.95] tracking-[-0.02em] text-heading'>
					Jayson <em className='font-display italic text-primary'>Panganiban</em>
				</h1>

				<div className='mt-5 grid gap-5 md:grid-cols-[minmax(0,620px)_auto] md:items-end md:justify-between'>
					<p className='max-w-[34ch] text-[16.5px] leading-7 text-copy sm:text-lg'>
						{resume.title}
					</p>

					<div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5'>
						<a
							href='#projects'
							className='primary-button'
						>
							View projects
						</a>

						<a
							href={resume.resumeLink}
							download
							className='text-link h-10 justify-center'
						>
							Download résumé
						</a>
					</div>
				</div>

				<p className='mt-7 font-mono text-xs text-muted md:mt-10'>
					{resume.location}
				</p>
			</div>
		</section>
	)
}
