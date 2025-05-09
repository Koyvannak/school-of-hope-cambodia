"use client"

import { useState } from "react"
import { PostCard } from "./post-card"
import { Button } from "@/components/ui/button"

// Mock data for posts
const mockPosts = [
  {
    id: "1",
    username: "johndoe",
    userFullName: "John Doe",
    content: "Just watched the new sci-fi movie everyone's talking about. Absolutely mind-blowing! 🎬 #MovieNight",
    timestamp: "2 hours ago",
    likes: 42,
    comments: 7,
    shares: 3,
    mediaType: "image",
    mediaUrl: "/placeholder.svg?height=400&width=600",
    userAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    username: "musiclover",
    userFullName: "Sarah Johnson",
    content: "This new album is on repeat all day! What's everyone listening to this week? 🎵 #MusicRecommendations",
    timestamp: "5 hours ago",
    likes: 78,
    comments: 23,
    shares: 12,
    mediaType: "none",
    userAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    username: "gamerguy",
    userFullName: "Alex Chen",
    content:
      "Just hit max level in the new RPG! The end game content is incredible. Anyone else playing? 🎮 #GamingLife",
    timestamp: "1 day ago",
    likes: 156,
    comments: 34,
    shares: 8,
    mediaType: "image",
    mediaUrl: "/placeholder.svg?height=400&width=600",
    userAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    username: "bookworm",
    userFullName: "Emily Wilson",
    content:
      "Just finished this amazing novel. The character development was incredible! Any book recommendations for what to read next? 📚 #BookClub",
    timestamp: "2 days ago",
    likes: 92,
    comments: 45,
    shares: 15,
    mediaType: "none",
    userAvatar: "/placeholder.svg?height=40&width=40",
  },
]

type FeedProps = {
  username?: string
}

export function Feed({ username }: FeedProps) {
  const [posts, setPosts] = useState(username ? mockPosts.filter((post) => post.username === username) : mockPosts)

  const [page, setPage] = useState(1)

  const loadMore = () => {
    // In a real app, you would fetch more posts
    setPage(page + 1)
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No posts to display</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div className="text-center py-4">
        <Button onClick={loadMore} variant="outline">
          Load More
        </Button>
      </div>
    </div>
  )
}
