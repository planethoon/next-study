import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  const isSubLayout =
    Component.getLayout ||
    (() => (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    ));
  return isSubLayout(<Component {...pageProps} />);
}
