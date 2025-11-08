# AGENTS.md

## Commands
- **Dev**: `npm run dev` - Start Next.js development server
- **Build**: `npm run build` - Build for production (static export)
- **Lint**: `npm run lint` - Run Biome linter
- **Format**: `npm run format` - Format code with Biome
- **Check**: `npm run check` - Run Biome check (lint + format + organize imports)

## Architecture
- **Framework**: Next.js 15 App Router with React 19 (static site export, `output: 'export'`)
- **Structure**: `src/app/` (App Router pages), `src/components/` (React components), `src/contexts/` (React contexts), `src/data/` (static content)
- **Path alias**: `@/*` maps to `src/*`
- **Styling**: Tailwind CSS with dark mode (`darkMode: 'class'`)
- **Icons**: react-icons library
- **Theme**: Dark/light mode toggle with localStorage persistence

## Code Style
- **TypeScript**: Strict mode enabled (`tsconfig.json`)
- **Formatting**: Biome - single quotes, tabs (2 spaces), 100 char width, trailing commas, auto-organize imports
- **Imports**: Use `@/` alias for src imports (e.g., `import { Foo } from '@/components/Foo'`)
- **Linting**: Biome with recommended rules
- **React**: Components use `.tsx` extension, strict mode enabled, client components marked with `'use client'`
- **Colors**: Terracotta theme in dark mode only, neutral grays in light mode
- **Typography**: FK Grotesk font with normal weight (400) and subtle letter spacing
- **Icons**: Phosphor icons
