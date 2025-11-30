import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';
import rehypeUnwrapImages from 'rehype-unwrap-images';

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getPostFilePaths = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));
};

export const sortPostsByDate = (posts) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.date);
    const bDate = new Date(b.data.date);
    return bDate - aDate;
  });
};

export const getAllPosts = () => {
  const posts = getPostFilePaths().map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    // Normalisasi tags
    const tags = Array.isArray(data.tags)
      ? data.tags
      : typeof data.tags === 'string'
        ? data.tags.split(',').map(t => t.trim())
        : [];

    return { content, data: { ...data, tags }, filePath };
  });

  return sortPostsByDate(posts);
};

export const getPostBySlug = async (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  // Normalisasi tags
  const tags = Array.isArray(data.tags)
    ? data.tags
    : typeof data.tags === 'string'
      ? data.tags.split(',').map(t => t.trim())
      : [];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism, rehypeUnwrapImages],
    },
    scope: { ...data, tags },
  });

  return { mdxSource, data: { ...data, tags }, content,
  postFilePath };
};

export const getAllSlugs = () => {
  return getPostFilePaths().map((filePath) =>
    filePath.replace(/\.mdx?$/, '')
  );
};