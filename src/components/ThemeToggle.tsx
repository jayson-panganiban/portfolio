'use client'

import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import * as stylex from '@stylexjs/stylex'
import { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { tokens } from '@/styles/tokens.stylex'

const styles = stylex.create({
	placeholder: {
		height: 36,
		width: 36,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: tokens.border,
		backgroundColor: tokens.surfaceMuted,
	},
	button: {
		display: 'inline-flex',
		height: 36,
		width: 36,
		flexShrink: 0,
		alignItems: 'center',
		justifyContent: 'center',
		color: tokens.muted,
		transitionProperty: 'color',
		':hover': { color: tokens.hoverAccent },
	},
})

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <div {...stylex.props(styles.placeholder)} aria-hidden='true' />
	}

	return (
		<button
			type='button'
			onClick={toggleTheme}
			{...stylex.props(styles.button)}
			aria-label='Toggle theme'
		>
			{theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
		</button>
	)
}
