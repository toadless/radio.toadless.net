import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${spaceGrotesk.variable} text-white`}>
      <Component {...pageProps} />
    </main>
  )
}