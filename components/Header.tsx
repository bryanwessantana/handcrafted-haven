import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F172A] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#65A30D] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-white font-black text-lg tracking-tight">
            Handcrafted <span className="text-[#65A30D]">Haven</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
            Marketplace
          </Link>
          <Link href="/" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
            Artisans
          </Link>
          <Link href="/" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
            About
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-2 bg-[#65A30D] hover:bg-[#4d7a09] text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}
