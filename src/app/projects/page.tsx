'use client'

import { CaretRightIcon } from '@phosphor-icons/react'
import { PageLayout } from '@/components/PageLayout'
import { projectsData } from '@/data/projects'

export default function ProjectsPage() {
	return (
		<PageLayout>
			<main className='container mx-auto max-w-4xl px-4 py-4'>
				<h1 className='mb-10 text-5xl font-bold tracking-tight md:text-6x'>Side Projects</h1>
				<div className='space-y-12'>
					{projectsData.map(project => (
						<article key={project.id}>
							{project.link ? (
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='group mb-3 inline-flex items-center gap-3'
								>
									<h2 className='text-2xl font-semibold tracking-tight transition-colors dark:group-hover:text-accent'>
										{project.title}
									</h2>
									<span className='flex h-8 w-8 items-center justify-center transition-colors group-hover:text-gray-900 dark:group-hover:text-primary-light'>
										<CaretRightIcon size={20} className='dark:text-accent' />
									</span>
								</a>
							) : (
								<h2 className='mb-3 text-2xl font-semibold tracking-tight'>{project.title}</h2>
							)}
							{project.technologies && (
								<p className='mb-4 font-mono text-sm text-gray-500 dark:text-gray-500'>
									{project.technologies.join(' · ')}
								</p>
							)}
							<p className='leading-relaxed text-gray-600 dark:text-gray-400'>
								{project.description}
							</p>
						</article>
					))}
				</div>
			</main>
		</PageLayout>
	)
}
