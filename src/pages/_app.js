// src/pages/_app.js
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Ruthie&family=WindSong:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>ONS Makeover | Best Beauty Services At Home</title>
        <meta name="description" content="Get the best beauty and makeover services at ONS Makeover. Book appointments online today!" />
        <meta name="keywords" content="ONS Makeover, beauty salon, bridal makeup, hair services, facial, grooming" />
        <meta name="author" content="ONS Makeover Team" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ONS Makeover" />
        <meta property="og:description" content="Premium beauty services and makeover experiences." />
        <meta property="og:image" content="/logo.png" /> {/* Replace with correct path */}
        <meta property="og:url" content="https://www.onsmakeover.com" />
        <link rel="canonical" href="https://www.onsmakeover.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
