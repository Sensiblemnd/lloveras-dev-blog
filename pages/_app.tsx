import "@/styles/globals.css"
import "@/styles/sass/main.scss"
import { AnimateSharedLayout } from "framer-motion"

import { AppProps } from "next/app"
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}
