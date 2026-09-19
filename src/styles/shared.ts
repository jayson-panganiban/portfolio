import * as stylex from '@stylexjs/stylex'
import { tokens } from './tokens.stylex'

const sm = '@media (min-width: 640px)'

export const shared = stylex.create({
	pageContainer: {
		marginInline: 'auto',
		maxWidth: '72rem',
		paddingInline: {
			default: 12,
			[sm]: 32,
		},
	},
	focusRing: {
		outline: 'none',
		':focus-visible': {
			outline: `2px solid ${tokens.primary}`,
			outlineOffset: 4,
		},
	},
	eyebrow: {
		fontFamily: tokens.fontMono,
		fontSize: 11,
		lineHeight: '1rem',
		textTransform: 'uppercase',
		letterSpacing: '0.12em',
		color: tokens.muted,
	},
	copy: {
		fontSize: 15,
		lineHeight: '1.75rem',
		color: tokens.body,
	},
	copySm: {
		fontSize: 13,
		lineHeight: '1.5rem',
		color: tokens.body,
	},
	panel: {
		borderRadius: tokens.radiusCard,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: tokens.border,
		backgroundColor: tokens.surface,
	},
	interactivePanel: {
		transitionProperty: 'transform, border-color, box-shadow',
		transitionDuration: '150ms',
		':hover': {
			transform: 'translateY(-1px)',
			borderColor: tokens.panelHoverBorder,
			boxShadow: tokens.shadowCardHover,
		},
	},
	panelBand: {
		borderColor: tokens.borderSubtle,
		backgroundColor: tokens.surfaceMuted,
		transitionProperty: 'background-color, border-color',
	},
	textLink: {
		display: 'inline-flex',
		alignItems: 'center',
		fontSize: 14,
		color: tokens.body,
		textDecorationLine: 'underline',
		textDecorationColor: tokens.border,
		textUnderlineOffset: 6,
		transitionProperty: 'color, text-decoration-color',
		':hover': {
			color: tokens.hoverAccent,
			textDecorationColor: tokens.hoverAccent,
		},
	},
	primaryButton: {
		display: 'inline-flex',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: tokens.radiusControl,
		borderWidth: 1.5,
		borderStyle: 'solid',
		borderColor: tokens.buttonBorder,
		backgroundColor: tokens.surface,
		paddingInline: 16,
		fontSize: 14,
		color: tokens.primary,
		transitionProperty: 'color, background-color, border-color',
		':hover': {
			borderColor: tokens.hoverAccent,
			backgroundColor: tokens.surfaceMuted,
			color: tokens.hoverAccent,
		},
	},
})
