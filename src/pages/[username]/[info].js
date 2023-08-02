import { useState, useEffect } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export default function UsernameInfoSlug() {
  const router = useRouter();
  const { username, info, uid } = router.query;
  const [name, setName] = useState("John Doe");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (uid) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setName(data.name);
          setStatus(true);
        });
    }
  }, [uid]);
  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setName(data.name);
  //     });
  // }, []);

  return (
    <div>
      {username}'s {info}
      <h1>name: {name}</h1>
      <h1>uid: {uid}</h1>
      <h1>server call : {String(status)}</h1>
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
