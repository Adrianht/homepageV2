import Head from 'next/head'
import Main from '../components/Main'


export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Thompson</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website for showcasing myself, projects and social links" />
        <meta property="og:title" content="Projects, Myself, Social Links" />
        <meta property="og:description" content="Website for showcasing myself, projects and social links" />
        <meta property="og:url" content="https://www.adrianht.no/" />
        <meta property="og:image" content="https://www.adrianht.no/static/images/myself.png" />
        <meta property="og:image:secure_url" content="https://www.adrianht.no/static/images/myself.png" />

        <meta property="twitter:title" content="Adrian Thompson" />
        <meta property="twitter:card" content="Projects, Myself, Social Links" />
        <meta property="twitter:site" content="adrianht.no" />
        <meta property="twitter:description" content="Website for showcasing myself, projects and social links" />
        <meta property="twitter:image" content="https://www.adrianht.no/static/images/myself.png" />
        
        <link rel="canonical" href="https://www.adrianht.no/" />

      </Head>

      <Main />
    </>
  )
}
