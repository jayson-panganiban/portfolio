'use client'

import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<div className='h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800' aria-hidden='true' />
		)
	}

	return (
		<button
			type='button'
			onClick={toggleTheme}
			className='rounded-full p-2.5 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800'
			aria-label='Toggle theme'
		>
			{theme === 'light' ? <MoonIcon size={24} /> : <SunIcon size={24} />}
		</button>
	)
}
