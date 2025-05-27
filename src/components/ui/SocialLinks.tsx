import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

interface SocialLinksProps {
  className?: string
  linkClassName?: string
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', linkClassName = '' }) => {
  return (
    <div className={`${className}`} aria-label='Social media links'>
      <ul className='flex space-x-6 list-none pl-0'>
        <li>
          <a
            href='https://github.com/jayson-panganiban'
            target='_blank'
            rel='noopener noreferrer'
            className={`text-gray-200 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 ${linkClassName}`}
            aria-label='Visit my GitHub profile'
          >
            <FaGithub
              size={24}
              className='filter drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]'
              aria-hidden='true'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/jayson-panganiban/'
            target='_blank'
            rel='noopener noreferrer'
            className={`text-gray-200 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 ${linkClassName}`}
            aria-label='Visit my LinkedIn profile'
          >
            <FaLinkedin
              size={24}
              className='filter drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]'
              aria-hidden='true'
            />
          </a>
        </li>
        <li>
          <a
            href='mailto:jsoncp@proton.me'
            className={`text-gray-200 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110 ${linkClassName}`}
            aria-label='Send me an email'
          >
            <FaEnvelope
              size={24}
              className='filter drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]'
              aria-hidden='true'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
