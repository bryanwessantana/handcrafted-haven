import { useState, useMemo } from 'react';
import { Link, useLocation } from 'wouter';
import { Search } from 'lucide-react';

export default function Products() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialSearch = searchParams.get('search') || '';
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock products data with real images
  const allProducts = [
    { id: 1, name: 'Ceramic Serving Bowl', artisan: 'Elena Silva', artisanId: 1, price: '$45.00', category: 'Ceramics', imageUrl: 'https://images.unsplash.com/photo-1677336037712-c620a0d977ff?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Hand-Carved Walnut Spoon', artisan: 'Marco Rossi', artisanId: 2, price: '$28.00', category: 'Woodwork', imageUrl: 'https://images.unsplash.com/photo-1549859455-746ef4fae03b?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Organic Cotton Blanket', artisan: 'Sofia Chen', artisanId: 3, price: '$110.00', category: 'Textiles', imageUrl: 'https://plus.unsplash.com/premium_photo-1755534835350-d8baf3db28fa?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Clay Flower Vase', artisan: 'Elena Silva', artisanId: 1, price: '$35.00', category: 'Ceramics', imageUrl: 'https://images.unsplash.com/photo-1635184494625-f2f8c8c0c9e7?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Oak Cutting Board', artisan: 'Marco Rossi', artisanId: 2, price: '$55.00', category: 'Woodwork', imageUrl: 'https://plus.unsplash.com/premium_photo-1714785784388-9ff2e5d58dcb?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'Embroidered Cushion', artisan: 'Sofia Chen', artisanId: 3, price: '$65.00', category: 'Textiles', imageUrl: 'https://plus.unsplash.com/premium_photo-1670256539562-dd34515dddd9?w=500&auto=format&fit=crop&q=60' },
  ];

  const categories = ['All', 'Ceramics', 'Woodwork', 'Textiles'];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-card to-background py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-foreground">Our Products</h1>
          <p className="text-lg text-muted-foreground">Browse our collection of handcrafted treasures</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <label htmlFor="search" className="block text-sm font-medium text-foreground mb-2">
              Search Products
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                id="search"
                type="text"
                placeholder="Search by product name or artisan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Search products"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground border-primary shadow-md'
                      : 'bg-card text-foreground border-border hover:border-primary hover:text-primary'
                  }`}
                  aria-pressed={selectedCategory === cat}
                  aria-label={`Filter by ${cat} category`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Info and Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-bold text-primary">{filteredProducts.length}</span> of {allProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <a className="group block">
                    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative overflow-hidden bg-muted h-64 sm:h-72">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {product.category}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          By{' '}
                          <span className="text-primary font-medium">
                            {product.artisan}
                          </span>
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-serif font-bold text-primary">{product.price}</span>
                          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-card rounded-lg border border-border">
              <Search className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-lg text-muted-foreground font-medium mb-4">No products found</p>
              <p className="text-sm text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-primary font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
