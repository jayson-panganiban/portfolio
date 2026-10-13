import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='not-found shell'>
			<p className='kicker'>Signal lost / 404</p>
			<h1>This route did not make the build.</h1>
			<p>Return to the portfolio index and pick up a known-good path.</p>
			<Link className='button button--solid' href='/'>
				Back home <span aria-hidden='true'>↗</span>
			</Link>
		</main>
	)
}
