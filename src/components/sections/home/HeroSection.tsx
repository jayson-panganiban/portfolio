import React from 'react'
import { Button, SocialLinks, TerminalCommand, TerminalWindow } from '../../ui'

export const HeroSection: React.FC = () => {
  return (
    <section
      className='min-h-screen flex items-center justify-center pt-12 md:pt-16 bg-fixed bg-black relative overflow-hidden'
      aria-labelledby='hero-heading'
    >
      <div className='container px-4 mx-auto z-10'>
        <div className='max-w-3xl mx-auto p-4 md:p-8 rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1),_0_0_30px_rgba(0,0,0,0.3)] backdrop-filter border border-emerald-500/10 bg-black/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15),_0_0_40px_rgba(0,0,0,0.3)]'>
          <TerminalWindow className='border border-emerald-500/20'>
            <TerminalCommand command='whoami' className='mb-4 md:mb-6' />
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-12 relative transform transition-transform hover:scale-102 inline-block'>
              <span className='text-white'>Jayson</span>{' '}
              <span className='text-emerald-400 relative'>
                Panganiban
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 animate-expand-width'></span>
              </span>
            </h1>
            <p
              className='text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 leading-relaxed'
              aria-label='Core skills'
            >
              <span className='text-yellow-300'>Automation</span>{' '}
              <span className='ml-1 animate-pulse text-gray-300' aria-hidden='true'>
                |
              </span>{' '}
              <span className='text-yellow-300'>Performance</span>
              <span className='ml-1 animate-pulse text-gray-300' aria-hidden='true'>
                |
              </span>{' '}
              <span className='text-yellow-300 '>Machine Learning</span>
            </p>
            <TerminalCommand command='./connect.sh' className='mb-4 md:mb-6' />
            <nav aria-label='Primary navigation'>
              <ul className='flex flex-wrap gap-3 md:gap-4 list-none pl-0 '>
                <li>
                  <Button
                    href='/#about'
                    variant='primary'
                    className='text-sm md:text-base'
                    aria-label='Learn more about me'
                  >
                    about --me
                  </Button>
                </li>
                <li>
                  <Button
                    href='mailto:jaysoncp@proton.me'
                    variant='outline'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm md:text-base'
                    aria-label='Send me an email'
                  >
                    email --send
                  </Button>
                </li>
              </ul>
            </nav>
            <SocialLinks className='mt-12' />
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}
