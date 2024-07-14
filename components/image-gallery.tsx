import Link from "next/link"
import { ImageGalleryType } from "../interfaces/post"

type ImageGalleryProps = {
  images?: ImageGalleryType[]
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  return images ? (
    <div className="grid grid-cols-1 web-development-gallery gap-y-4 md:gap-4 md:grid-cols-3 ">
      {images.map((image) => {
        if (image.linkUrl)
          return (
            <div
              className="flex items-center justify-center px-2 cursor-pointer"
              key={`${image.imageUrl}-${image.linkUrl} `}
            >
              <Link key={`${image.imageUrl}-${image.linkUrl} `} href={image.linkUrl ?? ""}>
                <span rel="noopener noreferrer" className="link-item" title={image.altText}>
                  <picture>
                    <img
                      key={image.imageUrl}
                      src={image.imageUrl}
                      alt={image.altText}
                      className={`w-[${image?.imageWidth}px]  h-[${image?.imageHeight}px]`}
                    />
                  </picture>
                </span>
              </Link>
            </div>
          )
        else {
          return (
            <div
              className="flex items-center justify-center px-2 cursor-pointer"
              key={`${image.imageUrl}-${image.linkUrl} `}
            >
              <picture>
                <img
                  key={image.imageUrl}
                  src={image.imageUrl}
                  alt={image.altText}
                  className={`w-[${image?.imageWidth}px]  h-[${image?.imageHeight}px]`}
                />
              </picture>
            </div>
          )
        }
      })}
    </div>
  ) : (
    <></>
  )
}
