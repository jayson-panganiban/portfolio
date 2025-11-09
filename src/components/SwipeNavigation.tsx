'use client'

import { useSwipeNavigation } from '@/hooks/useSwipeNavigation'

export function SwipeNavigation({ children }: { children: React.ReactNode }) {
	const handlers = useSwipeNavigation()

	return (
		<div {...handlers} style={{ width: '100%', height: '100%' }}>
			{children}
		</div>
	)
}
