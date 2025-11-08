export type WorkHistoryItem = {
	title: string
	company: string
	period: string
	location?: string
	description: string
}

export type SkillCategory = {
	name: string
	skills: string[]
}

export type IndustryExperience = {
	industry: string
	description: string
}

export type SocialLink = {
	name: string
	url: string
	icon: string
	ariaLabel: string
}

export type ResumeData = {
	name: string
	title: string
	location: string
	email: string
	workInfo: string
	personalInfo?: string
	workHistory: WorkHistoryItem[]
	technicalSkills: SkillCategory[]
	industryExperience: IndustryExperience[]
	resumeLink: string
	portfolioUrl: string
	socialLinks: SocialLink[]
}

export const resume: ResumeData = {
	name: 'Jayson Panganiban',
	title: 'QA Engineer | Automation | Performance | AI/ML',
	location: 'Melbourne, Australia',
	email: 'jsoncp@proton.me',
	workInfo:
		"For the past decade, I've helped teams build software that stands up in the real world. From financial systems to crypto platforms, I turn complex testing challenges into scalable, automated solutions. My work spans automation strategy, performance engineering, chaos testing, and exploring how AI and machine learning can advance modern testing. I focus on fine-tuning systems, optimizing performance, and catching failures before they reach production.",
	personalInfo:
		"Outside of tech, I'm a dad of two, a guitar player with more enthusiasm than talent, and a classic 'middle of the pack' runner, gravel cyclist, and hiker. When I'm not debugging something, I'm probably outside pretending 'average' is just another word for 'elite,' or messing around with side projects that I promise I'll finish someday.",
	workHistory: [
		{
			title: 'Senior Consultant - Test Analyst',
			company: 'Datacom',
			period: '2022 - Present',
			location: 'Melbourne, Australia',
			description:
				'Currently deployed at IAG, focusing on automated testing of customer outbound communication platforms. I validate insurance document-generation pipelines, including template rendering, data mapping, dynamic content rules, and multi-channel delivery (email, SMS, print, fax).',
		},
		{
			title: 'Software Engineer in Automation',
			company: 'Planit Testing',
			period: '2020 - 2022',
			location: 'Melbourne, Australia',
			description:
				'Served as a Test Automation Consultant at ANZ within the Payments and Messaging division. Built and maintained automated test frameworks covering backend payment-processing APIs and frontend applications. Executed chaos engineering experiments to validate system resilience under load, failover, and degraded-network conditions. Performed comprehensive UI accessibility testing (WCAG) to ensure compliant, robust, and user-friendly interfaces across critical payment workflows.',
		},
		{
			title: 'Test Engineer',
			company: 'PDAX',
			period: '2020 - 2021',
			location: 'Philippines (Remote)',
			description:
				'Specialized as a consultant in test automation and performance engineering across multiple crypto and blockchain projects. Architected end-to-end testing strategies for high-throughput cryptocurrency trading platforms, including automated validation of trading services and Crypto-as-a-Service (CaaS) components. Engineered performance and load-testing scenarios to benchmark latency, throughput, and overall system stability under extreme market volatility and stress conditions.',
		},
		{
			title: 'Test Architect',
			company: 'Carlson Wagonlit Travel',
			period: '2015 - 2019',
			location: 'Makati, Philippines',
			description:
				'Led the end-to-end automation strategy for the travel domain, cutting manual testing effort by 50%. Engineered scalable automation frameworks and reusable libraries, significantly boosting test coverage, execution speed, and long-term maintainability.',
		},
		{
			title: 'Test Lead',
			company: 'Finastra',
			location: 'Makati, Philippines',
			period: '2011 - 2015',
			description:
				'Led a team of testers responsible for testing and quality assurance of financial software products. Collaborated with cross-functional teams to ensure product quality and meet client requirements.',
		},
	],

	technicalSkills: [
		{
			name: 'Core Skills',
			skills: [
				'Test Automation',
				'Performance Testing',
				'Chaos Testing',
				'API Testing',
				'CI/CD Integration',
				'ML/AI Integration',
			],
		},
		{
			name: 'Programming Languages',
			skills: ['Python', 'JavaScript', 'TypeScript', 'Ruby on Rails'],
		},
		{
			name: 'Automation',
			skills: [
				'Playwright',
				'Selenium',
				'Cypress',
				'RobotFramework',
				'Cucumber',
				'Specflow',
				'Tosca',
				'Gauge',
				'Pytest',
				'Jest',
			],
		},
		{
			name: 'Performance Engineering',
			skills: ['LocustIO', 'JMeter', 'K6', 'Gremlin'],
		},
		{
			name: 'Testing Tools',
			skills: ['Postman', 'SoapUI', 'Jest', 'Chrome DevTools'],
		},
		{
			name: 'DevOps & CI/CD',
			skills: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS'],
		},
		{
			name: 'AI / ML Integration',
			skills: ['RAG', 'OpenAI', 'Vector DB', 'Prompt Engineering', 'MCP'],
		},
		{
			name: 'Development',
			skills: [
				'NextJS',
				'React',
				'ExpressJS',
				'FastAPI',
				'Pydantic',
				'TailwindCSS',
				'Jinja2',
				'PostGreSQL',
				'SQLite3',
				'MongoDB',
			],
		},
	],

	industryExperience: [
		{
			industry: 'Financial Services',
			description: 'Payment processing, transaction monitoring, SWIFT messaging',
		},
		{
			industry: 'Insurance',
			description: 'Quote systems, policy management, claims processing',
		},
		{
			industry: 'Retail',
			description: 'Point of Sale (POS) backend and middleware at Chevron',
		},
		{
			industry: 'Travel',
			description: 'Booking and reservation management systems',
		},
		{
			industry: 'Crypto',
			description: 'Trading platforms, NFT services, blockchain testing',
		},
	],

	resumeLink: '/JaysonPanganiban_CV.pdf',
	portfolioUrl: 'https://www.jaysonpanganiban.com',

	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/jayson-panganiban',
			icon: 'Github',
			ariaLabel: 'Visit my GitHub profile',
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/jayson-panganiban/',
			icon: 'Linkedin',
			ariaLabel: 'Visit my LinkedIn profile',
		},
		{
			name: 'Email',
			url: 'mailto:json.panganiban@gmail.com',
			icon: 'Envelope',
			ariaLabel: 'Send me an email',
		},
		// TODO: Add HuggingFace when available
	],
}
