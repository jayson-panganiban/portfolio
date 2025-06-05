import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { resume } from '../../data/resume'

interface SocialLinksProps {
  className?: string
  linkClassName?: string
}

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaEnvelope: FaEnvelope,
  // TODO: Add HuggingFace when available
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', linkClassName = '' }) => {
  return (
    <div className={`${className}`} aria-label='Social media links'>
      <ul className='flex space-x-6 list-none pl-0'>
        {resume.socialLinks.map(link => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap]

          return (
            <li key={link.name}>
              <a
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`text-gray-200 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 ${linkClassName}`}
                aria-label={link.ariaLabel}
              >
                <IconComponent
                  size={24}
                  className='filter drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]'
                  aria-hidden='true'
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
