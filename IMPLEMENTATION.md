# Portfolio Implementation - Indigo Theme

## Overview
Modern, minimalist personal portfolio built with Next.js 15 App Router and Tailwind CSS. Fully static site with dark/light theme toggle.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: react-icons
- **Deployment**: Static export compatible

## Features
- ✅ Fully static site generation (`next export`)
- ✅ Dark/light mode toggle with localStorage persistence
- ✅ Responsive design (mobile-first)
- ✅ Accessible components
- ✅ Indigo/purple color scheme
- ✅ Client-side routing

## Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── resume/            # Résumé page
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Footer.tsx         # Footer with copyright
│   ├── Hero.tsx           # Hero section (profile, name, tagline)
│   ├── Navigation.tsx     # Main navigation links
│   ├── PageLayout.tsx     # Shared page layout wrapper
│   ├── SocialLinks.tsx    # Social media links
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme state management
└── data/                  # Static content
    └── projects.ts        # Projects data

## Customization

### Personal Information
Edit these files to customize content:
- `src/components/Hero.tsx` - Name and tagline
- `src/components/SocialLinks.tsx` - LinkedIn, GitHub, Email links
- `src/components/Footer.tsx` - Copyright name
- `src/app/about/page.tsx` - About page content
- `src/app/resume/page.tsx` - Resume/CV content
- `src/data/projects.ts` - Projects data

### Profile Image
Replace `public/profile.jpg` with your photo (recommended: 400x400px)

### Colors
Modify `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: { ... },  // Main accent color
  accent: { ... },   // Secondary accent
}
```

## Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run prettier:fix # Format code
```

## Deployment
The site exports to static HTML/CSS/JS in the `out/` directory:
```bash
npm run build
```

Deploy the `out/` folder to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for theme toggle
