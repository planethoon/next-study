import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export default function CartDateSlug() {
  const router = useRouter();
  const { date } = router.query;

  useEffect(() => {
    console.log(router.query);
  }, [date]);

  return <div>CartDateSlug</div>;
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
