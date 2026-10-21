import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<a className='skip-link' href='#main'>
				Skip to content
			</a>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
