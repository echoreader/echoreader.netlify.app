import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { siteUrl } from '../utils/config-utils';

export default function CustomHead({ title, description }) {
  const router = useRouter();
  const canonicalUrl = `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <>
      <Head>
        {/* 1. SEO Meta */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <link rel="canonical" href={canonicalUrl} />

        {/* 2. AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-6771362188294710"
          crossOrigin="anonymous"
        ></script>

        {/* 3. Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      {/* 4. Cloudflare Beacon */}
      <Script id="skip-analytics" strategy="lazyOnload">
        {`
          if (window.location.search.includes("no-track")) {
            localStorage.setItem("skipAnalytics", "true");
          }

          if (localStorage.getItem("skipAnalytics") !== "true") {
            const cfScript = document.createElement("script");
            cfScript.defer = true;
            cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
            cfScript.setAttribute("data-cf-beacon", '{"token": "7699fbd2379d441588fc8971b1541b1c"}');
            document.head.appendChild(cfScript);
          }
        `}
      </Script>

      {/* 5. Schema */}
    </>
  );
}
