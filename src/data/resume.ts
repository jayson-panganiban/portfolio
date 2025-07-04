export type WorkHistoryItem = {
  title: string
  company: string
  period: string
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
  email: string
  intro: string
  workHistory: WorkHistoryItem[]
  technicalSkills: SkillCategory[]
  industryExperience: IndustryExperience[]
  resumeLink: string
  portfolioUrl: string
  socialLinks: SocialLink[]
}

export const resume: ResumeData = {
  name: 'Jayson Panganiban',
  title: 'QA Engineer',
  email: 'jsoncp@proton.me',
  intro:
    "I'm Jayson Panganiban, a QA Engineer specializing in automated testing and performance optimization. With a background spanning multiple industries, I focus on creating robust testing frameworks and improving development workflows.",

  workHistory: [
    {
      title: 'Senior Consultant - Test Analyst',
      company: 'Datacom',
      period: '2022 - Present',
      description:
        'Currently deployed at IAG working on customer outbound communications systems. Responsible for testing claims, policies, schedules and multi-channel delivery methods including email, fax, print and SMS. Ensuring seamless and accurate customer-facing communications across diverse platforms.',
    },
    {
      title: 'Software Engineer in Automation',
      company: 'Planit Testing',
      period: '2020 - 2022',
      description:
        'Worked as a test automation consultant at ANZ in the payments and messaging department. Developed automated testing solutions for payments processing systems, ensuring transaction integrity and regulatory compliance across financial messaging platforms. Also performed chaos testing to improve system resilience.',
    },
    {
      title: 'Test Engineer',
      company: 'PDAX',
      period: '2020 - 2021',
      description:
        'Worked as a consultant specialized in test automation and performance testing on several crypto projects. Designed and implemented testing strategies for cryptocurrency trading platforms and services within the emerging blockchain technology space.',
    },
    {
      title: 'Test Architect',
      company: 'Carlson Wagonlit Travel',
      period: '2015 - 2019',
      description:
        'Led the automation strategy and implementation for the travel industry vertical, resulting in a 50% reduction in manual testing efforts. Built test automation frameworks and libraries, improving test coverage and maintenance efficiency.',
    },
    {
      title: 'Test Lead',
      company: 'Finastra',
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
      skills: ['Postman', 'SoapUI', 'Jest', 'Swagger', 'Chrome DevTools'],
    },
    {
      name: 'Programming Languages',
      skills: ['Python', 'JavaScript/TypeScript', 'Ruby'],
    },

    {
      name: 'DevOps & CI/CD',
      skills: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS'],
    },
    {
      name: 'AI / ML Integration',
      skills: ['RAG', 'OpenAI', 'Vector DB', 'Prompt Engineering'],
    },
    {
      name: 'Development',
      skills: [
        'NextJS',
        'React',
        'ExpressJS',
        'FastAPI',
        'Pydantic',
        'Tailwind',
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
      description: 'Payment processing systems, transaction monitoring, SWIFT messaging',
    },
    {
      industry: 'Insurance',
      description: 'Quote systems, policy management, claims processing',
    },
    {
      industry: 'Retail',
      description:
        'Backend and middleware applications for petrol station Point of Sale (POS) systems at Chevron',
    },
    {
      industry: 'Travel',
      description: 'Booking systems, reservation management, customer portals',
    },
    {
      industry: 'Crypto',
      description: 'Crypto as a service, Non Fungible Tokens (NFT) trading platforms',
    },
  ],

  resumeLink: '/JaysonPanganiban_CV.pdf',
  portfolioUrl: 'https://www.jaysonpanganiban.com',

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/jayson-panganiban',
      icon: 'FaGithub',
      ariaLabel: 'Visit my GitHub profile',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jayson-panganiban/',
      icon: 'FaLinkedin',
      ariaLabel: 'Visit my LinkedIn profile',
    },
    {
      name: 'Email',
      url: 'mailto:json.panganiban@gmail.com',
      icon: 'FaEnvelope',
      ariaLabel: 'Send me an email',
    },
    // TODO: Add HuggingFace when available
  ],
}
