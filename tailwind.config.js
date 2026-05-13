/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
					light: 'rgb(var(--color-primary-light-rgb) / <alpha-value>)',
					dark: 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
				},
				background: {
					light: 'rgb(var(--color-background-rgb) / <alpha-value>)',
					dark: 'rgb(var(--color-background-rgb) / <alpha-value>)',
				},
				foreground: 'rgb(var(--color-foreground-rgb) / <alpha-value>)',
				heading: 'rgb(var(--color-heading-rgb) / <alpha-value>)',
				body: 'rgb(var(--color-body-rgb) / <alpha-value>)',
				muted: 'rgb(var(--color-muted-rgb) / <alpha-value>)',
				surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
				'surface-muted': 'rgb(var(--color-surface-muted-rgb) / <alpha-value>)',
				border: 'rgb(var(--color-border-rgb) / <alpha-value>)',
				'border-subtle': 'rgb(var(--color-border-subtle-rgb) / <alpha-value>)',
			},
			borderRadius: {
				card: 'var(--radius-card)',
				control: 'var(--radius-control)',
			},
			fontFamily: {
				display: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
				sans: [
					'"FK Grotesk"',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
				],
				mono: [
					'"FK Grotesk Mono"',
					'ui-monospace',
					'SFMono-Regular',
					'"SF Mono"',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
