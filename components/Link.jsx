import { siteUrl } from '../utils/site'

export default function Link({ href, children }) {
  const isAbsolute = href?.startsWith('/')
  const finalHref = isAbsolute ? new URL(href, siteUrl).href : href

  return (
    <a href={finalHref} className="external">
      {children}
    </a>
  )
}
