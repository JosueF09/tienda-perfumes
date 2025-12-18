import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-serif italic tracking-tight">Essence</div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your destination for luxury fragrances from the world's finest perfume houses. Experience the art of
              scent.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shop/women" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Women's Perfumes"}
                </Link>
              </li>
              <li>
                <Link href="/shop/men" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Men's Colognes"}
                </Link>
              </li>
              <li>
                <Link href="/shop/unisex" className="text-muted-foreground hover:text-foreground transition-colors">
                  Unisex Fragrances
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Brands
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-medium mb-4">Help</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/fragrance-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fragrance Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-medium mb-2">Email</h4>
              <a
                href="mailto:support@essence.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                support@essence.com
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Phone</h4>
              <a
                href="tel:+18005551234"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                1-800-555-1234
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Hours</h4>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9am-6pm EST</p>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Essence. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
