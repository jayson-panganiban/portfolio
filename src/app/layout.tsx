import { SwipeNavigation } from '@/components/SwipeNavigation'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

export const metadata = {
	title: 'Jayson Panganiban | Portfolio',
	description: 'Personal portfolio and projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' data-scroll-behavior='smooth'>
			<body className='font-sans antialiased'>
				<SwipeNavigation>
					<ThemeProvider>{children}</ThemeProvider>
				</SwipeNavigation>
			</body>
		</html>
	)
}
