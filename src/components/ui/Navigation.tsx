import React from 'react'
import { Button } from './Button'
import TerminalCommand from './TerminalCommand'

interface NavigationProps {
  className?: string
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <nav className={`py-12 bg-black ${className}`} aria-label='Site Navigation'>
      <div className='container px-4 mx-auto text-center'>
        <div className='max-w-3xl mx-auto'>
          <div className='p-3 sm:p-4 bg-black rounded-lg borderborder-gray-700 shadow-[0_0_3px_rgba(16,185,129,0.8)] font-mono text-xs sm:text-sm mb-5 sm:mb-6 inline-block mx-auto'>
            <TerminalCommand command='cd ~/' args='&& ls -la' />
          </div>
          <ul className='flex flex-wrap justify-center gap-3 sm:gap-4 list-none p-0'>
            <li>
              <Button href='/' variant='outline'>
                cd ../home
              </Button>
            </li>
            <li>
              <Button href='/about' variant='outline'>
                cd ../about
              </Button>
            </li>
            <li>
              <Button href='/projects' variant='outline'>
                cd ../projects
              </Button>
            </li>
            <li>
              <Button href='mailto:jsoncp@proton.me' variant='primary'>
                ./contact.sh
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
