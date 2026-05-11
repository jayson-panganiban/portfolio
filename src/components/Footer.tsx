import { resume } from '@/data/resume'

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='border-t-[1.5px] border-[#D1CFC5] py-10 dark:border-white/10'>
			<div className='mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-[#87867F] dark:text-stone-500 sm:px-8 md:flex-row md:items-baseline md:justify-between'>
				<p>
					{resume.name} © {currentYear}
				</p>
				<p>Based in {resume.location}, available for remote-friendly opportunities.</p>
			</div>
		</footer>
	)
}
