import { TrendingSection } from "@/components/trending-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Feed } from "@/components/feed"

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Explore</h1>

        <Tabs defaultValue="foryou" className="mb-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="foryou">For You</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
          </TabsList>
          <TabsContent value="foryou">
            <Feed />
          </TabsContent>
          <TabsContent value="movies">
            <Card>
              <CardHeader>
                <CardTitle>Movies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the latest and greatest in cinema.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="music">
            <Card>
              <CardHeader>
                <CardTitle>Music</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore new releases, concerts, and music discussions.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gaming">
            <Card>
              <CardHeader>
                <CardTitle>Gaming</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Find gaming news, reviews, and community discussions.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="books">
            <Card>
              <CardHeader>
                <CardTitle>Books</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover new reads and literary discussions.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="space-y-6">
        <TrendingSection />
      </div>
    </div>
  )
}
