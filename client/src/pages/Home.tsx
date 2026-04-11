import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Mock featured products with real images
  const featuredProducts = [
    {
      id: 1,
      name: 'Ceramic Serving Bowl',
      artisan: 'Elena Silva',
      artisanId: 1,
      price: '$45.00',
      category: 'Ceramics',
      imageUrl: 'https://images.unsplash.com/photo-1677336037712-c620a0d977ff?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 2,
      name: 'Hand-Carved Walnut Spoon',
      artisan: 'Marco Rossi',
      artisanId: 2,
      price: '$28.00',
      category: 'Woodwork',
      imageUrl: 'https://images.unsplash.com/photo-1549859455-746ef4fae03b?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 3,
      name: 'Organic Cotton Blanket',
      artisan: 'Sofia Chen',
      artisanId: 3,
      price: '$110.00',
      category: 'Textiles',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1755534835350-d8baf3db28fa?w=500&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-card to-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 text-foreground">
            Handcrafted <span className="text-primary italic">Haven</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover unique treasures from Curitiba's finest artisans. Every piece tells a story — find yours today.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Categories</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <a className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
                Explore Products
                <ArrowRight size={20} />
              </a>
            </Link>
            <Link href="/artisans">
              <a className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Meet Artisans
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-2 text-foreground">Featured Creations</h2>
          <p className="text-muted-foreground">A selection of our most beloved handcrafted pieces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <a className="group block">
                <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-muted h-64 sm:h-72">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      By{' '}
                      <span className="text-primary font-medium">
                        {product.artisan}
                      </span>
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-serif font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <a className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors text-lg">
              View All Products
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="bg-[#2563eb] text-white py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#183677'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-2">Meet Our Artisans</h2>
            <p className="text-blue-100">The talented makers behind every piece</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                id: 1, 
                name: 'Elena Silva', 
                specialty: 'Ceramics', 
                location: 'Santa Felicidade, Curitiba',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
              },
              { 
                id: 2, 
                name: 'Marco Rossi', 
                specialty: 'Woodwork', 
                location: 'Paraná Forests',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
              },
              { 
                id: 3, 
                name: 'Sofia Chen', 
                specialty: 'Textiles', 
                location: 'Curitiba, Paraná',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
              },
            ].map((artisan) => (
              <Link key={artisan.id} href={`/artisans/${artisan.id}`}>
                <a className="group">
                  <div className="bg-white/10 border border-white/20 rounded-lg p-8 text-center hover:bg-white/20 transition-colors">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
                      <img
                        src={artisan.avatar}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white mb-1">{artisan.name}</h3>
                    <p className="text-blue-100 text-sm font-medium uppercase tracking-widest mb-2">{artisan.specialty}</p>
                    <p className="text-white/70 text-sm">{artisan.location}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* View All Artisans Button */}
          <div className="text-center mt-12">
            <Link href="/artisans">
              <a className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-100 transition-colors text-lg">
                Explore All Artisans
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
