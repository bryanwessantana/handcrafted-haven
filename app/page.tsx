import Image from 'next/image'

const featuredProducts = [
  { id: 1, name: 'Ceramic Serving Bowl', artisan: 'Elena Silva', price: '$45.00', category: 'Ceramics' },
  { id: 2, name: 'Hand-Carved Walnut Spoon', artisan: 'Marco Rossi', price: '$28.00', category: 'Woodwork' },
  { id: 3, name: 'Organic Cotton Blanket', artisan: 'Sofia Chen', price: '$110.00', category: 'Textiles' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark Rich Black Background */}
      <section className="bg-[#111827] text-[#F9FAFB] py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tighter leading-tight">
            Discover Uniquely<br /> Handcrafted Treasures
          </h1>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Connect directly with artisans from around the globe. Sustainable, passionate, and authentic.
          </p>
          <button className="bg-[#4D7C0F] hover:bg-[#3f650c] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors shadow-md">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-[#111827]">Featured Artisanal Goods</h2>
          <a href="#" className="text-[#4D7C0F] font-medium hover:text-[#3f650c]">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl bg-gray-100 mb-6">
                {/* Placeholder for Product Image */}
                <div className="flex items-center justify-center h-48 text-gray-400">
                  [{product.category} Image]
                </div>
              </div>
              <p className="text-xs font-medium text-[#4D7C0F] uppercase tracking-widest mb-1">
                {product.category}
              </p>
              <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#4D7C0F] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">by {product.artisan}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-[#111827]">{product.price}</span>
                <button className="text-sm border border-[#111827] text-[#111827] px-4 py-2 rounded-md hover:bg-[#111827] hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}