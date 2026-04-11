export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  artisan: string;
  price: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  rating: number;
  reviews: Review[];
}

export interface Artisan {
  slug: string;
  name: string;
  title: string;
  bio: string;
  location: string;
  specialties: string[];
  profileImage: string;
}

const products: Product[] = [
  {
    id: 1,
    slug: 'minimalist-ceramic-bowl',
    name: 'Minimalist Ceramic Bowl',
    artisan: 'Elena Silva',
    price: '$45.00',
    category: 'Ceramics',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800',
    shortDescription: 'A serene handcrafted bowl with an organic shape and smooth matte finish.',
    description: 'A ceramic serving bowl shaped by hand in the heart of Curitiba, perfect for salads, fruit, or table decor.',
    features: ['Stoneware clay', 'Matte glaze finish', 'Dishwasher-safe', 'Folk-inspired texture'],
    rating: 4.9,
    reviews: [
      { id: 'r1', author: 'Camila P.', rating: 5, comment: 'The glaze and weight feel luxurious. Beautiful craftsmanship.', date: 'Mar 8, 2026' },
      { id: 'r2', author: 'Lucas A.', rating: 5, comment: 'It feels handmade without being too rustic. Perfect for my kitchen.', date: 'Feb 21, 2026' },
    ],
  },
  {
    id: 2,
    slug: 'hand-carved-walnut-spoon',
    name: 'Hand-Carved Walnut Spoon',
    artisan: 'Marco Ross',
    price: '$28.00',
    category: 'Woodwork',
    image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=800',
    shortDescription: 'A warm walnut spoon carved from reclaimed wood for a sustainable kitchen.',
    description: 'This spoon is carefully shaped with organic lines, honoring local trees and artisan timberwork.',
    features: ['Reclaimed walnut', 'Hand-sanded finish', 'Food-safe oil coating', 'Lightweight and durable'],
    rating: 4.8,
    reviews: [
      { id: 'r3', author: 'Ana M.', rating: 5, comment: 'Lovely spoon with a soft feel in the hand. Feels intentional and strong.', date: 'Mar 1, 2026' },
      { id: 'r4', author: 'Fernando R.', rating: 4, comment: 'Beautiful craftsmanship, arrived quickly and nicely packaged.', date: 'Feb 15, 2026' },
    ],
  },
  {
    id: 3,
    slug: 'organic-cotton-blanket',
    name: 'Organic Cotton Blanket',
    artisan: 'Sofia Chen',
    price: '$110.00',
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1528459105426-b9237691684c?q=80&w=800',
    shortDescription: 'A soft throw woven from organic cotton with a subtle textured pattern.',
    description: 'Lightweight and breathable, this blanket is designed for everyday comfort and sustainable style.',
    features: ['Organic cotton', 'Handwoven texture', 'Natural dye palette', 'Perfect for couches and beds'],
    rating: 4.7,
    reviews: [
      { id: 'r5', author: 'Mariana S.', rating: 5, comment: 'Super soft and beautifully made. Looks great in my living room.', date: 'Mar 11, 2026' },
      { id: 'r6', author: 'Bruno L.', rating: 4, comment: 'The weave is lovely and the material feels high quality.', date: 'Feb 28, 2026' },
    ],
  },
  {
    id: 4,
    slug: 'matte-clay-flower-vase',
    name: 'Matte Clay Flower Vase',
    artisan: 'Elena Silva',
    price: '$35.00',
    category: 'Ceramics',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800',
    shortDescription: 'A sculptural vase with a soft matte glaze, made to showcase fresh flowers.',
    description: 'Hand-thrown clay and subtle surface texture make this vase a quiet statement on any shelf.',
    features: ['Hand-thrown clay', 'Neutral earth tones', 'Stable base', 'Perfect for single stems'],
    rating: 4.8,
    reviews: [
      { id: 'r7', author: 'Patrícia G.', rating: 5, comment: 'Stunning vase with a luxe finish. Beautiful on my dining table.', date: 'Mar 4, 2026' },
      { id: 'r8', author: 'Daniel K.', rating: 4, comment: 'Quality piece and great production values from the artisan.', date: 'Feb 19, 2026' },
    ],
  },
  {
    id: 5,
    slug: 'oak-artisan-cutting-board',
    name: 'Oak Artisan Cutting Board',
    artisan: 'Marco Ross',
    price: '$55.00',
    category: 'Woodwork',
    image: 'https://images.unsplash.com/photo-1612450711964-b0e515e06f9d?q=80&w=800',
    shortDescription: 'A solid oak board with a live edge and smooth hand-finished surface.',
    description: 'Built for both prep and presentation, this board brings warmth and careful joinery to your kitchen.',
    features: ['Solid oak', 'Hand-rubbed finish', 'Natural live edge', 'Easy maintenance'],
    rating: 4.9,
    reviews: [
      { id: 'r9', author: 'Helena T.', rating: 5, comment: 'Excellent board. Heavy enough for prep and elegant enough for serving.', date: 'Mar 9, 2026' },
      { id: 'r10', author: 'Mateus F.', rating: 5, comment: 'Top-notch wood quality and finished beautifully.', date: 'Feb 23, 2026' },
    ],
  },
  {
    id: 6,
    slug: 'decorative-hand-woven-cushion',
    name: 'Decorative Hand-Woven Cushion',
    artisan: 'Sofia Chen',
    price: '$65.00',
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1584184924103-e310d9dc85fc?q=80&w=800',
    shortDescription: 'A statement cushion with layered texture and artisan dye details.',
    description: 'Woven by hand using traditional methods, this cushion adds tactile warmth to any room.',
    features: ['Hand-woven cotton', 'Natural dye accents', 'Removable cover', 'Artisan stitching'],
    rating: 4.8,
    reviews: [
      { id: 'r11', author: 'Rafael N.', rating: 5, comment: 'The texture is beautiful and the cushion feels very well made.', date: 'Mar 7, 2026' },
      { id: 'r12', author: 'Laura C.', rating: 4, comment: 'Great quality and perfect for styling a sofa.', date: 'Feb 26, 2026' },
    ],
  },
];

