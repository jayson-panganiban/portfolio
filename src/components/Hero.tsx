import { MapPinIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { resume } from '@/data/resume'
import { SocialLinks } from './SocialLinks'

const navLinks = [
	{ name: 'Projects', href: '/projects' },
	{ name: 'About', href: '/about' },
	{ name: 'Résumé', href: '/resume' },
]

export function Hero() {
	return (
		<section className='flex min-h-[85vh] flex-col items-center justify-center px-4 py-20'>
			<div className='mb-10'>
				<Image
					src='/profile.jpg'
					alt='Profile'
					width={200}
					height={200}
					className='rounded-full border-4 border-gray-900 dark:border-primary-light'
					priority
				/>
			</div>
			<h1 className='mb-4 text-center text-5xl font-bold tracking-tight md:text-6xl'>
				{resume.name}
			</h1>
			<p className='mb-2 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400 md:text-xl'>
				{resume.title}
			</p>
			<div className='mb-10 flex items-center gap-2 text-center text-sm text-gray-500 dark:text-gray-500'>
				<MapPinIcon className='mt-0.5 inline-block' />
				<span>Melbourne, Australia</span>
			</div>

			<div className='mb-10'>
				<SocialLinks size={32} weight='regular' />
			</div>

			<nav className='border-t border-gray-200 pt-8 dark:border-gray-800'>
				<div className='flex flex-wrap justify-center gap-6 text-lg md:gap-10 md:text-xl'>
					{navLinks.map(link => (
						<Link
							key={link.name}
							href={link.href}
							className='font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-primary-light dark:hover:text-accent-light'
						>
							{link.name}
						</Link>
					))}
				</div>
			</nav>
		</section>
	)
}
