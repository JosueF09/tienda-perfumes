import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Black Orchid",
    brand: "Tom Ford",
    price: 165,
    image: "/tom-ford-black-orchid-perfume-bottle.jpg",
    rating: 4.8,
    reviews: 342,
    gender: "Unisex",
    notes: ["Black Truffle", "Ylang-Ylang", "Bergamot"],
  },
  {
    id: 2,
    name: "No. 5",
    brand: "Chanel",
    price: 145,
    image: "/chanel-no-5-perfume-bottle-classic.jpg",
    rating: 4.9,
    reviews: 892,
    gender: "Women",
    notes: ["Jasmine", "Rose", "Sandalwood"],
  },
  {
    id: 3,
    name: "Sauvage",
    brand: "Dior",
    price: 120,
    image: "/dior-sauvage-cologne-bottle.jpg",
    rating: 4.7,
    reviews: 567,
    gender: "Men",
    notes: ["Bergamot", "Pepper", "Ambroxan"],
  },
  {
    id: 4,
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    price: 135,
    image: "/ysl-black-opium-perfume-bottle.jpg",
    rating: 4.8,
    reviews: 423,
    gender: "Women",
    notes: ["Coffee", "Vanilla", "White Flowers"],
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Bestselling fragrances</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our most loved perfumes, chosen by fragrance enthusiasts worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
