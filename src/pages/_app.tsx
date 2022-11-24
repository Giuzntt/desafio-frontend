import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { UserProvider } from '../Hooks/useUser';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <title>Desafio Front-end</title>
      </Head>

  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
 </>
  )
}

export default MyApp
