import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../hoc/Layout";
import { trpc } from "../utils/trpc";

const About: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Layout title="About | Dev-resources">
      <h1>About Dev-resource</h1>
    </Layout>
  );
};

export default About;
