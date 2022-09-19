import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Head from "next/head"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

const DynamicCodePenIframe = dynamic(() => import("../components/codepen-iframe"), {
  ssr: false,
})

const CodePen = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Codepen</title>
        </Head>
        <Container>
          <Header />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-10 text-2xl font-bold leading-tight tracking-tighter text-center md:text-3xl lg:text-4xl md:leading-none md:text-left">
              Codepen Experiments
            </h1>
            <div className="grid w-full grid-flow-row gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <DynamicCodePenIframe height={500} title="Codepen Experiment" penUrlKey="VjMmEX" />
              <DynamicCodePenIframe height={500} title="Codepen Experiment" penUrlKey="gpaJww" />
              <DynamicCodePenIframe height={500} title="Codepen Experiment" penUrlKey="KwgQWJ" />
              <DynamicCodePenIframe height={500} title="Codepen Experiment" penUrlKey="azXRRv" />
              <DynamicCodePenIframe height={500} title="Codepen Experiment" penUrlKey="WbmNNP" />
              <DynamicCodePenIframe height={500} title="Codepen Experiment" penUrlKey="VbjwyX" />
              <DynamicCodePenIframe height={500} title="Codepen Experiment" penUrlKey="oNEroj" />
            </div>
          </motion.div>
        </Container>
      </Layout>
    </>
  )
}
export default CodePen
