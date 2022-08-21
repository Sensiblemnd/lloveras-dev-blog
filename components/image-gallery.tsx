import Link from "next/link"
import { ImageGalleryType } from "../interfaces/post"

type ImageGalleryProps = {
  images?: ImageGalleryType[]
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  return images ? (
    <div className="grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-3 ">
      {images.map((image) => {
        if (image.linkUrl)
          return (
            <div className="flex items-center justify-center px-2 cursor-pointer">
              <Link key={`${image.imageUrl}-${image.linkUrl} `} href={image.linkUrl ?? ""}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item"
                  title={image.altText}
                >
                  <img
                    key={image.imageUrl}
                    src={image.imageUrl}
                    alt={image.altText}
                    className={`w-[${image?.imageWidth}px]  h-[${image?.imageHeight}px]`}
                  />
                </a>
              </Link>
            </div>
          )
        else {
          return <img key={image.imageUrl} src={image.imageUrl} alt={image.altText} />
        }
      })}
    </div>
  ) : (
    <></>
  )
}
