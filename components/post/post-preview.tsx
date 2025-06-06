import Link from "next/link"
import type Author from "../../interfaces/author"
import Avatar from "../common/avatar"
import CoverImage from "../cover-image"
import DateFormatter from "../date-formatter"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <div className="col-span-4 mb-10">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-3 text-2xl font-bold leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <span className="hover:underline">{title}</span>
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
