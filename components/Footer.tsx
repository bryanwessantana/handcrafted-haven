import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#65A30D] flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-black text-lg tracking-tight">
                Handcrafted <span className="text-[#65A30D]">Haven</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Connecting Curitiba&apos;s finest artisans with people who appreciate the beauty of handmade craftsmanship.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-5">Explore</h4>
            <ul className="space-y-3">
              {['Marketplace', 'Artisans', 'Categories', 'About Us'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-white/60 hover:text-[#65A30D] text-sm font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-5">Categories</h4>
            <ul className="space-y-3">
              {['Ceramics', 'Woodwork', 'Textiles', 'Jewelry'].map((cat) => (
                <li key={cat}>
                  <Link href="/" className="text-white/60 hover:text-[#65A30D] text-sm font-medium transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-medium">
            © 2025 Handcrafted Haven. Made with care in Curitiba, Brazil.
          </p>
          <p className="text-white/30 text-xs">
            BYU — Web Frontend Development · Final Project
          </p>
        </div>
      </div>
    </footer>
  );
}
