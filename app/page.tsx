'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

const allProducts = [
  { id: 1, name: 'Ceramic Serving Bowl', artisan: 'Elena Silva', price: '$45.00', category: 'Ceramics' },
  { id: 2, name: 'Hand-Carved Walnut Spoon', artisan: 'Marco Rossi', price: '$28.00', category: 'Woodwork' },
  { id: 3, name: 'Organic Cotton Blanket', artisan: 'Sofia Chen', price: '$110.00', category: 'Textiles' },
  { id: 4, name: 'Clay Flower Vase', artisan: 'Elena Silva', price: '$35.00', category: 'Ceramics' },
  { id: 5, name: 'Oak Cutting Board', artisan: 'Marco Rossi', price: '$55.00', category: 'Woodwork' },
  { id: 6, name: 'Embroidered Cushion', artisan: 'Sofia Chen', price: '$65.00', category: 'Textiles' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Ceramics', 'Woodwork', 'Textiles'];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#FDFDFD] antialiased">
      {/* Hero Section */}
      <section className="bg-[#0F172A] pt-20 pb-24 px-6 text-center text-[white]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic text-white">
            Handcrafted <span className="text-[#65A30D] not-italic">Haven</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Discover unique treasures from Curitiba`s finest artisans.
          </p>
          
          {/* Search Bar - Task #7 */}
          <div className="max-w-md mx-auto relative">
            <input 
              type="text"
              placeholder="Search unique products..."
              className="w-full px-6 py-4 rounded-2xl bg-white text-gray-900 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#65A30D] transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Catalog Grid Section - Task #5 */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                  ? 'bg-[#65A30D] text-white shadow-lg shadow-green-900/20' 
                  : 'bg-white text-gray-500 border border-gray-100 hover:border-[#65A30D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-gray-400 text-sm font-medium">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </section>
    </main>
  );
}