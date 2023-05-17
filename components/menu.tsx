import Link from "next/link"

// li component take string children
type Props = {
  children: React.ReactNode | string
}
const Li = ({ children }: Props) => {
  return (
    <li className="pt-2 pb-2  pl-4  text-xl border-white lg:pt-[revert] lg:pb-[revert] lg:pl-[revert] lg:text-[1rem]">
      {children}
    </li>
  )
}

export const Menu = () => {
  return (
    <nav className="w-full ">
      <ul className="flex flex-col py-4 lg:grid lg:justify-start lg:grid-flow-col lg:gap-5 lg:shadow-black">
        <Li>
          <Link href="/">
            <a className="text-shadow">Home</a>
          </Link>
        </Li>

        <Li>
          <Link href="/gooey-menu">
            <a className="text-shadow">Gooey Menu </a>
          </Link>
        </Li>

        <Li>
          <Link href="/codepen">
            <a className="text-shadow">Codepen Experiments</a>
          </Link>
        </Li>
      </ul>
    </nav>
  )
}

export default Menu
