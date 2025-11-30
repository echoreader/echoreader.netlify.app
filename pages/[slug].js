import { getGlobalData } from '../utils/global-data';
import {
  getPostBySlug,
  getPostFilePaths,
  getAllPosts
} from '../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import CustomImage from '../components/CustomImage';
import Link from '../components/Link';
import CustomHead from '../components/Head';
import { siteUrl } from "../utils/site";
import Schema from '../components/Schema';
import SchemaFaq from '../components/SchemaFaq';

const components = {
  Head,
  img: CustomImage,
  a: Link,
  Link,
};

export default function PostPage({
  source,
  frontMatter,
  slug,
  prevPost,
  nextPost,
}) {
  return (
    <>
      <CustomHead
        title={`${frontMatter.title} | Craftflavor`}
        description={frontMatter.description}
      />

      <Schema type="article" data={{
        title: frontMatter.title,
        description: frontMatter.description,
        date: frontMatter.date,
        author: frontMatter.author || 'Echo Reader',
        tags: frontMatter.tags,
        category: frontMatter.category,
        url: `${siteUrl}/${slug}/`
      }} />

      <Schema type="breadcrumb" data={{
        title: frontMatter.title,
        category: frontMatter.category,
        url: `${siteUrl}/${slug}/`
      }} />

      <SchemaFaq faqs={frontMatter.faqs} />

      <nav className="text-sm text-gray-600 mb-4 px-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">Home</Link>
        {frontMatter.category ? (
          <>
            <span aria-hidden="true"> &gt; </span>
            <span className="text-gray-800">{frontMatter.category}</span>
            <span aria-hidden="true"> &gt; </span>
            <span className="text-gray-800 font-semibold">{frontMatter.title}</span>
          </>
        ) : (
          <>
            <span aria-hidden="true"> &gt; </span>
            <span className="text-gray-800 font-semibold">{frontMatter.title}</span>
          </>
        )}
      </nav>

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
              {frontMatter.title}
            </a>
          </h1>

          {frontMatter.date && (
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400" data-sb-field-path="date">
              <time dateTime={frontMatter.date}>
                {new Date(frontMatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </time>
            </p>
          )}

          {frontMatter.description && (
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300" data-sb-field-path="description">
              {frontMatter.description}
            </p>
          )}

          {frontMatter.author && (
            <p className="text-sm text-gray-700 dark:text-gray-300 px-4 mb-6">
              <strong>Author:</strong> <span>{frontMatter.author}</span>
            </p>
          )}

          <MDXRemote {...source} components={components} scope={{ siteUrl }} />
        </section>

        {frontMatter.tags && frontMatter.tags.length > 0 && (
          <div className="mt-8 text-sm text-gray-600 px-4">
            <strong className="block mb-2">Tags:</strong>
            <div className="flex flex-wrap gap-2">
              {frontMatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <nav className="flex justify-between mt-12 px-4 text-sm text-blue-600" aria-label="Post navigation">
          {prevPost ? (
            <div className="flex items-center gap-1">
              <span aria-hidden="true">&laquo;</span>
              <Link
                href={`/${prevPost.filePath.replace(/\.mdx?$/, '')}/`}
                className="hover:underline"
              >
                {prevPost.data.title}
              </Link>
            </div>
          ) : (
            <span />
          )}

          {nextPost ? (
            <div className="flex items-center gap-1">
              <Link
                href={`/${nextPost.filePath.replace(/\.mdx?$/, '')}/`}
                className="hover:underline"
              >
                {nextPost.data.title}
              </Link>
              <span aria-hidden="true">&raquo;</span>
            </div>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </>
  );
}

function extractFaqs(content) {
  const regex = /<details>\s*<summary>(.*?)<\/summary>\s*<p>(.*?)<\/p>\s*<\/details>/gs;
  const faqs = [];
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    faqs.push({ 
      question: match[1].trim(), 
      answer: match[2].trim() 
    });
  }
  
  return faqs;
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data, content } = await getPostBySlug(params.slug);
  const allPosts = getAllPosts();
  const faqs = extractFaqs(content);
  const slugs = allPosts.map(post => post.filePath.replace(/\.mdx?$/, ''));
  const index = slugs.indexOf(params.slug);
  const prevPost = index > 0 ? allPosts[index - 1] : null;
  const nextPost = (index !== -1 && index < slugs.length - 1) ? allPosts[index + 1] : null;

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: { 
        ...data, 
        faqs
      },
      slug: params.slug,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    .map((p) => p.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};