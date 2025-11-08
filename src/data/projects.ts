export interface Project {
	id: string
	title: string
	description: string
	technologies?: string[]
	link?: string
}

export const projectsData: Project[] = [
	{
		id: '1',
		title: 'Halfprice Grocery',
		description:
			'A full-stack application showcasing half-price specials from Coles and Woolworths. It provides a seamless user experience with advanced browsing, filtering, and search capabilities, along with functionality to save favorite deals for quick retrieval.',
		technologies: [
			'Javascript',
			'ReactJS',
			'ExpressJS',
			'NodeJS',
			'MongoDB',
			'CSS',
			'Playwright',
			'Jest',
		],
		link: 'https://halfpricegrocery.com',
	},
	{
		id: '2',
		title: 'Philippine ZIP Codes Search',
		description:
			'A web app that makes finding postal codes across the Philippines simple. Whether you’re searching by city, municipality, province, or region, it helps you quickly locate the postal code you need.',
		technologies: ['Typescript', 'ReactJS', 'NextJS', 'TailwindCSS', 'Playwright'],
		link: 'https://phzipcodes.com',
	},
	{
		id: '3',
		title: 'FAQ Mate',
		description:
			'A RAG (Retrieval-Augmented Generation) chatbot designed to answer frequently asked questions about car insurance in Australia.',
		technologies: ['Python', 'FastAPI', 'OpenAI', 'ChromaDB', 'Gradio', 'HuggingFace'],
		link: 'https://huggingface.co/spaces/jaysoncp/FAQ-Mate',
	},
	{
		id: '4',
		title: 'Reprase CLI',
		description:
			'A simple command-line tool that leverages OpenAI to help users rephrase sentences or paragraphs in different tones and styles.',
		technologies: ['Python', 'OpenAI', 'NLP', 'Filipino'],
		link: 'https://pypi.org/project/rephrase/',
	},
]
