import { Button, SectionHeader, SkillTag, TerminalWindow } from '@/components/ui'
import React from 'react'

const coreSkills = [
  'Automation Testing',
  'Framework Development',
  'API Testing',
  'Performance Engineering',
  'Chaos Engineering',
  'Devops Practice',
  'LLM Integration',
]

const skills = [
  'Python',
  'JavaScript',
  'TypeScript',
  'Playwright',
  'Selenium',
  'Cypress',
  'API Testing',
  'RobotFramework',
  'Devops',
  'LocustIO',
  'K6',
  'JMeter',
  'FastAPI',
  'ReactJS',
]

export const AboutSection: React.FC = () => {
  return (
    <section id='about' className='py-16 md:py-20 bg-gray-800' aria-labelledby='about-heading'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <SectionHeader title='About Me' className='mt-10 ' />
          <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-center'>
            <article className='w-full md:w-1/2'>
              <TerminalWindow>
                <div className='flex flex-col space-y-2 md:space-y-3 w-full text-sm md:text-base'>
                  <h4 className='text-gray-300  font-normal'>## Skills</h4>
                  <ul className='list-none' aria-label='Core skills'>
                    {coreSkills.map((skill, index) => (
                      <li key={index} className='text-yellow-300'>
                        - {skill}
                      </li>
                    ))}
                  </ul>
                  <div className='text-blue-300'>
                    Passionate about innovation, AI-driven solutions, and driving quality outcomes
                    through collaborative client partnerships.
                  </div>
                </div>
              </TerminalWindow>
            </article>
            {/* Professional Profile */}
            <article className='w-full md:w-1/2'>
              <div className='bg-gray-800 rounded-xl p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(75,85,99,0.1)] border border-gray-700/50 transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4),_-10px_-10px_20px_rgba(75,85,99,0.15)]'>
                <h3 className='text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-white'>
                  <span className='text-emerald-400'>&gt;</span> Professional Profile
                </h3>
                <div className='prose prose-sm md:prose-base prose-invert max-w-none text-gray-300 text-sm md:text-base'>
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
                <p className='text-gray-300 text-sm md:text-base mb-3 md:mb-4 leading-relaxed'>
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
                  <h4 className='sr-only'>Technical Skills</h4>
                  <ul
                    className='flex flex-wrap gap-1.5 md:gap-2 mb-4 list-none pl-0'
                    aria-label='Technical skills'
                  >
                    {skills.map((skill, index) => (
                      <li key={index}>
                        <SkillTag>{skill}</SkillTag>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className='mt-8 md:mt-12 text-center'>
            <Button
              href='/about'
              variant='outline'
              className='border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono rounded-sm text-xs sm:text-sm'
              aria-label='View detailed resume'
            >
              cd ./detailed-resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
