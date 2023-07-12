import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  console.log("server data called");
  return { props: {} };
}

export default function MyInfo() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const { status = "initial" } = router.query;

  return (
    <div>
      <h1>My Info</h1>
      <div>isClicked: {String(isClicked)}</div>
      <div>Status: {status}</div>
      <button
        onClick={() => {
          alert("editting now!");
          setIsClicked(true);
          location.replace("/settings/my/info?status=editing");
        }}
      >
        Edit(replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert("editting now!");
          setIsClicked(true);
          router.push("/settings/my/info?status=editing");
        }}
      >
        Edit(push)
      </button>
      <br />
      <button
        onClick={() => {
          alert("editting now!");
          setIsClicked(true);
          router.push("/settings/my/info?status=editing", "/settings/my/info", {
            shallow: true,
          });
        }}
      >
        Edit(shallow)
      </button>
      <br />
      <button
        onClick={() => {
          location.replace("/settings/my/info");
        }}
      >
        쿼리 없애기
      </button>
    </div>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
