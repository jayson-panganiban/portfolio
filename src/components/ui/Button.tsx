import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
  scroll?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
  scroll = true,
}) => {
  const baseClass = 'btn font-mono rounded-sm text-xs sm:text-sm'
  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline border-emerald-500 text-emerald-400',
    ghost: 'text-text hover:text-primary hover:bg-primary/5',
  }

  const buttonStyles = `${baseClass} ${variant === 'ghost' ? variantClasses.ghost : variantClasses[variant]} ${className}`

  const focusStyles =
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background'
  const finalStyles = `${buttonStyles} ${focusStyles}`

  if (href) {
    const linkProps = target ? { target, rel: rel || 'noopener noreferrer' } : {}
    return (
      <Link href={href} className={finalStyles} {...linkProps} scroll={scroll}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={finalStyles} onClick={onClick}>
      {children}
    </button>
  )
}
