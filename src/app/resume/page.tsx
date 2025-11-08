'use client'

import { PageLayout } from '@/components/PageLayout'
import { resume } from '@/data/resume'

export default function ResumePage() {
	return (
		<PageLayout>
			<main className='container mx-auto max-w-4xl px-4 py-4'>
				<div className='mb-10'>
					<div className='mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
						<h1 className='mb-3 text-5xl font-bold tracking-tight md:text-6xl'>Experience</h1>
						<a
							href={resume.resumeLink}
							download
							className='inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-gray-900 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-black'
						>
							Download Resume
						</a>
					</div>
				</div>

				<div className='space-y-12'>
					{resume.workHistory.map(job => (
						<article key={job.company + job.period} className='grid gap-3 md:grid-cols-[200px_1fr]'>
							<div className='space-y-1'>
								<div className='text-sm text-gray-500 dark:text-gray-500'>{job.period}</div>
								<div className='font-medium text-gray-900 dark:text-primary-light'>
									{job.company}
								</div>
								{job.location && (
									<div className='text-sm text-gray-500 dark:text-gray-500'>{job.location}</div>
								)}
							</div>
							<div>
								<h3 className='mb-3 text-xl font-semibold tracking-tight'>{job.title}</h3>
								<p className='leading-relaxed text-gray-600 dark:text-gray-400'>
									{job.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</main>
		</PageLayout>
	)
}
