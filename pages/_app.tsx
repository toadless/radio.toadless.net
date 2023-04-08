import Header from '@/components/header/Header';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Font
import { Space_Grotesk } from "next/font/google"
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

// Font Awesome (Icons)
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${spaceGrotesk.variable} text-white`}>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}