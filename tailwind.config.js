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
					DEFAULT: '#D2691E', // terracotta
					light: '#E07A3E', // lighter terracotta
					dark: '#B85A14', // darker terracotta
				},
				accent: {
					DEFAULT: '#CD5C5C', // indian red / coral terracotta
					light: '#E9967A', // dark salmon
				},
				background: {
					light: '#fcfcf9', // warm off-white
					dark: '#121212', // dark navy
				},
			},
			fontFamily: {
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
			animation: {
				'gradient-slow': 'gradient 8s ease infinite alternate',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
