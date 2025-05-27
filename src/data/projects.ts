export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  github?: string
  website?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Philippine ZIP Codes Search',
    description: 'Find postal codes across the Philippines with ease',
    longDescription:
      'A web application that allows user to find postal codes across the Philippines with ease. From cities to municipalities, provinces, and regions, you can easily find the postal code you need.',
    tags: ['FastAPI', 'HTMX', 'TailwindCSS', 'Web Static', 'phzipcodes'],
    github: 'https://github.com/jayson-panganiban/phzipcodes-web',
    website: 'https://www.phzipcodes.com',
    featured: true,
  },
  {
    id: 2,
    title: 'HalfPrice Grocery',
    description: 'Browse half-price specials from Australian supermarkets',
    longDescription:
      'HalfPrice Grocery is a comprehensive full-stack application that features half-price specials on various products from major Coles and Woolworths. It offers a user-friendly interface for browsing, filtering and searching for deals, as well as saving favorite items for quick access.',
    tags: ['ReactJS', 'CRA', 'ExpressJS', 'ChartJS', 'MongoDB', 'Playwright'],
    website: 'https://www.halfpricegrocery.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Rephrase',
    description: 'CLI tool for rephrasing text with multiple style options',
    longDescription:
      "A command-line tool to rephrase text in different styles (normal (default), casual, formal, academic, or filipino taglish for some 🧂) using OpenAI's API.",
    tags: ['Python', 'CLI', 'OpenAI', 'NLP', 'English', 'Taglish'],
    github: 'https://github.com/jayson-panganiban/rephrase',
    website: 'https://pypi.org/project/rephrase/',
    featured: true,
  },
  {
    id: 4,
    title: 'Rest in PyTest (RiP)',
    description:
      'A PyTest-based framework for RESTful API testing in Domain Specific Language (DSL)',
    longDescription:
      'Rest-in-PyTest is a testing framework built on top of PyTest that specializes in RESTful API testing. Inspired by Rest Assured, it provides a structured way to create, organize, and execute API tests.',
    tags: ['Python', 'PyTest', 'API Testing', 'Automation', 'DSL', 'gherkin'],
    github: 'https://github.com/jayson-panganiban/rest-in-pytest',
    featured: false,
  },
  {
    id: 5,
    title: 'PHZipCodes',
    description: 'A Python package for searching and accessing Philippine ZIP codes',
    longDescription:
      'This Python package provides functionalities to find zip codes by city, municipality, province, and region in the Philippines.',
    tags: ['Python', 'Philippines', 'Zip code', 'Postal code', 'Package'],
    github: 'https://github.com/jayson-panganiban/phzipcodes',
    website: 'https://pypi.org/project/phzipcodes/',
    featured: false,
  },
]
