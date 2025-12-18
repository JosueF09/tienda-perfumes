"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const brands = ["Tom Ford", "Chanel", "Dior", "YSL", "Giorgio Armani", "Versace", "Dolce & Gabbana"]
const genders = ["Women", "Men", "Unisex"]
const scentNotes = ["Floral", "Woody", "Citrus", "Oriental", "Fresh", "Fruity", "Spicy"]

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 500])

  return (
    <div className="space-y-8">
      {/* Gender */}
      <div>
        <h3 className="font-medium mb-4">Gender</h3>
        <div className="space-y-3">
          {genders.map((gender) => (
            <div key={gender} className="flex items-center space-x-2">
              <Checkbox id={`gender-${gender}`} />
              <Label htmlFor={`gender-${gender}`} className="text-sm cursor-pointer">
                {gender}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-medium mb-4">Brand</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={`brand-${brand}`} />
              <Label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Scent Notes */}
      <div>
        <h3 className="font-medium mb-4">Scent Notes</h3>
        <div className="space-y-3">
          {scentNotes.map((note) => (
            <div key={note} className="flex items-center space-x-2">
              <Checkbox id={`note-${note}`} />
              <Label htmlFor={`note-${note}`} className="text-sm cursor-pointer">
                {note}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-4">Price Range</h3>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-4" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <Button variant="outline" className="w-full bg-transparent">
        Reset Filters
      </Button>
    </div>
  )
}
