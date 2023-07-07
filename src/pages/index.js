import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>hello!</h1>
      <Link href="/csr">CSR로 가기</Link>
      <Link href="/ssr">SSR로 가기</Link>
      <Link href="/ssg">SSG로 가기</Link>
      <Link href="/isr">ISR로 가기</Link>
    </div>
  );
}
