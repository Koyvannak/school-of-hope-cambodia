import { UserProfile } from "@/components/user-profile"
import { Feed } from "@/components/feed"
import { notFound } from "next/navigation"

export default function ProfilePage({ params }: { params: { username: string } }) {
  // In a real app, you would fetch the user data from your database
  // For demo purposes, we'll just check if the username is valid
  if (!params.username || params.username === "undefined") {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <UserProfile username={params.username} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        <Feed username={params.username} />
      </div>
    </div>
  )
}
