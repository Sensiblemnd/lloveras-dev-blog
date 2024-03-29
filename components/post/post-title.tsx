import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-2xl font-bold leading-tight tracking-tighter text-center md:text-3xl lg:text-4xl md:leading-none md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
