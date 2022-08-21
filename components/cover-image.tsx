import cn from "classnames"
import Image from "next/image"
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
      <Image
        src={src}
        layout="responsive"
        width={width}
        height={Math.round(width * 0.5625)}
        objectFit="cover"
        sizes={`(max-width: ${width}px) 100vw, ${width}px`}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
      />
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
