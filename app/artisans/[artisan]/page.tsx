import Link from 'next/link';
import Image from 'next/image';
import { getArtisanBySlug, getProductsByArtisan } from '@/lib/data';

export default function ArtisanProfile({ params }: { params: { artisan: string } }) {
  const artisan = getArtisanBySlug(params.artisan);

  if (!artisan) {
    return (
      <div className="min-h-screen bg-[color:var(--background)] py-20 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">Artisan not found</p>
        <h1 className="mt-6 text-4xl font-black text-[#111827]">We couldn’t locate that profile.</h1>
        <Link
          href="/artisans"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#65A30D] px-8 py-4 text-white font-semibold shadow-lg shadow-[#65A30D]/20 hover:bg-[#4d7c0f]"
        >
          Back to Artisans
        </Link>
      </div>
    );
  }

  const artisanProducts = getProductsByArtisan(artisan.name);

  return (
    <div className="min-h-screen bg-[color:var(--background)] pb-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">Crafted with care</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-black text-[#111827] tracking-tight">{artisan.name}</h1>
            <p className="mt-2 text-lg font-semibold text-gray-600">{artisan.title}</p>
          </div>
          <Link href="/artisans" className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-[#65A30D] hover:text-[#65A30D] transition">
            Back to Artisan List
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-8">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="relative h-72 w-full overflow-hidden rounded-[2rem] lg:w-80">
                  <Image src={artisan.profileImage} alt={artisan.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-500 uppercase tracking-[0.35em] text-xs">Location</p>
                  <p className="mt-2 text-xl font-semibold text-[#111827]">{artisan.location}</p>
                  <div className="mt-6 space-y-4">
                    <p className="text-gray-600 leading-relaxed">{artisan.bio}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {artisan.specialties.map((specialty) => (
                        <span key={specialty} className="rounded-3xl bg-[#ECFDF5] px-4 py-3 text-sm font-semibold text-[#166534]">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-black text-[#111827] mb-6">Featured pieces</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {artisanProducts.map((product) => (
                  <article key={product.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">{product.category}</p>
                    <h3 className="mt-3 text-xl font-bold text-[#111827]">{product.name}</h3>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{product.shortDescription}</p>
                    <Link href={`/products/${product.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#65A30D] hover:text-[#4d7c0f]">
                      View product →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#111827] mb-4">Why choose {artisan.name}?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#65A30D]" /> Locally made quality with authentic techniques.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#65A30D]" /> Thoughtful craftsmanship built from ethical materials.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#65A30D]" /> Pieces designed to be both functional and beautiful.</li>
              </ul>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-black text-[#111827] mb-4">Customer reviews</h2>
              <p className="text-gray-600">Recent feedback from shoppers who selected this artisan.</p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
