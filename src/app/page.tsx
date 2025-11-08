'use client'

import { Hero } from '@/components/Hero'
import { PageLayout } from '@/components/PageLayout'

export default function Home() {
	return (
		<PageLayout>
			<main className='container mx-auto max-w-4xl'>
				<Hero />
			</main>
		</PageLayout>
	)
}
