import HeroPost from "../components/hero-post"
import Layout from "../components/layout"
import MoreStories from "../components/more-stories"
import Post from "../interfaces/post"
import { getAllPosts } from "../lib/api"

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  )
}
// comments?
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "author",
    "coverImage",
    "date",
    "excerpt",
    "imageGallery",
    "ogImage",
    "slug",
    "title",
  ])

  return {
    props: { allPosts },
  }
}
