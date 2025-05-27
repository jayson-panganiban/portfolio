import { SEO } from '@/components/SEO'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export const Layout = ({
  children,
  title = 'Jayson Panganiban | QA Engineer',
  description = 'Jayson Panganiban, QA Engineer specializing in Automation and Performance Testing',
}: LayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <SEO title={title} description={description} />

      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-gray-900'
      >
        Skip to main content
      </a>

      <Header />

      <main id='main-content' className='flex-grow' tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
