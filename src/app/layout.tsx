import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

export const metadata: Metadata = {
	title: 'Jayson Panganiban',
	description:
		'Builds automation, performance, and product tools that help teams ship with confidence.',
	icons: {
		icon: '/favicon.svg',
	},
}

export const viewport: Viewport = {
	colorScheme: 'light dark',
	viewportFit: 'cover',
	themeColor: '#101514',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' data-scroll-behavior='smooth' suppressHydrationWarning>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
