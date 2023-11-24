"use client"

import { GithubIcon } from "./icons/github"
import { LinkedinIcon } from "./icons/linkedin"
import { TwitterIcon } from "./icons/twitter"

const Footer = () => {
  return (
    <footer className="p-10 footer bg-neutral text-neutral-content">
      <div className="grid-flow-col gap-4 social-icons">
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
      </div>
      <></>
    </footer>
  )
}

export default Footer