const artisans: Artisan[] = [
  {
    slug: 'elena-silva',
    name: 'Elena Silva',
    title: 'Ceramic Artist',
    bio: 'Elena has been shaping clay in Curitiba for over 15 years, combining minimal forms with local stoneware techniques.',
    location: 'Santa Felicidade, Brazil',
    specialties: ['Hand-thrown ceramics', 'Tableware', 'Decorative vessels'],
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800',
  },
  {
    slug: 'marco-ross',
    name: 'Marco Ross',
    title: 'Sustainable Woodworker',
    bio: 'Marco crafts kitchen pieces from reclaimed timber, honoring the forest with every cut and finish.',
    location: 'Curitiba, Brazil',
    specialties: ['Wood utensils', 'Boards', 'Kitchen accessories'],
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800',
  },
  {
    slug: 'sofia-chen',
    name: 'Sofia Chen',
    title: 'Textile Weaver',
    bio: 'Sofia blends ancestral weaving techniques with modern home textiles crafted from organic fibers.',
    location: 'Centro, Brazil',
    specialties: ['Throws', 'Cushions', 'Soft goods'],
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800',
  },
];

export const categories = ['All', 'Ceramics', 'Woodwork', 'Textiles'];

export function getProducts() {
  return products;
}

export function getProductById(id: string | number) {
  const key = typeof id === 'string' ? Number(id) : id;
  return products.find((product) => product.id === key);
}

export function getArtisanBySlug(slug: string) {
  return artisans.find((artisan) => artisan.slug === slug);
}

export function getArtisanByName(name: string) {
  return artisans.find((artisan) => artisan.name === name);
}

export function getProductsByArtisan(name: string) {
  return products.filter((product) => product.artisan === name);
}

export function getAllArtisans() {
  return artisans;
}

export function getFeaturedArtisans() {
  return artisans;
}
