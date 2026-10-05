import * as stylex from '@stylexjs/stylex'
import type { Project } from '@/data/projects'
import { shared } from '@/styles/shared'
import { tokens } from '@/styles/tokens.stylex'

const sm = '@media (min-width: 640px)'
const md = '@media (min-width: 768px)'

type ProjectCardProps = {
	project: Project
	featured?: boolean
}

const styles = stylex.create({
	article: {
		display: 'flex',
		flexDirection: 'column',
	},
	articleRow: {
		display: { default: 'flex', [md]: 'grid' },
		gridTemplateColumns: { default: 'none', [md]: 'minmax(200px, 0.42fr) minmax(0, 1fr)' },
		columnGap: { default: 0, [md]: 28 },
		borderTopWidth: 1,
		borderTopStyle: 'solid',
		borderTopColor: tokens.border,
		paddingBlock: { default: 16, [md]: 20 },
	},
	articleFeatured: {
		display: {
			default: 'flex',
			[md]: 'grid',
		},
		gridTemplateColumns: {
			default: 'none',
			[md]: '0.62fr 1fr',
		},
	},
	band: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: { default: 'flex-start', [md]: 'space-between' },
		gap: { default: 8, [md]: 0 },
		borderBottomWidth: 1.5,
		borderBottomStyle: 'solid',
		padding: { default: 16, [md]: 20 },
		minHeight: 144,
	},
	bandRow: {
		borderBottomWidth: 0,
		padding: { default: 0, [md]: '0 24px 0 0' },
		minHeight: 0,
		gap: 12,
	},
	bandFeatured: {
		minHeight: {
			default: 'auto',
			[md]: 288,
		},
		borderBottomWidth: {
			default: 1.5,
			[md]: 0,
		},
		borderRightWidth: {
			default: 0,
			[md]: 1.5,
		},
		borderRightStyle: 'solid',
		borderRightColor: tokens.borderSubtle,
	},
	stack: {
		marginBottom: 0,
		display: 'flex',
		alignItems: 'center',
		gap: 12,
		fontFamily: tokens.fontMono,
		fontSize: 11,
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
		color: tokens.muted,
	},
	title: {
		maxWidth: '15ch',
		fontFamily: tokens.fontDisplay,
		lineHeight: 0.96,
		letterSpacing: '-0.01em',
		color: tokens.heading,
		fontSize: { default: 28, [md]: 32 },
	},
	titleRow: {
		maxWidth: 'none',
		fontSize: 22,
		lineHeight: 1.15,
		letterSpacing: '-0.035em',
	},
	titleFeatured: {
		fontSize: {
			default: 40,
			[sm]: 60,
		},
	},
	body: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		padding: { default: 16, [md]: 20 },
	},
	bodyRow: {
		padding: 0,
		justifyContent: { default: 'flex-start', [md]: 'space-between' },
	},
	summaryRow: {
		marginTop: 6,
	},
	bodyFeatured: {
		padding: {
			default: 16,
			[sm]: 28,
		},
	},
	summary: {
		flex: { default: '0 1 auto', [md]: 1 },
	},
	outcome: {
		marginTop: 20,
		borderLeftWidth: 1.5,
		borderLeftStyle: 'solid',
		borderLeftColor: tokens.noteRule,
		paddingLeft: 16,
		fontSize: 13,
		lineHeight: { default: '1.4rem', [md]: '1.5rem' },
		color: tokens.body,
	},
	link: {
		marginTop: { default: 10, [md]: 16 },
		display: 'inline-flex',
		alignSelf: 'flex-start',
		alignItems: 'center',
		gap: 8,
		fontFamily: tokens.fontMono,
		fontSize: 12,
		color: tokens.body,
		transitionProperty: 'color',
		':hover': {
			color: tokens.linkAccent,
			'--link-arrow-x': '4px',
		},
	},
	linkRow: {
		marginTop: 8,
	},
	linkArrow: {
		transitionProperty: 'transform',
		transform: 'translateX(var(--link-arrow-x, 0))',
	},
})

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
	return (
		<article
			{...stylex.props(
				styles.article,
				featured ? shared.panel : styles.articleRow,
				featured && styles.articleFeatured,
			)}
		>
			<div
				{...stylex.props(
					featured && shared.panelBand,
					styles.band,
					featured ? styles.bandFeatured : styles.bandRow,
				)}
			>
				<p {...stylex.props(styles.stack)}>{project.stack}</p>

				<h3 {...stylex.props(styles.title, featured ? styles.titleFeatured : styles.titleRow)}>
					{project.title}
				</h3>
			</div>

			<div {...stylex.props(styles.body, featured ? styles.bodyFeatured : styles.bodyRow)}>
				<p {...stylex.props(shared.copySm, styles.summary, !featured && styles.summaryRow)}>{project.summary}</p>

				{featured && <p {...stylex.props(styles.outcome)}>{project.outcome}</p>}

				<a
					href={project.href}
					target='_blank'
					rel='noopener noreferrer'
					{...stylex.props(shared.focusRing, styles.link, !featured && styles.linkRow)}
				>
					View project
					<span {...stylex.props(styles.linkArrow)} aria-hidden='true'>
						→
					</span>
				</a>
			</div>
		</article>
	)
}
