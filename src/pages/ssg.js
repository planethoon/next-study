import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  return { props: { time: new Date().toISOString() } };
}

export default function SSG({ time }) {
  useEffect(() => {
    console.log("빌드된 시간", time);
  });
  return (
    <div>
      <h1>여긴 SSG 페이지~</h1>
      {time}
    </div>
  );
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
