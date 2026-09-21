import * as stylex from '@stylexjs/stylex'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { tokens } from '@/styles/tokens.stylex'
import './globals.css'

export const metadata: Metadata = {
	title: 'Jayson Panganiban',
	description: 'Automation, QA, and development portfolio for Jayson Panganiban.',
}

export const viewport: Viewport = {
	colorScheme: 'light dark',
	viewportFit: 'cover',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f4efe5' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
}

const styles = stylex.create({
	body: {
		fontFamily: tokens.fontSans,
		WebkitFontSmoothing: 'antialiased',
	},
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' data-scroll-behavior='smooth' suppressHydrationWarning>
			<body {...stylex.props(styles.body)}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
