import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

export const metadata: Metadata = {
	title: 'Jayson Panganiban | Portfolio',
	description: 'Automation, QA, and development portfolio for Jayson Panganiban.',
}

export const viewport: Viewport = {
	colorScheme: 'light dark',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#FAF9F5' },
		{ media: '(prefers-color-scheme: dark)', color: '#171614' },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' data-scroll-behavior='smooth' suppressHydrationWarning>
			<body className='bg-background-light font-sans antialiased dark:bg-background-dark'>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
