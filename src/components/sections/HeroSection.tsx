import { resume } from '@/data/resume'
import React from 'react'
import { FaDownload, FaMapMarkerAlt } from 'react-icons/fa'
import { Button, SocialLinks, TerminalCommand, TerminalWindow } from '../ui'

export const HeroSection: React.FC = () => {
  return (
    <section
      className='min-h-screen flex items-center justify-center py-16 md:py-20 bg-fixed bg-black relative overflow-hidden'
      aria-labelledby='hero-heading'
    >
      {/* Background gradient effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-blue-900/10'></div>

      <div className='container px-4 mx-auto z-10'>
        <div className='max-w-4xl mx-auto'>
          {/* Main Hero Card */}
          <div className='rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1),_0_0_30px_rgba(0,0,0,0.3)] backdrop-filter border border-emerald-500/10 bg-black/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15),_0_0_40px_rgba(0,0,0,0.3)] mb-8'>
            <TerminalWindow className='border border-emerald-500/20 mb-6'>
              <TerminalCommand command='whoami' className='mb-6 md:mb-8' />

              {/* Name and Title */}
              <div className='mb-8 md:mb-12'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 relative transform transition-transform hover:scale-102 inline-block'>
                  <span className='text-white'>Jayson</span>{' '}
                  <span className='text-emerald-400 relative'>
                    Panganiban
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 animate-expand-width'></span>
                  </span>
                </h1>

                {/* Job Title */}
                <p className='text-xl md:text-2xl text-emerald-300 font-mono mb-2'>
                  {resume.title}
                </p>

                {/* Location */}
                <div className='flex items-center text-gray-200 text-sm md:text-base'>
                  <FaMapMarkerAlt className='mr-2' />
                  <span>Melbourne, Australia</span>
                </div>
              </div>

              {/* Skills/Specializations */}
              <div className='mb-8 md:mb-10'>
                <p className='text-gray-200 text-sm md:text-base mb-3'>
                  <span className='text-emerald-400'>$</span> echo $SPECIALIZATIONS
                </p>
                <p
                  className='text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed'
                  aria-label='Core skills'
                >
                  <span className='text-yellow-300'>Automation</span>{' '}
                  <span className='ml-1 animate-pulse text-gray-200' aria-hidden='true'>
                    |
                  </span>{' '}
                  <span className='text-yellow-300'>Performance</span>
                  <span className='ml-1 animate-pulse text-gray-200' aria-hidden='true'>
                    |
                  </span>{' '}
                  <span className='text-yellow-300'>Machine Learning</span>
                </p>
              </div>

              {/* Brief intro */}
              <div className='mb-8 md:mb-10'>
                <p className='text-gray-200 text-sm md:text-base mb-3'>
                  <span className='text-emerald-400'>$</span> cat about.txt
                </p>
                <p className='text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed'>
                  QA Engineer passionate about breaking things professionally through automation and
                  performance testing. I help teams deliver reliable, high-quality software across
                  multiple industries.
                </p>
              </div>

              <TerminalCommand command='./connect.sh' className='mb-6' />

              {/* Actions */}
              <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
                <SocialLinks />

                {/* Quick Actions */}
                <div className='flex flex-col sm:flex-row gap-3'>
                  <Button
                    href={resume.resumeLink}
                    variant='outline'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono rounded-sm text-sm'
                  >
                    <FaDownload size={12} />
                    <span className='ml-2 text-yellow-300'>download resume.pdf</span>
                  </Button>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  )
}
