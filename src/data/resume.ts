export type WorkHistoryItem = {
	title: string
	company: string
	period: string
	location?: string
	description: string[]
}

export type Capability = {
	category: string
	tools: string[]
}

export type SocialLink = {
	name: string
	url: string
}

export type ResumeData = {
	name: string
	title: string
	summary: string
	location: string
	email: string
	workInfo: string
	personalInfo?: string
	capabilities: Capability[]
	workHistory: WorkHistoryItem[]
	resumeLink: string
	portfolioUrl: string
	socialLinks: SocialLink[]
}

export const resume: ResumeData = {
	name: 'Jayson Panganiban',
	title: 'AUTOMATION · PERFORMANCE · DEVELOPMENT',
	summary: 'Building reliable tests, tools, and web products.',
	location: 'Melbourne, Australia',
	email: 'json.panganiban@gmail.com',
	workInfo:
		'I work across automation, quality, and performance engineering, with experience building software and tools that keep systems reliable.',

	personalInfo:
		'Outside of work I’m a dad of two who runs, cycles, and hikes to stay sane. I also play guitar and start far more side projects than I finish though I swear this next one will be different.',

	capabilities: [
		{
			category: 'Languages',
			tools: ['Python', 'TypeScript', 'JavaScript', 'Ruby'],
		},
		{
			category: 'Test Automation',
			tools: ['Playwright', 'Cypress', 'Selenium', 'Robot Framework', 'Cucumber', 'SpecFlow'],
		},
		{
			category: 'Performance Engineering',
			tools: ['k6', 'JMeter', 'Locust', 'Chaos Engineering'],
		},
		{
			category: 'Frontend & Backend',
			tools: ['React', 'Next.js', 'Express.js', 'Tailwind CSS', 'StyleX', 'FastAPI', 'Reflex'],
		},
		{
			category: 'CCM & Document Automation',
			tools: ['SmartCOMM', 'Template design', 'Document rules', 'Omnichannel delivery'],
		},
		{
			category: 'Delivery & Infrastructure',
			tools: ['GitHub Actions', 'Jenkins', 'Docker', 'AWS', 'CI/CD'],
		},
		{
			category: 'Domains',
			tools: ['Insurance', 'Payments', 'FinTech', 'Crypto', 'Retail'],
		},
	],

	workHistory: [
		{
			title: 'Principal Consultant',
			company: 'Tenzing',
			period: '2025 - Present',
			location: 'Melbourne, Australia',
			description: [
				'Built SmartCOMM templates, rules, and reusable components for insurance policy, claims, complaints, and compliance.',
				'Integrated SmartCOMM with core systems via XML/JSON, APIs, and document services for on-demand and batch processing.',
				'Delivered high-volume omnichannel communications (PDF, print, SMS, email, digital) with personalization and compliance controls.',
				'Owned configuration, data mapping, testing, deployment, and incident resolution for scalable communication workflows.',
			],
		},
		{
			title: 'Senior Consultant',
			company: 'Datacom',
			period: '2022 - 2025',
			location: 'Melbourne, Australia',
			description: [
				'Built scalable automation frameworks for insurance platforms across policy, claims, and underwriting.',
				'Delivered multi-channel validation (PDF, email, SMS) against business and regulatory rules.',
				'Embedded automation into delivery pipelines for earlier defect detection and higher release confidence.',
				'Developed SmartCOMM templates, rules, and reusable components for insurance communications.',
			],
		},
		{
			title: 'Software Engineer in Automation',
			company: 'Planit Testing',
			period: '2020 - 2022',
			location: 'Melbourne, Australia',
			description: [
				'Test Automation Consultant at ANZ Payments and Messaging.',
				'Built automated frameworks for payment APIs and frontend applications.',
				'Ran chaos experiments to validate resilience under load, failover, and network degradation.',
				'Performed WCAG accessibility testing across critical payment workflows.',
			],
		},
		{
			title: 'Test Engineer',
			company: 'PDAX',
			period: '2020 - 2021',
			location: 'Philippines (Remote)',
			description: [
				'Specialized in test automation and performance engineering for crypto and blockchain platforms.',
				'Designed end-to-end strategies for high-throughput trading and Crypto-as-a-Service components.',
				'Built performance and load tests measuring latency, throughput, and stability under extreme volatility.',
			],
		},
		{
			title: 'Test Architect',
			company: 'Carlson Wagonlit Travel',
			period: '2015 - 2019',
			location: 'Makati, Philippines',
			description: [
				'Led automation strategy for the travel domain, reducing manual testing effort by 50%.',
				'Built scalable frameworks and reusable libraries that improved coverage, speed, and maintainability.',
				'Integrated automation into CI/CD for faster feedback and higher release confidence.',
				'Drove shift-left practices and mentored teams on automation best practices.',
			],
		},
		{
			title: 'Test Lead',
			company: 'Finastra',
			period: '2011 - 2015',
			location: 'Makati, Philippines',
			description: [
				'Led QA for financial software products.',
				'Created and executed test plans covering functionality, performance, and security.',
				'Mentored junior testers and drove continuous improvement.',
			],
		},
		{
			title: 'Software Engineer',
			company: 'Accenture',
			period: '2010 - 2011',
			location: 'Makati, Philippines',
			description: [
				'Developed and maintained applications focused on performance, scalability, and reliability.',
				'Collaborated on requirements, design, and feature delivery.',
				'Contributed to code reviews, debugging, and troubleshooting.',
			],
		},
	],

	resumeLink: '/JaysonPanganiban_CV.pdf',
	portfolioUrl: 'https://www.jaysonpanganiban.com',

	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/jayson-panganiban',
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/jayson-panganiban/',
		},
		{
			name: 'Email',
			url: 'mailto:json.panganiban@gmail.com',
		},
	],
}
