import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-emerald-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <nav aria-label='Main navigation'>
          <Link
            href='/'
            className='text-2xl font-mono tracking-tighter transition-all duration-300 hover:text-emerald-400 hover:tracking-normal'
            aria-label='Home page'
          >
            <span className='text-emerald-400'>&gt;</span> jp
            <span className='text-emerald-400 animate-pulse' aria-hidden='true'>
              _
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
