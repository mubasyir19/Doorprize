import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Link | Mahdy Mubasyir</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
