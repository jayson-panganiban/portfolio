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
				<h2 className='font-display text-[25px] leading-tight tracking-[-0.01em] text-heading'>
					{title}
				</h2>
			</div>
			{intro && (
				<p className='mt-3 max-w-[680px] text-[14.5px] leading-6 text-copy sm:ml-[48px]'>{intro}</p>
			)}
		</div>
	)
}

export default function Home() {
	const [featuredProject, ...projects] = projectsData

	return (
		<PageLayout>
			<main className='page-container pb-24'>
				<Hero />

				<section id='about' className='mt-16 scroll-mt-24 md:mt-20'>
					<SectionHeading index='01' title='About' />

					<div className='max-w-[700px] sm:ml-[48px]'>
						<p className='copy'>{resume.workInfo}</p>
						<p className='copy mt-4'>{resume.personalInfo}</p>
					</div>

					<div className='mt-8 grid gap-4 sm:ml-[48px] sm:grid-cols-2 lg:grid-cols-3'>
						{resume.capabilities.map(item => (
							<div key={item.category} className='panel bg-surface-muted p-5'>
								<h3 className='font-display text-[18px] leading-tight text-heading'>
									{item.category}
								</h3>
								<p className='copy-sm mt-2'>{item.tools.join(', ')}</p>
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
								className='group interactive-panel overflow-hidden md:grid md:grid-cols-[190px_minmax(0,1fr)]'
							>
								<div className='panel-band flex min-h-32 flex-col justify-between border-b-[1.5px] p-5 md:min-h-44 md:border-b-0 md:border-r-[1.5px]'>
									<div className='mb-4 space-y-2'>
										<p className='eyebrow md:mt-3'>{role.period}</p>
										{role.location && <p className='eyebrow'>{role.location}</p>}
									</div>

									<h3 className='font-display text-[2rem] leading-[0.98] tracking-[-0.01em] text-heading md:mb-3'>
										{role.company}
									</h3>
								</div>

								<div className='flex flex-col p-5 sm:p-7'>
									<p className='text-[14px] leading-6 text-copy'>{role.title}</p>

									<ul className='mt-5 flex-1 space-y-3'>
										{role.description.map(item => (
											<li key={item} className='copy-sm border-l-[1.5px] border-primary/50 pl-4'>
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

					<div className='panel max-w-3xl p-6 sm:ml-[48px] sm:p-7'>
						<h3 className='font-display text-4xl leading-tight tracking-[-0.02em] text-heading sm:text-5xl'>
							Let&apos;s build <em className='italic text-primary'>something useful.</em>
						</h3>

						<p className='copy mt-5 max-w-[38ch]'>
							Open to software engineering, automation, and tooling roles.
						</p>

						<div className='mt-8 flex flex-wrap gap-x-5 gap-y-3'>
							{resume.socialLinks.map(link => (
								<a
									key={link.name}
									href={link.url}
									target={link.name !== 'Email' ? '_blank' : undefined}
									rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
									className='text-link'
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
