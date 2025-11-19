import Link from 'next/link';
import Pagination from '../../../components/Pagination';
import { getAllPosts } from '../../../utils/mdx-utils';
import { siteUrl } from '../../../utils/config-utils';

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const perPage = 10;
  const totalPages = Math.ceil(posts.length / perPage);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10);
  const perPage = 10;
  const posts = await getAllPosts();

  const paginated = posts.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(posts.length / perPage);

  return { props: { posts: paginated, page, totalPages } };
}

export default function BlogPage({ posts, page, totalPages }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-left mb-6 lg:text-5xl">All Posts</h1>

      <div className="grid gap-3">
        {posts.map((post) => {
          const slug = post.filePath.replace(/\.mdx?$/, '');
          const postUrl = `${siteUrl}/${slug}/`;
          return (
            <div
              key={slug}
              className="border border-solid border-gray-400 rounded-lg p-6 shadow-sm space-y-4"
            >
              <h2 className="text-4xl font-semibold text-gray-900 mb-3">
                <a
                  href={postUrl}
                  aria-label={`Read Article: ${post.data.title}`}
                  className="text-blue-700 no-underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {post.data.title}
                </a>
              </h2>

              <p className="mb-3 text-sm font-medium text-gray-600">
                {post.data.date || 'Date not available'}
              </p>

              {post.data.description && (
                <p className="text-base text-gray-700 leading-relaxed">
                  {post.data.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} basePath="/blog/page" />
    </>
  );
}