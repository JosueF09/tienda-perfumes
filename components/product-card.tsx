"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface Product {
  id: number
  name: string
  brand: string
  price: number
  image: string
  rating: number
  reviews: number
  gender: string
  notes: string[]
}

export function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-[4/5] relative overflow-hidden bg-muted">
          <img
            src={product.image || "/placeholder.svg"}
            alt={`${product.brand} ${product.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-foreground"}`} />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <div className="mb-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
            <h3 className="font-medium text-lg mb-1 group-hover:text-secondary transition-colors">{product.name}</h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price */}
          <p className="text-xl font-medium mb-3">${product.price}</p>
        </Link>

        {/* Add to Cart Button */}
        <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}
