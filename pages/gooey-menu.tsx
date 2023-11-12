import { gooeyMenuScss } from "../common/gooey-menu-scss"
import { GooeyNav } from "../components/gooey-nav"
import Layout from "../components/layout"
import { ReactPrismjs } from "../components/react-prismjs"

const GooeyMenu = () => {
  return (
    <>
      <Layout>
        <div>SCSS Sidebar Menu</div>
        <div className="bg-white">
          <GooeyNav />
        </div>
        <h2 className="p-6">SCSS</h2>
        <ReactPrismjs language="css" source={gooeyMenuScss} />
      </Layout>
    </>
  )
}

export default GooeyMenu
