import { resume } from '@/data/resume'

export function Hero() {
	return (
		<section
			id='top'
			className='flex items-start border-b-[1.5px] border-[#D1CFC5] pt-10 pb-12 dark:border-white/10 sm:min-h-[calc(100svh-4rem)] sm:items-end sm:pt-16 sm:pb-20 md:py-24'
		>
			<div className='w-full'>
				<p className='mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#87867F] before:h-[1.5px] before:w-6 before:bg-primary'>
					AUTOMATION · PERFORMANCE · DEVELOPMENT
				</p>

				<h1 className='max-w-[13ch] font-display text-[clamp(3.4rem,10vw,8rem)] leading-[0.95] tracking-[-0.02em] text-[#141413] dark:text-stone-100'>
					Jayson <em className='font-display italic text-primary'>Panganiban</em>
				</h1>

				<div className='mt-6 grid gap-6 md:grid-cols-[minmax(0,620px)_auto] md:items-end md:justify-between'>
					<p className='max-w-[34ch] text-[16.5px] leading-7 text-[#3D3D3A] dark:text-stone-300 sm:text-lg'>
						{resume.title}
					</p>

					<div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5'>
						<a
							href='#projects'
							className='inline-flex h-10 items-center justify-center rounded-[10px] border-[1.5px] border-primary bg-white px-4 text-sm text-primary transition-colors hover:border-[#141413] hover:bg-[#F7F4EC] hover:text-[#141413] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-light dark:border-primary-light dark:bg-stone-900 dark:hover:border-primary-light dark:hover:bg-stone-800 dark:hover:text-primary-light dark:focus-visible:ring-offset-background-dark'
						>
							View projects
						</a>

						<a
							href={resume.resumeLink}
							download
							className='inline-flex h-10 items-center justify-center text-sm text-[#3D3D3A] underline decoration-[#D1CFC5] underline-offset-[6px] transition-colors hover:text-[#141413] hover:decoration-[#141413] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-light dark:text-stone-300 dark:decoration-white/20 dark:hover:text-primary-light dark:hover:decoration-primary-light dark:focus-visible:ring-offset-background-dark'
						>
							Download résumé
						</a>
					</div>
				</div>

				<p className='mt-8 font-mono text-xs text-[#87867F] dark:text-stone-500 md:mt-10'>
					{resume.location}
				</p>
			</div>
		</section>
	)
}
