import Link from 'next/link';

// Definimos o contrato do objeto para que o VS Code te ajude com o preenchimento automático
interface Product {
  id: number;
  name: string;
  artisan: string;
  price: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white group rounded-3xl border border-gray-100 p-4 transition-all hover:shadow-xl hover:-translate-y-1">
      
      {/* Imagem Placeholder com link para detalhes */}
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 mb-6 flex items-center justify-center text-gray-300 border border-gray-50 group-hover:border-gray-200 transition-colors cursor-pointer">
          <span className="text-[10px] uppercase font-bold tracking-widest">View Details</span>
        </div>
      </Link>

      <div className="px-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-extrabold text-[#4D7C0F] uppercase tracking-[0.2em] bg-[#4D7C0F]/5 px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-[#111827] mb-1 group-hover:text-[#4D7C0F] transition-colors tracking-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 mb-6">by {product.artisan}</p>
        
        <div className="flex items-center justify-between pt-5 border-t border-gray-50">
          <span className="text-2xl font-black text-[#111827] tracking-tighter">
            {product.price}
          </span>
          <Link href={`/product/${product.id}`}>
            <button className="bg-[#111827] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl hover:bg-[#4D7C0F] transition-colors shadow-sm">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
