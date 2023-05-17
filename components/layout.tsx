import { motion } from "framer-motion"
import Footer from "./footer"
import Meta from "./meta"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
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
          <main>{children}</main>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
