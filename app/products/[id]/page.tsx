import Link from 'next/link';

export default function ProductDetails({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-[#FDFDFD] p-8 md:p-20 antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb - Navegação Superior */}
        <nav className="mb-16 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-[#65A30D] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#111827]">Product Detail</span>
        </nav>

        {/* Layout Principal - Imagem e Info */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Container de Imagem DRASTICAMENTE REDUZIDO e CIRCULAR */}
          <div className="w-full lg:w-1/3 flex justify-center"> 
            <div className="aspect-square w-full max-w-[280px] bg-white rounded-full border border-gray-100 shadow-xl shadow-black/5 flex items-center justify-center text-gray-200 overflow-hidden relative group p-8">
              {/* Overlay sutil de hover */}
              <div className="absolute inset-0 bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <span className="text-center text-[10px] uppercase font-black tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity px-6 leading-tight">
                High-Res<br />Image Placeholder<br />(ID: {params.id})
              </span>
            </div>
          </div>

          {/* Product Info - Informações do Produto (Alinhamento Central) */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start h-full max-w-2xl mx-auto lg:mx-0">
            {/* Tag de Coleção */}
            <span className="inline-block text-[#65A30D] font-black text-[10px] uppercase tracking-[0.3em] mb-8 bg-[#65A30D]/10 px-5 py-2.5 rounded-full w-fit">
              Curitiba Artisan Collection
            </span>
            
            {/* Título Principal (Alinhado com a nova hierarquia) */}
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-8 tracking-tighter leading-none">
              Handcrafted <br className="hidden md:block" />Masterpiece
            </h1>
            
            {/* Descrição */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-md font-medium">
              Each piece is uniquely created in Curitiba, following traditional artisanal methods. 
              Sustainable materials and passion in every detail.
            </p>

            {/* Preço e Status (Centralizados) */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 border-t border-b border-gray-50 py-8 w-full justify-center lg:justify-start">
              <span className="text-6xl font-black text-[#111827] tracking-tighter">$45.00</span>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[#65A30D] text-[10px] font-black uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full w-fit">In Stock</span>
                <span className="text-gray-300 text-sm font-medium mt-1">Ready to ship worldwide</span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <button className="w-full bg-[#111827] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#65A30D] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-black/10">
                Add to Cart
              </button>
              
              <Link 
                href="/" 
                className="text-center text-xs font-bold text-gray-400 hover:text-[#111827] transition-colors py-3 uppercase tracking-widest"
              >
                ← Back to Marketplace
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
