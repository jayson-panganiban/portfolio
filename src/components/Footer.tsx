'use client'

import { usePathname } from 'next/navigation'
import { resume } from '@/data/resume'
import { SocialLinks } from './SocialLinks'

export function Footer() {
	const currentYear = new Date().getFullYear()
	const pathname = usePathname()
	const isHomePage = pathname === '/'

	return (
		<footer className='mt-10 border-t border-gray-200 py-5 dark:border-gray-800'>
			<div className='container mx-auto flex max-w-4xl flex-col items-center gap-3 px-2'>
				{!isHomePage && <SocialLinks size={24} weight='thin' />}
				<p className='text-sm text-gray-700 dark:text-gray-300'>
					{resume.name} © {currentYear}
				</p>
			</div>
		</footer>
	)
}
