import { motion } from "framer-motion"
import Head from "next/head"
import CodePenIframe from "../components/codepen-iframe"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import { CODEPENIDS } from "../lib/constants"

// const DynamicCodePenIframe = dynamic(() => import("../components/codepen-iframe"), {
//   ssr: false,
// })

const CodePen = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Codepen</title>
        </Head>
        <Container>
          <Header />

          <h1 className="mb-10 text-2xl font-bold leading-tight tracking-tighter text-center md:text-3xl lg:text-4xl md:leading-none md:text-left">
            Codepen Experiments
          </h1>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="grid w-full grid-flow-row gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {CODEPENIDS.map((codePenId) => (
              <CodePenIframe
                title="Codepen Experiment"
                key={codePenId}
                height={500}
                penUrlKey={codePenId}
              />
            ))}
          </motion.div>
        </Container>
      </Layout>
    </>
  )
}
export default CodePen
