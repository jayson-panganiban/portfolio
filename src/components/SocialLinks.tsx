import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { resume } from '@/data/resume'

const iconMap = {
	Github: GithubLogoIcon,
	Linkedin: LinkedinLogoIcon,
	Envelope: EnvelopeIcon,
}

interface SocialLinksProps {
	className?: string
	size?: number
	weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill'
}

export function SocialLinks({ className = '', size = 32, weight = 'regular' }: SocialLinksProps) {
	return (
		<div className={`flex items-center justify-center gap-6 ${className}`}>
			{resume.socialLinks.map(link => {
				const Icon = iconMap[link.icon as keyof typeof iconMap]
				return (
					<a
						key={link.name}
						href={link.url}
						target={link.name !== 'Email' ? '_blank' : undefined}
						rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
						className='text-gray-500 transition-colors hover:text-primary dark:text-gray-500 dark:hover:text-primary-light'
						aria-label={link.ariaLabel}
					>
						<Icon size={size} weight={weight} />
					</a>
				)
			})}
		</div>
	)
}
