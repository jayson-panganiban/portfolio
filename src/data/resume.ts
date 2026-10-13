export type WorkHistoryItem = {
	title: string
	company: string
	period: string
	description: string
	stack: string[]
}

export type SocialLink = {
	name: string
	url: string
}

export type ResumeData = {
	summary: string
	email: string
	workHistory: WorkHistoryItem[]
	resumeLink: string
	socialLinks: SocialLink[]
}

export const resume: ResumeData = {
	summary:
		'I help teams ship faster by building better testing, observability, and practical tooling.',
	email: 'json.panganiban@gmail.com',

	workHistory: [
		{
			title: 'Principal Consultant',
			company: 'Tenzing',
			period: '2025 - Present',
			description:
				'Built reusable SmartCOMM templates and rules for regulated insurance communications.',
			stack: ['SmartCOMM', 'TypeScript', 'Advanced Template Designer', 'Data Modeler', 'ECM'],
		},
		{
			title: 'Senior Consultant',
			company: 'Datacom',
			period: '2022 - 2025',
			description:
				'Built automation frameworks that reduced manual regression work across insurance platforms.',
			stack: ['Cucumber', 'Ruby on Rails', 'Python', 'TypeScript', 'JavaScript', 'SmartCOMM'],
		},
		{
			title: 'Software Engineer in Automation',
			company: 'Planit Testing',
			period: '2020 - 2022',
			description: 'Built automation and resilience checks for ANZ payment and messaging systems.',
			stack: ['Playwright', 'Tosca', 'Python', 'CI/CD', 'Gremlin', 'Chaos Engineering'],
		},
		{
			title: 'Test Engineer',
			company: 'PDAX',
			period: '2020 - 2021',
			description:
				'Designed automated and performance checks for high-throughput crypto trading systems.',
			stack: ['k6', 'Locust', 'Python', 'JavaScript', 'Behave', 'Docker'],
		},
		{
			title: 'Test Architect',
			company: 'Carlson Wagonlit Travel',
			period: '2015 - 2019',
			description:
				'Led travel-platform automation strategy, reducing manual testing effort by 50%.',
			stack: ['Selenium', 'Robot Framework', 'Python', 'JMeter'],
		},
		{
			title: 'Test Lead',
			company: 'Finastra',
			period: '2011 - 2015',
			description:
				'Led QA for financial software, covering functional, performance, and security testing.',
			stack: ['Selenium', 'TestNG', 'CI/CD'],
		},
		{
			title: 'Software Engineer',
			company: 'Accenture',
			period: '2010 - 2011',
			description:
				'Built and maintained software with a focus on performance, scalability, and reliability.',
			stack: ['Java', 'Spring', 'CI/CD'],
		},
	],

	resumeLink: '/JaysonPanganiban_CV.pdf',
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
