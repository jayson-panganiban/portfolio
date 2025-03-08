import { SectionHeader, TerminalCommand } from '@/components/ui'
import { resume } from '@/data/resume'

export const AboutHeroSection: React.FC = () => {
  return (
    <section className='pt-24 md:pt-32 pb-8 md:pb-20 bg-black' aria-label='About Me'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-3xl mx-auto'>
          <TerminalCommand command='tree' args='~/competencies' className='mb-3 sm:mb-4 md:mb-6' />
          <SectionHeader title='About Me' />
          <p className='text-gray-300 leading-relaxed text-sm md:text-base mb-4 sm:mb-6 md:mb-8'>
            {resume.intro}
          </p>
        </div>
      </div>
    </section>
  )
}
