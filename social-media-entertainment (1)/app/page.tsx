import { Feed } from "@/components/feed"
import { TrendingSection } from "@/components/trending-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Your Feed</h1>
        <Feed />
      </div>
      <div className="space-y-6">
        <TrendingSection />
      </div>
    </div>
  )
}
