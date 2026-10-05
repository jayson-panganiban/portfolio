import * as stylex from '@stylexjs/stylex'
import { resume } from '@/data/resume'
import { shared } from '@/styles/shared'
import { tokens } from '@/styles/tokens.stylex'

const styles = stylex.create({
	footer: {
		borderTopWidth: 1.5,
		borderTopStyle: 'solid',
		borderTopColor: tokens.border,
		paddingBlock: 20,
	},
	copyright: {
		fontSize: 12,
		color: tokens.muted,
	},
})

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer {...stylex.props(styles.footer)}>
			<div {...stylex.props(shared.pageContainer)}>
				<p {...stylex.props(styles.copyright)}>© {currentYear} {resume.name}</p>
			</div>
		</footer>
	)
}
