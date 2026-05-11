import { ThemeToggle } from './ThemeToggle'

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

export function Header() {
	return (
		<header className='sticky top-0 z-50 border-b-[1.5px] border-[#D1CFC5] bg-background-light/90 backdrop-blur-md dark:border-white/10 dark:bg-background-dark/90'>
			<div className='mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8'>
				<a
					href='#top'
					className='shrink-0 font-display text-2xl italic text-[#141413] transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-light dark:text-stone-100 dark:focus-visible:ring-offset-background-dark'
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
								className='font-mono text-[11px] uppercase tracking-[0.08em] text-[#87867F] transition-colors hover:text-[#141413] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background-light dark:text-stone-500 dark:hover:text-primary-light dark:focus-visible:ring-offset-background-dark'
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
