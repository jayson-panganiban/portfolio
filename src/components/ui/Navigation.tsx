import React from 'react'
import { Button } from './Button'

interface NavigationProps {
  className?: string
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <nav className={`py-12 bg-black ${className}`} aria-label='Site Navigation'>
      <div className='container px-4 mx-auto text-center'>
        <div className='max-w-3xl mx-auto'>
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
