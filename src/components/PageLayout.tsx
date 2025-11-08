import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen'>
			<Header />
			<main className='pt-4 md:pt-8'>{children}</main>
			<Footer />
		</div>
	)
}
