import * as stylex from '@stylexjs/stylex'

// Proxies to the CSS custom properties defined in globals.css, which already
// swap values based on the `.dark` class toggled by ThemeContext. Wrapping
// them with defineVars is what makes them usable inside stylex.create() calls
// across files (StyleX only allows cross-file values from a .stylex file).
export const tokens = stylex.defineVars({
	background: 'var(--color-background)',
	backgroundRgb: 'var(--color-background-rgb)',
	foreground: 'var(--color-foreground)',
	heading: 'var(--color-heading)',
	body: 'var(--color-body)',
	muted: 'var(--color-muted)',
	surface: 'var(--color-surface)',
	surfaceMuted: 'var(--color-surface-muted)',
	border: 'var(--color-border)',
	borderSubtle: 'var(--color-border-subtle)',
	primary: 'var(--color-primary)',
	primaryRgb: 'var(--color-primary-rgb)',
	primaryLight: 'var(--color-primary-light)',
	noteRule: 'var(--color-note-rule)',
	hoverAccent: 'var(--color-hover-accent)',
	linkAccent: 'var(--color-link-accent)',
	buttonBorder: 'var(--color-button-border)',
	radiusCard: 'var(--radius-card)',
	radiusControl: 'var(--radius-control)',
	headerHeight: 'var(--header-height)',
	fontDisplay:
		'"Ioskeley Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace',
	fontSans:
		'"Ioskeley Mono SemiCondensed", "Ioskeley Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace',
	fontMono:
		'"Ioskeley Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace',
})
