import { getGlobalData } from '../utils/global-data';
import {
  getPostBySlug,
  getPostFilePaths,
} from '../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import CustomImage from '../components/CustomImage';
import Link from '../components/Link';
import CustomHead from '../components/Head';
import { siteUrl } from "../utils/site"; // ← ambil siteUrl

const components = {
  //a: CustomLink,
  Head,
  img: CustomImage,
  a: Link, // override default <a>
  Link,    // custom usage
};

export default function PostPage({
  source,
  frontMatter,
  slug,
}) {
  return (
    <>
      <CustomHead
        title={`${frontMatter.title} | Craftflavor`}
        description={frontMatter.description}
      />

      {/* === MAIN CONTENT === */}
      <article data-sb-object-id={`posts/${slug}.mdx`}>
        <section
          className="prose dark:prose-invert prose-headings:text-left max-w-4xl mx-auto px-4"
          data-sb-field-path="markdown_content"
        >
          <h1 className="mb-6 text-3xl md:text-5xl dark:text-white" data-sb-field-path="title">
              <a
              href={`${siteUrl}/${slug}/`}
              aria-label={`Permalink to: ${frontMatter.title}`}
              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
            {frontMatter.title}</a>
          </h1>

          {frontMatter.date && (
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400" data-sb-field-path="date">
              {new Date(frontMatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          )}
          
          {frontMatter.description && (
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300" data-sb-field-path="description">
              {frontMatter.description}
            </p>
          )}

          <MDXRemote {...source} components={components} scope={{ siteUrl }} />
        </section>

        {/* === PREV / NEXT NAVIGATION === */}
        {/* <div className="grid mt-12 md:grid-cols-2 gap-4">
          ...prev/next links... 
        </div>*/}
      </article>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};