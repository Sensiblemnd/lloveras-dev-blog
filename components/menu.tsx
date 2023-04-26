import Link from "next/link"

export const Menu = () => {
  return (
    <nav className="w-full">
      <ul className="grid justify-start grid-flow-col gap-5 py-4 shadow-black">
        <li>
          <Link href="/">
            <a className="text-shadow">Home</a>
          </Link>
        </li>

        <li>
          <Link href="/gooey-menu">
            <a className="text-shadow">Gooey Menu </a>
          </Link>
        </li>

        <li>
          <Link href="/codepen">
            <a className="text-shadow">Codepen Experiments</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
