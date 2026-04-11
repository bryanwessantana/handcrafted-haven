import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Search } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav 
      className="sticky top-0 z-50 bg-background border-b border-border shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <a className="text-2xl font-bold text-primary hover:text-accent transition-colors" aria-label="Handcrafted Haven - Home">
              <span className="font-serif">Handcrafted</span> <span className="italic">Haven</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-16 ml-12">
            <Link href="/">
              <a className="text-foreground hover:text-primary transition-colors font-medium" aria-current="page">
                Home
              </a>
            </Link>
            <Link href="/products">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                Products
              </a>
            </Link>
            <Link href="/artisans">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                Artisans
              </a>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2"
            role="search"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm w-48"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Submit search"
            >
              <Search size={18} />
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 border-t border-border">
            <div className="space-y-2 py-4">
              <Link href="/">
                <a 
                  className="block px-4 py-2 text-foreground hover:bg-card rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </Link>
              <Link href="/products">
                <a 
                  className="block px-4 py-2 text-foreground hover:bg-card rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </a>
              </Link>
              <Link href="/artisans">
                <a 
                  className="block px-4 py-2 text-foreground hover:bg-card rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Artisans
                </a>
              </Link>
            </div>

            {/* Search Bar - Mobile */}
            <form 
              onSubmit={handleSearch}
              className="px-4 py-2 border-t border-border"
              role="search"
            >
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-foreground placeholder-muted-foreground text-sm flex-1"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Submit search"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}
