import { siteUrl } from "../utils/config-utils"; // ← ambil siteUrl

export default function Footer({ }) {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-solid border-gray-300 dark:border-gray-700 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        
        {/* Left: Copyright */}
        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          All Right Reserved <span className="font-medium">Craftflavor</span>
        </div>

        {/* Right: Menu vertikal */}
        <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 md:items-end">
          <a
            href={`${siteUrl}/contact/`}
            className="no-underline hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
          <a
            href={`${siteUrl}/disclaimer/`}
            className="no-underline hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Disclaimer
          </a>
          <a
            href={`${siteUrl}/privacy-policy/`}
            className="no-underline hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
