// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body className="m-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
