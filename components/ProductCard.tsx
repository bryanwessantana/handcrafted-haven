// components/ProductCard.tsx
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  artisan: string;
  price: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white group rounded-3xl border border-gray-100 p-6 transition-all hover:shadow-2xl hover:-translate-y-2 max-w-[340px] mx-auto w-full flex flex-col h-full">
      <Link href={`/product/${product.id}`} className="block w-full text-center">
        {/* Container da Imagem DRASTICAMENTE REDUZIDO e CENTRALIZADO */}
        <div className="w-full flex justify-center mb-8">
          <div className="aspect-square w-2/3 max-w-[160px] overflow-hidden rounded-full bg-[#F8FAFC] flex items-center justify-center text-gray-400 border border-gray-100 group-hover:bg-gray-100 transition-all shadow-inner">
            <div className="flex flex-col items-center gap-2 p-4 text-center">
              <span className="text-[9px] uppercase font-black tracking-[0.3em] opacity-40 leading-tight">View Details</span>
              <div className="h-[1px] w-4 bg-gray-300 group-hover:w-8 transition-all" />
            </div>
          </div>
        </div>
      </Link>

      <div className="px-1 flex flex-col flex-grow text-center items-center">
        {/* Tag de Categoria */}
        <span className="text-[9px] font-black text-[#65A30D] uppercase tracking-[0.2em] bg-[#65A30D]/5 px-4 py-2 rounded-full w-fit mb-4">
          {product.category}
        </span>
        
        {/* Nome do Produto */}
        <h3 className="text-xl font-bold text-[#111827] mb-1.5 group-hover:text-[#65A30D] transition-colors leading-tight">
          {product.name}
        </h3>
        
        {/* Nome do Artesão */}
        <p className="text-[10px] text-gray-400 font-bold mb-8 uppercase tracking-wider">
          by {product.artisan}
        </p>
        
        {/* Rodapé do Card: Preço e Botão (centralizados) */}
        <div className="w-full flex flex-col items-center pt-5 border-t border-gray-50 mt-auto gap-4">
          <span className="text-2xl font-black text-[#111827] tracking-tighter">
            {product.price}
          </span>
          
          <Link href={`/product/${product.id}`} className="w-full">
            <button className="w-full bg-[#111827] text-white text-[10px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-[#65A30D] transition-colors shadow-sm active:scale-95 transform">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
