"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Star, ShoppingBag, Truck, RotateCcw, Shield } from "lucide-react"
import { useState } from "react"
import { use } from "react"

const productData = {
  id: 1,
  name: "Black Orchid",
  brand: "Tom Ford",
  price: 165,
  images: ["/tom-ford-black-orchid-perfume-bottle-front-view.jpg", "/tom-ford-black-orchid-perfume-bottle-side-view.jpg", "/tom-ford-black-orchid-perfume-bottle-packaging.jpg"],
  rating: 4.8,
  reviews: 342,
  gender: "Unisex",
  size: "50ml",
  description:
    "A luxurious and sensual fragrance that captures the essence of the rare black orchid flower. This iconic scent is a modern interpretation of classic chypre, with a unique blend of dark accords and a potion of black orchid, spice, and exotic florals.",
  notes: {
    top: ["Black Truffle", "Ylang-Ylang", "Bergamot", "Blackcurrant"],
    heart: ["Black Orchid", "Lotus Wood", "Black Gardenia", "Orchid"],
    base: ["Patchouli", "Vetiver", "Vanilla", "Incense", "Sandalwood"],
  },
  inStock: true,
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
            <img
              src={productData.images[selectedImage] || "/placeholder.svg"}
              alt={`${productData.brand} ${productData.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? "border-primary" : "border-transparent"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{productData.brand}</p>
            <h1 className="text-3xl md:text-4xl font-serif italic mb-4">{productData.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(productData.rating) ? "fill-secondary text-secondary" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{productData.rating}</span>
              <span className="text-muted-foreground">({productData.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-3xl font-medium mb-6">${productData.price}</p>

            <p className="text-muted-foreground leading-relaxed mb-6">{productData.description}</p>

            {/* Size & Gender */}
            <div className="flex gap-6 mb-6 text-sm">
              <div>
                <span className="text-muted-foreground">Size:</span>{" "}
                <span className="font-medium">{productData.size}</span>
              </div>
              <div>
                <span className="text-muted-foreground">For:</span>{" "}
                <span className="font-medium">{productData.gender}</span>
              </div>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-border min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>

              <Button className="flex-1 bg-primary hover:bg-primary/90" size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              <Button variant="outline" size="lg" onClick={() => setIsWishlisted(!isWishlisted)}>
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>

            <Button variant="outline" size="lg" className="w-full bg-transparent">
              Buy Now
            </Button>
          </div>

          {/* Trust Icons */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="flex flex-col items-center text-center">
              <Truck className="h-5 w-5 mb-2 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Free Shipping</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RotateCcw className="h-5 w-5 mb-2 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Easy Returns</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-5 w-5 mb-2 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">100% Authentic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="notes" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="notes"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Fragrance Notes
          </TabsTrigger>
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Reviews ({productData.reviews})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notes" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="font-medium mb-4">Top Notes</h3>
              <ul className="space-y-2">
                {productData.notes.top.map((note) => (
                  <li key={note} className="text-sm text-muted-foreground">
                    • {note}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-medium mb-4">Heart Notes</h3>
              <ul className="space-y-2">
                {productData.notes.heart.map((note) => (
                  <li key={note} className="text-sm text-muted-foreground">
                    • {note}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-medium mb-4">Base Notes</h3>
              <ul className="space-y-2">
                {productData.notes.base.map((note) => (
                  <li key={note} className="text-sm text-muted-foreground">
                    • {note}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="description" className="mt-6">
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed">{productData.description}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Tom Ford Black Orchid is a timeless fragrance that exudes luxury and sophistication. Perfect for evening
              wear and special occasions, this scent makes a bold statement while maintaining an air of mystery and
              allure. The combination of rich florals and warm spices creates a captivating aroma that lingers
              throughout the day.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <Card key={review} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                    <p className="font-medium">Amazing fragrance!</p>
                  </div>
                  <p className="text-sm text-muted-foreground">2 weeks ago</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This perfume exceeded my expectations. The scent is sophisticated and long-lasting. I receive
                  compliments every time I wear it. Definitely worth the investment for a luxury fragrance.
                </p>
                <p className="text-sm text-muted-foreground mt-4">- Sarah M.</p>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
