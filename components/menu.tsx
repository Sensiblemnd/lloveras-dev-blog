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

type MenuProps = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  isOpen?: boolean
}

export const Menu = ({ setIsOpen, isOpen }: MenuProps) => {
  const handleIsOpenMenu = () => {
    setIsOpen && setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full gap-4 ">
      <div className="flex-none lg:hidden md:hidden">
        <button className="btn btn-square btn-ghost" onClick={handleIsOpenMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <ul className="flex flex-row hidden gap-4 py-4 lg:flex md:flex ">
        <Li>
          <Link href="/">
            <span className="text-shadow">Home</span>
          </Link>
        </Li>

        <Li>
          <Link href="/gooey-menu">
            <span className="text-shadow">Gooey Menu </span>
          </Link>
        </Li>

        <Li>
          <Link href="/codepen">
            <span className="text-shadow">Codepen Experiments</span>
          </Link>
        </Li>
      </ul>
    </nav>
  )
}

export default Menu
