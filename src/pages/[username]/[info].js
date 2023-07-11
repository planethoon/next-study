import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export default function UsernameInfoSlug() {
  const router = useRouter();
  const { username, info } = router.query;

  return (
    <div>
      {username}'s {info}
    </div>
  );
}

UsernameInfoSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
