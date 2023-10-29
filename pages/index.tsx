import Head from "next/head"
import Container from "../components/container"
import Drawer from "../components/drawer"
import HeroPost from "../components/hero-post"
import Layout from "../components/layout"
import MoreStories from "../components/more-stories"
import Post from "../interfaces/post"
import { getAllPosts } from "../lib/api"
import { CMS_NAME } from "../lib/constants"

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const title = `Next.js Blog Example with ${CMS_NAME}`
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <Drawer />
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
        </Container>
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
