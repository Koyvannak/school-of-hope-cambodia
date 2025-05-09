import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

// Mock data for trending topics
const trendingTopics = [
  {
    id: "1",
    name: "Summer Blockbusters",
    category: "Movies",
    postCount: "12.5K posts",
  },
  {
    id: "2",
    name: "Festival Season",
    category: "Music",
    postCount: "8.3K posts",
  },
  {
    id: "3",
    name: "New Game Release",
    category: "Gaming",
    postCount: "15.7K posts",
  },
  {
    id: "4",
    name: "Award Show Reactions",
    category: "TV",
    postCount: "5.2K posts",
  },
  {
    id: "5",
    name: "Bestseller List",
    category: "Books",
    postCount: "3.8K posts",
  },
]

export function TrendingSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Trending Now
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingTopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/trending/${topic.id}`}
              className="block hover:bg-muted p-2 rounded-md transition-colors"
            >
              <p className="font-medium">{topic.name}</p>
              <p className="text-sm text-muted-foreground">
                {topic.category} · {topic.postCount}
              </p>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
