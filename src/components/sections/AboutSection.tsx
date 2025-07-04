import { SectionHeader, SkillTag, TerminalWindow } from '@/components/ui'
import { resume } from '@/data/resume'
import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section id='about' className='bg-black border-emerald-900/10' aria-labelledby='about-heading'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <SectionHeader title='About Me' />
          <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-center'>
            {/* Professional Profile */}
            <article className='w-full md:w-1/2'>
              <div className='bg-slate-900 rounded-xl p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(75,85,99,0.1)] border border-gray-700/50 transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4),_-10px_-10px_20px_rgba(75,85,99,0.15)]'>
                <h3 className='text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-white'>
                  <span className='text-emerald-400'>{'>'}</span> Professional Profile
                </h3>
                <div className='prose prose-sm md:prose-base prose-invert max-w-none text-gray-200 text-sm md:text-base'>
                  <p className='mb-3 md:mb-4 leading-relaxed'>
                    I&apos;m a specialized QA Engineer with expertise in automation and performance
                    testing. I help teams deliver reliable, high-quality software by creating robust
                    testing frameworks and identifying performance bottlenecks.
                  </p>
                  <p className='mb-3 md:mb-4 leading-relaxed'>
                    With a strong background in quality assurance methodologies and development
                    practices, I&apos;m passionate about improving development workflows and
                    ensuring excellence in software delivery.
                  </p>
                </div>
                <p className='text-gray-200 text-sm md:text-base mb-3 md:mb-4 leading-relaxed'>
                  I&apos;ve worked across multiple industries including{' '}
                  <span className='text-pink-400'>Fintech</span>,{' '}
                  <span className='text-pink-400'>Banking</span>,{' '}
                  <span className='text-pink-400'>Insurance</span>,{' '}
                  <span className='text-pink-400'>Retail</span>,{' '}
                  <span className='text-pink-400'>Travel</span>,{' '}
                  <span className='text-pink-400'>Startups</span>, and{' '}
                  <span className='text-pink-400'>Crypto</span>.
                </p>
                <div className='mt-4 md:mt-5 mb-4 md:mb-6'>
                  <h4 className='sr-only'>Core Skills</h4>
                  <ul
                    className='flex flex-wrap gap-1.5 md:gap-2 mb-4 list-none pl-0'
                    aria-label='Core skills'
                  >
                    {resume.technicalSkills.map(
                      (category, index) =>
                        category.name === 'Core Skills' &&
                        category.skills.map((skill, skillIndex) => (
                          <li key={`${index}-${skillIndex}`}>
                            <SkillTag>{skill}</SkillTag>
                          </li>
                        )),
                    )}
                  </ul>
                </div>
              </div>
            </article>

            <article className='w-full md:w-1/2'>
              <TerminalWindow className='border border-emerald-500/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]'>
                <div className='space-y-2 sm:space-y-3 md:space-y-4 text-gray-200 text-xs md:text-sm'>
                  {resume.technicalSkills
                    .filter(category => category.name !== 'Core Skills')
                    .map((category, index) => (
                      <div key={index}>
                        <div className='text-emerald-400 mb-1'># {category.name}</div>
                        <div className='text-gray-200 pl-3 sm:pl-4'>
                          {Array.isArray(category.skills)
                            ? category.skills.join(', ')
                            : category.skills}
                        </div>
                      </div>
                    ))}
                </div>
              </TerminalWindow>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
