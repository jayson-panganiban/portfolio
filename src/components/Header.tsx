'use client'

import { usePathname } from 'next/navigation'
import { BackButton } from './BackButton'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
	const pathname = usePathname()
	const isHomePage = pathname === '/'

	return (
		<header className='sticky top-0 z-50 border-b border-gray-200 bg-background-light/80 backdrop-blur dark:border-gray-800 dark:bg-background-dark/80'>
			<div className='mx-auto flex h-16 max-w-4xl items-center justify-between px-4'>
				{!isHomePage ? <BackButton /> : <div className='w-10' />}
				<ThemeToggle />
			</div>
		</header>
	)
}
