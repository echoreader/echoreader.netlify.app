import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { siteUrl } from '../utils/config-utils';
import ScriptAdsense from './ScriptAdsense';
import ScriptCloudFlare from './ScriptCloudFlare'

export default function CustomHead({ title, description }) {
  const router = useRouter();
  const canonicalUrl = `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <>
      <Head>
        {/* 1. Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 2. SEO Meta */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <link rel="canonical" href={canonicalUrl} />

        {/* 3. AdSense */}
        <ScriptAdsense />

        {/* 4. Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      {/* 5. Cloudflare Beacon */}
      <ScriptCloudFlare />

      {/* 6. Schema */}
    </>
  );
}
