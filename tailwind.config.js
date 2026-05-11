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
					DEFAULT: '#D97757',
					light: '#E58A6A',
					dark: '#B85C3E',
				},
				background: {
					light: '#FAF9F5',
					dark: '#171614',
				},
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
