import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-background-light text-foreground transition-colors duration-300'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
