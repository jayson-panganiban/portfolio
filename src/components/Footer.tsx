import { resume } from '@/data/resume'
import { SocialLinks } from './SocialLinks'

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='mt-16 border-t border-gray-200 py-8 dark:border-gray-800'>
			<div className='container mx-auto flex max-w-4xl flex-col items-center gap-6 px-4'>
				<SocialLinks size={24} weight='thin' />
				<p className='text-sm text-gray-600 dark:text-gray-400'>
					{resume.name} © {currentYear}
				</p>
			</div>
		</footer>
	)
}
