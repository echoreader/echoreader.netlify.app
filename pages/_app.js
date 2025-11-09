// pages/_app.js
import Layout from '../components/Layout'
import '../styles/unocss.css'
import { Open_Sans } from 'next/font/google'

// load font sekali untuk seluruh app
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  const meta = Component.meta || {}

  return (
    <Layout
      globalData={pageProps.globalData}
      meta={meta}
      className={openSans.className}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
