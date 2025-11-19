import Link from 'next/link';

export default function Pagination({ currentPage, totalPages, basePath = '/blog/page' }) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="flex justify-between items-center mt-10 px-4 py-2 border-t border-gray-300 text-sm">
      <div>
        {prevPage ? (
          <Link
            href={prevPage === 1 ? '/blog' : `${basePath}/${prevPage}`}
            className="text-blue-600 hover:underline"
          >
            ← Prev
          </Link>
        ) : (
          <span className="text-gray-400 cursor-not-allowed">← Prev</span>
        )}
      </div>

      <div className="text-gray-600">
        Page {currentPage} of {totalPages}
      </div>

      <div>
        {nextPage ? (
          <Link
            href={`${basePath}/${nextPage}`}
            className="text-blue-600 hover:underline"
          >
            Next →
          </Link>
        ) : (
          <span className="text-gray-400 cursor-not-allowed">Next →</span>
        )}
      </div>
    </nav>
  );
}