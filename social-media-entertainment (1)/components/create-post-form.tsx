"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageIcon, Film, Music, Calendar, Smile } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreatePostForm() {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [category, setCategory] = useState("general")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would send the post data to your API
    console.log("Post submitted:", { content, category })

    // Reset form and redirect
    setContent("")
    setIsSubmitting(false)
    router.push("/")
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What's happening in the entertainment world?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-32 resize-none border-none focus-visible:ring-0 text-lg p-0"
              />
              <div className="mt-4">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="movies">Movies</SelectItem>
                    <SelectItem value="tv">TV Shows</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <div className="flex gap-2">
            <Button type="button" variant="ghost" size="icon">
              <ImageIcon className="h-4 w-4" />
              <span className="sr-only">Add image</span>
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Film className="h-4 w-4" />
              <span className="sr-only">Add video</span>
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Music className="h-4 w-4" />
              <span className="sr-only">Add music</span>
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Calendar className="h-4 w-4" />
              <span className="sr-only">Add event</span>
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
              <span className="sr-only">Add emoji</span>
            </Button>
          </div>
          <Button type="submit" disabled={!content.trim() || isSubmitting}>
            {isSubmitting ? "Posting..." : "Post"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
