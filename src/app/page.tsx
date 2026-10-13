import { PageLayout } from '@/components/PageLayout'
import { ProjectCard } from '@/components/ProjectCard'
import { projectsData } from '@/data/projects'
import { resume } from '@/data/resume'

const featuredRoles = resume.workHistory.slice(0, 5)

export default function Home() {
	return (
		<PageLayout>
			<main id='main'>
				<section className='hero shell' id='top'>
					<div className='hero__topline'>
						<p>Jayson Panganiban</p>
						<p>Melbourne, Australia</p>
					</div>
					<div className='hero__body'>
						<p className='kicker'>automation · performance · development</p>
						<h1>
							Build
							<br />
							<em>confidence.</em>
						</h1>
						<div className='signal signal--hero' aria-hidden='true'>
							<span />
						</div>
						<p className='hero__summary'>{resume.summary}</p>

						<div className='hero__actions'>
							<a className='button button--solid' href='#projects'>
								See projects<span aria-hidden='true'>↓</span>
							</a>
							<a className='text-link' href={resume.resumeLink} download>
								Download CV <span aria-hidden='true'>↓</span>
							</a>
						</div>
					</div>
				</section>

				<section className='experience shell' id='experience'>
					<div className='section-heading'>
						<h2 className='section-tag'>01 / Experience</h2>
						<p>Selected roles. Full history is in the CV.</p>
					</div>
					<div className='experience__list'>
						{featuredRoles.map(role => (
							<article className='experience__item' key={`${role.company}-${role.period}`}>
								<p className='experience__period'>{role.period}</p>
								<h3>{role.company}</h3>
								<div>
									<p>{role.title}</p>
									<p className='experience__detail'>{role.description}</p>
									<p className='experience__stack'>{role.stack.join(' · ')}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className='work shell' id='projects'>
					<div className='section-heading'>
						<h2 className='section-tag'>02 / Projects</h2>
						<p>Useful tools, tested ideas, published products.</p>
					</div>
					<div className='work__signal' aria-hidden='true'>
						<span />
					</div>
					<div className='work__list'>
						{projectsData.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index + 1} />
						))}
					</div>
				</section>

				<section className='contact shell' id='contact'>
					<p className='section-tag'>03 / Contact</p>
					<h2>
						Need a calmer
						<br />
						<em>release day?</em>
					</h2>
					<div className='contact__actions'>
						<a className='button button--solid' href={`mailto:${resume.email}`}>
							Email<span aria-hidden='true'>↗</span>
						</a>
						{resume.socialLinks
							.filter(link => link.name !== 'Email')
							.map(link => (
								<a
									className='text-link'
									key={link.name}
									href={link.url}
									target='_blank'
									rel='noreferrer'
								>
									{link.name} <span aria-hidden='true'>↗</span>
								</a>
							))}
					</div>
				</section>
			</main>
		</PageLayout>
	)
}
