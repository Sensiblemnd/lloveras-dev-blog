import classNames from "classnames"
import { useRef, useState } from "react"
import { useOnClickOutside, useWindowSize } from "usehooks-ts"
import { GithubIcon } from "./icons/github"
import { LinkedinIcon } from "./icons/linkedin"
import { TwitterIcon } from "./icons/twitter"
import Menu from "./menu"

const Header = () => {
  const { width } = useWindowSize()

  //useState isOpen
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = () => {
    if (width <= 1024) {
      setIsOpen(!isOpen)
    }
  }

  const handleClickInside = () => {
    if (width > 1024) {
      setIsOpen(false)
    }
  }
  useOnClickOutside(ref, handleClickOutside)

  const defaultClasses = `fixed top-0 left-0 z-40 w-64 h-screen transition-transform lg:relative lg:h-auto lg:w-auto lg:flex lg:flex-row lg:items-center lg:justify-between lg:mb-[15px] lg:bg-transparent bg-black lg:translate-x-0`
  return (
    <header
      className={classNames(defaultClasses, {
        "-translate-x-full": !isOpen,
      })}
      ref={ref}
      onClick={handleClickInside}
    >
      <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-6xl md:tracking-tighter"></h1>

      <Menu />
      <div className="social-icons pl-3 lg:pl-[revert]">
        <div className="flex gap-5">
          <span>Social:</span>
          <span className="flex gap-5 ">
            <a
              href="https://twitter.com/robll/"
              className="genericon genericon-twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
              <span className="sr-only">View robll’s profile on Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rob-lloveras-1560bbb/"
              className="genericon genericon-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              <span className="sr-only">View Rob Lloveras profile on LinkedIn</span>
            </a>

            <a
              href="https://github.com/Sensiblemnd/"
              className="text-white genericon genericon-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              <span className="sr-only">View Sensiblemnd’s profile on GitHub</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
