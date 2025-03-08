import React from 'react'

interface TerminalCommandProps {
  command: string
  args?: string
  className?: string
  children?: React.ReactNode
}

const TerminalCommand: React.FC<TerminalCommandProps> = ({
  command,
  args,
  className = '',
  children,
}) => {
  return (
    <div className={`text-gray-400 font-mono ${className}`} aria-hidden='true'>
      <p className=' flex flex-wrap items-baseline break-words'>
        <span className='text-emerald-500 mr-2'>$</span>
        <span className='text-emerald-300'>{command}</span>
        {args && (
          <>
            <span className='mx-1'></span>
            <span className='text-gray-100 break-all whitespace-pre-wrap max-w-full'>{args}</span>
          </>
        )}
        {children}
      </p>
    </div>
  )
}

export default TerminalCommand
