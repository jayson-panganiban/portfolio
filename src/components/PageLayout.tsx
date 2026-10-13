import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
