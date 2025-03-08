import React from 'react'

interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = 'jayson@portfolio',
  children,
  className = '',
}) => {
  return (
    <div
      className={`terminal-window glow-border shadow-[0_0_20px_rgba(0,0,0,0.5)] ${className}`}
      aria-label={title}
    >
      <div
        className='terminal-header flex justify-between items-center px-6 py-3 bg-secondary border-b border-gray-700'
        aria-label='Terminal header'
      >
        <div className='terminal-dots flex space-x-3'>
          <div className='terminal-dot bg-red-500 h-3.5 w-3.5 rounded-full'></div>
          <div className='terminal-dot bg-yellow-500 h-3.5 w-3.5 rounded-full'></div>
          <div className='terminal-dot bg-green-500 h-3.5 w-3.5 rounded-full'></div>
        </div>
        <div className='text-gray-400 font-medium text-sm px-2'>{title}</div>
      </div>

      <div
        className='terminal-content p-5 font-mono text-text bg-background overflow-auto'
        style={{ minHeight: '200px' }}
        aria-label='Terminal Content'
      >
        {children}
      </div>
    </div>
  )
}
