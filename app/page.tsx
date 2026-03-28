import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  { id: 1, name: 'Ceramic Serving Bowl', artisan: 'Elena Silva', price: '$45.00', category: 'Ceramics' },
  { id: 2, name: 'Hand-Carved Walnut Spoon', artisan: 'Marco Rossi', price: '$28.00', category: 'Woodwork' },
  { id: 3, name: 'Organic Cotton Blanket', artisan: 'Sofia Chen', price: '$110.00', category: 'Textiles' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] antialiased">
      {/* Hero Section */}
      <section className="bg-[#111827] py-24 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* H1 que já está funcionando */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic text-[#F9FAFB] leading-tight">
            Handcrafted <span className="text-[#65A30D] not-italic">Haven</span>
          </h1>
          
          {/* P ajustado: usando text-gray-300 ou text-[#F9FAFB] direto */}
          <p className="text-xl text-[#F9FAFB]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Connecting Curitiba`s finest artisans with people who value authentic, handmade treasures.
          </p>
          
          <div className="flex justify-center">
            <button className="bg-[#65A30D] hover:bg-[#4d7c0f] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-black/20 border-none outline-none">
              Explore Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* Grid Section - Mantendo o estilo limpo abaixo */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-3xl font-black text-[#111827] tracking-tight">Weekly Featured</h2>
            <p className="text-gray-500 font-medium mt-1 text-sm italic">Unique pieces selected just for you.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
