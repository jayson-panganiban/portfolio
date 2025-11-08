import { ArrowLeftIcon } from '@phosphor-icons/react'
import Link from 'next/link'

export function BackButton() {
	return (
		<Link
			href='/'
			className='inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800'
			aria-label='Back to home'
		>
			<ArrowLeftIcon size={24} />
		</Link>
	)
}
