import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getServerSideProps() {
  console.log("server data called");
  return { props: { time: new Date().toISOString() } };
}

export default function SSR({ time }) {
  return (
    <div>
      <h1>여긴 SSR 페이지~</h1>
      {time}
    </div>
  );
}

SSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
