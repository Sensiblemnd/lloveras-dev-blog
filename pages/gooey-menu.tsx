import Head from "next/head"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import { ReactPrismjs } from "../components/react-prismjs"
import { CMS_NAME } from "../lib/constants"
import { gooeyMenuScss } from "./common/gooey-,enu-scss"

const GooeyMenu = () => {
  const blogTitle = `${CMS_NAME}`
  return (
    <>
      <Layout>
        <Head>
          <title>{blogTitle}</title>
        </Head>
        <Container>
          <Header />
          <div>SCSS Sidebar Menu</div>
          <div className="bg-white">
            <nav className="gooey">
              <ul className="primary-nav menu-indicator">
                <li className="menu-item is-active">
                  <a href="">
                    <i className="zmdi zmdi-home"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <i className="zmdi zmdi-github"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <i className="zmdi zmdi-evernote"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <i className="zmdi zmdi-twitch"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <h2 className="p-6">SCSS</h2>
          <ReactPrismjs language="css" source={gooeyMenuScss} />
        </Container>
      </Layout>
    </>
  )
}

export default GooeyMenu
