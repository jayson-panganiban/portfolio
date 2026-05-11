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
			<div
				className='h-9 w-9 border border-black/10 bg-stone-100 dark:border-white/10 dark:bg-stone-900'
				aria-hidden='true'
			/>
		)
	}

	return (
		<button
			type='button'
			onClick={toggleTheme}
			className='inline-flex h-9 w-9 shrink-0 items-center justify-center text-[#87867F] transition-colors hover:text-[#141413] dark:text-stone-400 dark:hover:text-primary-light'
			aria-label='Toggle theme'
		>
			{theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
		</button>
	)
}
