import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import AuthHome from "../components/authHome";
import { login } from "./login";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  // export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {console.log(login)}
      <section>
        {login === "loggedIn" ? (
          <AuthHome allPostsData={allPostsData} login></AuthHome>
        ) : (
          <AuthHome></AuthHome>
        )}
      </section>
    </Layout>
  );
}
