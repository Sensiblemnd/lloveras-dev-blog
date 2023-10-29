import Head from "next/head"
import { gooeyMenuScss } from "../common/gooey-menu-scss"
import Container from "../components/container"
import Drawer from "../components/drawer"
import { GooeyNav } from "../components/gooey-nav"
import Layout from "../components/layout"
import { ReactPrismjs } from "../components/react-prismjs"
import { CMS_NAME } from "../lib/constants"

const GooeyMenu = () => {
  const blogTitle = `${CMS_NAME}`
  return (
    <>
      <Layout>
        <Head>
          <title>{blogTitle}</title>
        </Head>
        <Container>
          <Drawer />
          <div>SCSS Sidebar Menu</div>
          <div className="bg-white">
            <GooeyNav />
          </div>
          <h2 className="p-6">SCSS</h2>
          <ReactPrismjs language="css" source={gooeyMenuScss} />
        </Container>
      </Layout>
    </>
  )
}

export default GooeyMenu
