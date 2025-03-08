import { Button, SectionHeader } from '@/components/ui'
import { resume } from '@/data/resume'
import { FaDownload } from 'react-icons/fa'

export const ProfessionalBackgroundSection: React.FC = () => {
  return (
    <section className='section-container bg-slate-900' aria-label='Professional Background'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <SectionHeader title='Professional Background' />
          {/* Work History Timeline */}
          <div className='space-y-6 sm:space-y-8 md:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-emerald-400/30 ml-6 md:ml-8'>
            {resume.workHistory.map((job, index) => (
              <div key={index} className='relative pl-6 md:pl-8'>
                <div className='absolute left-0 top-0 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 border-4 border-gray-900'></div>
                <div className='bg-gray-800 rounded-xl p-4 md:p-5 shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(75,85,99,0.1)] border border-gray-700/50 transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4),_-10px_-10px_20px_rgba(75,85,99,0.15)]'>
                  <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-3'>
                    <h3 className='text-base sm:text-lg md:text-xl text-white font-semibold'>
                      {job.title}
                    </h3>
                    <span className='text-emerald-400 text-xs md:text-sm font-mono mt-1 md:mt-0'>
                      {job.period}
                    </span>
                  </div>
                  <h4 className='text-emerald-300 text-sm sm:text-base mb-2 md:mb-3'>
                    {job.company}
                  </h4>
                  <p className='text-gray-300 text-xs sm:text-sm md:text-base font-light'>
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Resume Download */}
          <div className='mt-8 sm:mt-10 md:mt-12 text-center'>
            <Button
              href={resume.resumeLink}
              variant='outline'
              target='_blank'
              rel='noopener noreferrer'
              className='border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono rounded-sm text-xs sm:text-sm'
            >
              <FaDownload size={14} className='sm:text-base' />
              <span className='ml-2'>download resume.pdf</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
