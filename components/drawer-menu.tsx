import Link from "next/link"

export const DrawerMenu = () => {
  return (
    <>
      <li className="pt-2 pb-2 pl-4 text-xl lg:text-[1rem]">
        <Link href="/">
          <span className="text-shadow">Home</span>
        </Link>
      </li>

      <li className="pt-2 pb-2 pl-4 text-xl lg:text-[1rem]">
        <Link href="/gooey-menu">
          <span className="text-shadow">Gooey Menu </span>
        </Link>
      </li>

      <li className="pt-2 pb-2 pl-4 text-xl lg:text-[1rem]">
        <Link href="/codepen">
          <span className="text-shadow">Codepen Experiments</span>
        </Link>
      </li>
      <li className="pt-2 pb-2 pl-4 text-xl lg:text-[1rem]">
        <Link href="card-experiment/">
          <span className="text-shadow">Card Experiments</span>
        </Link>
      </li>
    </>
  )
}
