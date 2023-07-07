import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      {children}
      <footer>이거슨 푸터여</footer>
    </div>
  );
}
