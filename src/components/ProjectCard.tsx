import type { Project } from '@/data/projects'
export function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<article className='project-card'>
			<a href={project.href} target='_blank' rel='noreferrer' className='project-card__link'>
				<p className='project-card__index'>0{index}</p>
				<div className='project-card__main'>
					<h3>{project.title}</h3>
					<p>{project.summary}</p>
				</div>
				<p className='project-card__stack'>{project.stack}</p>
				<span className='project-card__arrow' aria-hidden='true'>
					↗
				</span>
			</a>
		</article>
	)
}
