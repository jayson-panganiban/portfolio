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
		height: '100%',
		flexDirection: 'column',
		overflow: 'hidden',
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
		justifyContent: 'space-between',
		borderBottomWidth: 1.5,
		borderBottomStyle: 'solid',
		padding: 20,
		minHeight: 144,
	},
	bandFeatured: {
		minHeight: {
			default: 176,
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
		marginBottom: 16,
		display: 'flex',
		alignItems: 'center',
		gap: 12,
		fontFamily: tokens.fontMono,
		fontSize: 10,
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
		fontSize: 32,
	},
	titleFeatured: {
		fontSize: {
			default: 48,
			[sm]: 60,
		},
	},
	body: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		padding: 20,
	},
	bodyFeatured: {
		padding: {
			default: 20,
			[sm]: 28,
		},
	},
	summary: {
		flex: 1,
	},
	outcome: {
		marginTop: 20,
		borderLeftWidth: 1.5,
		borderLeftStyle: 'solid',
		borderLeftColor: `rgb(${tokens.primaryRgb} / 0.5)`,
		paddingLeft: 16,
		fontSize: 13,
		lineHeight: '1.5rem',
		color: tokens.body,
	},
	link: {
		marginTop: 24,
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderTopStyle: 'solid',
		borderTopColor: tokens.borderSubtle,
		paddingTop: 12,
		fontFamily: tokens.fontMono,
		fontSize: 11,
		color: tokens.muted,
		transitionProperty: 'color',
		':hover': {
			color: tokens.linkAccent,
			'--link-arrow-x': '4px',
		},
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
				shared.panel,
				shared.interactivePanel,
				styles.article,
				featured && styles.articleFeatured,
			)}
		>
			<div {...stylex.props(shared.panelBand, styles.band, featured && styles.bandFeatured)}>
				<p {...stylex.props(styles.stack)}>{project.stack}</p>

				<h3 {...stylex.props(styles.title, featured && styles.titleFeatured)}>{project.title}</h3>
			</div>

			<div {...stylex.props(styles.body, featured && styles.bodyFeatured)}>
				<p {...stylex.props(shared.copySm, styles.summary)}>{project.summary}</p>

				<p {...stylex.props(styles.outcome)}>{project.outcome}</p>

				<a
					href={project.href}
					target='_blank'
					rel='noopener noreferrer'
					{...stylex.props(shared.focusRing, styles.link)}
				>
					View project
					<span {...stylex.props(styles.linkArrow)} aria-hidden='true'>
						-&gt;
					</span>
				</a>
			</div>
		</article>
	)
}
