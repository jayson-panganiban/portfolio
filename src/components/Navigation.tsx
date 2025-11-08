import Link from 'next/link'

const navLinks = [
	{ name: 'Projects', href: '/projects' },
	{ name: 'About', href: '/about' },
	{ name: 'Résumé', href: '/resume' },
]

export function Navigation() {
	return (
		<nav className='border-t border-gray-200 py-8 dark:border-gray-800'>
			<div className='flex flex-wrap justify-center gap-6 text-lg md:gap-12 md:text-xl'>
				{navLinks.map(link => (
					<Link
						key={link.name}
						href={link.href}
						className='font-medium text-gray-900 transition-colors hover:text-primary-dark dark:text-primary-light dark:hover:text-accent-light'
					>
						{link.name}
					</Link>
				))}
			</div>
		</nav>
	)
}
