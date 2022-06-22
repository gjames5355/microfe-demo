import dynamic from 'next/dynamic';
import Layout from '../components/layout/layout';

const Nav = dynamic(
  () => {
    const mod = import('home/nav');
    return mod;
  },
  { ssr: false },
);

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
