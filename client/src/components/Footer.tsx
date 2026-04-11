import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#2563eb] text-white border-t border-border mt-0"
      role="contentinfo" style={{backgroundColor: '#0b1938'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Handcrafted Haven</h3>
            <p className="text-sm leading-relaxed">
              Discover unique treasures from Curitiba's finest artisans. Every piece tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-blue-200 transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="hover:text-blue-200 transition-colors">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/artisans">
                  <a className="hover:text-blue-200 transition-colors">Artisans</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <p className="text-sm">
              Curitiba, Paraná, Brazil<br />
              <a href="mailto:info@handcraftedhaven.com" className="hover:text-blue-200 transition-colors">
                info@handcraftedhaven.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-sm text-center">
            &copy; {currentYear} Handcrafted Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
