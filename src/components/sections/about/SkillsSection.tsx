import { SectionHeader, TerminalWindow } from '@/components/ui'
import { resume } from '@/data/resume'

export const SkillsExpertiseSection: React.FC = () => {
  return (
    <section className='section-container bg-black' aria-label='Skills & Expertise'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <SectionHeader title='Skills & Expertise' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
            {/* Technical Skills */}
            <div>
              <TerminalWindow className='border border-emerald-500/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]'>
                <div className='space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base'>
                  {resume.technicalSkills.map((category, index) => (
                    <div key={index}>
                      <div className='text-pink-400 mb-1'># {category.name}</div>
                      <div className='text-yellow-300 pl-3 sm:pl-4'>
                        {Array.isArray(category.skills)
                          ? category.skills.join(', ')
                          : category.skills}
                      </div>
                    </div>
                  ))}
                </div>
              </TerminalWindow>
            </div>
            {/* Industry Experience */}
            <div>
              <div className='bg-gray-800 rounded-xl p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(75,85,99,0.1)] border border-gray-700/50 transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4),_-10px_-10px_20px_rgba(75,85,99,0.15)] h-full'>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 text-white'>
                  <span className='text-emerald-400'>{'>'}</span> Industry Experience
                </h3>
                <div className='space-y-2 sm:space-y-3 md:space-y-4'>
                  {resume.industryExperience.map((exp, index) => (
                    <div key={index}>
                      <h4 className='text-white font-mono text-xs sm:text-sm md:text-base mb-1 md:mb-2'>
                        <span className='text-emerald-400'>✓</span> {exp.industry}
                      </h4>
                      <p className='text-gray-400 text-xs sm:text-xs md:text-sm pl-3 sm:pl-4'>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
