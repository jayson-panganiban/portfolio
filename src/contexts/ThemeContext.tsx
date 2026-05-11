'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const themeColors: Record<Theme, string> = {
	light: '#FAF9F5',
	dark: '#171614',
}

interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'dark',
	toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('dark')
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const savedTheme = localStorage.getItem('theme') as Theme | null
		if (savedTheme) {
			setTheme(savedTheme)
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			setTheme(prefersDark ? 'dark' : 'light')
		}
	}, [])

	useEffect(() => {
		if (!mounted) return

		const root = document.documentElement
		if (theme === 'dark') {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}

		const themeColorTags = document.querySelectorAll('meta[name="theme-color"]')
		for (const tag of themeColorTags) {
			tag.setAttribute('content', themeColors[theme])
			tag.removeAttribute('media')
		}

		localStorage.setItem('theme', theme)
	}, [theme, mounted])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
	return useContext(ThemeContext)
}
