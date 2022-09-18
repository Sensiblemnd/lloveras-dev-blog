// fetch wordpress json posts
export const getWPPosts = async () => {
  const res = await fetch("http://www.lloveras.info/wp-json/wp/v2/posts")
  const posts = await res.json()
  return posts ?? []
}
