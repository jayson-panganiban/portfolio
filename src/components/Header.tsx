import { ThemeToggle } from './ThemeToggle'

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

export function Header() {
	return (
		<header className='sticky top-0 z-50 border-b-[1.5px] border-border bg-background-light/90 backdrop-blur-md'>
			<div className='page-container flex min-h-[var(--header-height)] items-center justify-between gap-4 py-3'>
				<a
					href='#top'
					className='focus-ring shrink-0 font-display text-2xl italic text-heading transition-colors hover:text-primary'
					aria-label='Jayson Panganiban home'
				>
					JP
				</a>
				<div className='flex items-center gap-4'>
					<nav className='hidden items-center gap-5 md:flex' aria-label='Primary navigation'>
						{navItems.map(item => (
							<a
								key={item.href}
								href={item.href}
								className='focus-ring eyebrow transition-colors hover:text-heading dark:hover:text-primary-light'
							>
								{item.label}
							</a>
						))}
					</nav>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
