import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  { id: 1, name: 'Ceramic Serving Bowl', artisan: 'Elena Silva', price: '$45.00', category: 'Ceramics' },
  { id: 2, name: 'Hand-Carved Walnut Spoon', artisan: 'Marco Rossi', price: '$28.00', category: 'Woodwork' },
  { id: 3, name: 'Organic Cotton Blanket', artisan: 'Sofia Chen', price: '$110.00', category: 'Textiles' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="bg-[#111827] text-white pt-24 pb-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter italic">
            Handcrafted <span className="text-[#4D7C0F] not-italic">Haven</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Connecting Curitiba's finest artisans with people who value authentic, handmade treasures.
          </p>
          <button className="bg-[#4D7C0F] hover:bg-[#3f650c] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#4D7C0F]/20">
            Explore Marketplace
          </button>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-black text-[#111827] tracking-tight">Weekly Featured</h2>
            <p className="text-gray-400 font-medium">Unique pieces selected just for you.</p>
          </div>
          <button className="text-[#4D7C0F] font-bold border-b-2 border-[#4D7C0F]/20 hover:border-[#4D7C0F] transition-all pb-1 text-sm uppercase tracking-widest">
            View All Collection
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}