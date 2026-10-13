# Jayson Panganiban — Portfolio

Personal portfolio for Jayson Panganiban, an automation, performance, and product engineer based in Melbourne. It is available at [jaysonpanganiban.com](https://jaysonpanganiban.com).

The site is designed as a calm reliability surface: a concise record of experience, independent products, and a clear route to get in touch or download the CV. The full design rationale is in [DESIGN.md](DESIGN.md).

## Highlights

- A responsive, signal-led interface built around release confidence.
- Selected experience, independent projects, and direct contact actions.
- Light and dark themes; the mobile browser chrome updates with the selected theme.
- Motion that respects `prefers-reduced-motion`.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Biome
- Phosphor Icons

## Requirements

- Node.js 20.9 or later

## Development

```bash
git clone https://github.com/jayson-panganiban/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Serve the production build
npm run lint     # Run Biome's linter
npm run format   # Format source files with Biome
npm run check    # Run Biome checks and apply safe fixes
```

## Content and structure

```text
src/
├── app/          # Pages, metadata, and global styles
├── components/   # Site shell, navigation, footer, and project cards
├── contexts/     # Theme state and browser-chrome colour synchronisation
└── data/         # Resume and project content
```

Update portfolio content in:

- `src/data/resume.ts` for the summary, CV link, experience, and social links.
- `src/data/projects.ts` for the project index.
- `src/app/globals.css` for the visual system and responsive layout.

## License

MIT © Jayson Panganiban
