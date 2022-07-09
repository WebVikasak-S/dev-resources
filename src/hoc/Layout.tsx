import type { NextPage } from "next";
import Head from "next/head";
import { Navbar, Footer, SideBar, Results } from "../components";
import { ILayoutProps } from "../interface";

const Layout: React.FC<ILayoutProps> = ({
  children,
  title,
  withNavBar = true,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="dev-resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="next-container flex flex-col h-screen">
        {withNavBar && <Navbar />}
        <main className="flex flex-1">
          <SideBar />
          <Results />
        </main>
      </div>
    </>
  );
};

export default Layout;
