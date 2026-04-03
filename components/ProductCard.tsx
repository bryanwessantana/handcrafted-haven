// components/ProductCard.tsx
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  artisan: string;
  price: string;
  category: string;
}

const categoryIcons: Record<string, string> = {
  Ceramics: '🏺',
  Woodwork: '🪵',
  Textiles: '🧵',
};

const categoryColors: Record<string, string> = {
  Ceramics: 'bg-amber-50 text-amber-700 border-amber-200',
  Woodwork: 'bg-orange-50 text-orange-700 border-orange-200',
  Textiles: 'bg-blue-50 text-blue-700 border-blue-200',
};

export default function ProductCard({ product }: { product: Product }) {
  const icon = categoryIcons[product.category] ?? '🎨';
  const badgeColor = categoryColors[product.category] ?? 'bg-gray-50 text-gray-600 border-gray-200';

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Area */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7] flex flex-col items-center justify-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#65A30D]/5 group-hover:bg-[#65A30D]/10 transition-colors" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#0F172A]/5 group-hover:bg-[#0F172A]/8 transition-colors" />

          {/* Icon */}
          <span className="text-6xl mb-3 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/5 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#65A30D] bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
              View Details →
            </span>
          </div>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category badge */}
        <span className={`self-start text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${badgeColor}`}>
          {product.category}
        </span>

        {/* Product name */}
        <h3 className="text-base font-bold text-[#111827] mb-1 group-hover:text-[#65A30D] transition-colors leading-snug">
          {product.name}
        </h3>

        {/* Artisan */}
        <p className="text-xs text-gray-400 font-semibold mb-4">
          by {product.artisan}
        </p>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Footer: price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-2">
          <span className="text-xl font-black text-[#111827] tracking-tight">
            {product.price}
          </span>
          <Link
            href={`/product/${product.id}`}
            className="bg-[#111827] hover:bg-[#65A30D] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl transition-colors shadow-sm active:scale-95 transform"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
