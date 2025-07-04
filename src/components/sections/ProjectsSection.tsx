import { ProjectCodeDisplay, ProjectWindow, SectionHeader, TerminalWindow } from '@/components/ui'
import { projects } from '@/data/projects'

export const ProjectsSection: React.FC = () => {
  const featuredOrder = [
    '🚗 FAQ Mate',
    'HalfPrice Grocery',
    'Philippine ZIP Codes Search',
    'Rephrase',
  ]

  // Filter and sort featured projects according to the defined order
  const featuredProjects = projects
    .filter(project => project.featured)
    .sort((a, b) => featuredOrder.indexOf(a.title) - featuredOrder.indexOf(b.title))

  return (
    <section
      className=' bg-black border-emerald-900/10 py-12 md:py-24'
      aria-labelledby='projects-heading'
    >
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <SectionHeader
            title='Projects'
            description="A mix of weekend projects that scratched my own itch and fun ideas I couldn't resist building in my spare time."
          />
          {featuredProjects.map((project, index) => (
            <section
              key={project.id}
              className={`py-2 md:py-6 transition-colors duration-500 rounded-xl mb-12 md:mb-16`}
              aria-labelledby={`projecResumeJaysonPanganiban.pdft-${project.id}`}
            >
              <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-center'>
                <TerminalWindow title={project.title} className='w-full md:w-1/2'>
                  <div className='text-gray md:text-sm text-base' style={{ lineHeight: '1.5' }}>
                    <ProjectCodeDisplay project={project} />
                  </div>
                </TerminalWindow>
                <ProjectWindow
                  title={project.title}
                  description={project.longDescription}
                  tags={project.tags}
                  github={project.github}
                  website={project.website}
                  className='w-full md:w-1/2'
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
