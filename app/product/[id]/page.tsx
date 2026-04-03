import Link from 'next/link';

interface ProductData {
  name: string;
  artisan: string;
  bio: string;
  price: string;
  category: string;
  icon: string;
}

export default async function ProductDetails(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const products: Record<string, ProductData> = {
    "1": {
      name: 'Ceramic Serving Bowl',
      artisan: 'Elena Silva',
      bio: 'Elena has been working with clay for over 15 years in her studio in Santa Felicidade. Each piece is hand-thrown on the wheel and fired in her wood-burning kiln.',
      price: '$45.00',
      category: 'Ceramics',
      icon: '🏺',
    },
    "2": {
      name: 'Hand-Carved Walnut Spoon',
      artisan: 'Marco Rossi',
      bio: 'Marco specializes in sustainable woodwork, using fallen trees from the Paraná forests. His pieces are finished with natural beeswax for a food-safe, lasting shine.',
      price: '$28.00',
      category: 'Woodwork',
      icon: '🪵',
    },
    "3": {
      name: 'Organic Cotton Blanket',
      artisan: 'Sofia Chen',
      bio: 'Sofia uses ancestral weaving techniques to create modern, eco-friendly textiles. Her looms are hand-built and her dyes are sourced from local plants.',
      price: '$110.00',
      category: 'Textiles',
      icon: '🧵',
    },
    "4": {
      name: 'Clay Flower Vase',
      artisan: 'Elena Silva',
      bio: 'Elena has been working with clay for over 15 years in her studio in Santa Felicidade. Each piece is hand-thrown on the wheel and fired in her wood-burning kiln.',
      price: '$35.00',
      category: 'Ceramics',
      icon: '🏺',
    },
    "5": {
      name: 'Oak Cutting Board',
      artisan: 'Marco Rossi',
      bio: 'Marco specializes in sustainable woodwork, using fallen trees from the Paraná forests. His pieces are finished with natural beeswax for a food-safe, lasting shine.',
      price: '$55.00',
      category: 'Woodwork',
      icon: '🪵',
    },
    "6": {
      name: 'Embroidered Cushion',
      artisan: 'Sofia Chen',
      bio: 'Sofia uses ancestral weaving techniques to create modern, eco-friendly textiles. Her looms are hand-built and her dyes are sourced from local plants.',
      price: '$65.00',
      category: 'Textiles',
      icon: '🧵',
    },
  };

  const product = products[id] || {
    name: 'Handcrafted Piece',
    artisan: 'Local Artisan',
    bio: 'A unique piece made with passion and dedication to the craft.',
    price: '$0.00',
    category: 'Handmade',
    icon: '🎨',
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-10">

        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-[#65A30D] transition-colors">Marketplace</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#111827]">{product.name}</span>
        </nav>

        {/* Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

          {/* Image Placeholder */}
          <div className="relative aspect-square bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7] rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#65A30D]/8" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#0F172A]/5" />
            <span className="text-[120px] leading-none drop-shadow-sm z-10">{product.icon}</span>
            <span className="text-xs font-black uppercase tracking-widest text-gray-300 mt-4 z-10">
              {product.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {/* Category badge */}
            <span className="inline-flex self-start items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#65A30D] bg-[#65A30D]/10 border border-[#65A30D]/20 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#65A30D]" />
              {product.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-[#111827] mb-4 tracking-tighter leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              A handcrafted piece made with care by {product.artisan} in Curitiba, Brazil.
              Each item is unique and made to last a lifetime.
            </p>

            {/* Price + badge */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-black text-[#111827] tracking-tighter">{product.price}</span>
              <span className="text-[#65A30D] text-xs font-bold bg-green-50 border border-green-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                Handmade in Curitiba
              </span>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: '♻️', label: 'Sustainable' },
                { icon: '🤝', label: 'Handmade' },
                { icon: '📦', label: 'Ships Fast' },
              ].map(({ icon, label }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-sm">
                  <div className="text-xl mb-1">{icon}</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full bg-[#111827] text-white py-5 rounded-2xl font-bold text-base hover:bg-[#65A30D] transition-all shadow-lg shadow-black/10 active:scale-[0.98] transform">
              Add to Cart
            </button>

            <Link
              href="/"
              className="mt-3 text-center text-xs text-gray-400 hover:text-[#65A30D] font-semibold transition-colors"
            >
              ← Back to Marketplace
            </Link>
          </div>
        </div>

        {/* Meet the Artisan */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Meet the Artisan</h2>
              <div className="w-12 h-1 bg-[#65A30D] rounded-full" />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#65A30D]/15 border border-[#65A30D]/30 flex items-center justify-center">
                  <span className="text-[#65A30D] font-black text-lg">{product.artisan[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827]">{product.artisan}</h3>
                  <p className="text-xs text-[#65A30D] font-bold uppercase tracking-wider">{product.category} Specialist</p>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed">{product.bio}</p>
            </div>
          </div>
        </section>

        {/* Verified Reviews */}
        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
          <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Verified Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100">
              <div className="flex text-[#65A30D] mb-3 text-base">★★★★★</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {product.artisan} creates incredible work. You can feel the care in every detail.
              </p>
              <span className="text-xs font-bold text-[#111827]">— Verified Customer</span>
            </div>
            <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100">
              <div className="flex text-[#65A30D] mb-3 text-base">★★★★★</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Beautiful design and very well made. It arrived quickly in Curitiba.
              </p>
              <span className="text-xs font-bold text-[#111827]">— local_buyer_04</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
