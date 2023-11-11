import { motion } from "framer-motion"
import Head from "next/head"
import Container from "../components/container"
import Drawer from "../components/drawer"
import { CMS_NAME } from "../lib/constants"
import Footer from "./footer"
import Meta from "./meta"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const blogTitle = ` ${CMS_NAME}`

  return (
    <>
      <Meta />
      <div className="min-h-screen  min-w-[320px]">
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <main>
            <Head>
              <title>{blogTitle}</title>
            </Head>
            <Container>
              <Drawer />
              {children}
            </Container>
          </main>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
