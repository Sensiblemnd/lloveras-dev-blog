import type Post from "../interfaces/post"
import PostPreview from "./post/post-preview"

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {posts && (
        <>
          <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-4xl">
            More Stories
          </h2>
          <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6">
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default MoreStories
