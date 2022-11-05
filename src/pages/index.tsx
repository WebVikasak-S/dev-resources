import type { NextPage } from 'next';
import Head from 'next/head';
import { Results } from '../components';
import Layout from '../hoc/Layout';
import { trpc } from '../utils/trpc';

const Home: NextPage = (props) => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <Layout title="Home | Dev-resources">
      <div className="flex flex-col w-full h-full">
        <Results />
      </div>
    </Layout>
  );
};

export default Home;
