import React from 'react'

interface SectionHeaderProps {
  title: React.ReactNode
  description?: string
  className?: string
  headingClassName?: string
  descriptionClassName?: string
  centered?: boolean
  withAccent?: boolean
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = '',
  headingClassName = '',
  descriptionClassName = '',
  centered = false,
  withAccent = true,
}) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl font-bold mb-2 ${withAccent ? 'h2-gradient' : ''} ${headingClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm md:text-base text-slate-700 dark:text-slate-300 ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
