"use client"

import { ProductCard } from "@/components/product-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { useState } from "react"

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
  {
    id: 5,
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    price: 110,
    image: "/armani-acqua-di-gio-cologne-bottle.jpg",
    rating: 4.6,
    reviews: 678,
    gender: "Men",
    notes: ["Marine Notes", "Mandarin", "Cedarwood"],
  },
  {
    id: 6,
    name: "Eros",
    brand: "Versace",
    price: 125,
    image: "/versace-eros-cologne-bottle-blue.jpg",
    rating: 4.7,
    reviews: 521,
    gender: "Men",
    notes: ["Mint", "Vanilla", "Tonka Bean"],
  },
  {
    id: 7,
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    price: 115,
    image: "/dolce-gabbana-light-blue-perfume-bottle.jpg",
    rating: 4.5,
    reviews: 434,
    gender: "Women",
    notes: ["Apple", "Jasmine", "Cedar"],
  },
  {
    id: 8,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 140,
    image: "/lancome-la-vie-est-belle-perfume-bottle.jpg",
    rating: 4.8,
    reviews: 789,
    gender: "Women",
    notes: ["Iris", "Patchouli", "Praline"],
  },
]

export default function ShopPage() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif italic mb-2">All Fragrances</h1>
        <p className="text-muted-foreground">Explore our complete collection of luxury perfumes</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Filter Toggle - Mobile */}
          <div className="lg:hidden mb-6">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full sm:w-auto">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mb-6 p-4 border border-border rounded-lg bg-card">
              <FilterSidebar />
            </div>
          )}

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
