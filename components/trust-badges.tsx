import { Shield, Truck, RotateCcw, Award } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Guaranteed genuine products",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Award,
    title: "Expert Service",
    description: "Fragrance consultations",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.title} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-muted">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
