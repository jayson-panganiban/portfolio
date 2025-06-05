import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: 'website' | 'article'
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Jayson Panganiban | QA Engineer',
  description = 'Jayson Panganiban, QA Engineer specializing in Automation and Performance Testing',
  url,
  image = '/og-image.jpg',
  type = 'website',
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />

      {url && <link rel='canonical' href={url} />}

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:image' content={image} />
      {url && <meta property='og:url' content={url} />}

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Head>
  )
}
