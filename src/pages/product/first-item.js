import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function FirstItem() {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  return <div>First Item</div>;
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
