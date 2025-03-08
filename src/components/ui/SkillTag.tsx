import React from 'react'

export interface SkillTagProps {
  children: React.ReactNode
  className?: string
}

export const SkillTag: React.FC<SkillTagProps> = ({ children, className = '' }) => {
  return <span className={`skill-tag ${className}`}>{children}</span>
}
