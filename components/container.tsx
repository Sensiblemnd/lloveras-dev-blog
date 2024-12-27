type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container px-10 mx-auto md:px-20">{children}</div>
}

export default Container
