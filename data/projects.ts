export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  /** Hosting/distribution line shown on the card, e.g. "PLATFORM: CLOUDFLARE". */
  infrastructure: string;
  stat: string;
  summary: string;
  stack: string[];
  href: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "halfprice-grocery",
    title: "Half Price Grocery",
    tagline: "Australian supermarket deal aggregator.",
    category: "Full-Stack",
    infrastructure: "PLATFORM: CLOUDFLARE",
    stat: "Aggregated Scraper",
    summary:
      "Aggregates weekly half-price specials across Coles & Woolworths via Playwright scrapers and edge-cached D1 SQL.",
    stack: ["React", "Workers", "Cloudflare D1", "Playwright", "Tailwind", "CSS"],
    href: "https://halfpricegrocery.com",
    featured: true,
  },
  {
    id: "faq-mate",
    title: "FAQ Mate",
    tagline: "Insurance policy retrieval assistant.",
    category: "AI / RAG",
    infrastructure: "PLATFORM: CLOUDFLARE",
    stat: "Grounded RAG",
    summary:
      "Edge-native assistant querying Australian insurance policies grounded in official PDS disclosure documents.",
    stack: [
      "React 19",
      "TypeScript",
      "Edge API Workers",
      "AI Search",
      "R2",
      "Llama 4",
      "Vectorize",
    ],
    href: "https://faq-mate.pages.dev/",
    featured: true,
  },
  {
    id: "philippine-zip-codes",
    title: "Philippine ZIP Codes",
    tagline: "Postal code directory engine.",
    category: "Directory",
    infrastructure: "PLATFORM: CLOUDFLARE",
    stat: "Instant Search",
    summary:
      "Zero-dependency client directory indexing 2,800+ Philippine zones with instant keyboard filtering and one-tap copying.",
    stack: ["Javascript", "HTML5", "OKLCH CSS", "Cloudflare", "SEO", "Pages"],
    href: "https://phzipcodes.com",
    featured: true,
  },
  {
    id: "rest-in-pytest",
    title: "Rest in Pytest",
    tagline: "Chainable HTTP API testing wrapper.",
    category: "QA Tool",
    infrastructure: "REGISTRY: GITHUB",
    stat: "Test Framework",
    summary:
      "Fluent Python testing helper wrapping Pytest and HTTPX to eliminate boilerplate in REST regression suites.",
    stack: ["Python", "Pytest", "HTTPX", "Pydantic"],
    href: "https://github.com/jayson-panganiban/rest-in-pytest/",
    featured: false,
  },
];
