"use client";
import { siteUrl } from "../utils/config-utils"; // ← ambil siteUrl
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-solid border-gray-300 h-16">
        <div className="max-w-4xl mx-auto px-4 flex h-full items-center justify-between">
          {/* Brand kiri tanpa underline */}
          <a
            href={`${siteUrl}`}
            className="text-2xl font-semibold text-gray-900 no-underline"
          >
            Craftflavor
          </a>

          {/* ☰ Mobile toggle */}
          <button
            className="flex flex-col justify-center gap-1 sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>

          {/* Menu desktop */}
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-700 tracking-wide">
            <a
              href={`${siteUrl}/blog/`}
              className="no-underline hover:text-blue-600 transition"
            >
              Blog
            </a>
            <a
              href={`${siteUrl}/about/`}
              className="no-underline hover:text-blue-600 transition"
            >
              About
            </a>
          </nav>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav className="flex flex-col gap-4 mt-4 text-sm font-medium text-gray-700 tracking-wide sm:hidden">
            <a
              href={`${siteUrl}/blog`}
              className="no-underline hover:text-blue-600 transition"
            >
              Blog
            </a>
            <a
              href={`${siteUrl}/about`}
              className="no-underline hover:text-blue-600 transition"
            >
              About
            </a>
          </nav>
        )}
      
    </header>
  );
}
