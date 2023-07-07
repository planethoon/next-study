import { useState, useEffect } from "react";
import Layout from "../components/layout";
import SubLayout from "../components/SubLayout";

export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  return (
    <div>
      <h1>여긴 CSR 페이지~</h1>
      {time}
    </div>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
