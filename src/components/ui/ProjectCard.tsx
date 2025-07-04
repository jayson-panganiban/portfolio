import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Project } from '../../data/projects'
import { ProjectCodeDisplay } from './ProjectCodeDisplay'

interface ProjectCardProps {
  project: Project
  className?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <div
      className={`bg-slate-800/50 rounded-lg overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),_0_0_10px_rgba(16,185,129,0.1)] hover:-translate-y-1 ${className}`}
    >
      <div className='h-48 bg-gray-800 p-4 font-mono text-xs overflow-hidden'>
        <ProjectCodeDisplay project={project} />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-white group-hover:text-emerald-400'>
          <span className='text-emerald-400'>&gt;</span> {project.title}
        </h3>
        <p className='text-gray-200 mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className='px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-sm font-mono'
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className='px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded-sm font-mono'>
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <div className='flex gap-4'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-mono transition-colors'
            >
              <FaGithub /> view source
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target='_blank'
              rel='noopener noreferrer'
              className='text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-mono transition-colors'
            >
              <FaExternalLinkAlt size={12} /> visit
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
