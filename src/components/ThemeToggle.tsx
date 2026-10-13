'use client'

import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	const isLight = theme === 'light'
	return (
		<button
			type='button'
			onClick={toggleTheme}
			aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
		>
			{isLight ? <MoonIcon size={18} /> : <SunIcon size={18} />}
		</button>
	)
}
