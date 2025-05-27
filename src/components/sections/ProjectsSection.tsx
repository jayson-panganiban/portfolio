import { ProjectCodeDisplay, ProjectWindow, SectionHeader, TerminalWindow } from '@/components/ui'
import { projects } from '@/data/projects'

export const ProjectsSection: React.FC = () => {
  const featuredOrder = ['HalfPrice Grocery', 'Rephrase', 'PHZipCodesWeb']

  // Filter and sort featured projects according to the defined order
  const featuredProjects = projects
    .filter(project => project.featured)
    .sort((a, b) => featuredOrder.indexOf(a.title) - featuredOrder.indexOf(b.title))

  const bgColors = ['bg-black', 'bg-gray-900', 'bg-black']

  return (
    <>
      {featuredProjects.map((project, index) => (
        <section
          key={project.id}
          className={`py-12 md:py-20 ${bgColors[index % bgColors.length]} transition-colors duration-500`}
          aria-labelledby={`project-${project.id}`}
        >
          <div className='container px-4 mx-auto'>
            <div className='max-w-5xl mx-auto'>
              {index === 0 && (
                <SectionHeader
                  title='Projects'
                  description="A mix of weekend projects that scratched my own itch and fun ideas I couldn't resist building in my spare time."
                />
              )}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 md:gap-10 items-center`}
              >
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
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
