'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { categories, getProducts } from '@/lib/data';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allProducts = getProducts();
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[color:var(--background)]">
      <section className="relative overflow-hidden bg-[#0F172A] pt-24 pb-20 text-white">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(101,163,13,0.18),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">Curated marketplace</p>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">Curated pieces from Curitiba artisans.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Discover handcrafted home goods, artisan stories, and filtered collections designed to celebrate local makers.
          </p>

          <div className="mx-auto mt-12 max-w-2xl">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products, artisans, or categories"
              className="w-full rounded-[2rem] border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/60 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.4)] focus:border-[#65A30D] focus:outline-none focus:ring-2 focus:ring-[#65A30D]/40"
            />
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/artisans"
              className="inline-flex items-center justify-center rounded-full bg-[#65A30D] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#65A30D]/20 transition hover:bg-[#4d7c0f]"
            >
              Browse Artisans
            </Link>
            <p className="text-sm text-white/70">{filteredProducts.length} pieces available to explore.</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10">
          <section aria-labelledby="catalog-heading">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">Product catalog</p>
                <h2 id="catalog-heading" className="mt-3 text-4xl font-black text-[#111827]">
                  A catalog built for discovery.
                </h2>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">{filteredProducts.length} items</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-[#111827] text-white border border-[#111827]'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-[#65A30D] hover:text-[#65A30D]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          <section aria-labelledby="filter-heading">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 id="filter-heading" className="text-2xl font-bold text-[#111827]">
                  Filter by category or artisan name.
                </h3>
                <p className="mt-2 text-gray-600">Search connects you directly to the makers and their handcrafted collections.</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-16 text-center shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-800">No matches found</h3>
                <p className="mt-3 text-slate-500">Try a different search term, category, or explore our artisan profiles.</p>
              </div>
            )}
          </section>

          <section id="reviews" aria-labelledby="reviews-heading" className="rounded-[2rem] border border-slate-200 bg-white p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">Verified reviews</p>
                <h2 id="reviews-heading" className="mt-4 text-4xl font-black text-[#111827]">
                  Loved by customers and craft collectors alike.
                </h2>
                <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
                  Each review is written by a verified shopper who selected a piece from our artisan network.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.5rem] bg-[#F8FAFC] p-6">
                  <p className="text-lg font-semibold text-[#111827]">“Exceptional quality and thoughtful design.”</p>
                  <p className="mt-3 text-sm text-slate-500">— María, Curitiba</p>
                </div>
                <div className="rounded-[1.5rem] bg-[#F8FAFC] p-6">
                  <p className="text-lg font-semibold text-[#111827]">“The artisan story made my purchase feel special.”</p>
                  <p className="mt-3 text-sm text-slate-500">— Gabriel, São Paulo</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-12 px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-600 md:flex-row md:justify-between md:items-center">
          <div className="font-semibold text-slate-900">Handcrafted Haven</div>
          <p>Copyright © 2026. Built for artisan discovery and curated product stories.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition hover:text-[#65A30D]">Instagram</a>
            <a href="#" className="transition hover:text-[#65A30D]">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
