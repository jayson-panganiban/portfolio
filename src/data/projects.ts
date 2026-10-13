export interface Project {
	id: string
	title: string
	summary: string
	stack: string
	href: string
}

export const projectsData: Project[] = [
	{
		id: 'halfprice-grocery',
		title: 'Halfprice Grocery',
		summary: 'A grocery-deals search product for Australian half-price specials.',
		stack: 'React · Express.js · Cloudflare Worker + D1  · Playwright · Jest',
		href: 'https://halfpricegrocery.com',
	},
	{
		id: 'philippine-zip-codes-search',
		title: 'Philippine ZIP Codes Search',
		summary: 'A fast postal-code lookup for cities, municipalities, provinces, and regions.',
		stack: 'Next.js · React · TypeScript · Tailwind CSS · Playwright',
		href: 'https://phzipcodes.com',
	},
	{
		id: 'faq-mate',
		title: 'FAQ Mate',
		summary: 'A retrieval-backed assistant for common Australian car-insurance questions.',
		stack: 'Python · FastAPI · OpenAI API · Chroma · Gradio · Hugging Face',
		href: 'https://huggingface.co/spaces/jaysoncp/FAQ-Mate',
	},
	{
		id: 'rephrase-cli',
		title: 'Rephrase CLI',
		summary: 'A small command-line tool for rewriting text in a chosen tone.',
		stack: 'Python · OpenAI API · NLP',
		href: 'https://pypi.org/project/rephrase/',
	},
]
