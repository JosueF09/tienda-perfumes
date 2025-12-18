import Link from "next/link"
import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Women's",
    href: "/shop/women",
    image: "/elegant-womens-perfume-bottle-feminine.jpg",
    description: "Elegant & sophisticated",
  },
  {
    name: "Men's",
    href: "/shop/men",
    image: "/luxury-mens-cologne-bottle-masculine.jpg",
    description: "Bold & distinctive",
  },
  {
    name: "Unisex",
    href: "/shop/unisex",
    image: "/modern-unisex-perfume-bottle-minimalist.jpg",
    description: "Universal appeal",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Shop by category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our expertly curated collections designed for every preference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif italic mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
