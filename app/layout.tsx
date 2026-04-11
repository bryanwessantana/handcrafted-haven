import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A curated marketplace for Curitiba artisans and their handcrafted products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg"
        >
          Skip to main content
        </a>

        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-xl font-black tracking-tight text-slate-950">
              Handcrafted <span className="text-[#65A30D]">Haven</span>
            </Link>

            <nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm font-semibold text-slate-600">
              <Link href="/" className="rounded-md hover:text-[#65A30D] focus:outline-none focus:ring-2 focus:ring-[#65A30D] focus:ring-offset-2">
                Home
              </Link>
              <Link href="/artisans" className="rounded-md hover:text-[#65A30D] focus:outline-none focus:ring-2 focus:ring-[#65A30D] focus:ring-offset-2">
                Artisans
              </Link>
              <a href="#catalog" className="rounded-md hover:text-[#65A30D] focus:outline-none focus:ring-2 focus:ring-[#65A30D] focus:ring-offset-2">
                Catalog
              </a>
              <a href="#reviews" className="rounded-md hover:text-[#65A30D] focus:outline-none focus:ring-2 focus:ring-[#65A30D] focus:ring-offset-2">
                Reviews
              </a>
            </nav>
          </div>
        </header>

        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
