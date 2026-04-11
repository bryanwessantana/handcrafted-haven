import { Link } from 'wouter';

export default function Artisans() {
  // Mock artisans data
  const artisans = [
    {
      id: 1,
      name: 'Elena Silva',
      specialty: 'Ceramics',
      location: 'Santa Felicidade, Curitiba',
      bio: 'Master ceramicist with over 15 years of experience. Elena creates stunning pieces that blend traditional techniques with contemporary design.',
      productCount: 2,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Marco Rossi',
      specialty: 'Woodwork',
      location: 'Paraná Forests',
      bio: 'Passionate woodworker specializing in hand-carved pieces. Marco sources sustainable wood and creates functional art.',
      productCount: 2,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Sofia Chen',
      specialty: 'Textiles',
      location: 'Curitiba, Paraná',
      bio: 'Textile artist dedicated to sustainable and ethical production. Sofia creates beautiful woven and embroidered pieces.',
      productCount: 2,
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-card to-background py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-foreground">Meet Our Artisans</h1>
          <p className="text-lg text-muted-foreground">Discover the talented makers behind every handcrafted piece</p>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <Link key={artisan.id} href={`/artisans/${artisan.id}`}>
                <a className="group">
                  <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    {/* Avatar */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center">
                      <img
                        src={artisan.avatarUrl}
                        alt={artisan.name}
                        className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Artisan Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {artisan.name}
                      </h3>
                      <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
                        {artisan.specialty}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1">
                        📍 {artisan.location}
                      </p>

                      {/* Bio */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {artisan.bio}
                      </p>

                      {/* Product Count */}
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-bold text-primary">{artisan.productCount}</span> products available
                        </p>
                      </div>

                      {/* View Profile Button */}
                      <button className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-accent transition-colors text-sm" aria-label={`View ${artisan.name} profile`}>
                        View Profile & Products
                      </button>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Artisans Section */}
      <section className="bg-[#2563eb] text-white py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#122f6d'}}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Supporting Local Craftsmanship
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Every purchase directly supports our artisans and their craft. We believe in fair trade, sustainable practices, and celebrating the unique stories behind each handmade piece. By choosing Handcrafted Haven, you're investing in quality, authenticity, and the preservation of traditional craftsmanship.
            </p>
            <Link href="/products">
              <a className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Explore Their Creations
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
