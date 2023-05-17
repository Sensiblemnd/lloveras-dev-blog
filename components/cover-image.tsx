import cn from "classnames"
import Link from "next/link"
import useDimensions from "react-cool-dimensions"

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const { observe, width } = useDimensions<HTMLDivElement | null>()
  const image = (
    <div ref={observe}>
      <picture>
        <img
          src={src}
          sizes={`(max-width: ${width}px) 50v w, ${width}px`}
          alt={`Cover Image for ${title}`}
          className={cn("shadow-sm cover-image", {
            "hover:shadow-lg transition-shadow duration-200": slug,
          })}
        />
      </picture>
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
