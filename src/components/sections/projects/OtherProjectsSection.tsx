import { ProjectCard, SectionHeader, TerminalCommand } from '@/components/ui'
import { projects } from '@/data/projects'

export const OtherProjectsSection: React.FC = () => {
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section className='section-container bg-black'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <TerminalCommand
            command='find'
            args='. -name "other-projects" -type d'
            className='mb-4 md:mb-6'
          />
          <SectionHeader title='Other Projects' />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {otherProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
