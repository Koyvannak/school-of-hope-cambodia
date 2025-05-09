"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin, LinkIcon } from "lucide-react"

type UserProfileProps = {
  username: string
}

export function UserProfile({ username }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock user data - in a real app, you would fetch this from your database
  const user = {
    username,
    fullName: username === "johndoe" ? "John Doe" : `User ${username}`,
    bio: "Entertainment enthusiast | Movie buff | Gamer | Music lover",
    location: "New York, NY",
    website: "example.com",
    joinedDate: "January 2022",
    following: 245,
    followers: 1024,
    avatar: "/placeholder.svg?height=100&width=100",
  }

  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div>
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
        <div className="absolute -bottom-16 left-8">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.fullName} />
            <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="mt-20 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">{user.fullName}</h1>
          <p className="text-muted-foreground">@{user.username}</p>
        </div>
        <Button onClick={toggleFollow} variant={isFollowing ? "outline" : "default"}>
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </div>

      <p className="mt-4">{user.bio}</p>

      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
        {user.location && (
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {user.location}
          </div>
        )}
        {user.website && (
          <div className="flex items-center gap-1">
            <LinkIcon className="h-4 w-4" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {user.website}
            </a>
          </div>
        )}
        <div className="flex items-center gap-1">
          <CalendarDays className="h-4 w-4" />
          Joined {user.joinedDate}
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <div>
          <span className="font-bold">{user.following}</span>
          <span className="text-muted-foreground ml-1">Following</span>
        </div>
        <div>
          <span className="font-bold">{user.followers}</span>
          <span className="text-muted-foreground ml-1">Followers</span>
        </div>
      </div>

      <Tabs defaultValue="posts" className="mt-6">
        <TabsList>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
