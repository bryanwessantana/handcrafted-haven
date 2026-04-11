import Link from 'next/link';
import Image from 'next/image';
import { getArtisanByName, getProductById, getProductsByArtisan } from '@/lib/data';

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-[color:var(--background)] py-20 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">Product not found</p>
        <h1 className="mt-6 text-4xl font-black text-[#111827]">We couldn’t locate that item.</h1>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#65A30D] px-8 py-4 text-white font-semibold shadow-lg shadow-[#65A30D]/20 hover:bg-[#4d7c0f]"
        >
          Return to Marketplace
        </Link>
      </main>
    );
  }

  const artisan = getArtisanByName(product.artisan);
  const relatedProducts = getProductsByArtisan(product.artisan).filter((item) => item.id !== product.id);

  return (
    <main className="min-h-screen bg-[color:var(--background)] pb-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <nav className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          <Link href="/" className="hover:text-[#65A30D]">
            Marketplace
          </Link>
          <span className="mx-2">/</span>
          <Link href="/artisans" className="hover:text-[#65A30D]">
            Artisans
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{product.name}</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-start mb-20">
          <div className="space-y-10">
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={1200}
                height={900}
                className="w-full object-cover"
              />
            </div>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">{product.category}</p>
                  <h1 className="mt-3 text-5xl font-black text-[#111827] leading-tight">{product.name}</h1>
                </div>
                <span className="rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#166534]">{product.rating.toFixed(1)} ★</span>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-3xl font-black text-[#111827]">{product.price}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-500">Verified artisan</p>
                </div>
                <Link
                  href={artisan ? `/artisans/${artisan.slug}` : '/artisans'}
                  className="inline-flex items-center justify-center rounded-full border border-[#65A30D] bg-[#ECFDF5] px-6 py-3 text-sm font-semibold text-[#166534] transition hover:bg-[#D9F7BE]"
                >
                  View Artisan Profile
                </Link>
              </div>

              <p className="mt-8 text-gray-600 leading-relaxed">{product.description}</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div key={feature} className="rounded-3xl bg-[#F8FAFC] p-5 text-sm text-slate-600">
                    {feature}
                  </div>
                ))}
              </div>
            </section>

            <section id="reviews" className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-black text-[#111827]">Product reviews</h2>
              <p className="mt-3 text-gray-600">Real feedback from customers who purchased this product.</p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {product.reviews.map((review) => (
                  <article key={review.id} className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6">
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#65A30D]">
                      <span>{'★'.repeat(review.rating)}</span>
                      <span>{review.date}</span>
                    </div>
                    <p className="mt-4 text-slate-700">{review.comment}</p>
                    <p className="mt-4 text-sm font-semibold text-slate-900">— {review.author}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-[#111827]">Artisan story</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{artisan?.bio ?? 'This artisan is part of our curated maker community.'}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-500">{artisan?.location}</p>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black text-[#111827]">More from this artisan</h3>
              <div className="mt-6 space-y-4">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="block rounded-3xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-sm font-semibold text-[#111827] transition hover:border-[#65A30D] hover:text-[#65A30D]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
