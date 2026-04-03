import Link from 'next/link';

interface ProductData {
  name: string;
  artisan: string;
  bio: string;
  price: string;
}

export default async function ProductDetails(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const products: Record<string, ProductData> = {
    "1": { 
      name: 'Ceramic Serving Bowl', 
      artisan: 'Elena Silva', 
      bio: 'Elena has been working with clay for over 15 years in her studio in Santa Felicidade.', 
      price: '$45.00' 
    },
    "2": { 
      name: 'Hand-Carved Walnut Spoon', 
      artisan: 'Marco Rossi', 
      bio: 'Marco specializes in sustainable woodwork, using fallen trees from the Paraná forests.', 
      price: '$28.00' 
    },
    "3": { 
      name: 'Organic Cotton Blanket', 
      artisan: 'Sofia Chen', 
      bio: 'Sofia uses ancestral weaving techniques to create modern, eco-friendly textiles.', 
      price: '$110.00' 
    },
  };

  const product = products[id] || { 
    name: 'Handcrafted Piece', 
    artisan: 'Local Artisan', 
    bio: 'A unique piece made with passion.', 
    price: '$0.00' 
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
        <nav className="mb-12 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-[#65A30D]">Marketplace</Link>
          <span>/</span>
          <span className="text-[#111827]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <div className="aspect-square bg-white rounded-[3rem] border border-gray-100 shadow-sm flex items-center justify-center text-gray-200 overflow-hidden">
             <span className="text-xs uppercase font-black opacity-20">Product Image</span>
          </div>

          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-6 tracking-tighter leading-none">
              {product.name}
            </h1>
            <div className="flex items-center gap-6 mb-10">
              <span className="text-5xl font-black text-[#111827] tracking-tighter">{product.price}</span>
              <span className="text-[#65A30D] text-sm font-bold bg-green-50 px-3 py-1 rounded-full uppercase tracking-tighter">Handmade in Curitiba</span>
            </div>
            <button className="w-full bg-[#111827] text-white py-6 rounded-2xl font-bold text-lg hover:bg-[#65A30D] transition-all shadow-xl shadow-black/10">
              Add to Cart
            </button>
          </div>
        </div>

        <section className="border-t border-gray-100 pt-16 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-black text-[#111827] mb-4 uppercase tracking-tight">Meet the Artisan</h2>
              <div className="w-20 h-1 bg-[#65A30D]"></div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-[#111827] mb-4">{product.artisan}</h3>
              <p className="text-lg text-gray-500 leading-relaxed uppercase tracking-tighter">{product.bio}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-black text-[#111827] mb-12 uppercase tracking-tight">Verified Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex text-[#65A30D] mb-4 text-xl">★★★★★</div>
              <p className="text-gray-600 font-medium mb-4">{product.artisan} creates incredible work. You can feel the care in every detail.</p>
              <span className="text-sm font-bold text-[#111827]">— Verified Customer</span>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex text-[#65A30D] mb-4 text-xl">★★★★★</div>
              <p className="text-gray-600 font-medium mb-4">Beautiful design and very well made. It arrived quickly in Curitiba.</p>
              <span className="text-sm font-bold text-[#111827]">— local_buyer_04</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}