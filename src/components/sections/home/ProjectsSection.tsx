import {
  Button,
  ProjectCodeDisplay,
  ProjectWindow,
  SectionHeader,
  TerminalWindow,
} from '@/components/ui'
import { projects } from '@/data/projects'
import React from 'react'

export const RecentProjectsSection: React.FC = () => {
  const recentProject = projects.find(project => project.title === 'Rephrase') ?? projects[0]

  return (
    <section className='section-container bg-black' aria-labelledby='projects-heading'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <SectionHeader title='Recent Projects' className='mt-10' />
          <ul
            className='space-y-16 md:space-y-24 mb-12 md:mb-16 list-none pl-0'
            aria-label='Recent Projects'
          >
            <li className='flex flex-col md:flex-row-reverse gap-10 items-center'>
              <TerminalWindow>
                <ProjectCodeDisplay project={recentProject} />
              </TerminalWindow>
              <ProjectWindow
                title={recentProject.title}
                description={recentProject.longDescription}
                tags={recentProject.tags}
                github={recentProject.github}
                website={recentProject.website}
                className='w-full md:w-1/2'
              />
            </li>
          </ul>
          <div className='mt-8 md:mt-12 text-center'>
            <Button href='/projects' variant='outline' aria-label='View all projects'>
              cd ../projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
