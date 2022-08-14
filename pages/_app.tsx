import "@/styles/globals.css";
import "@/styles/sass/main.scss";
import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
