import { CSSProperties } from "react"
import Layout from "../components/layout"
// css file is circle-dots.css
const experimentRound = () => {
  return (
    <>
      <Layout>
        <div className="wrapper">
          <div className="circle" style={{ "--n": `10` } as CSSProperties}>
            <div className="line round-item " style={{ "--i": "0" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "1" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "2" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "3" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "4" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "5" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "6" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "7" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "8" } as CSSProperties}></div>
            <div className="line round-item " style={{ "--i": "9" } as CSSProperties}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default experimentRound
