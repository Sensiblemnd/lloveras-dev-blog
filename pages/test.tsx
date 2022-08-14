import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
const test = () => {
  const blogTitle = `Next.js Blog Example with ${CMS_NAME}`;
  return (
    <>
      <Layout>
        <Head>
          <title>{blogTitle}</title>
        </Head>
        <Container>
          <Header />
          <div>test</div>
        </Container>
      </Layout>
    </>
  );
};

export default test;
