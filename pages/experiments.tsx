import { FancyCard } from "../components/fancy-card"
import Layout from "../components/layout"

const test = () => {
  return (
    <>
      <Layout>
        <FancyCard
          padding="20px"
          radius="10px"
          outerBackgroundColor="hsl(275, 95%, 60%)"
          innerBackgroundColor="hsl(220, 30%, 85%)"
        />
      </Layout>
    </>
  )
}

export default test
