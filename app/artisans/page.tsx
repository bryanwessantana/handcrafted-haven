import Link from 'next/link';
import { getAllArtisans } from '@/lib/data';

export default function ArtisansPage() {
  const artisans = getAllArtisans();

  return (
    <div className="min-h-screen bg-[color:var(--background)] pb-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">Artisan Network</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-black text-[#111827] tracking-tight">Meet the artisans behind every handpicked piece.</h1>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">Learn about the people, process, and passion that make Curitiba craftsmanship special.</p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artisans.map((artisan) => (
            <article key={artisan.slug} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <img src={artisan.profileImage} alt={artisan.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#65A30D]">{artisan.title}</p>
                <h2 className="mt-4 text-2xl font-bold text-[#111827]">{artisan.name}</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">{artisan.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {artisan.specialties.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">{tag}</span>
                  ))}
                </div>
                <Link
                  href={`/artisans/${artisan.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#65A30D] hover:text-[#4d7c0f]"
                >
                  View Profile →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
