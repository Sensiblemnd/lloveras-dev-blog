import Head from "next/head"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import { CMS_NAME } from "../lib/constants"

const test = () => {
  const blogTitle = `Next.js Blog Example with ${CMS_NAME}`
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
          <code>asdf asdf</code>
        </Container>
      </Layout>
    </>
  )
}

export default test
