const path = require('node:path')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
	compact: true,
	presets: ['next/babel'],
	plugins: [
		[
			'@stylexjs/babel-plugin',
			{
				dev,
				runtimeInjection: false,
				enableInlinedConditionalMerge: true,
				treeshakeCompensation: true,
				aliases: { '@/*': [path.join(__dirname, 'src', '*')] },
				unstable_moduleResolution: { type: 'commonJS' },
			},
		],
	],
}
