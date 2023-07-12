import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CartDateSlug() {
  const router = useRouter();
  const { date = ["", "", ""] } = router.query;

  useEffect(() => {
    console.log(router.query);
  }, [date]);

  return (
    <div>
      <h1>CartDateSlug</h1>

      <h1>
        {date.map((e, i) => {
          const ymd = ["년", "월", "일"];
          return (
            <p
              key={i}
              style={{ fontSize: 20, color: "grey", display: "inline-block" }}
            >
              {e + ymd[i]}
            </p>
          );
        })}
      </h1>
      <Link href="/cart/2023/07/12">2023년 7월 12일로</Link>
      <button
        onClick={() => {
          router.push("/cart/2023/07/12");
        }}
      >
        2023년 7월 12일로
      </button>
    </div>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
