import Link from 'next/link';
import { getAllPosts } from '../../utils/mdx-utils';
import { getGlobalData } from '../../utils/global-data';
import ArrowIcon from '../../components/ArrowIcon';
import { siteUrl } from "../../utils/config-utils";

export default function BlogPage({ posts, globalData }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-left mb-6 lg:text-5xl">All Posts</h1>
      <div className="grid gap-3">
        {posts.map((post) => {
          const slug = post.filePath.replace(/\.mdx?$/, '');
          const postUrl = `${siteUrl}/${slug}/`;
          return (
            <div key={slug} className="border border-solid border-gray-400 rounded-lg p-6 shadow-sm space-y-4">
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
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const globalData = await getGlobalData();
  return {
    props: { posts, globalData },
  };
}

BlogPage.meta = {
  title: 'CraftFlavor Articles — DIY Tutorials, Food Crafts & Flavorful Projects',
  description:
    'Explore CraftFlavor curated articles on handmade projects, cooking hacks, and food-inspired crafts. From kitchen creativity to practical design ideas.',
};
