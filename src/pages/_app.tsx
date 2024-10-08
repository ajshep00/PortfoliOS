import '../styles/globals.css';
import '../styles/scrollbar.css'

import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PortfoliOS | Alex Shepherd Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="title" content="Alex Shepherd - Desktop Portfolio" />
        <link id="dynamic-favicon" rel="icon" href="/files/artwork/favicon_frames/frame_21.png" />
      </Head>
      <Script src="/files/scripts/favicon.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
