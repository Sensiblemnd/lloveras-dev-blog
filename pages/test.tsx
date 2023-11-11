import Layout from "../components/layout"
import { CMS_NAME } from "../lib/constants"

const test = () => {
  const blogTitle = `${CMS_NAME}`
  return (
    <>
      <Layout>
        <div>test</div>
      </Layout>
    </>
  )
}

export default test
