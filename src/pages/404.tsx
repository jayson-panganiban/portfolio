import { Layout } from '@/components/layout'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <Layout
      title='404 - Page Not Found | Jayson Panganiban'
      description='The page you are looking for does not exist.'
    >
      <section className='min-h-screen flex items-center justify-center'>
        <div className='container px-4 mx-auto text-center'>
          <h1 className='text-9xl font-bold text-primary mb-4'>404</h1>
          <h2 className='text-4xl font-bold mb-6'>Page Not Found</h2>
          <p className='text-xl text-text/70 mb-10 max-w-xl mx-auto'>
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>
          <Button href='/' variant='primary'>
            Back to Home
          </Button>
        </div>
      </section>
    </Layout>
  )
}
