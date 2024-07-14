import Link from "next/link"
import type Author from "../interfaces/author"
import Avatar from "./common/avatar"
import CoverImage from "./cover-image"
import DateFormatter from "./date-formatter"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <section className="grid-cols-1 gap-10 lg:grid :lg:grid-flow-col lg:grid-cols-12">
      <div className=" lg:col-span-5">
        <h3 className="mb-4 text-3xl font-bold leading-tight ">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <span className="hover:underline">{title}</span>
          </Link>
        </h3>
        <div className="">
          <DateFormatter dateString={date} />
        </div>

        <div className="mb-4">
          <p className="mb-5 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="lg:col-span-7">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
    </section>
  )
}

export default HeroPost
