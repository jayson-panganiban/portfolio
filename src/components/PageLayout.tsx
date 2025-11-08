'use client'

import { usePathname } from 'next/navigation'
import { BackButton } from './BackButton'
import { Footer } from './Footer'
import { ThemeToggle } from './ThemeToggle'

export function PageLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const showBackButton = pathname !== '/'

	return (
		<div className='min-h-screen pt-4 md:pt-8'>
			<header className='sticky top-4 md:top-8 z-50 border-b border-transparent backdrop-blur-sm dark:border-gray-800'>
				<div className='mx-auto flex h-16 max-w-4xl items-center justify-between px-4'>
					{showBackButton ? <BackButton /> : <div className='w-10' />}
					<ThemeToggle />
				</div>
			</header>
			<main className='mt-5'>{children}</main>
			<Footer />
		</div>
	)
}
