import * as stylex from '@stylexjs/stylex'
import { shared } from '@/styles/shared'
import { tokens } from '@/styles/tokens.stylex'
import { ThemeToggle } from './ThemeToggle'

const sm = '@media (min-width: 640px)'

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

const styles = stylex.create({
	header: {
		position: 'sticky',
		top: 0,
		zIndex: 50,
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: tokens.border,
		backgroundColor: `rgb(${tokens.backgroundRgb} / 0.96)`,
		backdropFilter: 'blur(12px)',
	},
	inner: {
		display: 'grid',
		gridTemplateColumns: { default: 'minmax(0, 1fr) auto', [sm]: 'auto minmax(0, 1fr) auto' },
		minHeight: tokens.headerHeight,
		alignItems: 'center',
		columnGap: 16,
		rowGap: { default: 4, [sm]: 0 },
		paddingBlock: { default: 8, [sm]: 12 },
	},
	logo: {
		display: 'inline-flex',
		alignItems: 'center',
		flexShrink: 0,
		fontFamily: tokens.fontDisplay,
		fontSize: 18,
		fontWeight: 600,
		letterSpacing: '-0.05em',
		color: tokens.heading,
		transitionProperty: 'color',
		':hover': { color: tokens.primary },
	},
	nav: {
		display: 'flex',
		alignItems: 'center',
		gap: { default: 20, [sm]: 24 },
		gridColumn: { default: '1 / -1', [sm]: '2' },
		gridRow: { default: '2', [sm]: '1' },
		justifySelf: { default: 'start', [sm]: 'end' },
		minWidth: 0,
		width: { default: '100%', [sm]: 'auto' },
		overflowX: { default: 'auto', [sm]: 'visible' },
		scrollbarWidth: 'none',
	},
	navLink: {
		flexShrink: 0,
		paddingBlock: 6,
		fontSize: { default: 10, [sm]: 11 },
		letterSpacing: '0.08em',
		textDecorationLine: 'underline',
		textDecorationColor: 'transparent',
		textUnderlineOffset: 6,
		transitionProperty: 'color, text-decoration-color',
		':hover': {
			color: tokens.linkAccent,
			textDecorationColor: tokens.linkAccent,
		},
	},
	actions: {
		display: 'flex',
		alignItems: 'center',
		gridColumn: { default: '2', [sm]: '3' },
		gridRow: '1',
		justifySelf: 'end',
	},
})

export function Header() {
	return (
		<header {...stylex.props(styles.header)}>
			<div {...stylex.props(shared.pageContainer, styles.inner)}>
				<a
					href='#top'
					{...stylex.props(shared.focusRing, styles.logo)}
					aria-label='Jayson Panganiban home'
				>
					JP
				</a>
				<nav {...stylex.props(styles.nav)} aria-label='Primary navigation'>
					{navItems.map(item => (
						<a
							key={item.href}
							href={item.href}
							{...stylex.props(shared.focusRing, shared.eyebrow, styles.navLink)}
						>
							{item.label}
						</a>
					))}
				</nav>
				<div {...stylex.props(styles.actions)}>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
