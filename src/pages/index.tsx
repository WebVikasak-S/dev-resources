import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../hoc/Layout";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Layout title="Home | Dev-resources">
      <h1>Hello Dev-resource</h1>
    </Layout>
  );
};

export default Home;
