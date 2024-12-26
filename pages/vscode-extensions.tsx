import { vscodeMetaData } from "../common/vscode-ext"
import Layout from "../components/layout"

const sortedByTitle = vscodeMetaData.sort((a, b) => {
  if (!a?.title || !b?.title) {
    return -1
  }
  if (a?.title < b?.title) {
    return -1
  }
  if (a.title > b.title) {
    return 1
  }
  return 0
})

const VscodeExtension = () => {
  return (
    <>
      <Layout>
        <div>
          {sortedByTitle.map((data, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] gap-4 p-4 m-4 overflow-hidden bg-white rounded-lg shadow-md "
            >
              {data?.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data?.image ?? ""}
                  alt={data?.title ?? ""}
                  className="object-contain w-full h-auto max-h-48"
                />
              )}
              <div className="p-4">
                {data.title && (
                  <h2 className="mb-2 text-xl font-semibold text-slate-950">{data.title}</h2>
                )}
                <p className="mb-4 text-gray-700">{data?.description}</p>
                <a
                  href={data?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {data.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default VscodeExtension
