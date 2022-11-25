import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { UserProvider } from '../Hooks/useUser';


// Realocamos os estilos globais para fora do MyApp, pois tudo que estiver dentro do MyApp executa novamente.
globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <title>Desafio Front-end</title>
          </Head>

          <UserProvider>
              <Component {...pageProps} />
          </UserProvider>
      </>
  );
}

export default MyApp
