import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {

  const meta = Component.meta || {};

  return (
    <Layout globalData={pageProps.globalData} meta={meta}>
      <Component {...pageProps} />
    </Layout>
  );
}
