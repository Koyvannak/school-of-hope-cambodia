"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Search, PlusSquare, Bell, User, LogIn, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Navigation() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Toggle login state for demo purposes
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  const NavItems = () => (
    <>
      <Link href="/" className={`flex items-center gap-2 ${pathname === "/" ? "font-bold" : ""}`}>
        <Home className="h-5 w-5" />
        <span className="hidden md:inline">Home</span>
      </Link>
      <Link href="/explore" className={`flex items-center gap-2 ${pathname === "/explore" ? "font-bold" : ""}`}>
        <Search className="h-5 w-5" />
        <span className="hidden md:inline">Explore</span>
      </Link>
      <Link href="/create" className={`flex items-center gap-2 ${pathname === "/create" ? "font-bold" : ""}`}>
        <PlusSquare className="h-5 w-5" />
        <span className="hidden md:inline">Create</span>
      </Link>
      {isLoggedIn && (
        <Link
          href="/notifications"
          className={`flex items-center gap-2 ${pathname === "/notifications" ? "font-bold" : ""}`}
        >
          <Bell className="h-5 w-5" />
          <span className="hidden md:inline">Notifications</span>
        </Link>
      )}
      {isLoggedIn && (
        <Link
          href="/profile/johndoe"
          className={`flex items-center gap-2 ${pathname.startsWith("/profile") ? "font-bold" : ""}`}
        >
          <User className="h-5 w-5" />
          <span className="hidden md:inline">Profile</span>
        </Link>
      )}
    </>
  )

  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-xl">
            EntertainHub
          </Link>
          <div className="hidden md:flex">
            <Input placeholder="Search..." className="w-64" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NavItems />
          <ModeToggle />
          {isLoggedIn ? (
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ) : (
            <Button onClick={toggleLogin}>
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-6">
                <NavItems />
                {isLoggedIn ? (
                  <Button onClick={toggleLogin} className="w-full">
                    Logout
                  </Button>
                ) : (
                  <Button onClick={toggleLogin} className="w-full">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
