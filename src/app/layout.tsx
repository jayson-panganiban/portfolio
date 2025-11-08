import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

export const metadata = {
	title: 'Jayson Panganiban | Portfolio',
	description: 'Personal portfolio and projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning className='scroll-smooth'>
			<body className='font-sans antialiased'>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
