import Layout from "../components/layout"
const CardHover = () => {
  return (
    <Layout>
      <div className="card-hover">
        <img src="/img/img1.jpg" alt="card" />
        <div className="card-hover-content">
          <h2 className="text-2xl font-bold">Card Title</h2>
          <p className="text-sm">Card Description</p>
        </div>
      </div>
    </Layout>
  )
}
export default CardHover
