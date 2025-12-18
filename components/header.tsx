"use client"

import { ShoppingBag, User, Heart, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SearchBar } from "@/components/search-bar"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Announcement Bar */}
      <div className="border-b border-border bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 text-center text-sm">
          Free shipping on orders over $100 • Complimentary samples with every order
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-serif italic tracking-tight">Essence</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/shop/women" className="text-sm font-medium transition-colors hover:text-secondary">
              {"Women's"}
            </Link>
            <Link href="/shop/men" className="text-sm font-medium transition-colors hover:text-secondary">
              {"Men's"}
            </Link>
            <Link href="/shop/unisex" className="text-sm font-medium transition-colors hover:text-secondary">
              Unisex
            </Link>
            <Link href="/brands" className="text-sm font-medium transition-colors hover:text-secondary">
              Brands
            </Link>
            <Link
              href="/offers"
              className="text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              Offers
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden md:block">
              <SearchBar />
            </div>

            {/* Icons */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary text-xs flex items-center justify-center text-white">
                3
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/shop/women"
              className="text-base font-medium transition-colors hover:text-secondary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {"Women's"}
            </Link>
            <Link
              href="/shop/men"
              className="text-base font-medium transition-colors hover:text-secondary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {"Men's"}
            </Link>
            <Link
              href="/shop/unisex"
              className="text-base font-medium transition-colors hover:text-secondary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Unisex
            </Link>
            <Link
              href="/brands"
              className="text-base font-medium transition-colors hover:text-secondary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              href="/offers"
              className="text-base font-medium text-secondary transition-colors hover:text-secondary/80 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offers
            </Link>
            <div className="pt-4 border-t border-border flex gap-4">
              <Button variant="outline" className="flex-1 bg-transparent">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
