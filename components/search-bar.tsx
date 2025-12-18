"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useEffect, useRef } from "react"

const suggestions = [
  "Tom Ford Black Orchid",
  "Chanel No. 5",
  "Dior Sauvage",
  "Yves Saint Laurent Black Opium",
  "Giorgio Armani Acqua di Giò",
  "Versace Eros",
  "Floral fragrances",
  "Woody fragrances",
  "Citrus scents",
  "Oriental perfumes",
]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter((s) => s.toLowerCase().includes(query.toLowerCase()))
      setFilteredSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={searchRef} className="relative w-full md:w-80">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search fragrances..."
          className="pl-9 pr-4 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
        />
      </div>

      {/* Auto-suggestions dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-md shadow-lg max-h-80 overflow-y-auto z-50">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors flex items-center gap-3"
              onClick={() => {
                setQuery(suggestion)
                setShowSuggestions(false)
              }}
            >
              <Search className="h-4 w-4 text-muted-foreground" />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
