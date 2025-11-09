import Script from 'next/script'

export default function ScriptCloudFlare() {
  const skipBeacon = typeof window !== 'undefined' &&
    (window.location.search.includes('no-track') || localStorage.getItem('skipAnalytics') === 'true')

  if (skipBeacon) return null

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="lazyOnload"
      data-cf-beacon='{"token": "7699fbd2379d441588fc8971b1541b1c"}'
      defer
    />
  )
}
