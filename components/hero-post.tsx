import Link from "next/link"
import type Author from "../interfaces/author"
import Avatar from "./avatar"
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
    <section>
      <div className="mb-15 md:flex md:justify-between md:gap-x-16 lg:gap-x-8 md:mb-10">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <p className="mb-5 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
    </section>
  )
}

export default HeroPost
