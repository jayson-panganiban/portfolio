import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
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
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
  scroll = true,
}) => {
  const baseClass =
    'btn font-mono rounded-sm transition-all duration-300 inline-flex items-center justify-center gap-2'

  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs min-h-[32px]',
    md: 'px-3 py-2 text-sm min-h-[36px]',
    lg: 'px-4 py-2.5 text-base min-h-[40px]',
  }

  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }

  const buttonStyles = `${baseClass} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const focusStyles =
    'focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-background'
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
