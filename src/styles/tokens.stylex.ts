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
	hoverAccent: 'var(--color-hover-accent)',
	panelHoverBorder: 'var(--color-panel-hover-border)',
	linkAccent: 'var(--color-link-accent)',
	buttonBorder: 'var(--color-button-border)',
	radiusCard: 'var(--radius-card)',
	radiusControl: 'var(--radius-control)',
	shadowCardHover: 'var(--shadow-card-hover)',
	headerHeight: 'var(--header-height)',
	fontDisplay: 'Georgia, Cambria, "Times New Roman", serif',
	fontSans:
		'"FK Grotesk", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
	fontMono:
		'"FK Grotesk Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
})
