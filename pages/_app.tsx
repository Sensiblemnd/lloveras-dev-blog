import "@/styles/globals.css"
import "@/styles/sass/main.scss"
import { Analytics } from "@vercel/analytics/react"
import { LayoutGroup } from "framer-motion"
import Script from "next/script"

import { AppProps } from "next/app"
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutGroup>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HV07LFK0N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7HV07LFK0N');
        `}
        </Script>
        <Component {...pageProps} />
        <Analytics />
      </LayoutGroup>
    </>
  )
}
