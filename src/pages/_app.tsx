import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { UserProvider } from '../Hooks/useUser';
import { useRouter } from 'next/router';


// Realocamos os estilos globais para fora do MyApp, pois tudo que estiver dentro do MyApp executa novamente.
globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
    const router =  useRouter();

  return (
      <>
          <Head>
              <title>Desafio Front-end</title>
          </Head>

          <UserProvider>
              <Component key={router.asPath} {...pageProps} />
          </UserProvider>
      </>
  );
}

export default MyApp
