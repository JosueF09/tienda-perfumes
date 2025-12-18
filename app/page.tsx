import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryGrid } from "@/components/category-grid"
import { TrustBadges } from "@/components/trust-badges"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <TrustBadges />
      <Newsletter />
    </main>
  )
}
