import "@/styles/globals.css"
import "@/styles/sass/main.scss"
import { Analytics } from "@vercel/analytics/react"
import { LayoutGroup } from "framer-motion"

import { AppProps } from "next/app"
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutGroup>
      <Component {...pageProps} />
      <Analytics />
    </LayoutGroup>
  )
}
