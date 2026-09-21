import * as stylex from '@stylexjs/stylex'
import { Hero } from '@/components/Hero'
import { PageLayout } from '@/components/PageLayout'
import { ProjectCard } from '@/components/ProjectCard'
import { projectsData } from '@/data/projects'
import { resume } from '@/data/resume'
import { shared } from '@/styles/shared'
import { tokens } from '@/styles/tokens.stylex'

const sm = '@media (min-width: 640px)'
const md = '@media (min-width: 768px)'
const lg = '@media (min-width: 1024px)'

const styles = stylex.create({
	main: {
		paddingBottom: 96,
	},
	section: {
		marginTop: {
			default: 64,
			[md]: 80,
		},
		scrollMarginTop: 96,
	},
	headingRow: {
		marginBottom: 28,
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'baseline',
		gap: 12,
	},
	headingIndex: {
		width: 36,
		flexShrink: 0,
		fontFamily: tokens.fontMono,
		fontSize: 12,
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
		color: tokens.primary,
	},
	headingTitle: {
		fontFamily: tokens.fontDisplay,
		fontSize: 25,
		lineHeight: 1.2,
		letterSpacing: '-0.01em',
		color: tokens.heading,
	},
	headingIntro: {
		flexBasis: { default: '100%', [sm]: 'auto' },
		marginTop: 12,
		marginLeft: { default: 0, [sm]: 48 },
		maxWidth: 680,
		fontSize: 14.5,
		lineHeight: '1.5rem',
		color: tokens.body,
	},
	aboutCopy: {
		marginLeft: { default: 0, [sm]: 48 },
		maxWidth: 700,
	},
	aboutCopySpacing: {
		marginTop: 16,
	},
	capabilitiesGrid: {
		marginTop: 32,
		marginLeft: { default: 0, [sm]: 48 },
		display: 'grid',
		gap: 16,
		gridTemplateColumns: {
			default: '1fr',
			[sm]: 'repeat(2, minmax(0, 1fr))',
			[lg]: 'repeat(3, minmax(0, 1fr))',
		},
	},
	capabilityCard: {
		padding: 20,
		backgroundColor: tokens.surfaceMuted,
	},
	capabilityTitle: {
		fontFamily: tokens.fontDisplay,
		fontSize: 18,
		lineHeight: 1.2,
		color: tokens.heading,
	},
	capabilityTools: {
		marginTop: 8,
	},
	roleList: {
		marginLeft: { default: 0, [sm]: 48 },
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
	roleCard: {
		overflow: 'hidden',
		display: { default: 'flex', [md]: 'grid' },
		flexDirection: { default: 'column', [md]: 'row' },
		gridTemplateColumns: { default: 'none', [md]: '190px minmax(0, 1fr)' },
	},
	roleBand: {
		display: 'flex',
		minHeight: { default: 128, [md]: 176 },
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderBottomWidth: { default: 1.5, [md]: 0 },
		borderBottomStyle: 'solid',
		borderRightWidth: { default: 0, [md]: 1.5 },
		borderRightStyle: 'solid',
		borderRightColor: tokens.borderSubtle,
		padding: 20,
	},
	roleMeta: {
		marginBottom: 16,
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
	},
	roleMetaPeriod: {
		marginTop: { default: 0, [md]: 12 },
	},
	roleCompany: {
		fontFamily: tokens.fontDisplay,
		fontSize: '2rem',
		lineHeight: 0.98,
		letterSpacing: '-0.01em',
		color: tokens.heading,
		marginBottom: { default: 0, [md]: 12 },
	},
	roleBody: {
		display: 'flex',
		flexDirection: 'column',
		padding: { default: 20, [sm]: 28 },
	},
	roleTitle: {
		fontSize: 14,
		lineHeight: '1.5rem',
		color: tokens.body,
	},
	roleDescription: {
		marginTop: 20,
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: 12,
	},
	roleDescriptionItem: {
		borderLeftWidth: 1.5,
		borderLeftStyle: 'solid',
		borderLeftColor: `rgb(${tokens.primaryRgb} / 0.5)`,
		paddingLeft: 16,
	},
	projectList: {
		marginLeft: { default: 0, [sm]: 48 },
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
	},
	projectGrid: {
		display: 'grid',
		gap: 20,
		gridTemplateColumns: { default: 'none', [md]: 'repeat(3, minmax(0, 1fr))' },
	},
	contactPanel: {
		marginLeft: { default: 0, [sm]: 48 },
		maxWidth: '48rem',
		padding: { default: 24, [sm]: 28 },
	},
	contactHeading: {
		fontFamily: tokens.fontDisplay,
		fontSize: {
			default: 36,
			[sm]: 48,
		},
		lineHeight: 1.2,
		letterSpacing: '-0.02em',
		color: tokens.heading,
	},
	contactEmphasis: {
		fontStyle: 'italic',
		color: tokens.primary,
	},
	contactCopy: {
		marginTop: 20,
		maxWidth: '38ch',
	},
	contactLinks: {
		marginTop: 32,
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: 20,
		rowGap: 12,
	},
})

function SectionHeading({ index, title, intro }: { index: string; title: string; intro?: string }) {
	return (
		<div {...stylex.props(styles.headingRow)}>
			<span {...stylex.props(styles.headingIndex)}>{index}</span>
			<h2 {...stylex.props(styles.headingTitle)}>{title}</h2>
			{intro && <p {...stylex.props(styles.headingIntro)}>{intro}</p>}
		</div>
	)
}

export default function Home() {
	const [featuredProject, ...projects] = projectsData

	return (
		<PageLayout>
			<main {...stylex.props(shared.pageContainer, styles.main)}>
				<Hero />

				<section id='about' {...stylex.props(styles.section)}>
					<SectionHeading index='01' title='About' />

					<div {...stylex.props(styles.aboutCopy)}>
						<p {...stylex.props(shared.copy)}>{resume.workInfo}</p>
						<p {...stylex.props(shared.copy, styles.aboutCopySpacing)}>{resume.personalInfo}</p>
					</div>

					<div {...stylex.props(styles.capabilitiesGrid)}>
						{resume.capabilities.map(item => (
							<div key={item.category} {...stylex.props(shared.panel, styles.capabilityCard)}>
								<h3 {...stylex.props(styles.capabilityTitle)}>{item.category}</h3>
								<p {...stylex.props(shared.copySm, styles.capabilityTools)}>
									{item.tools.join(', ')}
								</p>
							</div>
						))}
					</div>
				</section>

				<section id='experience' {...stylex.props(styles.section)}>
					<SectionHeading
						index='02'
						title='Experience'
						intro='Building automation frameworks, validating complex systems, and improving release confidence across real-world delivery environments.'
					/>

					<div {...stylex.props(styles.roleList)}>
						{resume.workHistory.map(role => (
							<article
								key={role.company}
								{...stylex.props(shared.panel, shared.interactivePanel, styles.roleCard)}
							>
								<div {...stylex.props(shared.panelBand, styles.roleBand)}>
									<div {...stylex.props(styles.roleMeta)}>
										<p {...stylex.props(shared.eyebrow, styles.roleMetaPeriod)}>{role.period}</p>
										{role.location && <p {...stylex.props(shared.eyebrow)}>{role.location}</p>}
									</div>

									<h3 {...stylex.props(styles.roleCompany)}>{role.company}</h3>
								</div>

								<div {...stylex.props(styles.roleBody)}>
									<p {...stylex.props(styles.roleTitle)}>{role.title}</p>

									<ul {...stylex.props(styles.roleDescription)}>
										{role.description.map(item => (
											<li key={item} {...stylex.props(shared.copySm, styles.roleDescriptionItem)}>
												{item}
											</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id='projects' {...stylex.props(styles.section)}>
					<SectionHeading
						index='03'
						title='Projects'
						intro='Personal products and tools built outside work to solve practical problems and explore useful ideas through code.'
					/>

					<div {...stylex.props(styles.projectList)}>
						<ProjectCard project={featuredProject} featured />
						<div {...stylex.props(styles.projectGrid)}>
							{projects.map(project => (
								<ProjectCard key={project.id} project={project} />
							))}
						</div>
					</div>
				</section>

				<section id='contact' {...stylex.props(styles.section)}>
					<SectionHeading index='04' title='Contact' />

					<div {...stylex.props(shared.panel, styles.contactPanel)}>
						<h3 {...stylex.props(styles.contactHeading)}>
							Let&apos;s build <em {...stylex.props(styles.contactEmphasis)}>something useful.</em>
						</h3>

						<p {...stylex.props(shared.copy, styles.contactCopy)}>
							Open to software engineering, automation, and tooling roles.
						</p>

						<div {...stylex.props(styles.contactLinks)}>
							{resume.socialLinks.map(link => (
								<a
									key={link.name}
									href={link.url}
									target={link.name !== 'Email' ? '_blank' : undefined}
									rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
									{...stylex.props(shared.focusRing, shared.textLink)}
								>
									{link.name}
								</a>
							))}
						</div>
					</div>
				</section>
			</main>
		</PageLayout>
	)
}
