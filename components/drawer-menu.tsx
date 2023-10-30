import Link from "next/link"

export const DrawerMenu = () => {
  return (
    <>
      <li className="pt-2 pb-2  pl-4  text-xl border-white lg:pt-[revert] lg:pb-[revert] lg:pl-[revert] lg:text-[1rem]">
        <Link href="/">
          <a className="text-shadow">Home</a>
        </Link>
      </li>

      <li
        style={{ padding: "100px" }}
        className="pt-2 pb-2  pl-4  text-xl border-white lg:pt-[revert] lg:pb-[revert] lg:pl-[revert] lg:text-[1rem]"
      >
        <Link href="/gooey-menu">
          <a className="text-shadow">Gooey Menu </a>
        </Link>
      </li>

      <li className="pt-2 pb-2  pl-4  text-xl border-white lg:pt-[revert] lg:pb-[revert] lg:pl-[revert] lg:text-[1rem]">
        <Link href="/codepen">
          <a className="text-shadow">Codepen Experiments</a>
        </Link>
      </li>
    </>
  )
}
