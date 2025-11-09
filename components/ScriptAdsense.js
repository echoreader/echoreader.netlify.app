import Script from 'next/script'

export default function ScriptAdsense() {
  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-6771362188294710"
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  )
}
