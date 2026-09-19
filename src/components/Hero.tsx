import * as stylex from '@stylexjs/stylex'
import { resume } from '@/data/resume'
import { shared } from '@/styles/shared'
import { tokens } from '@/styles/tokens.stylex'

const sm = '@media (min-width: 640px)'
const md = '@media (min-width: 768px)'

const styles = stylex.create({
	section: {
		display: 'flex',
		scrollMarginTop: tokens.headerHeight,
		alignItems: {
			default: 'flex-start',
			[sm]: 'flex-end',
		},
		borderBottomWidth: 1.5,
		borderBottomStyle: 'solid',
		borderBottomColor: tokens.border,
		paddingTop: {
			default: 56,
			[sm]: 64,
			[md]: 96,
		},
		paddingBottom: {
			default: 40,
			[sm]: 80,
			[md]: 96,
		},
		minHeight: {
			default: 'auto',
			[sm]: `calc(100svh - ${tokens.headerHeight})`,
		},
	},
	content: {
		width: '100%',
	},
	eyebrow: {
		display: 'flex',
		alignItems: 'center',
		gap: 12,
		marginBottom: 20,
		fontFamily: tokens.fontMono,
		fontSize: 11,
		textTransform: 'uppercase',
		letterSpacing: '0.12em',
		color: tokens.muted,
		'::before': {
			content: '""',
			height: 1.5,
			width: 24,
			backgroundColor: tokens.primary,
		},
	},
	name: {
		maxWidth: '13ch',
		fontFamily: tokens.fontDisplay,
		fontSize: 'clamp(3.4rem, 10vw, 8rem)',
		lineHeight: 0.95,
		letterSpacing: '-0.02em',
		color: tokens.heading,
	},
	firstName: {
		fontFamily: tokens.fontDisplay,
		fontStyle: 'italic',
		color: tokens.primary,
	},
	details: {
		display: 'grid',
		gap: 20,
		marginTop: 20,
		gridTemplateColumns: {
			default: 'none',
			[md]: 'minmax(0, 620px) auto',
		},
		alignItems: {
			default: 'normal',
			[md]: 'end',
		},
		justifyContent: {
			default: 'normal',
			[md]: 'space-between',
		},
	},
	summary: {
		maxWidth: '34ch',
		fontSize: {
			default: 16.5,
			[sm]: 18,
		},
		lineHeight: '1.75rem',
		color: tokens.body,
	},
	actions: {
		display: 'flex',
		flexDirection: {
			default: 'column',
			[sm]: 'row',
		},
		alignItems: {
			default: 'flex-start',
			[sm]: 'center',
		},
		gap: {
			default: 12,
			[sm]: 20,
		},
	},
	resumeLink: {
		height: 40,
		justifyContent: 'center',
	},
	location: {
		marginTop: {
			default: 28,
			[md]: 40,
		},
		fontFamily: tokens.fontMono,
		fontSize: 12,
		color: tokens.muted,
	},
})

export function Hero() {
	return (
		<section id='top' {...stylex.props(styles.section)}>
			<div {...stylex.props(styles.content)}>
				<p {...stylex.props(styles.eyebrow)}>{resume.title}</p>

				<h1 {...stylex.props(styles.name)}>
					Jayson <em {...stylex.props(styles.firstName)}>Panganiban</em>
				</h1>

				<div {...stylex.props(styles.details)}>
					<p {...stylex.props(styles.summary)}>{resume.summary}</p>

					<div {...stylex.props(styles.actions)}>
						<a href='#projects' {...stylex.props(shared.focusRing, shared.textLink)}>
							View projects
						</a>

						<a
							href={resume.resumeLink}
							download
							{...stylex.props(shared.focusRing, shared.textLink, styles.resumeLink)}
						>
							Download résumé
						</a>
					</div>
				</div>

				<p {...stylex.props(styles.location)}>{resume.location}</p>
			</div>
		</section>
	)
}
