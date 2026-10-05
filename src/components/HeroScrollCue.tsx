'use client'

import { useEffect, useState } from 'react'

export function HeroScrollCue() {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const hideOnScroll = () => {
			if (window.scrollY > 0) setVisible(false)
		}

		window.addEventListener('scroll', hideOnScroll, { passive: true })
		hideOnScroll()

		return () => window.removeEventListener('scroll', hideOnScroll)
	}, [])

	if (!visible) return null

	return (
		<a className='hero-scroll-arrow' href='#about' aria-label='Scroll to About'>
			<span aria-hidden='true'>↓</span> Scroll to explore
		</a>
	)
}
