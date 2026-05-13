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
		return <div className='h-9 w-9 border border-border bg-surface-muted' aria-hidden='true' />
	}

	return (
		<button
			type='button'
			onClick={toggleTheme}
			className='inline-flex h-9 w-9 shrink-0 items-center justify-center text-muted transition-colors hover:text-heading dark:hover:text-primary-light'
			aria-label='Toggle theme'
		>
			{theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
		</button>
	)
}
