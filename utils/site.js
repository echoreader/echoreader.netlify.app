const isProd = process.env.NODE_ENV === "production"; // ← auto-detect environment

export const siteUrl = isProd
  ? "https://craftflavor.blog"     // ← domain production
  : "http://localhost:3000";       // ← domain lokal
