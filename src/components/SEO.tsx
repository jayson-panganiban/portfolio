import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Jayson Panganiban | QA Engineer',
  description = 'Jayson Panganiban, QA Engineer specializing in Automation and Performance Testing',
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Head>
  )
}
