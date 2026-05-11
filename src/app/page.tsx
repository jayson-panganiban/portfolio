import { Hero } from '@/components/Hero'
import { PageLayout } from '@/components/PageLayout'
import { ProjectCard } from '@/components/ProjectCard'
import { projectsData } from '@/data/projects'
import { resume } from '@/data/resume'

function SectionHeading({ index, title, intro }: { index: string; title: string; intro?: string }) {
	return (
		<div className='mb-7'>
			<div className='flex items-baseline gap-3'>
				<span className='w-9 shrink-0 font-mono text-[12px] uppercase tracking-[0.08em] text-primary'>
					{index}
				</span>
				<h2 className='font-display text-[25px] leading-tight tracking-[-0.01em] text-[#141413] dark:text-stone-100'>
					{title}
				</h2>
			</div>
			{intro && (
				<p className='mt-3 max-w-[680px] text-[14.5px] leading-6 text-[#3D3D3A] dark:text-stone-400 sm:ml-[48px]'>
					{intro}
				</p>
			)}
		</div>
	)
}

export default function Home() {
	const [featuredProject, ...projects] = projectsData

	return (
		<PageLayout>
			<main className='mx-auto max-w-6xl px-5 pb-24 sm:px-8'>
				<Hero />

				<section id='about' className='mt-16 scroll-mt-24 md:mt-20'>
					<SectionHeading index='01' title='About' />

					<div className='max-w-[700px] sm:ml-[48px]'>
						<p className='text-[15px] leading-7 text-[#3D3D3A] dark:text-stone-300'>
							{resume.workInfo}
						</p>
						<p className='mt-4 text-[15px] leading-7 text-[#3D3D3A] dark:text-stone-300'>
							{resume.personalInfo}
						</p>
					</div>

					<div className='mt-8 grid gap-4 sm:ml-[48px] sm:grid-cols-2 lg:grid-cols-3'>
						{resume.capabilities.map(item => (
							<div
								key={item.category}
								className='rounded-[14px] border-[1.5px] border-[#D1CFC5] bg-[#F0EEE6] p-5 dark:border-white/10 dark:bg-stone-900'
							>
								<h3 className='font-display text-[19px] leading-tight text-[#141413] dark:text-stone-100'>
									{item.category}
								</h3>
								<p className='mt-2 text-[13.5px] leading-6 text-[#3D3D3A] dark:text-stone-400'>
									{item.tools.join(', ')}
								</p>
							</div>
						))}
					</div>
				</section>

				<section id='experience' className='mt-16 scroll-mt-24 md:mt-20'>
					<SectionHeading
						index='02'
						title='Experience'
						intro='Building automation frameworks, validating complex systems, and improving release confidence across real-world delivery environments.'
					/>

					<div className='space-y-5 sm:ml-[48px]'>
						{resume.workHistory.map(role => (
							<article
								key={role.company}
								className='group overflow-hidden rounded-[14px] border-[1.5px] border-[#D1CFC5] bg-white transition duration-150 hover:-translate-y-0.5 hover:border-[#141413] hover:shadow-[0_10px_30px_rgba(20,20,19,0.08)] dark:border-white/10 dark:bg-stone-900 dark:hover:border-primary-light/40 md:grid md:grid-cols-[190px_minmax(0,1fr)]'
							>
								<div className='flex min-h-44 flex-col justify-between border-b-[1.5px] border-[#E6E3DA] bg-[#F0EEE6] p-5 transition-colors group-hover:bg-[#E3DACC] dark:border-white/10 dark:bg-stone-950 dark:group-hover:bg-stone-800 md:border-b-0 md:border-r-[1.5px]'>
									<div className='mb-4 space-y-2'>
										<p className='font-mono text-[11px] uppercase leading-4 tracking-[0.08em] text-[#87867F] dark:text-stone-500'>
											{role.period}
										</p>
										{role.location && (
											<p className='font-mono text-[11px] uppercase leading-4 tracking-[0.08em] text-[#87867F] dark:text-stone-500'>
												{role.location}
											</p>
										)}
									</div>

									<h3 className='font-display text-[2rem] leading-[0.98] tracking-[-0.01em] text-[#141413] dark:text-stone-100'>
										{role.company}
									</h3>
								</div>

								<div className='flex flex-col p-5 sm:p-7'>
									<p className='text-[14px] leading-6 text-[#3D3D3A] dark:text-stone-300'>
										{role.title}
									</p>

									<ul className='mt-5 flex-1 space-y-3'>
										{role.description.map(item => (
											<li
												key={item}
												className='border-l-[1.5px] border-primary/50 pl-4 text-[13.5px] leading-6 text-[#3D3D3A] dark:text-stone-400'
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id='projects' className='mt-16 scroll-mt-24 md:mt-20'>
					<SectionHeading
						index='03'
						title='Projects'
						intro='Personal products and tools built outside work to solve practical problems and explore useful ideas through code.'
					/>

					<div className='space-y-5 sm:ml-[48px]'>
						<ProjectCard project={featuredProject} featured />
						<div className='grid gap-5 md:grid-cols-3'>
							{projects.map(project => (
								<ProjectCard key={project.id} project={project} />
							))}
						</div>
					</div>
				</section>

				<section id='contact' className='mt-16 scroll-mt-24 md:mt-20'>
					<SectionHeading index='04' title='Contact' />

					<div className='max-w-3xl rounded-[14px] border-[1.5px] border-[#D1CFC5] bg-white p-6 dark:border-white/10 dark:bg-stone-900 sm:ml-[48px] sm:p-7'>
						<h3 className='font-display text-4xl leading-tight tracking-[-0.02em] text-[#141413] dark:text-stone-100 sm:text-5xl'>
							Let&apos;s build <em className='italic text-primary'>something useful.</em>
						</h3>

						<p className='mt-5 max-w-[38ch] text-[15px] leading-7 text-[#3D3D3A] dark:text-stone-300'>
							Open to software engineering, automation, and tooling roles.
						</p>

						<div className='mt-8 flex flex-wrap gap-x-5 gap-y-3'>
							{resume.socialLinks.map(link => (
								<a
									key={link.name}
									href={link.url}
									target={link.name !== 'Email' ? '_blank' : undefined}
									rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
									className='inline-flex items-center text-sm text-[#3D3D3A] underline decoration-[#D1CFC5] underline-offset-[6px] transition-colors hover:text-[#141413] hover:decoration-[#141413] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-light dark:text-stone-300 dark:decoration-white/20 dark:hover:text-primary-light dark:hover:decoration-primary-light dark:focus-visible:ring-offset-background-dark'
								>
									{link.name}
								</a>
							))}
						</div>
					</div>
				</section>
			</main>
		</PageLayout>
	)
}
