import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock notifications data
const notifications = [
  {
    id: "1",
    type: "like",
    user: {
      username: "sarahjohnson",
      fullName: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "liked your post about the new movie release",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "comment",
    user: {
      username: "alexchen",
      fullName: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: 'commented on your post: "I totally agree with your review!"',
    time: "2 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "follow",
    user: {
      username: "emilywilson",
      fullName: "Emily Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "started following you",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "mention",
    user: {
      username: "michaelbrown",
      fullName: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: 'mentioned you in a comment: "@johndoe what did you think of the finale?"',
    time: "2 days ago",
    read: true,
  },
]

export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
            <CardContent className="p-4 flex gap-4">
              <Avatar>
                <AvatarImage src={notification.user.avatar || "/placeholder.svg"} alt={notification.user.fullName} />
                <AvatarFallback>{notification.user.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p>
                  <Link href={`/profile/${notification.user.username}`} className="font-medium hover:underline">
                    {notification.user.fullName}
                  </Link>{" "}
                  {notification.content}
                </p>
                <p className="text-sm text-muted-foreground">{notification.time}</p>
              </div>
              {!notification.read && <div className="h-2 w-2 rounded-full bg-primary self-center"></div>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
