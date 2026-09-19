import * as stylex from '@stylexjs/stylex'
import { Footer } from './Footer'
import { Header } from './Header'

const styles = stylex.create({
	page: {
		minHeight: '100vh',
	},
})

export function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div {...stylex.props(styles.page)}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
