import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-background-light text-stone-950 transition-colors duration-300 dark:bg-background-dark dark:text-stone-100'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
