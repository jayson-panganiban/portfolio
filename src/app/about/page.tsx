'use client'

import { PageLayout } from '@/components/PageLayout'
import { resume } from '@/data/resume'

export default function AboutPage() {
	return (
		<PageLayout>
			<main className='container mx-auto max-w-4xl px-4 py-4'>
				<div className='mb-10'>
					<h1 className='mb-6 text-5xl font-bold tracking-tight md:text-6xl '>About me</h1>
				</div>
				<div className='space-y-12'>
					<section>
						<p className='leading-relaxed text-gray-700 dark:text-gray-300'>{resume.workInfo}</p>
						<p className='mt-4 leading-relaxed text-gray-700 dark:text-gray-300'>
							{resume.personalInfo}
						</p>
					</section>
					<section>
						<h2 className='mb-6 text-3xl font-semibold tracking-tight'>Teck Stack</h2>
						<div className='grid gap-x-12 gap-y-6 md:grid-cols-2'>
							{resume.technicalSkills.map(category => (
								<div key={category.name}>
									<h3 className='mb-3 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-primary-light'>
										{category.name}
									</h3>
									<p className='font-mono text-sm text-gray-700 dark:text-gray-300'>
										{category.skills.join(', ')}
									</p>
								</div>
							))}
						</div>
					</section>
				</div>
			</main>
		</PageLayout>
	)
}
