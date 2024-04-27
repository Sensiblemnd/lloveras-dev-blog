import ErrorPage from "next/error"
import Head from "next/head"
import { useRouter } from "next/router"
import Container from "../../components/container"
import { ImageGallery } from "../../components/image-gallery"
import Layout from "../../components/layout"
import PostBody from "../../components/post/post-body"
import PostHeader from "../../components/post/post-header"
import PostTitle from "../../components/post/post-title"
import type PostType from "../../interfaces/post"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import { CMS_NAME } from "../../lib/constants"
import markdownToHtml from "../../lib/markdownToHtml"

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const title = `${post.title} | ${CMS_NAME}`
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
              {post?.imageGallery && <ImageGallery images={post?.imageGallery}></ImageGallery>}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "author",
    "content",
    "coverImage",
    "date",
    "imageGallery",
    "ogImage",
    "slug",
    "title",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
