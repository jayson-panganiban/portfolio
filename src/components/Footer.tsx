import * as stylex from '@stylexjs/stylex'
import { resume } from '@/data/resume'
import { shared } from '@/styles/shared'
import { tokens } from '@/styles/tokens.stylex'

const md = '@media (min-width: 768px)'

const styles = stylex.create({
	footer: {
		borderTopWidth: 1.5,
		borderTopStyle: 'solid',
		borderTopColor: tokens.border,
		paddingBlock: 40,
	},
	inner: {
		display: 'flex',
		flexDirection: {
			default: 'column',
			[md]: 'row',
		},
		alignItems: {
			default: 'normal',
			[md]: 'baseline',
		},
		justifyContent: {
			default: 'normal',
			[md]: 'space-between',
		},
		gap: 8,
		fontSize: 14,
		color: tokens.muted,
	},
})

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer {...stylex.props(styles.footer)}>
			<div {...stylex.props(shared.pageContainer, styles.inner)}>
				<p>
					{resume.name} © {currentYear}
				</p>
				<p>Based in {resume.location}, available for remote-friendly opportunities.</p>
			</div>
		</footer>
	)
}
