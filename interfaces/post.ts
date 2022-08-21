import type Author from "./author"

export type ImageGalleryType = {
  imageUrl: string
  linkUrl?: string
  altText?: string
  imageWidth?: number
  imageHeight?: number
}

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  imageGallery?: ImageGalleryType[]
}

export default PostType
