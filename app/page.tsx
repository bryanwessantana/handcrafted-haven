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
    <>
      {/* ── Hero Section ── */}
      <section className="bg-[#0F172A] pt-20 pb-28 px-6 text-center relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#65A30D]/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#65A30D]/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#65A30D]/15 text-[#65A30D] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#65A30D]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#65A30D] animate-pulse" />
            Curitiba&apos;s Artisan Marketplace
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white leading-none">
            Handcrafted{' '}
            <span className="text-[#65A30D] italic">Haven</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover unique treasures from Curitiba&apos;s finest artisans.
            Every piece tells a story — find yours today.
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-10 mb-12">
            {[
              { value: '6+', label: 'Products' },
              { value: '3', label: 'Artisans' },
              { value: '3', label: 'Categories' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs text-white/40 font-semibold uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search unique products..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white text-gray-900 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#65A30D] transition-all text-sm font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ── Catalog Section ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-black text-[#111827] tracking-tight">All Products</h2>
            <p className="text-sm text-gray-400 font-medium mt-0.5">
              Showing <span className="text-[#65A30D] font-bold">{filteredProducts.length}</span> of {allProducts.length} products
            </p>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  selectedCategory === cat
                    ? 'bg-[#65A30D] text-white border-[#65A30D] shadow-lg shadow-green-900/20'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-[#65A30D] hover:text-[#65A30D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg font-medium">No products found matching your criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 text-[#65A30D] text-sm font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* ── Featured Artisans Banner ── */}
      <section className="bg-[#0F172A] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white tracking-tight mb-2">Meet Our Artisans</h2>
            <p className="text-white/50 text-sm font-medium">The talented makers behind every piece</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: 'Elena Silva', specialty: 'Ceramics', location: 'Santa Felicidade, Curitiba' },
              { name: 'Marco Rossi', specialty: 'Woodwork', location: 'Paraná Forests' },
              { name: 'Sofia Chen', specialty: 'Textiles', location: 'Curitiba, Paraná' },
            ].map((artisan) => (
              <div key={artisan.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center">
                <div className="w-14 h-14 rounded-full bg-[#65A30D]/20 border border-[#65A30D]/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#65A30D] font-black text-xl">{artisan.name[0]}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{artisan.name}</h3>
                <p className="text-[#65A30D] text-xs font-bold uppercase tracking-widest mt-1">{artisan.specialty}</p>
                <p className="text-white/40 text-xs mt-2">{artisan.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
