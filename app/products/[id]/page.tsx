import Link from 'next/link';

export default function ProductDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] p-8 md:p-20">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb - Super Profissional */}
        <nav className="mb-12 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-[#4D7C0F]">Home</Link>
          <span>/</span>
          <span className="text-[#111827]">Product Detail</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Main Image Container */}
          <div className="aspect-square bg-white rounded-[3rem] border border-gray-100 shadow-sm flex items-center justify-center text-gray-200 overflow-hidden relative group">
             <span className="text-xs uppercase font-black tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                High-Res Image Placeholder (ID: {params.id})
             </span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center h-full">
            <span className="inline-block text-[#4D7C0F] font-black text-xs uppercase tracking-[0.3em] mb-6 bg-[#4D7C0F]/5 px-4 py-1.5 rounded-full w-fit">
              Featured Artisan Collection
            </span>
            
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-6 tracking-tighter leading-none">
              Handcrafted <br />Masterpiece
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-md">
              Each piece is uniquely created in Curitiba, following traditional artisanal methods. 
              Sustainable materials and passion in every detail.
            </p>

            <div className="flex items-center gap-6 mb-12">
              <span className="text-5xl font-black text-[#111827] tracking-tighter">$45.00</span>
              <span className="text-gray-300 text-sm font-medium">In stock and ready to ship</span>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full bg-[#111827] text-white py-6 rounded-2xl font-bold text-lg hover:bg-[#4D7C0F] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-black/10">
                Add to Cart
              </button>
              <Link href="/" className="text-center text-sm font-bold text-gray-400 hover:text-[#111827] transition-colors py-2">
                ← Back to Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
