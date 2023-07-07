import Link from "next/link";
import { useEffect } from "react";
import Layout from "../components/layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps() {
  console.log("ISR 로그 확인");
  return { props: { time: new Date().toISOString() }, revalidate: 1 };
}

export default function ISR({ time }) {
  useEffect(() => {
    console.log("빌드된 시간", time);
  });
  return (
    <div>
      <h1>여긴 ISR 페이지~</h1>
      {time}
    </div>
  );
}

ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
