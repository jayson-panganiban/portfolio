import { resume } from '@/data/resume'

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='border-t-[1.5px] border-border py-10'>
			<div className='page-container flex flex-col gap-2 text-sm text-muted md:flex-row md:items-baseline md:justify-between'>
				<p>
					{resume.name} © {currentYear}
				</p>
				<p>Based in {resume.location}, available for remote-friendly opportunities.</p>
			</div>
		</footer>
	)
}
