import Link from "next/link"
import { useState } from "react"
import { FancyCard } from "../components/fancy-card"
import Layout from "../components/layout"

const CardExperiment = () => {
  const [padding, setPadding] = useState(12)
  const [radius, setRadius] = useState(25)
  return (
    <Layout>
      <div className="mb-10">
        Based on an article I read:{" "}
        <Link
          className="text-blue-500"
          target="_blank"
          href={"https://cloudfour.com/thinks/the-math-behind-nesting-rounded-corners/"}
        >
          The Math Behind Nesting Rounded Corners
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <label>
          Gap
          <input
            type="range"
            min="0"
            max="50"
            value={padding}
            onChange={(e) => setPadding(parseInt(e.target.value))}
          />
        </label>
        <label>
          Outer Border Radius
          <input
            type="range"
            min="0"
            max="100"
            value={radius}
            onChange={(e) => setRadius(parseInt(e.target.value))}
          />
        </label>
      </div>
      <FancyCard
        options={{
          padding: padding,
          radius: radius,
          contentPadding: 12,
          outerBackgroundColor: "hsl(5.08deg 100% 65.29%)",
          innerBackgroundColor: "hsl(0, 0%, 100%)",
          styles: { aspectRatio: "16/9", maxWidth: "300px" },
        }}
      >
        <i className="indented-badge">
          <span>3</span>
        </i>
        <picture className="block w-auto h-auto overflow-hidden">
          <img
            className="object-cover w-full h-auto"
            style={{ marginInline: "auto", aspectRatio: "9/16" }}
            key={"/img/img1.jpg"}
            src={"/img/img1.jpg"}
            alt={"/img/img1.jpg"}
          />
        </picture>
      </FancyCard>
    </Layout>
  )
}

export default CardExperiment
