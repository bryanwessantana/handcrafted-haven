import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/data';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.id}`} aria-label={`View details for ${product.name}`} className="relative block overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={340}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-800 shadow-sm">
          {product.category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition duration-300 group-hover:bg-slate-900/10 group-hover:opacity-100">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm">View product →</span>
        </div>
      </Link>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">{product.rating.toFixed(1)} ★</p>
          <span className="text-base font-bold text-slate-950">{product.price}</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-950 transition-colors group-hover:text-[#65A30D]">{product.name}</h2>
          <p className="mt-2 text-sm text-slate-500">by {product.artisan}</p>
        </div>
      </div>
    </article>
  );
}
