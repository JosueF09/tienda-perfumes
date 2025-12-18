import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic tracking-tight text-balance mb-6">
              Discover your signature scent
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Explore our curated collection of luxury fragrances from the world's most prestigious perfume houses. Find
              the perfect scent that tells your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base" asChild>
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link href="/fragrance-finder">Fragrance Finder</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              src="/elegant-luxury-perfume-bottle-on-minimalist-backgr.jpg"
              alt="Luxury perfume bottle"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
