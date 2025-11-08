import { MapPinIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import { resume } from '@/data/resume'
import { Navigation } from './Navigation'
import { SocialLinks } from './SocialLinks'

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
			<p className='mb-2 max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300 md:text-xl'>
				{resume.title}
			</p>
			<div className='mb-10 flex items-center gap-2 text-center text-sm text-gray-500 dark:text-gray-500'>
				<MapPinIcon className='mt-0.5 inline-block' />
				<span>Melbourne, Australia</span>
			</div>
			<div className='mb-10'>
				<SocialLinks size={32} weight='regular' />
			</div>
			<Navigation />
		</section>
	)
}
