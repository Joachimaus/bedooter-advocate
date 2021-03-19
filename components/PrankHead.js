import Head from 'next/head'

export default function PrankHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.jpg" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://NTNews.com" />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:description" content="NTNews.com.au Propper Legit No Muckaround Look" />
      <meta property="og:site_name" content="NTNews.com.au" />
      <meta name="monetization" content="$ilp.uphold.com/rEgHHBQGDUDP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="NTNews.com.au Propper Legit No Muckaround Look." />
      <meta name="twitter:creator" content="@gammonartist" />
      <meta name="twitter:image" content="https://NTNews.com/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
  )
}
