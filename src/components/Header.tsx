import * as stylex from '@stylexjs/stylex'
import { shared } from '@/styles/shared'
import { tokens } from '@/styles/tokens.stylex'
import { ThemeToggle } from './ThemeToggle'

const md = '@media (min-width: 768px)'

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
		borderBottomWidth: 1.5,
		borderBottomStyle: 'solid',
		borderBottomColor: tokens.border,
		backgroundColor: `rgb(${tokens.backgroundRgb} / 0.9)`,
		backdropFilter: 'blur(12px)',
	},
	inner: {
		display: 'flex',
		minHeight: tokens.headerHeight,
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 16,
		paddingBlock: 12,
	},
	logo: {
		flexShrink: 0,
		fontFamily: tokens.fontDisplay,
		fontSize: 24,
		fontStyle: 'italic',
		color: tokens.heading,
		transitionProperty: 'color',
		':hover': { color: tokens.primary },
	},
	nav: {
		display: {
			default: 'none',
			[md]: 'flex',
		},
		alignItems: 'center',
		gap: 20,
	},
	navLink: {
		transitionProperty: 'color',
		':hover': { color: tokens.hoverAccent },
	},
	actions: {
		display: 'flex',
		alignItems: 'center',
		gap: 16,
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
				<div {...stylex.props(styles.actions)}>
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
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
