import type Author from "../../interfaces/author"
import Avatar from "../common/avatar"
import DateFormatter from "../date-formatter"
import PostTitle from "./post-title"

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-4">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="max-w-2xl ">
        <div className="block mb-6 md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          Posted on: <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
