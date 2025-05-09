"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Post = {
  id: string
  username: string
  userFullName: string
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  mediaType: "image" | "video" | "none"
  mediaUrl?: string
  userAvatar: string
}

type PostCardProps = {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <Link href={`/profile/${post.username}`} className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={post.userAvatar || "/placeholder.svg"} alt={post.userFullName} />
              <AvatarFallback>{post.userFullName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.userFullName}</p>
              <p className="text-sm text-muted-foreground">
                @{post.username} · {post.timestamp}
              </p>
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Follow @{post.username}</DropdownMenuItem>
              <DropdownMenuItem>Mute @{post.username}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Report post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap mb-3">{post.content}</p>
        {post.mediaType === "image" && post.mediaUrl && (
          <div className="rounded-md overflow-hidden mt-3">
            <Image
              src={post.mediaUrl || "/placeholder.svg"}
              alt="Post image"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-3">
        <div className="flex justify-between w-full">
          <Button variant="ghost" size="sm" onClick={handleLike} className={liked ? "text-red-500" : ""}>
            <Heart className={`h-4 w-4 mr-1 ${liked ? "fill-current" : ""}`} />
            {likeCount}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="h-4 w-4 mr-1" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-1" />
            {post.shares}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleSave} className={saved ? "text-primary" : ""}>
            <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
