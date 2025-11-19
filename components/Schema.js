import Head from 'next/head';

export default function Schema({ type, data = {} }) {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Echo Reader",
      "url": "https://craftflavor.blog",
      "logo": "https://craftflavor.blog/logo.png",
      "sameAs": [
        "https://blogspot.com/echo-reader",
        "https://twitter.com/echoreader"
      ]
    },
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title || "Untitled Post",
      "description": data.description || "No description available",
      "datePublished": data.date || "2025-01-01",
      "dateModified": data.modified || data.date || "2025-01-01",
      "author": {
        "@type": "Person",
        "name": data.author || "Echo Reader"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Echo Reader",
        "logo": {
          "@type": "ImageObject",
          "url": "https://craftflavor.blog/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.url || "https://craftflavor.blog/blog"
      },
      "keywords": Array.isArray(data.tags) ? data.tags.join(", ") : undefined,
      "articleSection": data.category || undefined
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://craftflavor.blog/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": data.category || "Blog",
          "item": "https://craftflavor.blog/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": data.title || "Untitled Post",
          "item": data.url || "https://craftflavor.blog/blog"
        }
      ]
    },
    profile: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Echo",
      "url": "https://craftflavor.blog/about",
      "sameAs": [
        "https://blogspot.com/echo-reader",
        "https://twitter.com/echoreader"
      ]
    }
  };

  const selectedSchema = schemas[type];

  if (!selectedSchema) return null;

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(selectedSchema)}
      </script>
    </Head>
  );
}