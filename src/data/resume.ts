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
	title: 'Building reliable tests, tools, and web products.',
	location: 'Melbourne, Australia',
	email: 'jsoncp@proton.me',
	workInfo:
		'A quality-focused engineer building automation frameworks, performance test suites, and practical web tools for complex delivery environments.',
	personalInfo:
		"Outside work, interests include running, cycling, and building practical tools that I promise I'll finish someday.",
	capabilities: [
		{
			category: 'Languages',
			tools: ['Python', 'TypeScript', 'JavaScript', 'Ruby'],
		},
		{
			category: 'Automation',
			tools: ['Playwright', 'Cypress', 'Selenium', 'Robot Framework', 'Cucumber', 'SpecFlow'],
		},
		{
			category: 'API & Integration',
			tools: ['REST APIs', 'Postman', 'SoapUI', 'JSON', 'XML', 'service validation'],
		},
		{
			category: 'Performance',
			tools: ['k6', 'JMeter', 'Locust', 'load testing', 'bottleneck analysis'],
		},
		{
			category: 'Application Development',
			tools: ['React', 'Next.js', 'Express.js', 'FastAPI', 'Tailwind CSS'],
		},
		{
			category: 'Delivery & Infrastructure',
			tools: ['GitHub Actions', 'Jenkins', 'Docker', 'AWS', 'CI/CD'],
		},
	],

	workHistory: [
		{
			title: 'Principal Consultant - SmartCOMM Developer',
			company: 'Tenzing',
			period: '2025 - Present',
			location: 'Melbourne, Australia',
			description: [
				'Developed SmartCOMM CCM templates, document rules, and reusable components for insurance policy, claims, billing, and compliance communications.',
				'Integrated SmartCOMM with core insurance systems using XML/JSON payloads, APIs, and document generation services for on-demand and batch processing.',
				'Delivered high-volume omnichannel communications across PDF, print, email, and digital channels with dynamic content, personalization, and compliance controls.',
				'Supported configuration, data mapping, testing, deployment, and incident resolution to ensure scalable, accurate, and standardized customer communication workflows.',
			],
		},
		{
			title: 'Senior Consultant - Automation Engineer',
			company: 'Datacom',
			period: '2022 - 2025',
			location: 'Melbourne, Australia',
			description: [
				'Built and maintained scalable automation frameworks for complex insurance platforms across policy, claims, and underwriting workflows.',
				'Delivered multi-channel validation across PDF, email, SMS, and related communication outputs aligned to business and regulatory rules.',
				'Integrated automation into delivery workflows to improve release confidence, earlier defect detection, and maintainable quality practices.',
			],
		},
		{
			title: 'Software Engineer in Automation',
			company: 'Planit Testing',
			period: '2020 - 2022',
			location: 'Melbourne, Australia',
			description: [
				'Served as a Test Automation Consultant at ANZ within the Payments and Messaging division.',
				'Built and maintained automated test frameworks covering backend payment-processing APIs and frontend applications.',
				'Executed chaos engineering experiments to validate system resilience under load, failover, and degraded-network conditions.',
				'Performed comprehensive UI accessibility testing (WCAG) to ensure compliant, robust, and user-friendly interfaces across critical payment workflows.',
			],
		},
		{
			title: 'Test Engineer',
			company: 'PDAX',
			period: '2020 - 2021',
			location: 'Philippines (Remote)',
			description: [
				'Specialized as a consultant in test automation and performance engineering across multiple crypto and blockchain projects.',
				'Architected end-to-end testing strategies for high-throughput cryptocurrency trading platforms, including automated validation of trading services and Crypto-as-a-Service (CaaS) components.',
				'Engineered performance and load-testing scenarios to benchmark latency, throughput, and overall system stability under extreme market volatility and stress conditions.',
			],
		},
		{
			title: 'Test Architect',
			company: 'Carlson Wagonlit Travel',
			period: '2015 - 2019',
			location: 'Makati, Philippines',
			description: [
				'Led the end-to-end automation strategy for the travel domain, cutting manual testing effort by 50%. Engineered scalable automation frameworks and reusable libraries, significantly boosting test coverage, execution speed, and long-term maintainability.',
				'Collaborated closely with cross-functional teams to integrate automation into CI/CD pipelines, enabling faster feedback loops and improving release confidence across multiple product lines.',
				'Championed the adoption of shift-left testing practices, embedding quality early in the development lifecycle and fostering a culture of proactive quality assurance.',
				'Mentored junior testers and developers on automation best practices, test design, and effective use of tools, contributing to a stronger overall testing capability within the organization.',
			],
		},
		{
			title: 'Test Lead',
			company: 'Finastra',
			location: 'Makati, Philippines',
			period: '2011 - 2015',
			description: [
				'Led a team of testers responsible for testing and quality assurance of financial software products. Collaborated with cross-functional teams to ensure product quality and meet client requirements.',
				'Developed and executed test plans, test cases, and test scripts to validate software functionality, performance, and security.',
				'Provided training and mentorship to junior testers, fostering a culture of continuous learning and improvement within the team.',
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
