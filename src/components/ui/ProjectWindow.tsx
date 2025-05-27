import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Button } from './Button'
import { SkillTag } from './SkillTag'

interface ProjectWindowProps {
  title: string
  description: string
  tags: string[]
  github?: string
  website?: string
  className?: string
}

export const ProjectWindow: React.FC<ProjectWindowProps> = ({
  title,
  description,
  tags,
  github,
  website,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className='bg-gray-800 rounded-xl p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(75,85,99,0.1)] border border-gray-700/50 transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.4),_-10px_-10px_20px_rgba(75,85,99,0.15)]'>
        <h3 className='mb-3 text-2xl font-semibold text-white'>
          <span className='text-emerald-400'>{'>'}</span> {title}
        </h3>
        <p className='mb-6 leading-relaxed text-gray-400'>{description}</p>

        <div className='mb-6 flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <SkillTag key={i}> {tag}</SkillTag>
          ))}
        </div>

        <div className='flex flex-wrap gap-3 md:gap-4'>
          {github && (
            <Button
              href={github}
              variant='outline'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 rounded-sm border-emerald-500 font-mono md:text-sm text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20 md:gap-2'
              aria-label={`View ${title} GitHub repository`}
            >
              <FaGithub size={14} />
              git clone
            </Button>
          )}
          {website && (
            <Button
              href={website}
              variant='ghost'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 rounded-sm bg-emerald-500 font-mono text-gray-900 transition-all duration-300 hover:bg-emerald-600 md:gap-2 md:text-sm'
              aria-label={`Open ${title} website`}
            >
              <FaExternalLinkAlt size={12} />
              open site
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
