import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function MyInfo() {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  return <div>My Info</div>;
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
