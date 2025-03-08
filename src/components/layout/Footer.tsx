import { SocialLinks } from '@/components/ui/SocialLinks'

export const Footer = () => {
  {
    const currentYear = new Date().getFullYear()

    return (
      <footer className='py-8 bg-black' role='contentinfo'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-text/60 text-sm'>
              © <time dateTime={`${currentYear}`}>{currentYear}</time> Jayson Panganiban. All
              rights reserved.
            </p>

            <div className='mt-4 md:mt-0'>
              <nav aria-label='Social media links'>
                <SocialLinks className='text-text/60' linkClassName='hover:text-primary' />
              </nav>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
