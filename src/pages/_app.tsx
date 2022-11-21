import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
 <>
      <Head>
        <title>Desafio Front-end</title>
      </Head>
  <Component {...pageProps} />
 </>
  )
}

export default MyApp
