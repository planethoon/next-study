import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  const { slug, from } = router.query;

  useEffect(() => {
    console.log(router.query);
  }, []);

  return (
    <div>
      Category {slug} {from}
    </div>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
