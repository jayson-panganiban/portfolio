export interface Project {
	id: string
	title: string
	summary: string
	stack: string
	outcome: string
	href: string
}

export const projectsData: Project[] = [
	{
		id: 'halfprice-grocery',
		title: 'Halfprice Grocery',
		summary:
			'A full-stack grocery deals platform that helps shoppers find half-price specials from Coles and Woolworths faster.',
		stack: 'React · Node.js · Express.js · MongoDB · Playwright · Jest',
		outcome:
			'Turns weekly specials into a cleaner, faster product experience with search, filters, and saved deals.',
		href: 'https://halfpricegrocery.com',
	},
	{
		id: 'philippine-zip-codes-search',
		title: 'Philippine ZIP Codes Search',
		summary:
			'A clean search tool for finding postal codes across cities, municipalities, provinces, and regions in the Philippines.',
		stack: 'Next.js · React · TypeScript · Tailwind CSS · Playwright',
		outcome:
			'Simplifies postal code lookup into a fast, dependable reference tool for everyday use.',
		href: 'https://phzipcodes.com',
	},
	{
		id: 'faq-mate',
		title: 'FAQ Mate',
		summary:
			'A retrieval-augmented chatbot that answers common Australian car insurance questions using an AI-backed knowledge workflow.',
		stack: 'Python · FastAPI · OpenAI API · Chroma · Gradio · Hugging Face',
		outcome:
			'Applies RAG and AI workflows to make insurance information easier to retrieve and understand.',
		href: 'https://huggingface.co/spaces/jaysoncp/FAQ-Mate',
	},
	{
		id: 'rephrase-cli',
		title: 'Rephrase CLI',
		summary:
			'A lightweight command-line tool that rewrites text in different tones and styles using OpenAI.',
		stack: 'Python · OpenAI API · NLP',
		outcome: 'Brings flexible tone and style rewriting into a simple terminal-based writing tool.',
		href: 'https://pypi.org/project/rephrase/',
	},
]
