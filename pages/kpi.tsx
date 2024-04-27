import cs from "classnames"
import { useState } from "react"
import Layout from "../components/layout"
const Kpi = () => {
  //set state for hover card
  const [hover, setHover] = useState(false)
  const onHover = (hover: boolean) => {
    setHover(hover)
    console.log("hover", hover)
  }

  return (
    <Layout>
      <div
        className="flex p-24"
        data-testid="kpi-content"
        style={{ minHeight: "101px" }}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div className="relative flex w-auto text-black kpi-item">
          <div className="relative inline-block transform scale-100 bg-white border border-b-0 border-gray-020">
            <div
              className={cs(
                "fixed bottom-0 text-center bg-white text-3xl",
                { visible: hover },
                { invisible: !hover }
              )}
            >
              <span
                className="absolute inset-0 m-auto whitespace-nowrap "
                style={{ width: "fit-content", height: "fit-content" }}
              >
                1400 / 20,000
              </span>
            </div>
            <div className="flex-grow whitespace-no-wrap">
              <h3 className="flex flex-row uppercase whitespace-no-wrap text-14 md:text-12">
                <div data-testid="Label">Completed Neighborhoods</div>
                <div></div>
              </h3>
              <div
                className="mr-32 font-light whitespace-no-wrap md:text-24 md:mr-20 text-24"
                data-testid="ContributorCount"
              >
                14 / 20.8K
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Kpi
