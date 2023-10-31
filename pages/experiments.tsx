import Head from "next/head"
import Container from "../components/container"
import Drawer from "../components/drawer"
import Layout from "../components/layout"
import { CMS_NAME } from "../lib/constants"

const test = () => {
  const blogTitle = ` ${CMS_NAME}`
  return (
    <>
      <Layout>
        <Head>
          <title>{blogTitle}</title>
        </Head>
        <Container>
          <Drawer />
          <div>experiments</div>
        </Container>
      </Layout>
    </>
  )
}

export default test
