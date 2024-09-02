import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import Meta from '@/components/SEO/Meta'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Meta />
        <link id="dynamic-favicon" rel="icon" href="/files/artwork/favicon_frames/frame_00.png" />
      </Head>
      <Script src="/files/scripts/favicon.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
