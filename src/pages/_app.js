import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const isSubLayout =
    Component.getLayout ||
    (() => (
      // <Layout>
      <Component {...pageProps} />
      // </Layout>
    ));
  return isSubLayout(<Component {...pageProps} />);
}
