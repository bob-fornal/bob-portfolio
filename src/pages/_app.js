import Head from 'next/head';
import '@core/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

const isProduction = globalThis.location?.hostname.includes('github.io');

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        { isProduction ? <base href="https://bob-fornal.github.io/bob-portfolio/" /> : null }
      </Head>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
  
}