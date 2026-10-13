'use client'

import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

export function Header() {
	const [activeSection, setActiveSection] = useState<string | null>(null)

	useEffect(() => {
		const sections = navItems
			.map(item => document.querySelector<HTMLElement>(item.href))
			.filter((section): section is HTMLElement => section !== null)
		const observer = new IntersectionObserver(
			entries => {
				const visible = entries
					.filter(entry => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
				if (visible) setActiveSection(`#${visible.target.id}`)
			},
			{ rootMargin: '-22% 0px -62%', threshold: [0.1, 0.35, 0.65] },
		)
		sections.forEach(section => {
			observer.observe(section)
		})
		return () => observer.disconnect()
	}, [])

	return (
		<header className='site-header'>
			<div className='shell site-header__inner'>
				<a className='site-header__mark' href='#top' aria-label='Jayson Panganiban home'>
					JP<span>.</span>
				</a>
				<nav aria-label='Primary navigation'>
					{navItems.map(item => (
						<a
							className='nav-link'
							key={item.href}
							href={item.href}
							aria-current={activeSection === item.href ? 'location' : undefined}
						>
							{item.label}
						</a>
					))}
				</nav>
				<ThemeToggle />
			</div>
		</header>
	)
}
