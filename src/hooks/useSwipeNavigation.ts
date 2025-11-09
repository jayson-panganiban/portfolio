'use client'

import { useRouter } from 'next/navigation'
import { useSwipeable } from 'react-swipeable'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export function useSwipeNavigation(threshold = 50) {
	const router = useRouter()

	return useSwipeable({
		onSwipedLeft: () => {
			scrollToTop()
		},
		onSwipedRight: () => {
			router.back()
			scrollToTop()
		},
		delta: threshold,
		preventScrollOnSwipe: false,
		trackTouch: true,
		trackMouse: false,
	})
}
