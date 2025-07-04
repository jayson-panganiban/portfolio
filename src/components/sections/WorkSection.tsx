import { Button, SectionHeader } from '@/components/ui'
import { resume } from '@/data/resume'
import { FaDownload } from 'react-icons/fa'

export const WorkSection: React.FC = () => {
  return (
    <section className=' bg-black border-emerald-900/10 py-12 md:py-24' aria-label='Work History'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <SectionHeader title='Professional Experience' />
          <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-start'>
            {/* Timeline */}
            <div className='w-full'>
              <div className='space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-emerald-400/30'>
                {resume.workHistory.map((job, index) => (
                  <div key={index} className='relative pl-8'>
                    <div className='absolute left-0 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-900 shadow-md'></div>
                    <div className='bg-slate-800/50 rounded-xl p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(75,85,99,0.1)] border border-gray-700/50 transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4),_-10px_-10px_20px_rgba(75,85,99,0.15)]'>
                      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-3'>
                        <h3 className='text-lg md:text-xl text-white font-semibold'>{job.title}</h3>
                        <span className='text-emerald-400 text-xs md:text-sm font-mono mt-1 md:mt-0'>
                          {job.period}
                        </span>
                      </div>
                      <h4 className='text-emerald-300 text-sm sm:text-base mb-2 md:mb-3'>
                        {job.company}
                      </h4>
                      <p className='text-gray-200 text-sm md:text-base font-light'>
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
                  <span className='ml-2 text-yellow-300'>download resume.pdf</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
