import Layout from '../components/layout';
import Nav from '../components/nav';
function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
