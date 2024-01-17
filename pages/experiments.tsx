import { FancyCard } from "../components/fancy-card"
import Layout from "../components/layout"

//img margin-inline:auto;aspect-ratio: 9/16;object-fit: cover;

const experiments = () => {
  return (
    <>
      <Layout>
        <FancyCard
          options={{
            padding: 12,
            radius: 25,
            contentPadding: 12,
            outerBackgroundColor: "hsl(5.08deg 100% 65.29%)",
            innerBackgroundColor: "hsl(0, 0%, 100%)",
            styles: { aspectRatio: "16/9", maxWidth: "300px" },
          }}
          ref={null}
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
          <div
            className="block h-auto overflow-hidden"
            style={{
              WebkitBorderBottomLeftRadius: "calc(var(--radius) - var(--padding))",
              borderBottomRightRadius: "calc(var(--radius) - var(--padding))",
            }}
          >
            asdfasdfasdfasdfasdfasdf
          </div>
        </FancyCard>
      </Layout>
    </>
  )
}

export default experiments
