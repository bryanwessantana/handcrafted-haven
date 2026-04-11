import { Link, useParams } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function ArtisanProfile() {
  const params = useParams();
  const artisanId = parseInt(params.id || '1');

  // Mock artisan data
  const artisan = {
    id: artisanId,
    name: 'Elena Silva',
    specialty: 'Ceramics',
    location: 'Santa Felicidade, Curitiba',
    bio: 'Elena Silva is a master ceramicist with over 15 years of experience. Based in the historic neighborhood of Santa Felicidade in Curitiba, she creates stunning pieces that blend traditional Portuguese ceramic techniques with contemporary design sensibilities. Her work has been featured in galleries across Brazil and internationally.',
    longBio: 'Elena\'s journey into ceramics began as a hobby during her university years, but quickly evolved into a passion. She studied under renowned ceramic artists and spent time in Portugal learning traditional techniques. Today, she runs a small studio where she creates functional art pieces that bring beauty and utility to everyday life. Each piece is handcrafted with meticulous attention to detail, using premium clay sourced from sustainable suppliers.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    yearsExperience: 15,
    products: [
      { id: 1, name: 'Ceramic Serving Bowl', price: '$45.00', imageUrl: 'https://images.unsplash.com/photo-1677336037712-c620a0d977ff?w=500&auto=format&fit=crop&q=60' },
      { id: 4, name: 'Clay Flower Vase', price: '$35.00', imageUrl: 'https://images.unsplash.com/photo-1635184494625-f2f8c8c0c9e7?w=500&auto=format&fit=crop&q=60' },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/artisans">
          <a className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium">
            <ArrowLeft size={20} />
            Back to Artisans
          </a>
        </Link>
      </div>

      {/* Artisan Header */}
      <section className="bg-gradient-to-r from-card to-background py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={artisan.avatarUrl}
                alt={artisan.name}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-primary shadow-lg"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-2">
                {artisan.name}
              </h1>
              <p className="text-primary text-lg font-medium uppercase tracking-wider mb-3">
                {artisan.specialty}
              </p>
              <p className="text-muted-foreground mb-4">
                📍 {artisan.location}
              </p>
              <p className="text-muted-foreground">
                ✨ {artisan.yearsExperience} years of experience crafting beautiful pieces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">About {artisan.name}</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{artisan.bio}</p>
                <p>{artisan.longBio}</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-foreground mb-4">Specialization</h3>
                <p className="text-primary font-medium text-lg">{artisan.specialty}</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-foreground mb-4">Experience</h3>
                <p className="text-primary font-medium text-lg">{artisan.yearsExperience}+ years</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif font-bold text-foreground mb-4">Location</h3>
                <p className="text-muted-foreground">{artisan.location}</p>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <h3 className="font-serif font-bold mb-4">Support Local Craftsmanship</h3>
                <p className="text-sm mb-4">Every purchase directly supports this artisan and their craft.</p>
                <Link href="/products">
                  <a className="inline-block bg-white text-primary px-4 py-2 rounded font-medium hover:bg-blue-50 transition-all text-sm">
                    View All Products
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
            {artisan.name}'s Creations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artisan.products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <a className="group block">
                  <div className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    {/* Product Image */}
                      <div className="relative overflow-hidden bg-muted h-64 sm:h-72">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-auto">
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

          {/* View All Products Link */}
          <div className="text-center mt-12">
            <Link href="/products">
              <a className="inline-block text-primary font-medium hover:text-accent transition-colors text-lg">
                View All Products from {artisan.name}
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2563eb] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Interested in Custom Orders?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-blue-100">
              {artisan.name} accepts custom commissions. Get in touch to discuss your unique vision.
            </p>
            <a
              href="mailto:info@handcraftedhaven.com"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact {artisan.name}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
