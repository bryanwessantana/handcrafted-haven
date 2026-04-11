import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { Star, ArrowLeft, Heart } from 'lucide-react';

export default function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.id || '1');

  const [reviewerName, setReviewerName] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewRating, setReviewRating] = useState('5');
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Maria Santos',
      rating: 5,
      comment: 'Beautiful piece! Exactly as described. Highly recommend!',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'João Silva',
      rating: 4,
      comment: 'Great quality. Arrived well packaged.',
      date: '1 month ago',
    },
  ]);

  // Mock product data
  const product = {
    id: productId,
    name: 'Ceramic Serving Bowl',
    artisan: 'Elena Silva',
    artisanId: 1,
    price: '$45.00',
    category: 'Ceramics',
    rating: 4.5,
    reviews: reviews.length,
    imageUrl: 'https://images.unsplash.com/photo-1677336037712-c620a0d977ff?w=600&auto=format&fit=crop&q=60',
    description: 'This beautiful handcrafted ceramic serving bowl is perfect for any dining occasion. Made with premium clay and finished with a natural glaze, each piece is unique and carries the artisan\'s signature style.',
    details: {
      material: 'Premium Ceramic Clay',
      dimensions: '12" diameter x 4" height',
      care: 'Hand wash recommended. Microwave and dishwasher safe.',
      origin: 'Handmade in Curitiba, Brazil',
    },
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewerName.trim() && reviewComment.trim()) {
      const newReview = {
        id: reviews.length + 1,
        name: reviewerName,
        rating: parseInt(reviewRating),
        comment: reviewComment,
        date: 'Just now',
      };
      setReviews([newReview, ...reviews]);
      setReviewerName('');
      setReviewComment('');
      setReviewRating('5');
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/products">
          <a className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium">
            <ArrowLeft size={20} />
            Back to Products
          </a>
        </Link>
      </div>

      {/* Product Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md bg-card rounded-lg overflow-hidden shadow-lg">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} className="text-primary" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl font-serif font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-muted-foreground mb-4">
                  By{' '}
                  <Link href={`/artisans/${product.artisanId}`}>
                    <a className="text-primary font-medium hover:underline">{product.artisan}</a>
                  </Link>
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">{renderStars(product.rating)}</div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border">
                <p className="text-4xl font-serif font-bold text-primary mb-4">{product.price}</p>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-accent transition-colors mb-3">
                  Add to Cart
                </button>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Contact Artisan
                </button>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Material</h3>
                  <p className="text-muted-foreground">{product.details.material}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Dimensions</h3>
                  <p className="text-muted-foreground">{product.details.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Care Instructions</h3>
                  <p className="text-muted-foreground">{product.details.care}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Origin</h3>
                  <p className="text-muted-foreground">{product.details.origin}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">About This Piece</h2>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Customer Reviews</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Review Form */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-serif font-bold text-foreground mb-6">Leave a Review</h3>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label htmlFor="reviewerName" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      id="reviewerName"
                      type="text"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      aria-label="Reviewer name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="reviewRating" className="block text-sm font-medium text-foreground mb-2">
                      Rating
                    </label>
                    <select
                      id="reviewRating"
                      value={reviewRating}
                      onChange={(e) => setReviewRating(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label="Product rating"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                      <option value="4">⭐⭐⭐⭐ Good</option>
                      <option value="3">⭐⭐⭐ Average</option>
                      <option value="2">⭐⭐ Poor</option>
                      <option value="1">⭐ Terrible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="reviewComment" className="block text-sm font-medium text-foreground mb-2">
                      Your Review
                    </label>
                    <textarea
                      id="reviewComment"
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Share your thoughts..."
                      rows={5}
                      aria-label="Review comment"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-accent transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-serif font-bold text-foreground">{review.name}</h4>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex gap-1">{renderStars(review.rating)}</div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Local Craftsmanship Section */}
      <section className="bg-[#2563eb] text-white py-12 px-4 sm:px-6 lg:px-8 mb-0" style={{backgroundColor: '#0f2452'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Supporting Local Craftsmanship</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Every purchase directly supports {product.artisan} and their craft. We believe in fair trade, sustainable practices, and celebrating the unique stories behind each handmade piece.
          </p>
          <Link href="/artisans">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Learn More About Our Artisans
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
